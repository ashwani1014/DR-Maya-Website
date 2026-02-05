export default function Approach() {
    return (
        <section className="section-padding px-6 bg-background-dark relative border-b border-white/5">
            <div className="max-w-[1280px] mx-auto text-center">
                <h2 className="font-serif text-4xl md:text-6xl text-white italic mb-20 leading-tight">
                    "Evidence-based care meets <span className="text-primary">human connection</span>"
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mt-24">
                    <div className="flex flex-col items-center">
                        <span className="material-symbols-outlined text-primary text-5xl mb-6">psychology_alt</span>
                        <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-widest">CBT</h3>
                        <p className="text-white/50 leading-relaxed max-w-xs">Restructuring cognitive patterns through rigorous, goal-oriented behavioral interventions.</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <span className="material-symbols-outlined text-primary text-5xl mb-6">visibility</span>
                        <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-widest">EMDR</h3>
                        <p className="text-white/50 leading-relaxed max-w-xs">Specialized trauma processing using bilateral stimulation to unlock neural pathways.</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <span className="material-symbols-outlined text-primary text-5xl mb-6">self_care</span>
                        <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-widest">Mindfulness</h3>
                        <p className="text-white/50 leading-relaxed max-w-xs">Integrating presence-based awareness into clinical frameworks for somatic regulation.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
