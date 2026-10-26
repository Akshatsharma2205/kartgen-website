import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ArrowLeft, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="py-24 sm:py-32 bg-white flex items-center justify-center min-h-[60vh]">
      <Container size="narrow" className="text-center space-y-6">
        <span className="text-sm font-bold uppercase tracking-widest text-kg-blue">
          Error 404
        </span>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-kg-navy tracking-tight">
          Page Not Found
        </h1>
        <p className="text-base sm:text-lg text-kg-muted max-w-md mx-auto leading-relaxed">
          The requested route does not exist or has been relocated. Return to the homepage or explore our core service pillars.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            href="/"
            variant="primary"
            size="md"
            icon={<Home className="w-4 h-4" />}
          >
            Return to Homepage
          </Button>
          <Button
            href="/services"
            variant="secondary"
            size="md"
          >
            Explore Services
          </Button>
        </div>
      </Container>
    </div>
  );
}
