
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";

export function Logo({ className }: { className?: string }) {
    return (
        <Link href="/" className="flex items-center gap-3 transition-opacity hover:opacity-90 group">
            <div className={cn("relative h-20 w-auto aspect-[3/1]", className)}>
                <Image
                    src="/images/logo.png"
                    alt="Trust SoCal"
                    fill
                    sizes="(max-width: 768px) 150px, 240px"
                    className="object-contain object-left"
                    priority
                />
            </div>
        </Link>
    );
}
