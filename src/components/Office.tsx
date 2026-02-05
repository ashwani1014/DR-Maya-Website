import Image from "next/image";

export default function Office() {
    return (
        <section id="office" className="py-20 lg:py-32 bg-charcoal/20">
            <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-16">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
                    <div className="lg:col-span-4 space-y-8 lg:sticky lg:top-32">
                        <span className="text-gold font-medium uppercase tracking-[0.3em] text-[10px]">The Studio</span>
                        <h2 className="text-4xl lg:text-5xl font-display text-parchment leading-tight">An Oasis of <br /><span className="italic">Quiet Luxury</span></h2>
                        <p className="text-parchment/60 editorial-text font-light">
                            Our Santa Monica office is curated with a midnight palette to reduce sensory load and foster immediate psychological safety.
                        </p>
                        <div className="pt-6 flex items-start space-x-4 text-gold">
                            <span className="material-symbols-outlined font-light">location_on</span>
                            <div className="text-[11px] uppercase tracking-[0.2em] font-medium leading-relaxed">
                                45 West Midnight Lane<br />
                                Santa Monica, CA 90401
                            </div>
                        </div>
                    </div>
                    <div className="lg:col-span-8 grid grid-cols-12 gap-6">
                        <div className="col-span-12 md:col-span-7">
                            <div className="relative w-full aspect-square warm-grade shadow-2xl border border-white/5 overflow-hidden">
                                <Image
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDEYPmCEhIJPy-HJ2C3kkllBINf5Lw160yvmzeTw6AXfqEMgYISwx8RCIZqRzx5ZzbEsWKxvw16vrpDnLZYHVGR8KB7DF6iK0QOjfcUbZicXC4PvZokostqbWWuMcJCNrFGLHsTg_8KmX5oOCd8S6nJrF1kJurl25ctZtszeE_TM698k-mkHcmnQgN5AraNxH0ZV47Pky_thsMSfk9hQCL8HzNsHbnSyNUvrXLyl4EFljDj5FYKsIvkIn8W3bl8FRWSF401f8-wLLA"
                                    alt="Elegant therapy office"
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                            </div>
                        </div>
                        <div className="col-span-12 md:col-span-5 md:pt-20">
                            <div className="relative w-full aspect-[3/4] warm-grade shadow-2xl border border-white/5 overflow-hidden">
                                <Image
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDFaE3vNxSM9rMu2EXd4ggVq_IcDtrmi87yVDOXohaoouV591rhcb-2mTKA0Rt6-k2mXNp8mXYg3yF4FwoXuoS-_KQNX_uZBWGPb1_i6RwL2ls4C-eRzx_rWUnc4gv2Uou_TACMjkgNj802jTOeGoZVLA75Cslpw9XFKWB3yRw76mx6B49CZQ77X7Z-jNs-9o4ILBK50l21HfiS_CyuPRRJkEognNtGbYiIW7t8VLxKq7RKx1s87O3pMjgFBaHrZypMGSAO6tCQhTM"
                                    alt="Detailed lighting in office"
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
                                />
                            </div>
                        </div>
                        <div className="col-span-12 px-0 md:px-12 -mt-6">
                            <div className="relative w-full aspect-[21/9] warm-grade shadow-2xl border border-white/5 overflow-hidden">
                                <Image
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCk13Qf181Q4EsNpoHS5gnYDhPJgi19k3B9T9yZi4fGMTeSE_9QyM3-PYcBAgTAaLsatDfGRZSJAAfHLj_ngjBrByyLr6oryv0VCnSfytdnTKzRt4SuaWLdH389I_PdLAg1_jZVAGbwvlmQCCf4aSnNNKALs0apR95lZ66RuLF8iHh4tmjyy9f7vpXzs_XW1NmCEHy0l6kc_WYtD_P2F6sX5i_hibG6XHgrzqv80X_yN1YItd6Hz-OynRDPx9BzxqgfZzyqdwi0RTc"
                                    alt="Comfortable consultation area"
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 1024px) 100vw, 80vw"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
