export default function Process() {
    return (
        <section className="section-padding px-6 bg-background-dark border-t border-white/5 overflow-hidden">
            <div className="max-w-[1280px] mx-auto">
                <h2 className="text-center font-serif text-4xl md:text-5xl text-white mb-20">The Path to Transformation</h2>
                <div className="relative flex flex-col md:flex-row justify-between items-start md:items-center gap-12 md:gap-0">
                    <div className="hidden md:block absolute top-12 left-0 w-full h-[1px] bg-primary/30 z-0"></div>
                    {[
                        { step: "1", title: "Initial Consultation", desc: "A brief discovery session to align on objectives and ensure a principal-level fit." },
                        { step: "2", title: "Clinical Assessment", desc: "Comprehensive mapping of psychological architecture and developmental patterns." },
                        { step: "3", title: "Collaborative Care", desc: "Ongoing evidence-based interventions tailored for sustainable behavioral evolution." }
                    ].map((item, index) => (
                        <div key={index} className="relative z-10 flex flex-col items-center md:w-1/3 text-center px-4 group">
                            <div className="w-24 h-24 rounded-full bg-background-dark border border-primary flex items-center justify-center mb-8 text-primary font-serif text-3xl group-hover:bg-primary group-hover:text-background-dark transition-all">
                                {item.step}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-widest">{item.title}</h3>
                            <p className="text-white/40 text-sm max-w-xs leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
