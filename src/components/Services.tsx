import Link from 'next/link';

export default function Services() {
    return (
        <section className="section-padding px-6 bg-background-dark border-y border-white/5">
            <div className="max-w-[1280px] mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { icon: "psychology", title: "Individual Psychotherapy", desc: "Deep clinical investigation into behavior patterns and emotional architecture in a secure environment." },
                        { icon: "partner_exchange", title: "Executive Relationship", desc: "Specialized guidance for power-couples and partners navigating high-demand lifestyle dynamics." },
                        { icon: "workspace_premium", title: "Advisory & Consulting", desc: "Short-term clinical advisory for leadership transitions and institutional resilience culture." }
                    ].map((item, index) => (
                        <div key={index} className="bg-white/5 p-10 rounded-xl border-t-4 border-primary group hover:bg-white/10 transition-colors">
                            <span className="material-symbols-outlined text-primary text-4xl mb-6">{item.icon}</span>
                            <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                            <p className="text-white/60 leading-relaxed mb-8">{item.desc}</p>
                            <Link href="#" className="inline-flex items-center gap-2 text-primary font-bold group-hover:gap-4 transition-all">
                                Details <span className="material-symbols-outlined text-sm">arrow_forward</span>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
