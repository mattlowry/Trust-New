'use client';

/**
 * Client component -- accessible FAQ accordion built on native
 * <details>/<summary> elements with Framer Motion height animation.
 *
 * Pages that need FAQ structured data should render <JsonLd> separately in
 * their server layer rather than coupling schema output to this client
 * component.
 */
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Plus, X } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  faqs: FAQItem[];
}

function AccordionItem({ faq }: { faq: FAQItem }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <details
      className="group border-b border-slate-200"
      open={isOpen}
      onToggle={(e) => setIsOpen((e.target as HTMLDetailsElement).open)}
    >
      <summary className="flex cursor-pointer list-none items-center justify-between py-4 text-left font-semibold text-foreground transition-colors hover:text-primary [&::-webkit-details-marker]:hidden">
        <span>{faq.question}</span>
        <span className="ml-4 flex-shrink-0 transition-transform duration-200">
          {isOpen ? (
            <X className="h-5 w-5 text-primary" />
          ) : (
            <Plus className="h-5 w-5 text-slate-400" />
          )}
        </span>
      </summary>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="pb-4 pr-10 text-slate-600">{faq.answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </details>
  );
}

export function FAQAccordion({ faqs }: FAQAccordionProps) {
  return (
    <div className="divide-y divide-slate-200">
      {faqs.map((faq, index) => (
        <AccordionItem key={index} faq={faq} />
      ))}
    </div>
  );
}
