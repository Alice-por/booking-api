export default async function handler(req, res) {
  const { brands, country, postalCode } = req.query;

  try {
    const response = await fetch("https://script.google.com/macros/s/AKfycbz6UxG1aqIa1nd4gjXTYt7l0ovDVHIk9-3IlUNCc60D0FwF5sHsYbV0NmB0PNNec5oL7A/exec" +
      `?action=getSlots&brands=${brands}&country=${country}&postalCode=${postalCode}`);
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "Errore nel recupero degli slot" });
  }
}
