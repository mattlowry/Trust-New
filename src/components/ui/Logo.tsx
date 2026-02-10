
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";

export function Logo({ className }: { className?: string }) {
    return (
        <Link href="/" className={cn("flex items-center gap-2 transition-opacity hover:opacity-90", className)}>
            <div className="relative h-12 w-auto aspect-[3/1]">
                <Image
                    src="/images/logo.png"
                    alt="Trust SoCal"
                    width={180}
                    height={60}
                    className="h-full w-auto object-contain"
                    priority
                />
            </div>
        </Link>
    );
}
