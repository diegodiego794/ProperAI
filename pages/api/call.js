export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const response = await fetch(
      'https://diegofreitas.app.n8n.cloud/webhook/52d8a728-aef7-44be-a2de-014de00ffb0c',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(req.body),
      }
    );

    const data = await response.text();
    res.status(200).json({ success: true, data });
  } catch (error) {
    console.error('Webhook error:', error);
    res.status(500).json({ error: 'Failed to send data' });
  }
}
