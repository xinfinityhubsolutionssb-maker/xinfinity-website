import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Name must be at least 2 characters.")
    .max(100, "Name is too long."),

  company: z
    .string()
    .trim()
    .max(100, "Company name is too long.")
    .optional()
    .or(z.literal("")),

  email: z
    .email("Please enter a valid email address.")
    .max(255),

  phone: z
    .string()
    .trim()
    .max(30, "Phone number is too long.")
    .optional()
    .or(z.literal("")),

  service: z
    .string()
    .trim()
    .min(1, "Please select a service."),

  subject: z
    .string()
    .trim()
    .min(3, "Subject is required.")
    .max(150, "Subject is too long."),

  message: z
    .string()
    .trim()
    .min(10, "Message must be at least 10 characters.")
    .max(3000, "Message is too long."),

  website: z.string().optional(),
});

export type ContactFormData = z.infer<typeof contactSchema>;