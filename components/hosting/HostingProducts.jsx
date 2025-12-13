import Link from "next/link";

const products = [
    {
        name: "Shared Hosting",
        description: "Fast, reliable, and affordable cPanel hosting. Perfect for personal websites and small businesses.",
        price: "From ₦1,499/mo",
        href: "/hosting/shared",
        features: ["Free Domain", "Free SSL", "NVMe Storage", "24/7 Support"],
    },
    {
        name: "WordPress Hosting",
        description: "Optimized hosting built specifically for WordPress. 1-click install, auto updates, and WP Toolkit.",
        price: "From ₦2,098/mo",
        href: "/hosting/wordpress",
        features: ["1-Click Install", "Auto Updates", "WP Toolkit", "Free SSL"],
    },
    {
        name: "Business Email",
        description: "Professional email that matches your domain. Build trust with every message you send.",
        price: "From ₦500/mo",
        href: "/hosting/email",
        features: ["Custom Domain", "Webmail Access", "Mobile Sync", "Spam Protection"],
    },
    {
        name: "Reseller Hosting",
        description: "Start your own hosting business. White-label hosting with free WHMCS and cPanel/WHM.",
        price: "From ₦10,000/mo",
        href: "/hosting/reseller",
        features: ["Free WHMCS", "White-Label", "Private NS", "WHM Access"],
    },
    {
        name: "Cloud VPS",
        description: "Powerful KVM-based cloud servers with full root access. Scale as you grow.",
        price: "Coming Soon",
        href: "#",
        features: ["Full Root Access", "Dedicated Resources", "SSD Storage", "Scalable"],
        comingSoon: true,
    },
];

export default function HostingProducts() {
    return (
        <div id="products" className="section panel overflow-hidden py-6 lg:py-9">
            <div className="container max-w-xl">
                <div className="section-inner panel">
                    <div
                        className="panel vstack gap-4 sm:gap-6 lg:gap-8"
                        data-anime="onview: -100; targets: > *; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});"
                    >
                        <div className="heading vstack items-center gap-2 text-center max-w-650px mx-auto">
                            <h2 className="h3 lg:h2 m-0">Our Hosting Solutions.</h2>
                            <p className="fs-6 text-dark dark:text-white text-opacity-70">
                                Choose the hosting that fits your needs. All plans include 24/7
                                support and 99.9% uptime guarantee.
                            </p>
                        </div>
                        <div className="row child-cols-12 md:child-cols-6 lg:child-cols-4 g-3 col-match">
                            {products.map((product, index) => (
                                <div key={index}>
                                    <div
                                        className={`panel vstack gap-4 p-4 lg:p-5 rounded-2 h-100 bg-secondary dark:bg-gray-800 ${product.comingSoon ? "opacity-60" : ""
                                            }`}
                                    >
                                        <div className="vstack gap-1">
                                            <div className="hstack justify-between items-start">
                                                <h4 className="h5 m-0">{product.name}</h4>
                                                {product.comingSoon && (
                                                    <span className="fs-8 px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded-pill fw-medium">
                                                        Coming Soon
                                                    </span>
                                                )}
                                            </div>
                                            <p className="fs-6 mt-1 opacity-70">{product.description}</p>
                                        </div>
                                        <div className="hstack gap-1 items-end">
                                            <span className="h4 m-0 text-primary">{product.price}</span>
                                        </div>
                                        <ul className="nav-y gap-2 fs-6">
                                            {product.features.map((feature, fIndex) => (
                                                <li key={fIndex} className="hstack gap-1">
                                                    <i className="icon icon-1 unicon-checkmark text-primary" />
                                                    <span>{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                        {product.comingSoon ? (
                                            <span className="btn btn-md w-100 btn-secondary text-dark opacity-50 cursor-not-allowed">
                                                Coming Soon
                                            </span>
                                        ) : (
                                            <Link
                                                href={product.href}
                                                className="btn btn-md w-100 btn-primary text-white"
                                            >
                                                Learn More
                                            </Link>
                                        )}
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
