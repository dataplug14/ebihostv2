const features = [
    {
        title: "Instant Setup & Free Website Migration",
        description:
            "Get your hosting account activated immediately, and if you're moving from another provider, we'll handle the migration for free with zero downtime.",
    },
    {
        title: "Free Domain Included",
        description:
            "Every hosting plan comes with a free domain for the first year, making it easy to get started with your online presence at no additional cost.",
    },
    {
        title: "Unmetered Bandwidth",
        description:
            "No restrictions, no hidden limits—your website can handle as much traffic as it needs without extra charges or slowdowns.",
    },
    {
        title: "Unlimited Free SSL Certificates",
        description:
            "Protect your website and boost trust with free SSL certificates for all your domains and subdomains.",
    },
    {
        title: "Blazing-Fast NVMe Storage",
        description:
            "Our high-performance NVMe storage ensures faster page loads, improved user experience, and better search engine rankings.",
    },
    {
        title: "99.9% Uptime Guarantee",
        description:
            "Our powerful servers and infrastructure ensure your website is always available, minimizing downtime and disruptions.",
    },
    {
        title: "Daily Automatic Offsite Backups",
        description:
            "We take daily backups and store them offsite, so you can quickly restore your website in case of data loss.",
    },
    {
        title: "Advanced DDoS Protection",
        description:
            "Stay secure from online attacks with our robust DDoS protection. We actively monitor and block threats.",
    },
    {
        title: "24/7 Expert Customer Support",
        description:
            "Our friendly support team is available around the clock to assist with any issues.",
    },
];

export default function SharedHostingFeatures() {
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
                            <h2 className="h3 lg:h2 m-0">Web Hosting Features.</h2>
                            <p className="fs-6 text-dark dark:text-white text-opacity-70">
                                Get the features that keep your site fast, secure, and always up and running.
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
