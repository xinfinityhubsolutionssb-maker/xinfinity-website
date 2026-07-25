"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Mail,
  MapPin,
  Phone,
  ArrowRight,
} from "lucide-react";

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
      service: "",
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
        "Thank you. Your enquiry has been submitted successfully. Our team will get back to you as soon as possible."
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
    <section className="relative overflow-hidden bg-[#0B1120] py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(234,179,8,0.08),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(37,99,235,0.08),transparent_35%)]" />

      <div className="container relative z-10">
        <div className="mx-auto mb-16 max-w-4xl text-center">
          <span className="inline-flex rounded-full border border-yellow-500/20 bg-yellow-500/10 px-5 py-2 text-sm font-semibold tracking-[0.18em] text-yellow-500">
            CONTACT US
          </span>

          <h2 className="mt-8 text-4xl font-black leading-tight text-white lg:text-6xl">
            Let&apos;s Build The
            <span className="bg-gradient-to-r from-yellow-400 via-yellow-300 to-white bg-clip-text text-transparent">
              {" "}
              Future Together
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-gray-300">
            Whether you&apos;re planning a new project, modernising an existing
            system or exploring digital transformation, we&apos;re ready to help.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-[#111827] to-[#0B1120] p-8 backdrop-blur-xl">
            <h3 className="mb-8 text-3xl font-bold text-white">
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
                  className="w-full rounded-xl border border-white/10 bg-black/20 px-5 py-4 text-white outline-none transition focus:border-yellow-500"
                />
                {errors.name && (
                  <p className="mt-2 text-sm text-red-400">
                    {errors.name.message}
                  </p>
                )}
              </div>

              <div>
                <input
                  {...register("company")}
                  placeholder="Company Name"
                  className="w-full rounded-xl border border-white/10 bg-black/20 px-5 py-4 text-white outline-none transition focus:border-yellow-500"
                />
              </div>

              <div>
                <input
                  type="email"
                  {...register("email")}
                  placeholder="Email Address *"
                  className="w-full rounded-xl border border-white/10 bg-black/20 px-5 py-4 text-white outline-none transition focus:border-yellow-500"
                />
                {errors.email && (
                  <p className="mt-2 text-sm text-red-400">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div>
                <input
                  {...register("phone")}
                  placeholder="Phone Number"
                  className="w-full rounded-xl border border-white/10 bg-black/20 px-5 py-4 text-white outline-none transition focus:border-yellow-500"
                />
              </div>

<div>
  <select
    {...register("service")}
    className="w-full rounded-xl border border-white/10 bg-black/20 px-5 py-4 text-white outline-none transition focus:border-yellow-500"
  >
    <option value="">Select Service Required *</option>
    <option>AutoCount Software</option>
    <option>Custom Software Development</option>
    <option>ERP Solution</option>
    <option>Website Development</option>
    <option>Mobile App Development</option>
    <option>AI Solutions</option>
    <option>Cloud Solutions</option>
    <option>IT Hardware Supply</option>
    <option>Technical Support</option>
    <option>Business Consultation</option>
    <option>Travel & Tour Services</option>
    <option>Project & Tender Support</option>
    <option>Other</option>
  </select>

  {errors.service && (
    <p className="mt-2 text-sm text-red-400">
      {errors.service.message}
    </p>
  )}
</div>

              <div>
                <input
                  {...register("subject")}
                  placeholder="Subject *"
                  className="w-full rounded-xl border border-white/10 bg-black/20 px-5 py-4 text-white outline-none transition focus:border-yellow-500"
                />
                {errors.subject && (
                  <p className="mt-2 text-sm text-red-400">
                    {errors.subject.message}
                  </p>
                )}
              </div>

              <div>
                <textarea
                  rows={6}
                  {...register("message")}
                  placeholder="Tell us about your project *"
                  className="w-full rounded-xl border border-white/10 bg-black/20 px-5 py-4 text-white outline-none transition focus:border-yellow-500"
                />
                {errors.message && (
                  <p className="mt-2 text-sm text-red-400">
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
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-yellow-500 px-6 py-4 font-semibold text-black transition hover:bg-yellow-400 disabled:opacity-60"
              >
                {sending ? "Sending..." : "Send Message"}

                {!sending && <ArrowRight size={18} />}
              </button>
            </form>
          </div>

          <div className="space-y-8">
            <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-[#111827] to-[#0B1120] p-8 backdrop-blur-xl">
              <h3 className="mb-8 text-3xl font-bold text-white">
                Contact Information
              </h3>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="rounded-2xl bg-yellow-500 p-3 text-black">
                    <Phone size={22} />
                  </div>

                  <div>
                    <h4 className="font-semibold text-white">Phone</h4>
                    <p className="mt-2 text-gray-300">{siteConfig.phone}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="rounded-2xl bg-yellow-500 p-3 text-black">
                    <Mail size={22} />
                  </div>

                  <div>
                    <h4 className="font-semibold text-white">Email</h4>
                    <p className="mt-2 text-gray-300">{siteConfig.email}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="rounded-2xl bg-yellow-500 p-3 text-black">
                    <MapPin size={22} />
                  </div>

                  <div>
                    <h4 className="font-semibold text-white">
                      Office Address
                    </h4>

                    <p className="mt-2 leading-8 text-gray-300">
                      Our permanent office location will be announced soon.
                      <br />
                      <br />
                      Please contact us to arrange a meeting or request our
                      business office address.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-[#111827] to-[#0B1120] p-8 backdrop-blur-xl">
              <h3 className="text-3xl font-bold text-white">
                Ready To Start?
              </h3>

              <p className="mt-6 leading-8 text-gray-300">
                Tell us about your project and our team will discuss the best
                solution for your business.
              </p>

              <a
                href="mailto:xinfinityhubsolutionssb@gmail.com"
                className="mt-8 inline-flex items-center gap-2 rounded-xl bg-yellow-500 px-6 py-4 font-semibold text-black transition hover:bg-yellow-400"
              >
                Email Our Team

                <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
