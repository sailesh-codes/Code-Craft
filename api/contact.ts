import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(
  req: VercelRequest,
  res: VercelResponse,
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { name, email, projectType, budget, message } = req.body || {};
    
    if (!name || !email || !message) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    // Store the contact form submission
    const contactSubmission = {
      id: Date.now().toString(),
      name,
      email,
      projectType: projectType || "",
      budget: budget || "",
      message,
      createdAt: new Date().toISOString(),
    };

    // Log the submission (in production, you might want to store this in a database)
    console.log("New contact form submission:", contactSubmission);

    return res.status(200).json({ 
      message: "Message received successfully",
      submissionId: contactSubmission.id 
    });
  } catch (err) {
    console.error("Contact form error:", err);
    return res.status(500).json({ message: "Failed to process message" });
  }
}
