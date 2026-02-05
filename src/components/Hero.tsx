import Image from "next/image";

export default function Hero() {
    return (
        <section className="relative h-[90vh] min-h-[700px] w-full flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-background-dark z-10"></div>
                <Image
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBf-ruHfjnCCUjJ9TB5w55w8HWUaMEz8q70-p1WgJZBex9iusrjB_zW2CxGIX3vvkzyLsY1Ax5MLaUhPZO6V1-dOzpcf8tlYx4dPhnOclyxLr132RCTw8R_4lhUf99o4Q1BA4e_S2kyNlO29OBc5BS4GmrqjaoBtTfZEs6WutO0PpUbncQkvF4aXfu2AhTeqBfvLNsWo81wWizUCHZDSNNnGmwzhZ6qUfFWwzm0ODLub2Vf17662d5deJa3R_G2T3PnZgzw3EVpwXA"
                    alt="Dr. Maya Reynolds Practice"
                    fill
                    priority
                    className="object-cover"
                    sizes="100vw"
                />
            </div>
            <div className="relative z-20 max-w-[1100px] px-6 text-center">
                <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white leading-[1.05] mb-8">
                    Step into the Light: <br /><span className="text-primary italic">Expert Therapy</span> for Resilience
                </h1>
                <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
                    Principal-level clinical support tailored for high-performance individuals seeking balance, clarity, and enduring transformation.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button className="bg-primary text-background-dark px-10 py-4 rounded-lg text-lg font-bold hover:scale-105 transition-transform">
                        Begin Your Journey
                    </button>
                    <button className="border border-white/30 backdrop-blur-sm text-white px-10 py-4 rounded-lg text-lg font-bold hover:bg-white/10 transition-colors">
                        View Portfolio
                    </button>
                </div>
            </div>
        </section>
    );
}
