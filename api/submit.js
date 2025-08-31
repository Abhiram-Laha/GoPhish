export default function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, password, role } = req.body || {};

    console.log('Received data:', { name, email, password, role });

    // Redirect user after submission
    res.writeHead(302, { Location: '/' });
    res.end();
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
