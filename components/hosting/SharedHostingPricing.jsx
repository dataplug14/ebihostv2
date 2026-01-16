import Link from "next/link";

const pricingPlans = [
    {
        name: "Solo",
        subtitle: "(1GB) Linux Shared Hosting",
        description: "Perfect for hosting a single website with essential features.",
        price: "₦7,000",
        period: "/year",
        link: "https://my.ebihost.com/index.php?rp=/store/cloud-web-hosting/solo",
        features: [
            "1GB SSD Storage",
            "10GB Bandwidth",
            "Free .name.ng Domain",
            "1 Databases",
            "2 Email Accounts",
            "Free Daily Backups",
            "Free Website Builder",
            "cPanel Control Panel",
            "CageFS Hack Protection",
            "Free AutoSSL Certificate",
            "WordPress, Joomla, Drupal",
            "Softaculous Apps Installer",
            "Node.js Application Hosting",
            "Latest PHP, Perl, MySQL",
            "Host One Website",
        ],
        extras: [
            "99.9% Uptime Guarantee",
            "24/7 Customer Support",
        ],
        popular: false,
    },
    {
        name: "Starter",
        subtitle: "(5GB) Linux Web Hosting",
        description: "Great for personal projects or small sites that don't need a lot of resources.",
        price: "₦750",
        period: "/month",
        link: "https://my.ebihost.com/index.php?rp=/store/cloud-web-hosting/starter",
        features: [
            "5GB SSD Storage",
            "50GB Premium Bandwidth",
            "Free Business Emails",
            "Free SSL Certificate",
            "WordPress, Joomla, Drupal",
            "Softaculous Apps Installer",
            "Node.js Application Hosting",
            "Unlimited Email Accounts",
            "Latest PHP, Perl, MySQL",
            "Free Website Builder",
            "cPanel Control Panel",
            "Free Daily Backups",
            "1 Addon Domains",
        ],
        extras: [
            "30-Day Money-Back Guarantee",
            "Free Website Migration",
            "Instant Setup & Activation",
            "99.9% Uptime Guarantee",
            "24/7 Customer Support",
        ],
        popular: false,
    },
    {
        name: "Standard",
        subtitle: "(10GB) Linux Web Hosting",
        description: "Perfect for growing websites that need extra speed and reliability.",
        price: "₦1,250",
        period: "/month",
        link: "https://my.ebihost.com/index.php?rp=/store/cloud-web-hosting/standard",
        features: [
            "10GB SSD Storage",
            "100GB Premium Bandwidth",
            "Free Business Emails",
            "Free Auto SSL Certificate",
            "WordPress, Joomla, Drupal",
            "Softaculous Apps Installer",
            "Node.js Application Hosting",
            "Unlimited Email Accounts",
            "Latest PHP, Perl, MySQL",
            "Free Website Builder",
            "cPanel Control Panel",
            "Free Daily Backups",
            "2 Addon Domains",
        ],
        extras: [
            "30-Day Money-Back Guarantee",
            "Free Website Migration",
            "Instant Setup & Activation",
            "99.9% Uptime Guarantee",
            "24/7 Customer Support",
        ],
        popular: true,
    },
    {
        name: "Premium",
        subtitle: "(15GB) Linux Web Hosting",
        description: "Built for businesses that need top performance and reliability.",
        price: "₦1,550",
        period: "/month",
        link: "https://my.ebihost.com/index.php?rp=/store/cloud-web-hosting/premium",
        features: [
            "15GB SSD Storage",
            "200GB Monthly Bandwidth",
            "Free Business Emails",
            "Free Auto SSL Certificate",
            "WordPress, Joomla, Drupal",
            "Softaculous Apps Installer",
            "Node.js Application Hosting",
            "Unlimited Email Accounts",
            "Latest PHP, Perl, MySQL",
            "Free Website Builder",
            "cPanel Control Panel",
            "Free Daily Backups",
            "5 Addon Domains",
        ],
        extras: [
            "30-Day Money-Back Guarantee",
            "Free Website Migration",
            "Instant Setup & Activation",
            "99.9% Uptime Guarantee",
            "24/7 Customer Support",
        ],
        popular: false,
    },
    {
        name: "Business",
        subtitle: "(20GB) Linux Web Hosting",
        description: "Powerful hosting for growing businesses with high traffic demands.",
        price: "₦1,800",
        period: "/month",
        link: "https://my.ebihost.com/index.php?rp=/store/cloud-web-hosting/business",
        features: [
            "20GB SSD Storage",
            "400GB Monthly Bandwidth",
            "Free Business Emails",
            "Free Auto SSL Certificate",
            "WordPress, Joomla, Drupal",
            "Softaculous Apps Installer",
            "Node.js Application Hosting",
            "Unlimited Email Accounts",
            "Latest PHP, Perl, MySQL",
            "Free Website Builder",
            "cPanel Control Panel",
            "Free Daily Backups",
            "10 Addon Domains",
        ],
        extras: [
            "30-Day Money-Back Guarantee",
            "Free Website Migration",
            "Instant Setup & Activation",
            "99.9% Uptime Guarantee",
            "24/7 Customer Support",
        ],
        popular: false,
    },
    {
        name: "Advanced",
        subtitle: "(25GB) Linux Web Hosting",
        description: "Maximum resources for enterprise-level websites and applications.",
        price: "₦2,300",
        period: "/month",
        link: "https://my.ebihost.com/index.php?rp=/store/cloud-web-hosting/advanced",
        features: [
            "25GB SSD Storage",
            "800GB Monthly Bandwidth",
            "Free Business Emails",
            "Free Auto SSL Certificate",
            "WordPress, Joomla, Drupal",
            "Softaculous Apps Installer",
            "Node.js Application Hosting",
            "Unlimited Email Accounts",
            "Latest PHP, Perl, MySQL",
            "Free Website Builder",
            "cPanel Control Panel",
            "Free Daily Backups",
            "20 Addon Domains",
        ],
        extras: [
            "30-Day Money-Back Guarantee",
            "Free Website Migration",
            "Instant Setup & Activation",
            "99.9% Uptime Guarantee",
            "24/7 Customer Support",
        ],
        popular: false,
    },
];

export default function SharedHostingPricing() {
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
                                Hosting That Works, So You Don't Have To.
                            </h2>
                            <p className="fs-6 text-dark dark:text-white text-opacity-70">
                                Focus on your business while we ensure uptime, speed, security,
                                and a seamless hosting experience.
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
