export default async function handler(req, res) {
  const { brands, country, postalCode } = req.query;

  try {
    const response = await fetch("https://script.google.com/macros/s/AKfycbwumrxn9nGFjSO7j_Xv0EkK5zFy_Y54amqZKLGUksbT0BLkqn4eIdnKQYyjbdei4049HA/exec" +
      `?action=getSlots&brands=${brands}&country=${country}&postalCode=${postalCode}`);
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "Errore nel recupero degli slot" });
  }
}
