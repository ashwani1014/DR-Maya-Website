export default function Audience() {
    return (
        <section className="section-padding px-6 bg-background-dark">
            <div className="max-w-[1280px] mx-auto text-center">
                <span className="text-primary font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Dedicated Focus</span>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white max-w-4xl mx-auto leading-tight mb-12">
                    Who I Support: Dedicated to the <span className="italic text-primary">Resilience</span> of the Modern Professional
                </h2>
                <div className="flex flex-wrap justify-center gap-3 mb-20">
                    <span className="px-5 py-2 border border-primary/30 rounded-full text-primary text-xs font-bold tracking-widest uppercase bg-muted-gold">Licensed Psychologist</span>
                    <span className="px-5 py-2 border border-primary/30 rounded-full text-primary text-xs font-bold tracking-widest uppercase bg-muted-gold">APA Member</span>
                    <span className="px-5 py-2 border border-primary/30 rounded-full text-primary text-xs font-bold tracking-widest uppercase bg-muted-gold">EMDR Certified</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left">
                    <div className="p-8 border-l border-white/10 group hover:border-primary transition-colors">
                        <h3 className="text-xl font-bold mb-4 text-primary">Executive Leaders</h3>
                        <p className="text-white/60 leading-relaxed">Navigating high-stakes decision making and the isolation of leadership with clinical precision.</p>
                    </div>
                    <div className="p-8 border-l border-white/10 group hover:border-primary transition-colors">
                        <h3 className="text-xl font-bold mb-4 text-primary">Creative Visionaries</h3>
                        <p className="text-white/60 leading-relaxed">Maintaining artistic integrity and emotional balance in demanding, fast-paced industries.</p>
                    </div>
                    <div className="p-8 border-l border-white/10 group hover:border-primary transition-colors">
                        <h3 className="text-xl font-bold mb-4 text-primary">Academic High-Achievers</h3>
                        <p className="text-white/60 leading-relaxed">Addressing the unique pressures of research excellence and institutional navigation.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
