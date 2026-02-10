
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

function DesktopNavItem({ item, className, isScrolled }: { item: NavItem; className?: string; isScrolled: boolean }) {
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
                className={cn("text-sm font-semibold transition-colors", className)}
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
                className={cn("inline-flex items-center gap-1.5 text-sm font-semibold transition-colors", className)}
            >
                {item.name}
                <ChevronDown
                    className={cn(
                        "h-4 w-4 transition-transform duration-200 opacity-70",
                        open && "rotate-180"
                    )}
                />
            </Link>

            {/* Dropdown panel */}
            <div
                className={cn(
                    "absolute left-1/2 top-full z-50 mt-4 -translate-x-1/2",
                    "min-w-[240px] rounded-xl bg-white p-2 shadow-xl ring-1 ring-black/5",
                    "transition-all duration-200 origin-top",
                    open
                        ? "pointer-events-auto scale-100 opacity-100 translate-y-0"
                        : "pointer-events-none scale-95 opacity-0 -translate-y-2"
                )}
            >
                {/* View-all link */}
                <Link
                    href={item.href}
                    className="block rounded-lg px-4 py-3 text-xs font-bold uppercase tracking-wider text-teal-600 bg-teal-50/50 hover:bg-teal-50"
                    onClick={() => setOpen(false)}
                >
                    View All {item.name}
                </Link>

                <div className="my-2 h-px bg-slate-100" />

                <div className="flex flex-col gap-1">
                    {item.children.map((child) => (
                        <Link
                            key={child.href}
                            href={child.href}
                            className="block rounded-lg px-4 py-2.5 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-50 hover:text-teal-600 hover:translate-x-1"
                            onClick={() => setOpen(false)}
                        >
                            {child.name}
                        </Link>
                    ))}
                </div>
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

    // Dynamic text color classes
    const navTextClass = isScrolled
        ? "text-slate-600 hover:text-primary"
        : "text-white/90 hover:text-white";

    return (
        <header
            className={cn(
                "fixed top-0 z-50 w-full transition-all duration-300",
                isScrolled
                    ? "bg-white/95 backdrop-blur-md shadow-sm py-3"
                    : "bg-transparent py-6"
            )}
        >
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex items-center justify-between">
                    <Logo />

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-6 lg:gap-8">
                        {mainNavigation.map((item) => (
                            <DesktopNavItem
                                key={item.href}
                                item={item}
                                className={navTextClass}
                                isScrolled={isScrolled}
                            />
                        ))}

                        <div className="flex items-center gap-4 ml-4">
                            <a
                                href={SITE_CONFIG.phone.href}
                                className={cn(
                                    "hidden lg:flex items-center gap-2 text-sm font-semibold transition-colors",
                                    isScrolled ? "text-primary hover:text-primary/80" : "text-white hover:text-white/80"
                                )}
                            >
                                <Phone className="h-4 w-4" />
                                {SITE_CONFIG.phone.formatted}
                            </a>
                            <Button
                                size="sm"
                                className={cn(
                                    "hidden md:inline-flex font-semibold shadow-lg",
                                    !isScrolled && "bg-white text-teal-900 hover:bg-white/90"
                                )}
                            >
                                Get Help Now
                            </Button>
                        </div>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        className={cn(
                            "md:hidden p-2 transition-colors",
                            isScrolled ? "text-slate-900" : "text-white"
                        )}
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                    >
                        {mobileMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation Overlay */}
            {mobileMenuOpen && (
                <div className="absolute top-full left-0 w-full bg-white border-b shadow-xl md:hidden animate-in slide-in-from-top-5 duration-200">
                    <div className="flex flex-col p-4 space-y-1">
                        {mainNavigation.map((item) => (
                            <MobileNavItem
                                key={item.href}
                                item={item}
                                onNavigate={closeMobileMenu}
                            />
                        ))}

                        <div className="pt-4 mt-4 border-t border-slate-100 flex flex-col gap-3">
                            <a
                                href={SITE_CONFIG.phone.href}
                                className="flex items-center justify-center gap-2 text-primary font-bold py-2"
                            >
                                <Phone className="h-4 w-4" />
                                {SITE_CONFIG.phone.formatted}
                            </a>
                            <Button className="w-full font-bold shadow-md">
                                Get Help Now
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}
