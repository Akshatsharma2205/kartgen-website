"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItemProps {
  question: string;
  answer: string;
  defaultOpen?: boolean;
}

export function FaqAccordionItem({
  question,
  answer,
  defaultOpen = false,
}: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border border-kg-border rounded-xl bg-white overflow-hidden transition-all duration-200">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left px-5 py-4 flex items-center justify-between gap-4 font-semibold text-kg-navy hover:text-kg-blue transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-kg-blue focus-visible:ring-inset"
        aria-expanded={isOpen}
      >
        <span className="text-base sm:text-lg">{question}</span>
        <ChevronDown
          className={`w-5 h-5 text-kg-muted shrink-0 transition-transform duration-200 ${
            isOpen ? "rotate-180 text-kg-blue" : ""
          }`}
        />
      </button>

      {isOpen && (
        <div className="px-5 pb-5 pt-1 text-sm sm:text-base text-kg-muted leading-relaxed border-t border-slate-100 animate-in fade-in duration-150">
          {answer}
        </div>
      )}
    </div>
  );
}

interface FaqAccordionProps {
  items: { question: string; answer: string }[];
  className?: string;
}

export function FaqAccordion({ items, className = "" }: FaqAccordionProps) {
  return (
    <div className={`space-y-3 ${className}`}>
      {items.map((item, index) => (
        <FaqAccordionItem
          key={index}
          question={item.question}
          answer={item.answer}
          defaultOpen={index === 0}
        />
      ))}
    </div>
  );
}
