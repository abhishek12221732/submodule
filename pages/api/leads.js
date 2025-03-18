let leads = [];

export default function handler(req, res) {
  if (req.method === "GET") {
    res.status(200).json(leads);
  } else if (req.method === "POST") {
    const newLead = JSON.parse(req.body);
    newLead.id = leads.length + 1;
    leads.push(newLead);
    res.status(201).json(newLead);
  }
}
