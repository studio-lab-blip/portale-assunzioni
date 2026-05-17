// Questo modulo condivide lo store con login.js
// In produzione usare Vercel KV o Redis
import { otpStore } from './login.js';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Metodo non consentito' });
  }

  const { codice, otp } = req.body;

  if (!codice || !otp) {
    return res.status(400).json({ error: 'Dati mancanti' });
  }

  const record = otpStore[String(codice)];

  if (!record) {
    return res.status(401).json({ error: 'OTP non trovato. Richiedi un nuovo codice.' });
  }

  if (Date.now() > record.expires) {
    delete otpStore[String(codice)];
    return res.status(401).json({ error: 'OTP scaduto. Richiedi un nuovo codice.' });
  }

  if (record.otp !== String(otp)) {
    return res.status(401).json({ error: 'Codice OTP non corretto.' });
  }

  delete otpStore[String(codice)];

  // Genera token di sessione semplice
  const token = Buffer.from(`${codice}:${Date.now()}`).toString('base64');

  return res.status(200).json({
    success: true,
    token,
    codice
  });
}
