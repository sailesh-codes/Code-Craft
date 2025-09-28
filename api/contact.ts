import type { VercelRequest, VercelResponse } from '@vercel/node';

// Utility to set minimal CORS headers (safe for same-origin and helpful if tested cross-origin)
function setCors(res: VercelResponse) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
}

export default async function handler(
  req: VercelRequest,
  res: VercelResponse,
) {
  setCors(res);

  // Preflight for any CORS testing tools
  if (req.method === 'OPTIONS') {
    return res.status(204).end();
  }

  // Simple health check to verify the route works in production
  if (req.method === 'GET') {
    return res.status(200).json({ ok: true, message: 'Contact API ready' });
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    // Vercel may provide body as object, string, or Buffer depending on runtime
    let body: any = req.body ?? {};
    if (typeof body === 'string') {
      try { body = JSON.parse(body); } catch { /* ignore, handled by validation below */ }
    } else if (Buffer.isBuffer(body)) {
      try { body = JSON.parse(body.toString('utf8')); } catch { /* ignore */ }
    }

    const { name, email, projectType, budget, message } = body || {};

    if (!name || !email || !message) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    const contactSubmission = {
      id: Date.now().toString(),
      name,
      email,
      projectType: projectType || '',
      budget: budget || '',
      message,
      createdAt: new Date().toISOString(),
    };

    console.log('New contact form submission:', contactSubmission);

    return res.status(200).json({
      message: 'Message received successfully',
      submissionId: contactSubmission.id,
    });
  } catch (err) {
    console.error('Contact form error:', err);
    return res.status(500).json({ message: 'Failed to process message' });
  }
}
