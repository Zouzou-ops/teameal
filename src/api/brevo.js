import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const { email, firstname } = req.body;
      const apiKey = process.env.BREVO_API_KEY;

      if (!apiKey) {
        return res.status(500).json({ error: "Missing API Key" });
      }

      // Ajouter l'e-mail aux contacts Sendinblue
      const response = await fetch("https://api.brevo.com/v3/contacts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "api-key": apiKey,
        },
        body: JSON.stringify({
          email,
          firstname,
          updateEnabled: false,
          attributes: {
            // attributs supplémentaires si nécessaire
          },
          listIds: [6], // remplacez par l'ID de votre liste
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        return res.status(response.status).json(data);
      }

      return res.status(200).json(data);
    } catch (error) {
      return res.status(500).json({ error: "Internal Server Error" });
    }
  }

  return res.status(405).end(); // Méthode non autorisée
}
