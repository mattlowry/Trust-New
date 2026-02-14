
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { ArrowRight, CheckCircle2, Shield, HeartPulse, Brain } from "lucide-react";

export function Hero() {
    return (
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-slate-900 pt-20">
            {/* Background with Gradient Overlay */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-r from-teal-900/90 via-slate-900/80 to-slate-900/90 z-10" />
                <div className="w-full h-full bg-[url('/images/enhanced/hero_background_v2.png')] bg-cover bg-center opacity-50 mix-blend-overlay animate-fade-in" />
            </div>

            <div className="container relative z-20 px-4 md:px-6 flex flex-col items-center text-center max-w-5xl mx-auto animate-fade-in">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-300 text-sm font-medium mb-6 animate-delay-100">
                    <span className="flex h-2 w-2 rounded-full bg-teal-400 animate-pulse"></span>
                    Accepting New Patients 24/7
                </div>

                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-tight animate-delay-200">
                    Reclaim Your Life with <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-sky-400">
                        Evidence-Based Recovery
                    </span>
                </h1>

                <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed animate-delay-300">
                    Experience compassionate, personalized addiction treatment in the heart of Orange County. We combine medical expertise with holistic care to help you build a lasting foundation for recovery.
                </p>

                <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto animate-delay-300">
                    <Button size="lg" className="h-14 px-8 text-lg w-full sm:w-auto shadow-lg shadow-teal-900/20 bg-primary hover:bg-primary/90 transition-all hover:scale-105">
                        Get Help Now
                        <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                    <Button variant="outline" size="lg" className="h-14 px-8 text-lg w-full sm:w-auto bg-transparent border-white/20 text-white hover:bg-white/10 hover:text-white backdrop-blur-sm">
                        Verify Insurance
                    </Button>
                </div>

                <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 w-full max-w-4xl border-t border-white/10 pt-8 animate-delay-300">
                    {[
                        { icon: Shield, label: "Accredited Care", text: "JCAHO Certified" },
                        { icon: HeartPulse, label: "Medical Detox", text: "24/7 Monitoring" },
                        { icon: Brain, label: "Dual Diagnosis", text: "Mental Health Support" },
                        { icon: CheckCircle2, label: "Personalized", text: "Tailored Plans" },
                    ].map((item, i) => (
                        <div key={i} className="flex flex-col items-center gap-2 group">
                            <div className="p-3 rounded-xl bg-white/5 border border-white/10 group-hover:bg-teal-500/20 group-hover:border-teal-500/40 transition-colors">
                                <item.icon className="h-6 w-6 text-teal-400" />
                            </div>
                            <div className="text-center">
                                <p className="font-semibold text-white text-sm">{item.label}</p>
                                <p className="text-xs text-slate-400">{item.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
