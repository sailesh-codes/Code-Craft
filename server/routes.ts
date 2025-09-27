import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // put application routes here
  // prefix all routes with /api

  // use storage to perform CRUD operations on the storage interface
  // e.g. storage.insertUser(user) or storage.getUserByUsername(username)

  // Contact form endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const { name, email, projectType, budget, message } = req.body || {};
      if (!name || !email || !message) {
        return res.status(400).json({ message: "Missing required fields" });
      }

      // Store the contact form submission in the database
      const contactSubmission = {
        id: Date.now().toString(),
        name,
        email,
        projectType: projectType || "",
        budget: budget || "",
        message,
        createdAt: new Date().toISOString(),
      };

      // Store in database (you can implement this using your storage interface)
      // For now, we'll just log it and return success
      console.log("New contact form submission:", contactSubmission);

      return res.status(200).json({ 
        message: "Message received successfully",
        submissionId: contactSubmission.id 
      });
    } catch (err) {
      console.error("Contact form error:", err);
      return res.status(500).json({ message: "Failed to process message" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
