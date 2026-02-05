export default function PracticeDetails() {
    return (
        <section className="section-padding px-6 bg-background-dark/50">
            <div className="max-w-[800px] mx-auto">
                <h2 className="text-3xl md:text-4xl font-serif text-white mb-12 text-center">Practice Details</h2>
                <div className="space-y-4">
                    {[
                        {
                            title: "Confidentiality & Privacy",
                            content: "Full concierge-level clinical discretion is maintained at all times. Records are managed through HIPAA-compliant, encrypted systems to ensure the highest standards of professional privacy."
                        },
                        {
                            title: "Session Rates & Insurance",
                            content: "We operate on a private-pay model to ensure the highest quality of focused care. Detailed invoices for out-of-network reimbursement can be provided upon request. Contact us for current session fee structures."
                        },
                        {
                            title: "Finding the Right Fit",
                            content: "Therapeutic alliance is the strongest predictor of clinical success. The initial consultation serves as a mutual assessment to determine if our specialized methodology aligns with your personal goals."
                        }
                    ].map((item, index) => (
                        <details key={index} className="group border-b border-white/10 pb-4">
                            <summary className="flex items-center justify-between cursor-pointer list-none py-4">
                                <span className="text-lg font-medium text-white group-hover:text-primary transition-colors">{item.title}</span>
                                <span className="material-symbols-outlined text-primary group-open:rotate-180 transition-transform">expand_more</span>
                            </summary>
                            <div className="px-2 pt-2 pb-6 text-white/50 leading-relaxed">
                                {item.content}
                            </div>
                        </details>
                    ))}
                </div>
            </div>
        </section>
    );
}
