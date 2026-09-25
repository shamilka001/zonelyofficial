"use server";

import { sql } from "@/lib/db";

export async function submitEarlyAccess(email: string) {
  try {
    if (!email || !email.includes("@")) {
      return { success: false, error: "Please provide a valid email." };
    }

    // ON CONFLICT DO NOTHING prevents crashes if the email was already submitted
    await sql`
      INSERT INTO early_access (email)
      VALUES (${email.trim().toLowerCase()})
      ON CONFLICT (email) DO NOTHING;
    `;

    return { success: true };
  } catch (error) {
    console.error("Early access submission error:", error);
    return { success: false, error: "Database error. Please try again." };
  }
}

export async function submitFeedback(data: { name: string; type: string; message: string }) {
  try {
    if (!data.message || !data.message.trim()) {
      return { success: false, error: "Message cannot be empty." };
    }

    await sql`
      INSERT INTO feedback (name, type, message)
      VALUES (${data.name.trim() || "Anonymous"}, ${data.type}, ${data.message.trim()});
    `;

    return { success: true };
  } catch (error) {
    console.error("Feedback submission error:", error);
    return { success: false, error: "Database error. Please try again." };
  }
}