
import { Activity, Brain, ShieldCheck, Heart, Users, Sun } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";

const features = [
    {
        name: "Medical Detox",
        description: "Safe and comfortable withdrawal management under 24/7 medical supervision.",
        icon: Activity,
        href: "/programs/detox",
        color: "text-rose-500",
        bg: "bg-rose-500/10",
    },
    {
        name: "Residential Treatment",
        description: "Immersive healing in a structured, supportive environment for building new habits.",
        icon: Sun, // Meaning "New Day" or "Bright"
        href: "/programs/residential",
        color: "text-amber-500",
        bg: "bg-amber-500/10",
    },
    {
        name: "Dual Diagnosis",
        description: "Integrated care treating both addiction and co-occurring mental health disorders.",
        icon: Brain,
        href: "/programs/dual-diagnosis",
        color: "text-teal-500",
        bg: "bg-teal-500/10",
    },
    {
        name: "Trauma-Informed Care",
        description: "Compassionate therapy addressing underlying trauma to support deep healing.",
        icon: Heart,
        href: "/programs/trauma",
        color: "text-pink-500",
        bg: "bg-pink-500/10",
    },
    {
        name: "Family Support",
        description: "Healing relationships and educating loved ones through family therapy sessions.",
        icon: Users,
        href: "/programs/family",
        color: "text-blue-500",
        bg: "bg-blue-500/10",
    },
    {
        name: "Aftercare Planning",
        description: "Comprehensive discharge planning to ensure long-term sobriety and success.",
        icon: ShieldCheck,
        href: "/programs/aftercare",
        color: "text-emerald-500",
        bg: "bg-emerald-500/10",
    },
];

export function Features() {
    return (
        <Section variant="soft-secondary" className="py-24">
            <div className="container px-4 md:px-6 mx-auto">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
                        Comprehensive Treatment Programs
                    </h2>
                    <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
                        We offer a full continuum of care tailored to meet your unique needs. Our evidence-based approach ensures you receive the right support at every stage of recovery.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {features.map((feature) => (
                        <div
                            key={feature.name}
                            className="relative group bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 dark:border-slate-700/50 overflow-hidden"
                        >
                            <div className={`absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity ${feature.color}`}>
                                <feature.icon className="h-24 w-24 transform translate-x-4 -translate-y-4" />
                            </div>

                            <div className={`inline-flex p-3 rounded-lg ${feature.bg} ${feature.color} mb-6`}>
                                <feature.icon className="h-6 w-6" aria-hidden="true" />
                            </div>

                            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                                <Link href={feature.href} className="focus:outline-none">
                                    <span className="absolute inset-0" aria-hidden="true" />
                                    {feature.name}
                                </Link>
                            </h3>

                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                {feature.description}
                            </p>

                            <div className="mt-6 flex items-center text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0 duration-300">
                                Learn more <span aria-hidden="true" className="ml-1">→</span>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <Link href="/programs">
                        <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-white">
                            View All Programs
                        </Button>
                    </Link>
                </div>
            </div>
        </Section>
    );
}
