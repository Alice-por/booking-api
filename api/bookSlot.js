export default async function handler(req, res) {
  const { email, brands, country, postalCode, date, time } = req.body;

  try {
    const response = await fetch("https://script.google.com/macros/s/AKfycbwumrxn9nGFjSO7j_Xv0EkK5zFy_Y54amqZKLGUksbT0BLkqn4eIdnKQYyjbdei4049HA/exec", {
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
