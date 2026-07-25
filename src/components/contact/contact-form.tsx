"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { submitContactForm } from "@/lib/actions";

export function ContactForm() {
  const [status, setStatus] = useState<{
    type: "idle" | "success" | "error";
    message: string;
  }>({ type: "idle", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(formData: FormData) {
    setIsSubmitting(true);
    const result = await submitContactForm(formData);
    setStatus({
      type: result.success ? "success" : "error",
      message: result.message,
    });
    setIsSubmitting(false);
  }

  return (
    <form action={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="name" className="text-sm font-medium">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="mt-2 w-full rounded-md border border-border bg-transparent px-4 py-2.5 text-sm outline-none focus:border-primary"
        />
      </div>

      <div>
        <label htmlFor="email" className="text-sm font-medium">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="mt-2 w-full rounded-md border border-border bg-transparent px-4 py-2.5 text-sm outline-none focus:border-primary"
        />
      </div>

      <div>
        <label htmlFor="message" className="text-sm font-medium">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="mt-2 w-full rounded-md border border-border bg-transparent px-4 py-2.5 text-sm outline-none focus:border-primary"
        />
      </div>

      <Button type="submit" size="lg" disabled={isSubmitting} className="w-full">
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>

      {status.type !== "idle" && (
        <p
          className={
            status.type === "success"
              ? "text-sm text-primary"
              : "text-sm text-red-500"
          }
        >
          {status.message}
        </p>
      )}
    </form>
  );
}
