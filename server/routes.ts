import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import rateLimit from "express-rate-limit";
import { body, validationResult } from "express-validator";
import { insertContactSchema } from "@shared/schema";

// Rate limiter for form submissions
const formLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // 5 submissions per window
  message: "Too many submissions from this IP, please try again later.",
  standardHeaders: true,
  legacyHeaders: false,
});

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post(
    "/api/contact",
    formLimiter,
    [
      body("name").trim().notEmpty().withMessage("Name is required"),
      body("email").isEmail().withMessage("Valid email is required"),
      body("phone").trim().notEmpty().withMessage("Phone is required"),
      body("company").optional().trim(),
      body("service").optional().trim(),
      body("message").trim().notEmpty().withMessage("Message is required"),
    ],
    async (req: Request, res: Response) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      try {
        const validatedData = insertContactSchema.parse({
          ...req.body,
          source: "contact_form",
        });

        const contact = await storage.createContact(validatedData);

        // TODO: Send email notification to agency
        // Email integration was deferred - see replit.md

        res.status(201).json({
          success: true,
          message: "Thank you for contacting us! We'll get back to you soon.",
          contactId: contact.id,
        });
      } catch (error) {
        console.error("Contact form error:", error);
        res.status(500).json({
          success: false,
          message: "An error occurred. Please try again later.",
        });
      }
    }
  );

  // Quote request endpoint (same as contact but with different source)
  app.post(
    "/api/quote",
    formLimiter,
    [
      body("name").trim().notEmpty().withMessage("Name is required"),
      body("email").isEmail().withMessage("Valid email is required"),
      body("phone").trim().notEmpty().withMessage("Phone is required"),
      body("company").optional().trim(),
      body("service").optional().trim(),
      body("message").trim().notEmpty().withMessage("Message is required"),
    ],
    async (req: Request, res: Response) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      try {
        const validatedData = insertContactSchema.parse({
          ...req.body,
          source: "quote_request",
        });

        const contact = await storage.createContact(validatedData);

        // TODO: Send email notification to agency
        // Email integration was deferred - see replit.md

        res.status(201).json({
          success: true,
          message: "Thank you for your quote request! We'll send you a proposal soon.",
          contactId: contact.id,
        });
      } catch (error) {
        console.error("Quote request error:", error);
        res.status(500).json({
          success: false,
          message: "An error occurred. Please try again later.",
        });
      }
    }
  );

  const httpServer = createServer(app);

  return httpServer;
}
