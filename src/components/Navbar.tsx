"use client";
import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="sticky top-0 z-40 w-full border-b border-white/10 glass-nav">
            <div className="max-w-[1280px] mx-auto px-6 lg:px-20 py-5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary text-3xl">flare</span>
                    <h2 className="text-xl font-medium tracking-tight uppercase">Dr. Maya Reynolds</h2>
                </div>
                <div className="hidden md:flex items-center gap-10">
                    <Link href="#" className="text-xs font-medium tracking-widest uppercase hover:text-primary transition-colors">Home</Link>
                    <Link href="#" className="text-xs font-medium tracking-widest uppercase hover:text-primary transition-colors">About</Link>
                    <Link href="#" className="text-xs font-medium tracking-widest uppercase hover:text-primary transition-colors">Services</Link>
                    <Link href="#" className="text-xs font-medium tracking-widest uppercase hover:text-primary transition-colors">Office</Link>
                    <Link href="#" className="text-xs font-medium tracking-widest uppercase hover:text-primary transition-colors">Contact</Link>
                    <button className="bg-primary text-background-dark px-6 py-2 rounded-lg text-xs font-bold uppercase tracking-widest hover:brightness-110 transition-all">
                        Book Session
                    </button>
                </div>
            </div>
        </nav>
    );
}
