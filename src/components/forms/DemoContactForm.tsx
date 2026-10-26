"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { ArrowRight, CheckCircle2, AlertCircle, RefreshCw } from "lucide-react";

interface FormState {
  fullName: string;
  businessEmail: string;
  companyName: string;
  serviceInterest: string;
  projectDescription: string;
  estimatedTimeline: string;
}

interface FormErrors {
  fullName?: string;
  businessEmail?: string;
  serviceInterest?: string;
  projectDescription?: string;
}

export function DemoContactForm() {
  const initialFormState: FormState = {
    fullName: "",
    businessEmail: "",
    companyName: "",
    serviceInterest: "Business Automation & AI",
    projectDescription: "",
    estimatedTimeline: "1 to 2 months",
  };

  const [form, setForm] = useState<FormState>(initialFormState);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = (): boolean => {
    const errs: FormErrors = {};

    if (!form.fullName.trim()) {
      errs.fullName = "Please enter your name.";
    }

    if (!form.businessEmail.trim()) {
      errs.businessEmail = "Please enter your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.businessEmail)) {
      errs.businessEmail = "Please provide a valid email format.";
    }

    if (!form.projectDescription.trim() || form.projectDescription.trim().length < 15) {
      errs.projectDescription = "Please provide at least 15 characters describing your project goals.";
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate instantaneous client-side verification
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 400);
  };

  const handleReset = () => {
    setForm(initialFormState);
    setErrors({});
    setSubmitted(false);
  };

  if (submitted) {
    return (
      <div className="bg-white rounded-2xl border border-kg-border p-8 sm:p-10 shadow-sm text-center">
        <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 border border-emerald-200">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-bold text-kg-navy">
          Demonstration Submission Complete
        </h3>
        <div className="mt-4 p-4 rounded-xl bg-amber-50/80 border border-amber-200 text-left text-sm text-amber-900 leading-relaxed max-w-lg mx-auto">
          <div className="flex items-start gap-2.5">
            <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold">Offline Demonstration Disclosure:</p>
              <p className="mt-1 text-xs">
                This website is running in offline demonstration mode. No backend API or messaging webhook is connected; your input has <strong>not</strong> been transmitted or saved.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-6 text-sm text-kg-muted max-w-md mx-auto">
          To initiate a real project inquiry with Kartgen Infotech LLP, reach out directly via official email:
          <div className="mt-2 text-base font-semibold text-kg-navy">
            contact@kartgen.com
          </div>
        </div>

        <div className="mt-8">
          <Button
            type="button"
            variant="secondary"
            size="md"
            onClick={handleReset}
            icon={<RefreshCw className="w-4 h-4" />}
          >
            Reset Demonstration Form
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="bg-white rounded-2xl border border-kg-border p-6 sm:p-8 lg:p-10 shadow-xs"
    >
      <div className="mb-6">
        <h3 className="text-xl sm:text-2xl font-bold text-kg-navy">
          Scope a New Project
        </h3>
        <p className="text-sm text-kg-muted mt-1">
          Tell us about your operational friction or digital platform goals.
        </p>
      </div>

      <div className="space-y-4">
        {/* Full Name */}
        <div>
          <label
            htmlFor="fullName"
            className="block text-xs font-semibold uppercase tracking-wider text-kg-navy mb-1.5"
          >
            Your Name <span className="text-red-500">*</span>
          </label>
          <input
            id="fullName"
            type="text"
            value={form.fullName}
            onChange={(e) => setForm({ ...form, fullName: e.target.value })}
            placeholder="e.g. Anand Joshi"
            className={`w-full px-4 py-2.5 rounded-lg border text-sm text-kg-ink bg-white focus:outline-none focus:ring-2 focus:ring-kg-blue/50 ${
              errors.fullName ? "border-red-500" : "border-kg-border"
            }`}
          />
          {errors.fullName && (
            <p className="text-xs text-red-600 mt-1">{errors.fullName}</p>
          )}
        </div>

        {/* Business Email & Company Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="businessEmail"
              className="block text-xs font-semibold uppercase tracking-wider text-kg-navy mb-1.5"
            >
              Business Email <span className="text-red-500">*</span>
            </label>
            <input
              id="businessEmail"
              type="email"
              value={form.businessEmail}
              onChange={(e) => setForm({ ...form, businessEmail: e.target.value })}
              placeholder="name@company.com"
              className={`w-full px-4 py-2.5 rounded-lg border text-sm text-kg-ink bg-white focus:outline-none focus:ring-2 focus:ring-kg-blue/50 ${
                errors.businessEmail ? "border-red-500" : "border-kg-border"
              }`}
            />
            {errors.businessEmail && (
              <p className="text-xs text-red-600 mt-1">{errors.businessEmail}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="companyName"
              className="block text-xs font-semibold uppercase tracking-wider text-kg-navy mb-1.5"
            >
              Company / Organization
            </label>
            <input
              id="companyName"
              type="text"
              value={form.companyName}
              onChange={(e) => setForm({ ...form, companyName: e.target.value })}
              placeholder="e.g. Apex Industrial"
              className="w-full px-4 py-2.5 rounded-lg border border-kg-border text-sm text-kg-ink bg-white focus:outline-none focus:ring-2 focus:ring-kg-blue/50"
            />
          </div>
        </div>

        {/* Service of Interest */}
        <div>
          <label
            htmlFor="serviceInterest"
            className="block text-xs font-semibold uppercase tracking-wider text-kg-navy mb-1.5"
          >
            Primary Service Focus
          </label>
          <select
            id="serviceInterest"
            value={form.serviceInterest}
            onChange={(e) => setForm({ ...form, serviceInterest: e.target.value })}
            className="w-full px-4 py-2.5 rounded-lg border border-kg-border text-sm text-kg-ink bg-white focus:outline-none focus:ring-2 focus:ring-kg-blue/50"
          >
            <option value="Business Automation & AI">Business Automation & AI</option>
            <option value="Websites & Digital Platforms">Websites & Digital Platforms</option>
            <option value="Cloud & Technology Optimization">Cloud & Technology Optimization</option>
            <option value="Comprehensive Technical Audit">Comprehensive Technical Audit</option>
          </select>
        </div>

        {/* Project Description */}
        <div>
          <label
            htmlFor="projectDescription"
            className="block text-xs font-semibold uppercase tracking-wider text-kg-navy mb-1.5"
          >
            Project Summary & Key Problems <span className="text-red-500">*</span>
          </label>
          <textarea
            id="projectDescription"
            rows={4}
            value={form.projectDescription}
            onChange={(e) => setForm({ ...form, projectDescription: e.target.value })}
            placeholder="Describe the current workflow bottlenecks, timeline constraints, or digital requirements you wish to solve..."
            className={`w-full px-4 py-2.5 rounded-lg border text-sm text-kg-ink bg-white focus:outline-none focus:ring-2 focus:ring-kg-blue/50 ${
              errors.projectDescription ? "border-red-500" : "border-kg-border"
            }`}
          />
          {errors.projectDescription && (
            <p className="text-xs text-red-600 mt-1">{errors.projectDescription}</p>
          )}
        </div>

        {/* Demonstration Disclaimer Note */}
        <p className="text-[11px] text-kg-muted">
          Note: This form validates in the browser for local demonstration. No data is stored or transmitted externally.
        </p>

        {/* Submit Button */}
        <div className="pt-2">
          <Button
            type="submit"
            variant="primary"
            size="lg"
            className="w-full justify-center"
            disabled={isSubmitting}
            icon={<ArrowRight className="w-4 h-4" />}
          >
            {isSubmitting ? "Verifying Scope..." : "Submit Project Inquiry"}
          </Button>
        </div>
      </div>
    </form>
  );
}
