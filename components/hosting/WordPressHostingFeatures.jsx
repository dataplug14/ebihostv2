const features = [
    {
        title: "1-Click WordPress Install",
        description:
            "Get your WordPress site up and running in seconds with our easy one-click installation.",
    },
    {
        title: "WP Toolkit Included",
        description:
            "Manage your WordPress sites easily with the powerful WP Toolkit, including staging, cloning, and security features.",
    },
    {
        title: "Automatic Updates",
        description:
            "Keep your WordPress core, themes, and plugins up to date automatically for better security.",
    },
    {
        title: "Free Domain Included",
        description:
            "Every hosting plan comes with a free domain for the first year.",
    },
    {
        title: "Blazing-Fast NVMe Storage",
        description:
            "Our high-performance NVMe storage ensures faster page loads and better user experience.",
    },
    {
        title: "99.9% Uptime Guarantee",
        description:
            "Our powerful servers ensure your WordPress site is always available.",
    },
    {
        title: "Daily Automatic Offsite Backups",
        description:
            "We take daily backups and store them offsite for quick restoration.",
    },
    {
        title: "Advanced DDoS Protection",
        description:
            "Stay secure from online attacks with our robust DDoS protection.",
    },
    {
        title: "24/7 Expert Customer Support",
        description:
            "Our WordPress experts are available around the clock to help you.",
    },
];

export default function WordPressHostingFeatures() {
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
                            <h2 className="h3 lg:h2 m-0">WordPress Hosting Features.</h2>
                            <p className="fs-6 text-dark dark:text-white text-opacity-70">
                                Everything you need to run a fast, secure WordPress site.
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
