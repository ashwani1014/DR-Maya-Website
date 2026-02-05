import Link from 'next/link';
import Image from "next/image";

export default function Specializations() {
    return (
        <section className="section-padding px-6 bg-background-dark/50">
            <div className="max-w-[1280px] mx-auto">
                <div className="flex items-end justify-between mb-16 px-4">
                    <h2 className="text-3xl md:text-4xl font-serif text-white">Specialized Clinical Support</h2>
                    <Link href="#" className="text-primary hover:underline font-bold text-sm tracking-widest uppercase">Explore All Specializations</Link>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        { tag: "Support", title: "Anxiety", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAO3m67e2EgyYWtsl5wiZ_umeFZbad9ltcP0SIQU-JkPfJaUzsfm-RHgsyXl-rKvN8aC1DKuu3ZeiPXG7yO37EIaJcLlz3-TWF5K1mAjuad-af1PkoUzD6gbLphf--EfCXU0JHr3g2D2oVenjm3EDofUZb0Xg_57Nv5QQ2x9DE6qEZkVvUKy0kMcrk4zXO7U_vEUrL7ibkl9r0q-TE2cmJWqOoh7E-kySenFg3qsk0m2KPIsRgmdHWWvr1-MQlavLpRbCNtXgoY_w8" },
                        { tag: "Clinical", title: "Trauma", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAYcMNz9JH89ub-3zqA8oqp5TFlg2sYM58KYZ6rxc912YSeUa9hpQU-bgPPGKNeVQjgitL4c_naM_hqHGqSm1aOzmV1QKp56JQaOTUAG-CkP-qCkxfIHabmTonl04YIYOQca0rdctpUzndBIpJ-ihIXZZLEFp8wSl0ZeSo-FZJfhFWq1upG8-MTBnaxL7OcCXxG-YuDX6Hp8nEwUrz5ABiuUD-Oh30t7fr0CrTbUQ7VphPt_RMxJ7J3rjrf4pXvjLXqDcBxgPpnZO0" },
                        { tag: "Restorative", title: "Burnout", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuARu-YW9KbtM1Q6dw5LFfL4LLHjtlc5ypY8oO60OGCV_oE9lFAo0HuGCBBFKxDa2tRlQ-Ff0ARHOv6DXHRa6PxWkpzyv2JWDgVe-psTInCPU1yynrF46ceNQQlyjPUy3yusbCsFqvmL0CaTntvAHn4RGyhj8m4MGt_x6XL7QfINA1W640ajeO1-vjW2zk31ldrINRHSbX-4RARFTEX5GTnYMkcPGf_udtLMcV-mdNBINLZ_WGPOa5l-RjQrZcgdQA4C3HCPBBlCQbI" },
                        { tag: "Life Path", title: "Transitions", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAe_UBqE0UcKzAO9ezpoyG6HBz-qnDpk2bxurK1YAwGJinU6y9ETlA-R3usaDUD3Ot3A1O8YH0AL0CSbRH7fsMwcnYXbEFvw0La45fFW7wBe-vAXI2a_VxtqQr-BH3tPlvHFkhb4Fz7q3HhkL1yOza8IELWOGPCecv7qpNAy2QX-kSr7uJfpR6QSoRv79NTzcmTYEbNNJb4zDCJJMoA4PJ5cSc49Nk9udG4ZU4vGmYs9U0zKagvHRWhwhNlTFJGFIfzAmTscYhHLhU" }
                    ].map((item, index) => (
                        <div key={index} className="group relative aspect-[3/4] rounded-xl overflow-hidden border border-white/5 gold-glow transition-all duration-500 cursor-pointer">
                            <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-transparent z-10"></div>
                            <div className="absolute inset-0 z-0">
                                <Image
                                    src={item.img}
                                    alt={item.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                                />
                            </div>
                            <div className="absolute bottom-0 left-0 p-8 z-20">
                                <p className="text-primary text-xs font-bold tracking-widest uppercase mb-2">{item.tag}</p>
                                <h3 className="text-white text-2xl font-bold">{item.title}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
