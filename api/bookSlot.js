export default async function handler(req, res) {
  const { email, brands, country, postalCode, date, time } = req.body;

  try {
    const response = await fetch("https://script.google.com/a/macros/portraiteyewear.com/s/AKfycbwX-zBEtpXT4b0XGmsHHsqM0alJHQWvw1eMFUthmSv0pjunr_7REPS4x5xmLM7e56HUsw/exec", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        action: "bookSlot",
        email,
        brands,
        country,
        postalCode,
        date,
        time
      })
    });
    const result = await response.json();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: "Errore nella prenotazione dello slot" });
  }
}
