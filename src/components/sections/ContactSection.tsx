"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { siteConfig } from "@/config/site";
import {
  contactSchema,
  type ContactFormData,
} from "@/lib/validation/contact";

export default function ContactSection() {
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      company: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
      website: "",
    },
  });

  async function onSubmit(data: ContactFormData) {
    setSending(true);
    setSuccess("");
    setError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Failed to send message.");
      }

      setSuccess(
        "Thank you! Your message has been sent successfully. We will contact you soon."
      );

      reset();
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again."
      );
    } finally {
      setSending(false);
    }
  }

  return (
    <section className="bg-[#0B1120] py-24">
      <div className="container">
        <div className="mb-16 text-center">
          <h2 className="text-5xl font-bold text-white">
            Let's Build Something Great Together
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-300">
            Whether you need software development, business systems,
            websites, mobile apps or IT solutions, we're ready to help.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-2">
          {/* Contact Form */}

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
            <h3 className="mb-8 text-2xl font-bold text-white">
              Send Us A Message
            </h3>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-5"
            >
              <input
                type="text"
                {...register("website")}
                className="hidden"
                autoComplete="off"
                tabIndex={-1}
              />

              <div>
                <input
                  {...register("name")}
                  placeholder="Full Name *"
                  className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none focus:border-blue-500"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-400">
                    {errors.name.message}
                  </p>
                )}
              </div>

              <div>
                <input
                  {...register("company")}
                  placeholder="Company"
                  className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <input
                  type="email"
                  {...register("email")}
                  placeholder="Email Address *"
                  className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none focus:border-blue-500"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-400">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div>
                <input
                  {...register("phone")}
                  placeholder="Phone Number"
                  className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <input
                  {...register("subject")}
                  placeholder="Subject *"
                  className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none focus:border-blue-500"
                />
                {errors.subject && (
                  <p className="mt-1 text-sm text-red-400">
                    {errors.subject.message}
                  </p>
                )}
              </div>

              <div>
                <textarea
                  rows={6}
                  {...register("message")}
                  placeholder="Your Message *"
                  className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none focus:border-blue-500"
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-400">
                    {errors.message.message}
                  </p>
                )}
              </div>

              {success && (
                <div className="rounded-xl border border-green-500/30 bg-green-500/10 p-4 text-green-300">
                  {success}
                </div>
              )}

              {error && (
                <div className="rounded-xl border border-red-500/30 bg-red-500/10 p-4 text-red-300">
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={sending}
                className="w-full rounded-xl bg-blue-600 px-6 py-4 font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {sending ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>

          {/* Contact Info */}

          <div className="space-y-8">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
              <h3 className="mb-6 text-2xl font-bold text-white">
                Contact Information
              </h3>

              <div className="space-y-5 text-gray-300">
                <p>📞 {siteConfig.phone}</p>

                <p>📧 {siteConfig.email}</p>

                <p className="whitespace-pre-line">
                  📍 {siteConfig.address}
                </p>
              </div>
            </div>

            <div className="overflow-hidden rounded-3xl border border-white/10">
              <iframe
                src="https://www.google.com/maps?q=No.6,Jalan+Bukit+Mewah+9/12,Kajang,Selangor&output=embed"
                className="h-[420px] w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}