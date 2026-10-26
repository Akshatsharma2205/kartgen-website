import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/brand/Logo";
import { siteConfig } from "@/data/site";
import { footerLinks } from "@/data/navigation";
import { Mail, MapPin, Clock, ArrowUpRight } from "lucide-react";

export function Footer() {
  const currentYear = 2026;

  return (
    <footer className="bg-kg-navy text-white border-t border-slate-800">
      <Container size="wide" className="py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Company Column */}
          <div className="lg:col-span-5 space-y-6">
            <Logo variant="light" size="lg" />
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-md">
              {siteConfig.description}
            </p>
            <div className="space-y-3 pt-2 text-sm text-slate-300">
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-kg-blue shrink-0" />
                <span>{siteConfig.contact.email}</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-kg-blue shrink-0" />
                <span>{siteConfig.contact.location}</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-kg-blue shrink-0" />
                <span>{siteConfig.contact.workingHours}</span>
              </div>
            </div>
          </div>

          {/* Service Links */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Service Pillars
            </h3>
            <ul className="space-y-2.5 text-sm">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-300 hover:text-white hover:underline transition-colors inline-flex items-center gap-1 group"
                  >
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Company
            </h3>
            <ul className="space-y-2.5 text-sm">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-300 hover:text-white hover:underline transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Demonstration Notice & Compliance */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Compliance & Scope
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Kartgen Infotech demonstration build. Verified client engagements are confidential; concept architectures are disclosed.
            </p>
            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-1 text-xs font-semibold text-kg-blue hover:text-white transition-colors"
              >
                <span>Initiate Project Scope</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {currentYear} {siteConfig.name}. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/about#privacy" className="hover:text-slate-200 transition-colors">
              Privacy
            </Link>
            <Link href="/about#terms" className="hover:text-slate-200 transition-colors">
              Terms of Engagement
            </Link>
            <Link href="/contact" className="hover:text-slate-200 transition-colors">
              Demonstration Mode
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
