import { cn } from "@/lib/utils";
import React from "react";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
    variant?: "default" | "muted" | "dark" | "brand";
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
        muted: "bg-slate-50",
        dark: "bg-slate-900",
        brand: "bg-teal-900",
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
