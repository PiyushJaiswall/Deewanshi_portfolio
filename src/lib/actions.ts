"use server";

import { contactFormSchema } from "@/lib/validators";

export interface ContactFormResult {
  success: boolean;
  message: string;
}

export async function submitContactForm(
  formData: FormData
): Promise<ContactFormResult> {
  const rawData = {
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  };

  const parsed = contactFormSchema.safeParse(rawData);

  if (!parsed.success) {
    return {
      success: false,
      message: parsed.error.issues[0]?.message ?? "Invalid form data.",
    };
  }

  // Placeholder: integrate an email service (e.g. Resend, SendGrid) here.
  // Example: await resend.emails.send({ to: process.env.CONTACT_FORM_EMAIL, ... })

  console.log("New contact form submission:", parsed.data);

  return {
    success: true,
    message: "Thanks for reaching out! I'll get back to you soon.",
  };
}
