export default async function handler(req, res) {
  const { email, brands, country, postalCode, date, time } = req.body;

  try {
    const response = await fetch("https://script.google.com/macros/s/AKfycbzUWxSVell84lV0B-hP3ZxdD8-wtV7_9EbgdYiY9tNALh1AzeM2TQ-GHPLTS_upE3GN0g/exec", {
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
