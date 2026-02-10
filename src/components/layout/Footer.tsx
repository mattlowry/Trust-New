
import Link from "next/link";
import { Facebook, Twitter, Youtube, CheckCircle } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { footerPrograms, footerCompany } from "@/data/navigation";
import { SITE_CONFIG } from "@/lib/constants";

export function Footer() {
    return (
        <footer className="bg-slate-950 text-slate-400 py-16 border-t border-slate-900 font-sans">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand Column */}
                    <div className="space-y-6">
                        <Logo className="text-white scale-90 origin-left" />
                        <p className="text-sm leading-relaxed max-w-xs text-slate-500">
                            {SITE_CONFIG.name} is a premier addiction treatment center in Orange County, dedicated to providing compassionate, evidence-based care for lasting recovery.
                        </p>
                        <div className="flex items-center gap-5">
                            <a href={SITE_CONFIG.social.facebook} className="text-slate-500 hover:text-primary transition-colors hover:scale-110 duration-200" aria-label="Facebook"><Facebook className="h-5 w-5" /></a>
                            <a href={SITE_CONFIG.social.twitter} className="text-slate-500 hover:text-primary transition-colors hover:scale-110 duration-200" aria-label="Twitter"><Twitter className="h-5 w-5" /></a>
                            <a href={SITE_CONFIG.social.youtube} className="text-slate-500 hover:text-primary transition-colors hover:scale-110 duration-200" aria-label="YouTube"><Youtube className="h-5 w-5" /></a>
                        </div>
                    </div>

                    {/* Programs Column */}
                    <div>
                        <h3 className="text-slate-100 font-bold mb-6 text-sm uppercase tracking-wider">Treatment Programs</h3>
                        <ul className="space-y-3">
                            {footerPrograms.map((program) => (
                                <li key={program.href}>
                                    <Link href={program.href} className="text-sm hover:text-teal-400 transition-colors flex items-center gap-2 group">
                                        <span className="w-1.5 h-1.5 rounded-full bg-slate-700 group-hover:bg-teal-400 transition-colors" />
                                        {program.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company Column */}
                    <div>
                        <h3 className="text-slate-100 font-bold mb-6 text-sm uppercase tracking-wider">Company</h3>
                        <ul className="space-y-3">
                            {footerCompany.map((item) => (
                                <li key={item.href}>
                                    <Link href={item.href} className="text-sm hover:text-teal-400 transition-colors">
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Column */}
                    <div>
                        <h3 className="text-slate-100 font-bold mb-6 text-sm uppercase tracking-wider">Contact Us</h3>
                        <div className="space-y-4 text-sm">
                            <p className="flex items-start gap-3 group">
                                <span className="text-teal-500 font-medium shrink-0 pt-0.5">Addr:</span>
                                <span className="group-hover:text-slate-300 transition-colors">
                                    {SITE_CONFIG.address.street}, <br />{SITE_CONFIG.address.city}, {SITE_CONFIG.address.stateCode} {SITE_CONFIG.address.zip}
                                </span>
                            </p>
                            <p className="flex items-center gap-3 group">
                                <span className="text-teal-500 font-medium shrink-0">Phone:</span>
                                <a href={SITE_CONFIG.phone.href} className="group-hover:text-white transition-colors">{SITE_CONFIG.phone.formatted}</a>
                            </p>
                            <p className="flex items-center gap-3 group">
                                <span className="text-teal-500 font-medium shrink-0">Email:</span>
                                <a href={`mailto:${SITE_CONFIG.email}`} className="group-hover:text-white transition-colors">{SITE_CONFIG.email}</a>
                            </p>
                            <div className="mt-6 p-5 bg-slate-900/50 rounded-xl border border-slate-800/50 hover:border-teal-900/50 transition-colors">
                                <p className="text-xs text-slate-500 mb-2 font-medium">Fully Accredited Facility</p>
                                <div className="flex items-center gap-2 font-bold text-slate-200">
                                    <CheckCircle className="h-4 w-4 text-teal-500" />
                                    {SITE_CONFIG.accreditation}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-600 gap-4">
                    <div className="flex flex-col md:flex-row items-center gap-2 md:gap-8">
                        <p>&copy; {new Date().getFullYear()} {SITE_CONFIG.name}. All rights reserved.</p>
                        <p className="hidden md:block text-slate-800">|</p>
                        <p>Serving Fountain Valley, Orange County &amp; Southern California</p>
                    </div>
                    <div className="flex items-center gap-6">
                        <Link href="/sitemap" className="hover:text-slate-400 transition-colors">Sitemap</Link>
                        <Link href="/privacy-policy" className="hover:text-slate-400 transition-colors">Privacy Policy</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
