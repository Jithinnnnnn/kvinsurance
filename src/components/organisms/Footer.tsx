"use client";

import { Button } from "@/components/atoms/Button";
import { BodyText } from "@/components/atoms/Typography";

export function Footer() {
  const mapLinkUrl = "https://maps.google.com/your-actual-link";
  const facebookUrl = "https://www.facebook.com/share/18mzgTters/";
  const instagramUrl = "https://www.instagram.com/kvaidyans?igsh=MXA2anB0dWQ1ZGxvdw==";

  return (
    <footer id="quote" className="border-t border-indigo-100 bg-[#f8f9ff] pt-14 pb-6 md:pt-18 md:pb-8 lg:pt-22 lg:pb-10">
      <div className="content-container">
        {/* Main Grid: Stacks on Mobile, 3 columns on Desktop */}
        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1fr] lg:gap-20">
          
          {/* Column 1: Branding & Primary CTA */}
          <div className="flex flex-col items-center text-center md:items-start md:text-left space-y-6">
            <div className="space-y-3">
              <h3 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
                Your Safety, <br className="hidden md:block" /> 
                Our Family Promise.
              </h3>
              <BodyText className="max-w-md text-slate-600 leading-relaxed">
                Start your quote and see transparent options tailored to your goals in minutes.
              </BodyText>
            </div>
            
            <div className="flex flex-col w-full gap-4 sm:flex-row md:flex-col lg:flex-row">
              <Button href="#top" ariaLabel="Start quote now" className="w-full sm:w-auto shadow-indigo-200 shadow-lg">
                Start Quote
              </Button>
              <a
                href={mapLinkUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center text-sm font-bold text-indigo-600 hover:text-indigo-800 transition-colors"
              >
                Visit Our Office
              </a>
            </div>
          </div>

          {/* Column 2: Contact Info - Grouped for Mobile */}
          <div className="flex flex-col items-center md:items-start space-y-6 border-y border-slate-200 py-10 md:border-none md:py-0">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">Get in Touch</p>
            <div className="space-y-5 w-full max-w-xs md:max-w-none">
              <a
                href="mailto:kvaidyans2023@gmail.com"
                className="group flex items-center gap-4 text-sm font-semibold text-slate-700 transition-all hover:text-indigo-600"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white shadow-sm group-hover:shadow-md group-hover:bg-indigo-50 transition-all">
                  <MailIcon />
                </span>
                <span className="truncate">kvaidyans2023@gmail.com</span>
              </a>
              <a
                href="tel:+918111923644"
                className="group flex items-center gap-4 text-sm font-semibold text-slate-700 transition-all hover:text-indigo-600"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white shadow-sm group-hover:shadow-md group-hover:bg-indigo-50 transition-all">
                  <PhoneIcon />
                </span>
                +91 8111923644
              </a>
            </div>
          </div>

          {/* Column 3: Social & Community */}
          <div className="flex flex-col items-center md:items-start space-y-6">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">Connect With Us</p>
            <div className="flex items-center gap-4">
              <a
                href={facebookUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="Follow on Facebook"
                className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#1877F2] text-white shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl active:scale-95"
              >
                <FacebookIcon />
              </a>
              <a
                href={instagramUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="Follow on Instagram"
                className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] text-white shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl active:scale-95"
              >
                <InstagramIcon />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Legal Section (Crucial for Professionalism) */}
        <div className="mt-16 pt-8 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs font-medium text-slate-400">
            © {new Date().getFullYear()} K-Vaidyan Insurance Solutions. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs font-bold text-slate-500">
            <a href="#" className="hover:text-indigo-600">Privacy</a>
            <a href="#" className="hover:text-indigo-600">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

// Icons remain largely the same, but optimized with 'currentColor' for better styling
function MailIcon() { return ( <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="text-indigo-500"><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/><rect width="20" height="16" x="2" y="4" rx="2"/></svg> ); }
function PhoneIcon() { return ( <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="text-indigo-500"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l2.27-2.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg> ); }
function FacebookIcon() { return ( <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg> ); }
function InstagramIcon() { return ( <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg> ); }