
"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";
import { cn } from "@/lib/utils";
import { SITE_CONFIG } from "@/lib/constants";
import { mainNavigation, type NavItem } from "@/data/navigation";

// ---------------------------------------------------------------------------
// Desktop Dropdown
// ---------------------------------------------------------------------------

function DesktopNavItem({ item }: { item: NavItem }) {
    const [open, setOpen] = useState(false);
    const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    const handleEnter = useCallback(() => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        setOpen(true);
    }, []);

    const handleLeave = useCallback(() => {
        // Short delay so the cursor can travel from trigger to dropdown
        timeoutRef.current = setTimeout(() => setOpen(false), 150);
    }, []);

    // Cleanup on unmount
    useEffect(() => {
        return () => {
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
        };
    }, []);

    // Simple link (no children)
    if (!item.children || item.children.length === 0) {
        return (
            <Link
                href={item.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
                {item.name}
            </Link>
        );
    }

    // Has children -- render trigger + dropdown
    return (
        <div
            className="relative"
            onMouseEnter={handleEnter}
            onMouseLeave={handleLeave}
        >
            {/* Trigger */}
            <Link
                href={item.href}
                className="inline-flex items-center gap-1 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
                {item.name}
                <ChevronDown
                    className={cn(
                        "h-3.5 w-3.5 transition-transform duration-200",
                        open && "rotate-180"
                    )}
                />
            </Link>

            {/* Dropdown panel */}
            <div
                className={cn(
                    "absolute left-1/2 top-full z-50 mt-2 -translate-x-1/2",
                    "min-w-[220px] rounded-lg bg-white py-2 shadow-lg ring-1 ring-border",
                    "transition-all duration-200 origin-top",
                    open
                        ? "pointer-events-auto scale-100 opacity-100 translate-y-0"
                        : "pointer-events-none scale-95 opacity-0 -translate-y-1"
                )}
            >
                {/* View-all link */}
                <Link
                    href={item.href}
                    className="block px-4 py-2 text-xs font-semibold uppercase tracking-wider text-primary hover:bg-muted"
                    onClick={() => setOpen(false)}
                >
                    View All {item.name}
                </Link>

                <div className="my-1 h-px bg-border" />

                {item.children.map((child) => (
                    <Link
                        key={child.href}
                        href={child.href}
                        className="block px-4 py-2 text-sm text-foreground/80 transition-colors hover:bg-muted hover:text-primary"
                        onClick={() => setOpen(false)}
                    >
                        {child.name}
                    </Link>
                ))}
            </div>
        </div>
    );
}

// ---------------------------------------------------------------------------
// Mobile Expandable Item
// ---------------------------------------------------------------------------

function MobileNavItem({
    item,
    onNavigate,
}: {
    item: NavItem;
    onNavigate: () => void;
}) {
    const [expanded, setExpanded] = useState(false);

    // Simple link (no children)
    if (!item.children || item.children.length === 0) {
        return (
            <Link
                href={item.href}
                className="block text-base font-medium text-foreground py-3 border-b border-border/50"
                onClick={onNavigate}
            >
                {item.name}
            </Link>
        );
    }

    // Has children -- expandable section
    return (
        <div className="border-b border-border/50">
            <div className="flex items-center justify-between">
                <Link
                    href={item.href}
                    className="flex-1 text-base font-medium text-foreground py-3"
                    onClick={onNavigate}
                >
                    {item.name}
                </Link>
                <button
                    type="button"
                    className="p-2 text-muted-foreground"
                    onClick={() => setExpanded((prev) => !prev)}
                    aria-label={expanded ? `Collapse ${item.name}` : `Expand ${item.name}`}
                >
                    <ChevronDown
                        className={cn(
                            "h-4 w-4 transition-transform duration-200",
                            expanded && "rotate-180"
                        )}
                    />
                </button>
            </div>

            {/* Children list */}
            <div
                className={cn(
                    "overflow-hidden transition-all duration-300",
                    expanded ? "max-h-[600px] opacity-100 pb-2" : "max-h-0 opacity-0"
                )}
            >
                {item.children.map((child) => (
                    <Link
                        key={child.href}
                        href={child.href}
                        className="block pl-4 py-2 text-sm text-muted-foreground transition-colors hover:text-primary"
                        onClick={onNavigate}
                    >
                        {child.name}
                    </Link>
                ))}
            </div>
        </div>
    );
}

// ---------------------------------------------------------------------------
// Header
// ---------------------------------------------------------------------------

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const closeMobileMenu = useCallback(() => setMobileMenuOpen(false), []);

    return (
        <header
            className={cn(
                "fixed top-0 z-50 w-full transition-all duration-300",
                isScrolled
                    ? "glass shadow-sm py-2"
                    : "bg-transparent py-4"
            )}
        >
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex items-center justify-between">
                    <Logo />

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-6 lg:gap-8">
                        {mainNavigation.map((item) => (
                            <DesktopNavItem key={item.href} item={item} />
                        ))}

                        <div className="flex items-center gap-4 ml-4">
                            <a
                                href={SITE_CONFIG.phone.href}
                                className="hidden lg:flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80"
                            >
                                <Phone className="h-4 w-4" />
                                {SITE_CONFIG.phone.formatted}
                            </a>
                            <Button size="sm" className="hidden md:inline-flex">
                                Get Help Now
                            </Button>
                        </div>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 text-foreground"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                    >
                        {mobileMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation Overlay */}
            {mobileMenuOpen && (
                <div className="absolute top-full left-0 w-full bg-background border-b shadow-lg md:hidden animate-fade-in">
                    <div className="flex flex-col p-4">
                        {mainNavigation.map((item) => (
                            <MobileNavItem
                                key={item.href}
                                item={item}
                                onNavigate={closeMobileMenu}
                            />
                        ))}

                        <div className="flex flex-col gap-4 mt-6">
                            <a
                                href={SITE_CONFIG.phone.href}
                                className="flex items-center justify-center gap-2 text-primary font-semibold py-2"
                            >
                                <Phone className="h-4 w-4" />
                                {SITE_CONFIG.phone.formatted}
                            </a>
                            <Button className="w-full">
                                Get Help Now
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}
