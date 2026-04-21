"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/atoms/Button";
import { SectionTitle, BodyText } from "@/components/atoms/Typography";
import { fadeInUp, smoothTransition, viewport } from "@/lib/motion";

interface FormData {
  name: string;
  email: string;
  phone: string;
}

interface FormErrors {
  name?: string;
  phone?: string;
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
  });
  
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[+]?[\d\s\-()]{10,}$/.test(formData.phone.trim())) {
      newErrors.phone = "Please enter a valid phone number";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);
    
    try {
      // Simulate API call - replace with actual implementation
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      console.log("Form submitted:", formData);
      setIsSubmitted(true);
      
      // Reset form after successful submission
      setFormData({ name: "", email: "", phone: "" });
      setErrors({});
      
      // Reset success message after 3 seconds
      setTimeout(() => setIsSubmitted(false), 3000);
    } catch (error) {
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: keyof FormData) => (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFormData(prev => ({ ...prev, [field]: e.target.value }));
    // Clear error when user starts typing
    if (errors[field as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  return (
    <section className="content-container pt-0 pb-8 md:pb-12 lg:pb-16">
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        transition={smoothTransition}
        className="mx-auto max-w-4xl"
      >
        <div className="overflow-hidden rounded-2xl border border-white/20 bg-gradient-to-br from-white/80 to-white/60 p-6 shadow-2xl backdrop-blur-sm md:p-8 lg:p-12">
          <div className="text-center mb-8 md:mb-10">
            <SectionTitle className="text-foreground mb-4">
              Get Your Free Insurance Quote
            </SectionTitle>
            <BodyText className="text-muted max-w-2xl mx-auto">
              Connect with our insurance experts today. We'll help you find the perfect coverage for your needs.
            </BodyText>
          </div>

          {isSubmitted && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6 rounded-xl bg-green-50 border border-green-200 p-4 text-center"
            >
              <div className="flex items-center justify-center gap-2 text-green-700">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="font-semibold">Thank you! We'll contact you soon.</span>
              </div>
            </motion.div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6" name="contact" method="POST" data-netlify="true">
            <input type="hidden" name="form-name" value="contact" />
            <div className="grid gap-6 md:grid-cols-2">
              {/* Name Field */}
              <div className="space-y-2">
                <label htmlFor="name" className="block text-sm font-semibold text-foreground">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange("name")}
                  className={`w-full rounded-xl border px-4 py-3 text-sm transition-all focus:outline-none focus:ring-2 focus:ring-accent/20 ${
                    errors.name
                      ? "border-red-300 bg-red-50 focus:border-red-400"
                      : "border-gray-200 bg-white/80 focus:border-accent"
                  }`}
                  placeholder="Enter your full name"
                />
                {errors.name && (
                  <p className="text-xs text-red-600 font-medium">{errors.name}</p>
                )}
              </div>

              {/* Phone Field */}
              <div className="space-y-2">
                <label htmlFor="phone" className="block text-sm font-semibold text-foreground">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange("phone")}
                  className={`w-full rounded-xl border px-4 py-3 text-sm transition-all focus:outline-none focus:ring-2 focus:ring-accent/20 ${
                    errors.phone
                      ? "border-red-300 bg-red-50 focus:border-red-400"
                      : "border-gray-200 bg-white/80 focus:border-accent"
                  }`}
                  placeholder="+91 98765 43210"
                />
                {errors.phone && (
                  <p className="text-xs text-red-600 font-medium">{errors.phone}</p>
                )}
              </div>
            </div>

            {/* Email Field - Full Width */}
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-semibold text-foreground">
                Email Address <span className="text-sm text-muted">(Optional)</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange("email")}
                className="w-full rounded-xl border border-gray-200 bg-white/80 px-4 py-3 text-sm transition-all focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                placeholder="your.email@example.com"
              />
            </div>

            {/* Submit Button */}
            <div className="flex flex-col items-center gap-4 pt-4 sm:flex-row sm:justify-center">
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto min-w-[200px] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <div className="flex items-center gap-2">
                    <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
                    Submitting...
                  </div>
                ) : (
                  "Get Free Quote"
                )}
              </Button>
              
              <p className="text-xs text-muted text-center sm:text-left">
                We'll contact you within 24 hours
              </p>
            </div>
          </form>

          {/* Trust Indicators */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 border-t border-gray-100 pt-6 text-xs text-muted">
            <div className="flex items-center gap-1">
              <svg className="h-4 w-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
              </svg>
              Secure & Confidential
            </div>
            <div className="flex items-center gap-1">
              <svg className="h-4 w-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              No Spam Guarantee
            </div>
            <div className="flex items-center gap-1">
              <svg className="h-4 w-4 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              Free Consultation
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}