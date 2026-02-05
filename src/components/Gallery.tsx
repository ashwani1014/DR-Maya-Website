import Image from 'next/image';

export default function Gallery() {
    const images = [
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBwNCiLVzgwWwJDMKQjZtYnBWDzNAM97ZkOWuOgBK-jeJVzwkdG9De7n_lw5yQVCz7osXBD-wEY9o7VqPfZb2Ns2cfXo051wSlGzDliRRPZ73YPQTR721Ae5JFuxJW6zJxK_ZUFqIPjR5lhRxFq4m2YQwNuS2je-C_ZvTJ6SRYG7OS7sLucrfNvq3vq8eBCBt2CVMPDZo2sZyQLI5CUd28eaH-xafSesYCFc39jQggO3MStgUYC8u2DphsfT7I4A-dn-a73Co5Pe1Y",
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDqgIN--yAmrL_mPEB_a7sD8iidvVeQlQkMkMHjTCJ8zKmAWsehh-Q-ZzdCWCEWVbFKJSjcXKmAJGw-MPZGrsqZWi6-IpJsCuO_5bdkE7udRQiD9QJXPw2OMCRadEA7wt5FRaxB6CIaDWMno14aOHy-0ojfR9H4VB9dGRx3fdgW18qhKeXgGGggYT63DWsJ9vXo8RX1pscdaOgYLHf2txJe54aaIl8NWHuGXLf9ASW7p_TKWzFAvvLe-lgl9aYEe8OrzeD5FFadHW0",
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCO6RS56gSR4AEILJ8KhwjO2Jn5t8VK4sVJuUwOtuTnkKk-jwDJXFEsU49ePhb_uDVKFHRYEaix6gMHW-TXT03CliiVvhYYfZkRJ9gnZZ75IscZ_kDWwS-Wott_DNFi7cbaPoSQWu2FhUdpOdspD35tOxhkc_7oNDD3ZjLUMWeBonZQ6ieEu1jnwoBk4N0Mq8ExtCE9v3eRl6Cq77f44zDSuPOBDirIuJaZi1yEd7sM5moDCwYKVQ0zSfKUQjHhzGJwo4t5Nir09eM",
        "https://lh3.googleusercontent.com/aida-public/AB6AXuC4fAJI8-69pBFa4NFuIhvuEQpbXSLqOa-zApGFUz_uCw8kNmMEp6AwA3wadRrAtnN7Q90ECG6QtTNGC0thPU7jqutGcrnViAlzbLXS9Vec424sX_zPrPjoAhPwZwRiimGMM0PkbP_58eUg1biKQFJX-Qu0KhsYY9U14C-nuNQuG8doezBQjDMxjd6HMoVY5hBjpW26cPi4MnbgjJRkN827Uf3teWt1iG05o4MvekYPBf1NOF8_rrI8ieCkxo-nEK6oPtLVM1P_JdI",
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDKrQtU5RRiJhRFTHeSoO6X5ybr3Ps9ItXMpx-FgGRJIGdHCRnAhMDEJL0qnsHxL4aMmBAyfR_jrUWW_q5GbmNgHc0-4Q3Fks3dZc2my5y7Q3iu3FTM_CGsi03QP8Bbf5TnuGJ2YyX1GjZaBWVvNzrf_9Hj3fD7j5hGHdJKIBi3zGdDK_tc3GGycbEg0BQ07pAIQ3HsBtScFyb1XNEPRHN8oWPeFfqyJqNkrlhzANlbpL4xcBew91XLt8Pbuyx4fXAXLQ0WEBs8Ypo",
        "https://lh3.googleusercontent.com/aida-public/AB6AXuD_KzJLtkH0vxliGiaENQ8nJ581SuFVB3ZnMpGrymp3zOALNxQ-585XhtgIRRMrLYHTD2NqAimMT-d8uKrYbKPCtsLdbdqnghMPeHUAul4aCPQJAF8kqFGrYwon25SmN00HRq6FsPKQroi0Qy9Eu8HS10z6jbfNQoLG_vXV_ouSPKtE9gljvBHZ_q4qsFG8i1bquBrmW1pHaY30RRd5basqHIPPUfC3X5mZZDpvPMpJ1NfJcp7i_Z1D8EcjC-UHXvUESgwkHi_62no"
    ];

    return (
        <section id="gallery" className="section-padding px-6 relative overflow-hidden bg-background-dark">
            <div className="absolute inset-0 z-0 opacity-20 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at 20% 30%, #D4AF37 0%, transparent 40%), radial-gradient(circle at 80% 70%, #D4AF37 0%, transparent 40%)", filter: "blur(100px)" }}></div>
            <div className="max-w-[1280px] mx-auto relative z-10">
                <h2 className="text-4xl md:text-5xl font-serif text-white text-center mb-20 tracking-tight">The Sanctuary at <span className="text-primary">Santa Monica</span></h2>
                <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
                    {images.map((src, index) => (
                        <div key={index} className="relative rounded-xl overflow-hidden border border-white/10 group aspect-[4/3]">
                            <Image
                                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                                src={src}
                                alt="Office Gallery"
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                            {index === 0 && <div className="absolute inset-0 bg-primary/10 mix-blend-overlay z-10"></div>}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
