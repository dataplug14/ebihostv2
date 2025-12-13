const features = [
    {
        title: "Custom Domain Email",
        description:
            "Get email addresses like you@yourdomain.com that reinforce your brand with every message.",
    },
    {
        title: "Full-Featured Webmail",
        description:
            "Access your email from anywhere with our powerful web-based email client.",
    },
    {
        title: "Mobile & Desktop Access",
        description:
            "Sync your email with your favorite apps using IMAP/POP3 on any device.",
    },
    {
        title: "Spam & Virus Protection",
        description:
            "Advanced filtering keeps your inbox clean and your data secure.",
    },
    {
        title: "Calendar & Contacts",
        description:
            "Built-in calendar and contact management to keep you organized.",
    },
    {
        title: "99.9% Uptime SLA",
        description:
            "Reliable email service with guaranteed uptime for your business.",
    },
];

export default function BusinessEmailFeatures() {
    return (
        <div
            id="features"
            className="section panel overflow-hidden py-6 lg:py-9 bg-secondary dark:bg-gray-800"
        >
            <div className="container max-w-xl">
                <div className="section-inner panel">
                    <div
                        className="panel vstack gap-4 sm:gap-6 lg:gap-8"
                        data-anime="onview: -100; targets: > *; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});"
                    >
                        <div className="heading vstack items-center gap-2 text-center max-w-650px mx-auto">
                            <h2 className="h3 lg:h2 m-0">Professional Business Email Features.</h2>
                            <p className="fs-6 text-dark dark:text-white text-opacity-70">
                                Everything you need to communicate professionally.
                            </p>
                        </div>
                        <div className="row child-cols-12 sm:child-cols-6 lg:child-cols-4 g-3 col-match">
                            {features.map((feature, index) => (
                                <div key={index}>
                                    <div className="panel vstack gap-2 p-4 rounded-2 bg-white dark:bg-gray-900 h-100">
                                        <h5 className="h6 m-0">{feature.title}</h5>
                                        <p className="fs-6 opacity-70 m-0">{feature.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
