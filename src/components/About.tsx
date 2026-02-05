import Image from "next/image";

export default function About() {
    return (
        <section id="about" className="section-padding px-6 bg-charcoal-deep border-b border-white/5">
            <div className="max-w-[1280px] mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <div className="relative group">
                        <div className="absolute -inset-4 border border-primary/20 rounded-xl pointer-events-none group-hover:border-primary/40 transition-colors"></div>
                        <div className="aspect-[4/5] rounded-lg overflow-hidden border border-white/10 group-hover:border-primary/40 transition-colors duration-500 relative">
                            <Image
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBXLf7YPtGLs8y7GVIAGJvTVKykTWvu4WHIGHlTHjI2-Q60tq2CPy5qHk8MTsH0_b1dANuNgZbhnQOl8nek3QhFtW50bW93tEoY8cQsmc_CoTG9NGij2d_179cIn14Hp7DDI9x6q_v5Tk3o2FgApRzPzCi5uCroG_p5Buacp1lgGJIXL2WGyC9oFWWNyi2PaEuW6MZqx2VdKB3utWQvgm09uwiOq0UAMl-ZIoZfJZZDMYVf7rkSidOKxZF14as_o2njqr6Ko3LDwWA"
                                alt="Dr. Maya Reynolds Professional Portrait"
                                fill
                                className="object-cover grayscale brightness-90 contrast-125 group-hover:grayscale-0 group-hover:brightness-100 group-hover:contrast-100 transition-all duration-500 ease-in-out"
                                sizes="(max-width: 1024px) 100vw, 50vw"
                            />
                        </div>
                        <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
                    </div>
                    <div className="flex flex-col justify-center">
                        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mb-8 leading-tight">Meet <span className="italic text-primary">Dr. Maya Reynolds</span></h2>
                        <div className="space-y-6 text-white/70 font-display text-lg leading-[1.8] font-light">
                            <p>
                                With over fifteen years of clinical experience, my approach is rooted in the belief that even the most high-achieving individuals require a sanctuary for vulnerability. I provide a warm, collaborative space where evidence-based precision meets deep human empathy.
                            </p>
                            <p>
                                As a Licensed Clinical Psychologist, I specialize in the intersection of high-performance psychology and complex trauma recovery. My work focuses on helping leaders and visionaries navigate the unique pressures of their roles while healing the underlying patterns that hinder their true potential.
                            </p>
                        </div>
                        <div className="mt-12 pt-8 border-t border-primary/30 relative">
                            <div className="absolute top-0 left-0 w-24 h-[1px] bg-primary"></div>
                            <h4 className="text-primary font-bold uppercase tracking-[0.2em] text-xs mb-4">Credentials &amp; Expertise</h4>
                            <div className="flex flex-wrap gap-x-8 gap-y-2 text-white/90 font-medium">
                                <span className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                                    Psy.D. in Clinical Psychology
                                </span>
                                <span className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                                    Licensed Psychologist (CA PSY28491)
                                </span>
                                <span className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                                    Trauma-Informed Specialist
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
