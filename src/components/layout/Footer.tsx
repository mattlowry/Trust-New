
import Link from "next/link";
import { Facebook, Twitter, Youtube, CheckCircle } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { footerPrograms, footerCompany } from "@/data/navigation";
import { SITE_CONFIG } from "@/lib/constants";

export function Footer() {
    return (
        <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    {/* Brand Column */}
                    <div className="space-y-4">
                        <Logo className="text-white" />
                        <p className="text-sm text-slate-400 leading-relaxed max-w-xs">
                            {SITE_CONFIG.name} is a premier addiction treatment center in Orange County, dedicated to providing compassionate, evidence-based care for lasting recovery.
                        </p>
                        <div className="flex items-center gap-4">
                            <a href={SITE_CONFIG.social.facebook} className="hover:text-primary transition-colors" aria-label="Facebook"><Facebook className="h-5 w-5" /></a>
                            <a href={SITE_CONFIG.social.twitter} className="hover:text-primary transition-colors" aria-label="Twitter"><Twitter className="h-5 w-5" /></a>
                            <a href={SITE_CONFIG.social.youtube} className="hover:text-primary transition-colors" aria-label="YouTube"><Youtube className="h-5 w-5" /></a>
                        </div>
                    </div>

                    {/* Programs Column */}
                    <div>
                        <h3 className="text-white font-semibold mb-4 text-lg">Treatment Programs</h3>
                        <ul className="space-y-2">
                            {footerPrograms.map((program) => (
                                <li key={program.href}>
                                    <Link href={program.href} className="text-sm hover:text-primary transition-colors flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-primary/50" />
                                        {program.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company Column */}
                    <div>
                        <h3 className="text-white font-semibold mb-4 text-lg">Company</h3>
                        <ul className="space-y-2">
                            {footerCompany.map((item) => (
                                <li key={item.href}>
                                    <Link href={item.href} className="text-sm hover:text-primary transition-colors">
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Column */}
                    <div>
                        <h3 className="text-white font-semibold mb-4 text-lg">Contact Us</h3>
                        <div className="space-y-4 text-sm">
                            <p className="flex items-start gap-3">
                                <span className="text-primary font-medium">Addr:</span>
                                {SITE_CONFIG.address.street}, <br />{SITE_CONFIG.address.city}, {SITE_CONFIG.address.stateCode} {SITE_CONFIG.address.zip}
                            </p>
                            <p className="flex items-center gap-3">
                                <span className="text-primary font-medium">Phone:</span>
                                <a href={SITE_CONFIG.phone.href} className="hover:text-white transition-colors">{SITE_CONFIG.phone.formatted}</a>
                            </p>
                            <p className="flex items-center gap-3">
                                <span className="text-primary font-medium">Email:</span>
                                <a href={`mailto:${SITE_CONFIG.email}`} className="hover:text-white transition-colors">{SITE_CONFIG.email}</a>
                            </p>
                            <div className="mt-4 p-4 bg-slate-800 rounded-lg border border-slate-700">
                                <p className="text-xs text-slate-400 mb-2">Accredited by:</p>
                                <div className="flex items-center gap-2 font-bold text-white">
                                    <CheckCircle className="h-4 w-4 text-primary" />
                                    {SITE_CONFIG.accreditation}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <p className="text-center text-sm text-slate-400 mb-8">
                    Serving Fountain Valley, Orange County &amp; Southern California
                </p>

                <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
                    <p>&copy; {new Date().getFullYear()} {SITE_CONFIG.name}. All rights reserved.</p>
                    <div className="flex items-center gap-4 mt-4 md:mt-0">
                        <Link href="/sitemap" className="hover:text-white">Sitemap</Link>
                        <Link href="/privacy-policy" className="hover:text-white">Privacy Policy</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
