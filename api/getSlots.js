export default async function handler(req, res) {
  const { brands, country, postalCode } = req.query;

  try {
    const response = await fetch("https://script.google.com/s/AKfycbwX-zBEtpXT4b0XGmsHHsqM0alJHQWvw1eMFUthmSv0pjunr_7REPS4x5xmLM7e56HUsw/exec" +
      `?action=getSlots&brands=${brands}&country=${country}&postalCode=${postalCode}`);
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "Errore nel recupero degli slot" });
  }
}
