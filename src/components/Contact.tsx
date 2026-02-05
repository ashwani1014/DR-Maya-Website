export default function Contact() {
    return (
        // Main container with radial gradient background
        <section id="contact" className="py-20 lg:py-32 px-4 md:px-8 lg:px-16 relative">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(197,160,89,0.08)_0%,transparent_50%)] pointer-events-none"></div>

            {/* Content card with glass/border effect */}
            <div className="max-w-4xl mx-auto bg-charcoal border border-white/5 p-8 md:p-16 lg:p-24 text-center space-y-8 lg:space-y-12 relative overflow-hidden shadow-3xl">
                <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full -mr-48 -mt-48 blur-[100px] pointer-events-none"></div>

                {/* Direct access section */}
                <div className="space-y-6 relative z-10">
                    <span className="text-gold font-medium uppercase tracking-[0.4em] text-[11px]">Direct Access</span>
                    <h2 className="text-3xl md:text-5xl lg:text-7xl font-display text-parchment italic font-light">Begin your transformation</h2>
                    <p className="text-base lg:text-lg text-parchment/60 max-w-xl mx-auto editorial-text font-light">
                        I invite you to a confidential space where your well-being is the singular focus.
                    </p>
                </div>

                {/* Call to action buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6 relative z-10">
                    <a
                        href="mailto:contact@drmayareynolds.com"
                        className="w-full sm:w-auto px-12 py-5 bg-gold text-obsidian text-xs font-bold uppercase tracking-[0.2em] transition-all duration-500 hover:bg-white hover:scale-105"
                    >
                        Email Inquiry
                    </a>
                </div>
            </div>
        </section>
    );
}
