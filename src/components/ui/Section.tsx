import { cn } from "@/lib/utils";
import React from "react";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
    variant?: "default" | "muted" | "dark" | "brand" | "soft-primary" | "soft-secondary" | "gradient-primary" | "gradient-secondary" | "warm-neutral" | "teal-mist";
    spacing?: "none" | "sm" | "default" | "lg";
}

export function Section({
    className,
    variant = "default",
    spacing = "default",
    children,
    ...props
}: SectionProps) {
    const variants = {
        default: "bg-white",
        muted: "bg-slate-50/80",
        dark: "bg-slate-900 text-white",
        brand: "bg-teal-900 text-white",
        "soft-primary": "bg-gradient-to-b from-teal-50/60 to-white",
        "soft-secondary": "bg-gradient-to-b from-orange-50/40 to-white",
        "gradient-primary": "bg-gradient-to-br from-teal-50/70 via-white to-sky-50/30",
        "gradient-secondary": "bg-gradient-to-br from-orange-50/50 via-white to-teal-50/20",
        "warm-neutral": "bg-gradient-to-b from-slate-50 to-stone-50/50",
        "teal-mist": "bg-gradient-to-br from-teal-50/40 via-sky-50/20 to-white",
    };

    const spacings = {
        none: "",
        sm: "section-padding-sm",
        default: "section-padding",
        lg: "section-padding-lg",
    };

    return (
        <section
            className={cn(variants[variant], spacings[spacing], className)}
            {...props}
        >
            {children}
        </section>
    );
}
