import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-background-dark border-t border-white/10 pt-20 pb-10 px-6">
            <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
                <div className="col-span-1 md:col-span-2">
                    <div className="flex items-center gap-3 mb-6">
                        <span className="material-symbols-outlined text-primary text-3xl">flare</span>
                        <h2 className="text-xl font-bold tracking-tight uppercase">Dr. Maya Reynolds</h2>
                    </div>
                    <p className="text-white/40 max-w-sm mb-8 leading-relaxed">
                        Licensed Clinical Psychologist providing concierge-level therapeutic support for professionals in Santa Monica and globally via secure telehealth.
                    </p>
                    <div className="flex gap-4">
                        <Link href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-primary text-white/40 hover:text-primary transition-all">
                            <span className="material-symbols-outlined text-xl">share</span>
                        </Link>
                        <Link href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-primary text-white/40 hover:text-primary transition-all">
                            <span className="material-symbols-outlined text-xl">mail</span>
                        </Link>
                    </div>
                </div>
                <div>
                    <h4 className="text-white font-bold mb-6">Practice</h4>
                    <ul className="space-y-4 text-white/40 text-sm">
                        <li><Link href="#" className="hover:text-primary transition-colors">Philosophy</Link></li>
                        <li><Link href="#" className="hover:text-primary transition-colors">Areas of Expertise</Link></li>
                        <li><Link href="#" className="hover:text-primary transition-colors">Clinical Process</Link></li>
                        <li><Link href="#" className="hover:text-primary transition-colors">FAQ</Link></li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-white font-bold mb-6">Location</h4>
                    <p className="text-white/40 text-sm leading-relaxed mb-4">
                        Ocean Avenue, Suite 400<br />
                        Santa Monica, CA 90401
                    </p>
                    <Link href="#" className="text-primary text-sm font-bold flex items-center gap-2">
                        <span className="material-symbols-outlined text-sm">location_on</span>
                        Get Directions
                    </Link>
                </div>
            </div>
            <div className="max-w-[1280px] mx-auto mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                <p className="text-white/20 text-xs">© 2026 Dr. Maya Reynolds. All rights reserved.</p>
                <div className="flex gap-8 text-white/20 text-xs">
                    <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                    <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
                    <Link href="#" className="hover:text-white transition-colors">Accessibility</Link>
                </div>
            </div>
        </footer>
    );
}
