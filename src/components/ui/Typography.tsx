import { cn } from "@/lib/utils";
import React from "react";

interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
    as?: React.ElementType;
}

export function H1({ className, children, ...props }: TypographyProps) {
    return (
        <h1
            className={cn("text-heading-1", className)}
            {...props}
        >
            {children}
        </h1>
    );
}

export function H2({ className, children, ...props }: TypographyProps) {
    return (
        <h2
            className={cn("text-heading-2", className)}
            {...props}
        >
            {children}
        </h2>
    );
}

export function H3({ className, children, ...props }: TypographyProps) {
    return (
        <h3
            className={cn("text-heading-3", className)}
            {...props}
        >
            {children}
        </h3>
    );
}

export function H4({ className, children, ...props }: TypographyProps) {
    return (
        <h4
            className={cn("text-heading-4", className)}
            {...props}
        >
            {children}
        </h4>
    );
}

export function Lead({ className, children, ...props }: TypographyProps) {
    return (
        <p
            className={cn("text-body-lead", className)}
            {...props}
        >
            {children}
        </p>
    );
}

export function Paragraph({ className, size = "base", children, ...props }: TypographyProps & { size?: "sm" | "base" | "lg" }) {
    const sizes = {
        sm: "text-body-sm",
        base: "text-body-base",
        lg: "text-body-lg",
    }
    return (
        <p
            className={cn(sizes[size], className)}
            {...props}
        >
            {children}
        </p>
    );
}
