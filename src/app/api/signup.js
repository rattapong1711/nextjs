export default function handler(req, res) {
    if (req.method === "POST") {
      const { username, password } = JSON.parse(req.body);
  
      if (username && password) {
        res.status(200).json({ message: "Registration successful" });
      } else {
        res.status(400).json({ message: "Invalid registration" });
      }
    } else {
      res.status(405).end();
    }
  }
  