const features = [
    {
        title: "Free WHMCS License",
        description:
            "Manage your clients, billing, and support with the industry-leading WHMCS platform, included free.",
    },
    {
        title: "White-Label Hosting",
        description:
            "Sell hosting under your own brand with complete white-label support. Your clients never see us.",
    },
    {
        title: "Private Nameservers",
        description:
            "Create your own branded nameservers (ns1.yourdomain.com) for a professional look.",
    },
    {
        title: "cPanel/WHM Included",
        description:
            "Full access to WHM for managing client accounts and cPanel for each hosting account.",
    },
    {
        title: "Free SSL Certificates",
        description:
            "Provide free SSL certificates to all your clients for secure websites.",
    },
    {
        title: "Free Account Migrations",
        description:
            "We'll migrate your existing clients from other providers at no extra cost.",
    },
    {
        title: "SSD Storage",
        description:
            "Fast SSD storage for better performance and quicker loading times.",
    },
    {
        title: "Unmetered Bandwidth",
        description:
            "No bandwidth limits means your clients can grow without restrictions.",
    },
    {
        title: "24/7 Expert Support",
        description:
            "Our team is available around the clock to help you and your clients.",
    },
];

export default function ResellerHostingFeatures() {
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
                            <h2 className="h3 lg:h2 m-0">Reseller Hosting Features.</h2>
                            <p className="fs-6 text-dark dark:text-white text-opacity-70">
                                Everything you need to run a successful hosting business.
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
