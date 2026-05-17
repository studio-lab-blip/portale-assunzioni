import { Resend } from 'resend';
import aziende from '../data/aziende.json';

const resend = new Resend(process.env.RESEND_API_KEY);

// OTP temporanei in memoria (in produzione usare KV store)
const otpStore = {};

function generateOTP() {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

function generatePassword() {
  const chars = 'ABCDEFGHJKMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz23456789';
  let pwd = '';
  for (let i = 0; i < 10; i++) {
    pwd += chars[Math.floor(Math.random() * chars.length)];
  }
  return pwd;
}

// Password salvate (in produzione usare database)
const passwordStore = {};

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Metodo non consentito' });
  }

  const { codice, password } = req.body;

  if (!codice || !password) {
    return res.status(400).json({ error: 'Codice azienda e password sono obbligatori' });
  }

  const azienda = aziende[String(codice)];
  if (!azienda) {
    return res.status(401).json({ error: 'Codice azienda non trovato. Contatta lo Studio Pelati.' });
  }

  if (!azienda.email) {
    return res.status(400).json({ error: 'Nessun indirizzo email associato a questo codice. Contatta lo Studio.' });
  }

  // Prima volta: genera e invia password
  if (!passwordStore[codice]) {
    const newPassword = generatePassword();
    passwordStore[codice] = newPassword;
    await resend.emails.send({
      from: 'Studio Pelati <noreply@studiopelati.it>',
      to: azienda.email,
      subject: 'Portale assunzioni — Le tue credenziali di accesso',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 500px; margin: 0 auto; padding: 24px;">
          <h2 style="color: #185FA5;">Studio Pelati — Portale Assunzioni</h2>
          <p>Gentile <strong>${azienda.ragione_sociale}</strong>,</p>
          <p>Di seguito le credenziali per accedere al portale di comunicazione assunzioni:</p>
          <div style="background: #f5f5f5; padding: 16px; border-radius: 8px; margin: 16px 0;">
            <p style="margin: 0;"><strong>Codice azienda:</strong> ${codice}</p>
            <p style="margin: 8px 0 0;"><strong>Password:</strong> ${newPassword}</p>
          </div>
          <p>Ad ogni accesso successivo riceverà un codice OTP via email per la verifica.</p>
          <p style="color: #888; font-size: 12px;">Studio Pelati — noreply@studiopelati.it</p>
        </div>
      `
    });
    return res.status(200).json({
      success: true,
      firstTime: true,
      message: `Prima registrazione: abbiamo inviato la password a ${azienda.email}. Controlla la email e poi accedi.`
    });
  }

  // Verifica password
  if (passwordStore[codice] !== password) {
    return res.status(401).json({ error: 'Password non corretta.' });
  }

  // Password corretta: genera OTP
  const otp = generateOTP();
  otpStore[codice] = {
    otp,
    expires: Date.now() + 10 * 60 * 1000 // 10 minuti
  };

  await resend.emails.send({
    from: 'Studio Pelati <noreply@studiopelati.it>',
    to: azienda.email,
    subject: 'Portale assunzioni — Codice di accesso OTP',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 500px; margin: 0 auto; padding: 24px;">
        <h2 style="color: #185FA5;">Studio Pelati — Codice di accesso</h2>
        <p>Gentile <strong>${azienda.ragione_sociale}</strong>,</p>
        <p>Il suo codice OTP per accedere al portale è:</p>
        <div style="background: #185FA5; color: white; font-size: 32px; font-weight: bold; text-align: center; padding: 20px; border-radius: 8px; letter-spacing: 8px; margin: 16px 0;">
          ${otp}
        </div>
        <p style="color: #888;">Il codice è valido per 10 minuti.</p>
        <p style="color: #888; font-size: 12px;">Studio Pelati — noreply@studiopelati.it</p>
      </div>
    `
  });

  return res.status(200).json({
    success: true,
    firstTime: false,
    email: azienda.email.replace(/(.{2})(.*)(@.*)/, '$1***$3'),
    ragione_sociale: azienda.ragione_sociale
  });
}
