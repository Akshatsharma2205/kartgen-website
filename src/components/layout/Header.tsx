"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/brand/Logo";
import { Button } from "@/components/ui/Button";
import { mainNav, serviceNav } from "@/data/navigation";
import { ChevronDown, Menu, X, ArrowRight, Zap, Globe, Cpu } from "lucide-react";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
  }, [pathname]);

  const getServiceIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Zap className="w-4 h-4 text-kg-blue" />;
      case 1:
        return <Globe className="w-4 h-4 text-emerald-600" />;
      case 2:
        return <Cpu className="w-4 h-4 text-amber-600" />;
      default:
        return <Zap className="w-4 h-4 text-kg-blue" />;
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-200 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-xs border-b border-kg-border/60 py-3"
          : "bg-white border-b border-kg-border/40 py-4"
      }`}
    >
      <Container size="wide">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <Logo size="md" />

          {/* Desktop Navigation */}
          <nav
            className="hidden md:flex items-center gap-1 lg:gap-2"
            aria-label="Main Navigation"
          >
            {mainNav.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);

              if (item.label === "Services") {
                return (
                  <div
                    key={item.href}
                    className="relative"
                    onMouseEnter={() => setServicesDropdownOpen(true)}
                    onMouseLeave={() => setServicesDropdownOpen(false)}
                  >
                    <Link
                      href={item.href}
                      className={`inline-flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-lg transition-colors duration-150 ${
                        isActive
                          ? "text-kg-blue bg-kg-blue-soft/50 font-semibold"
                          : "text-kg-ink hover:text-kg-blue hover:bg-slate-50"
                      }`}
                    >
                      <span>Services</span>
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${
                          servicesDropdownOpen ? "rotate-180" : ""
                        }`}
                      />
                    </Link>

                    {/* Services Dropdown Panel */}
                    {servicesDropdownOpen && (
                      <div className="absolute top-full left-0 w-80 pt-2 z-50">
                        <div className="bg-white rounded-xl shadow-xl border border-kg-border p-2 animate-in fade-in slide-in-from-top-1 duration-150">
                          <div className="px-3 py-2 border-b border-slate-100 mb-1">
                            <span className="text-[11px] font-bold uppercase tracking-wider text-kg-muted">
                              Service Pillars
                            </span>
                          </div>
                          {serviceNav.map((service, idx) => (
                            <Link
                              key={service.href}
                              href={service.href}
                              className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-kg-surface-subtle transition-colors group"
                            >
                              <div className="p-1.5 rounded-md bg-white border border-kg-border shrink-0 mt-0.5 group-hover:border-kg-blue/40">
                                {getServiceIcon(idx)}
                              </div>
                              <div>
                                <div className="text-xs font-semibold text-kg-navy group-hover:text-kg-blue flex items-center gap-1.5">
                                  {service.label}
                                </div>
                                <p className="text-[11px] text-kg-muted mt-0.5 line-clamp-2 leading-relaxed">
                                  {service.description}
                                </p>
                              </div>
                            </Link>
                          ))}
                          <div className="pt-2 mt-1 border-t border-slate-100 px-3 py-1.5">
                            <Link
                              href="/services"
                              className="text-xs font-semibold text-kg-blue hover:underline inline-flex items-center gap-1"
                            >
                              View all services overview
                              <ArrowRight className="w-3 h-3" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors duration-150 ${
                    isActive
                      ? "text-kg-blue bg-kg-blue-soft/50 font-semibold"
                      : "text-kg-ink hover:text-kg-blue hover:bg-slate-50"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Action CTA (Desktop) */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              href="/contact"
              variant="primary"
              size="sm"
              icon={<ArrowRight className="w-3.5 h-3.5" />}
            >
              Discuss a Project
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-kg-ink hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-kg-blue"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden pt-4 pb-6 border-t border-kg-border mt-3 animate-in fade-in duration-200">
            <nav className="flex flex-col gap-1.5">
              {mainNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-3 py-2.5 rounded-lg text-base font-medium transition-colors ${
                    pathname === item.href
                      ? "bg-kg-blue-soft text-kg-blue font-semibold"
                      : "text-kg-ink hover:bg-slate-50"
                  }`}
                >
                  {item.label}
                </Link>
              ))}

              {/* Service Sub-links in Mobile */}
              <div className="pl-3 pr-2 py-2 mt-1 space-y-1 bg-kg-surface-subtle rounded-xl border border-kg-border/60">
                <span className="text-[11px] font-bold uppercase tracking-wider text-kg-muted block px-2 py-1">
                  Our Service Pillars
                </span>
                {serviceNav.map((service, idx) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    className="flex items-center gap-2.5 px-2 py-1.5 rounded-md text-sm text-kg-navy hover:text-kg-blue"
                  >
                    <span className="shrink-0">{getServiceIcon(idx)}</span>
                    <span className="font-medium">{service.label}</span>
                  </Link>
                ))}
              </div>

              <div className="pt-4 mt-2">
                <Button
                  href="/contact"
                  variant="primary"
                  size="md"
                  className="w-full justify-center"
                  icon={<ArrowRight className="w-4 h-4" />}
                >
                  Discuss a Project
                </Button>
              </div>
            </nav>
          </div>
        )}
      </Container>
    </header>
  );
}
