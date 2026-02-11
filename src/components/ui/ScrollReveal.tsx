"use client";

import { useRef, useEffect } from "react";
import { motion, useInView, useAnimation, type Variants } from "framer-motion";
import { cn } from "@/lib/utils";

interface ScrollRevealProps {
    children: React.ReactNode;
    width?: "fit-content" | "100%";
    className?: string;
    delay?: number;
    direction?: "up" | "down" | "left" | "right" | "none";
    distance?: number;
    duration?: number;
}

export function ScrollReveal({
    children,
    width = "100%",
    className,
    delay = 0,
    direction = "up",
    distance = 30,
    duration = 0.5,
}: ScrollRevealProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-10% 0px" });
    const controls = useAnimation();

    useEffect(() => {
        if (isInView) {
            controls.start("visible");
        }
    }, [isInView, controls]);

    const getHiddenVariant = () => {
        switch (direction) {
            case "up":
                return { opacity: 0, y: distance };
            case "down":
                return { opacity: 0, y: -distance };
            case "left":
                return { opacity: 0, x: distance };
            case "right":
                return { opacity: 0, x: -distance };
            case "none":
            default:
                return { opacity: 0, x: 0, y: 0 };
        }
    };

    const variants: Variants = {
        hidden: getHiddenVariant(),
        visible: { opacity: 1, x: 0, y: 0, transition: { duration, delay, ease: "easeOut" } },
    };

    return (
        <div ref={ref} style={{ position: "relative", width, overflow: "hidden" }} className={className}>
            <motion.div
                variants={variants}
                initial="hidden"
                animate={controls}
            >
                {children}
            </motion.div>
        </div>
    );
}
