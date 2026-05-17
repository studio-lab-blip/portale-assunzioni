import { Resend } from 'resend';
import aziende from '../data/aziende.json';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Metodo non consentito' });
  }

  const { token, codice, dati } = req.body;

  if (!token || !codice || !dati) {
    return res.status(400).json({ error: 'Dati mancanti' });
  }

  const azienda = aziende[String(codice)];
  if (!azienda) {
    return res.status(401).json({ error: 'Azienda non trovata' });
  }

  // Formatta i dati in HTML leggibile
  const dataOra = new Date().toLocaleString('it-IT');
  const righe = Object.entries(dati)
    .filter(([, v]) => v !== '' && v !== null && v !== undefined)
    .map(([k, v]) => `<tr><td style="padding:6px 12px;color:#555;border-bottom:1px solid #eee;">${k}</td><td style="padding:6px 12px;font-weight:500;border-bottom:1px solid #eee;">${Array.isArray(v) ? v.join(', ') : v}</td></tr>`)
    .join('');

  // Email allo studio
  await resend.emails.send({
    from: 'Portale Assunzioni <noreply@studiopelati.it>',
    to: 'info@studiopelati.it',
    subject: `Nuova comunicazione assunzione — ${azienda.ragione_sociale} (cod. ${codice})`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 700px; margin: 0 auto; padding: 24px;">
        <h2 style="color: #185FA5;">Nuova comunicazione di assunzione</h2>
        <p><strong>Azienda:</strong> ${azienda.ragione_sociale}</p>
        <p><strong>Codice:</strong> ${codice} &nbsp;|&nbsp; <strong>Data:</strong> ${dataOra}</p>
        <table style="width:100%;border-collapse:collapse;margin-top:16px;font-size:14px;">
          ${righe}
        </table>
        <p style="margin-top:24px;color:#888;font-size:12px;">Portale assunzioni Studio Pelati</p>
      </div>
    `
  });

  // Email di conferma all'azienda
  await resend.emails.send({
    from: 'Studio Pelati <noreply@studiopelati.it>',
    to: azienda.email,
    subject: 'Comunicazione assunzione ricevuta — Studio Pelati',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 500px; margin: 0 auto; padding: 24px;">
        <h2 style="color: #185FA5;">Comunicazione ricevuta</h2>
        <p>Gentile <strong>${azienda.ragione_sociale}</strong>,</p>
        <p>Abbiamo ricevuto la comunicazione di assunzione inviata il <strong>${dataOra}</strong>.</p>
        <p>Lo Studio elaborerà i dati e le invierà l'analisi delle agevolazioni disponibili entro 24 ore lavorative.</p>
        <div style="background:#fff3cd;border:1px solid #ffc107;padding:12px 16px;border-radius:6px;margin:16px 0;font-size:13px;">
          ⚠️ Ricordiamo che la prestazione lavorativa può iniziare <strong>soltanto dopo</strong> aver ricevuto dallo Studio la conferma dell'avvenuta formalizzazione del rapporto di lavoro.
        </div>
        <p>Per qualsiasi necessità: <a href="tel:0307000841">030 7000841</a> — <a href="mailto:info@studiopelati.it">info@studiopelati.it</a></p>
        <p style="color:#888;font-size:12px;">Studio Pelati — Portale assunzioni</p>
      </div>
    `
  });

  return res.status(200).json({ success: true });
}
