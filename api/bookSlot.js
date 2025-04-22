export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "https://parasiteclub.com");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    res.status(200).end();
    return;
  }

  const { email, brands, country, postalCode, date, time } = req.body;

  try {
    const SHEET_API_URL = "https://script.google.com/macros/s/AKfycbz6UxG1aqIa1nd4gjXTYt7l0ovDVHIk9-3IlUNCc60D0FwF5sHsYbV0NmB0PNNec5oL7A/exec";

    const response = await fetch(SHEET_API_URL, {
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
