import Link from "next/link";

const pricingPlans = [
    {
        name: "WP Starter",
        subtitle: "(5GB) WordPress Hosting",
        description: "Ideal for small sites, offering fast speeds, reliable uptime, and basic security.",
        price: "₦12,000",
        period: "/year",
        link: "https://my.ebihost.com/index.php?rp=/store/wordpress-hosting/wp-starter",
        features: [
            "5GB SSD Storage",
            "125GB Premium Bandwidth",
            "Phpmyadmin Tool",
            "1-Click WordPress Install",
            "Free SSL Certificate",
            "Unlimited Email Accounts",
            "Free Website Builder",
            "cPanel Control Panel",
            "Free Daily Backups",
            "Advanced Security (Imunify360 + DDoS Protection)",
        ],
        extras: [
            "30-Day Money-Back Guarantee",
            "Free Website Migration",
            "Instant Setup & Activation",
            "Automatic Updates",
            "99.9% Uptime Guarantee",
            "24/7 Customer Support",
        ],
        popular: false,
    },
    {
        name: "WP Standard",
        subtitle: "(10GB) WordPress Hosting",
        description: "Great for growing websites, with enhanced performance and extra features.",
        price: "₦15,000",
        period: "/year",
        link: "https://my.ebihost.com/index.php?rp=/store/wordpress-hosting/wp-standard",
        features: [
            "10GB SSD Storage",
            "250GB Premium Bandwidth",
            "Phpmyadmin Tool",
            "1-Click WordPress Install",
            "Free SSL Certificate",
            "Unlimited Email Accounts",
            "Free Website Builder",
            "cPanel Control Panel",
            "Free Daily Backups",
            "Advanced Security (Imunify360 + DDoS Protection)",
        ],
        extras: [
            "30-Day Money-Back Guarantee",
            "Free Website Migration",
            "Instant Setup & Activation",
            "Automatic Updates",
            "99.9% Uptime Guarantee",
            "24/7 Customer Support",
        ],
        popular: true,
    },
    {
        name: "WP Premium",
        subtitle: "(20GB) WordPress Hosting",
        description: "Perfect for high-traffic sites, providing premium support, advanced security, and optimal speed.",
        price: "₦51,500",
        period: "/2 years",
        link: "https://my.ebihost.com/index.php?rp=/store/wordpress-hosting/wp-premium",
        features: [
            "20GB SSD Storage",
            "500GB Premium Bandwidth",
            "Phpmyadmin Tool",
            "1-Click WordPress Install",
            "Free SSL Certificate",
            "Unlimited Email Accounts",
            "Free Website Builder",
            "cPanel Control Panel",
            "Free Daily Backups",
            "Advanced Security (Imunify360 + DDoS Protection)",
        ],
        extras: [
            "30-Day Money-Back Guarantee",
            "Free Website Migration",
            "Instant Setup & Activation",
            "Automatic Updates",
            "99.9% Uptime Guarantee",
            "24/7 Customer Support",
        ],
        popular: false,
    },
    {
        name: "WP Business",
        subtitle: "(30GB) WordPress Hosting",
        description: "Built for businesses that need top performance and maximum resources.",
        price: "₦43,500",
        period: "/year",
        link: "https://my.ebihost.com/index.php?rp=/store/wordpress-hosting/wp-business",
        features: [
            "30GB SSD Storage",
            "750GB Premium Bandwidth",
            "Phpmyadmin Tool",
            "1-Click WordPress Install",
            "Free SSL Certificate",
            "Unlimited Email Accounts",
            "Free Website Builder",
            "cPanel Control Panel",
            "Free Daily Backups",
            "Advanced Security (Imunify360 + DDoS Protection)",
        ],
        extras: [
            "30-Day Money-Back Guarantee",
            "Free Website Migration",
            "Instant Setup & Activation",
            "Automatic Updates",
            "99.9% Uptime Guarantee",
            "24/7 Customer Support",
        ],
        popular: false,
    },
];

export default function WordPressHostingPricing() {
    return (
        <div id="pricing" className="section panel overflow-hidden py-6 lg:py-9">
            <div className="container max-w-xl">
                <div className="section-inner panel">
                    <div
                        className="panel vstack gap-4 sm:gap-6 lg:gap-8"
                        data-anime="onview: -100; targets: > *; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});"
                    >
                        <div className="heading vstack items-center gap-2 text-center max-w-650px mx-auto">
                            <h2 className="h3 lg:h2 m-0">
                                Your WordPress Site, Powered for Success.
                            </h2>
                            <p className="fs-6 text-dark dark:text-white text-opacity-70">
                                Leave the heavy lifting to us — fast speeds, top security, and reliable uptime, all in one.
                            </p>
                        </div>
                        <div className="row child-cols-12 md:child-cols-6 lg:child-cols-3 g-3 col-match">
                            {pricingPlans.map((plan, index) => (
                                <div key={index}>
                                    <div
                                        className={`panel vstack gap-4 p-4 lg:p-5 rounded-2 h-100 ${plan.popular
                                            ? "bg-primary text-white"
                                            : "bg-secondary dark:bg-gray-800 dark:text-white"
                                            }`}
                                    >
                                        <div className="vstack gap-1">
                                            <div className="hstack justify-between items-start">
                                                <h4 className="h5 m-0">{plan.name}</h4>
                                                {plan.popular && (
                                                    <span className="fs-8 px-2 py-1 bg-white text-primary rounded-pill fw-medium">
                                                        Popular
                                                    </span>
                                                )}
                                            </div>
                                            <span className={`fs-7 ${plan.popular ? "text-white text-opacity-70" : "text-gray-600 dark:text-gray-400"}`}>
                                                {plan.subtitle}
                                            </span>
                                            <p className={`fs-6 mt-1 ${plan.popular ? "text-white text-opacity-80" : "text-gray-700 dark:text-gray-300"}`}>
                                                {plan.description}
                                            </p>
                                        </div>
                                        <div className="hstack gap-1 items-end">
                                            <span className="h3 m-0">{plan.price}</span>
                                            <span className={`fs-6 ${plan.popular ? "text-white text-opacity-70" : "text-gray-600 dark:text-gray-400"}`}>
                                                {plan.period}
                                            </span>
                                        </div>
                                        <Link
                                            href={plan.link}
                                            target="_blank"
                                            className={`btn btn-md w-100 ${plan.popular ? "bg-white text-primary hover:bg-gray-100" : "btn-primary text-white"
                                                }`}
                                        >
                                            Order Now
                                        </Link>
                                        <ul className="nav-y gap-2 fs-6">
                                            {plan.features.map((feature, fIndex) => (
                                                <li key={fIndex} className="hstack gap-1">
                                                    <i className={`icon icon-1 unicon-checkmark ${plan.popular ? "text-white" : "text-primary"}`} />
                                                    <span className={plan.popular ? "" : "dark:text-gray-200"}>{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                        <hr className={`m-0 ${plan.popular ? "border-white border-opacity-20" : "dark:border-gray-700"}`} />
                                        <ul className="nav-y gap-1 fs-7">
                                            {plan.extras.map((extra, eIndex) => (
                                                <li key={eIndex} className={`${plan.popular ? "text-white text-opacity-70" : "text-gray-600 dark:text-gray-400"}`}>
                                                    {extra}
                                                </li>
                                            ))}
                                        </ul>
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
