import Link from "next/link";

const pricingPlans = [
    {
        name: "Entry",
        subtitle: "For beginners",
        description: "Start your hosting business with everything you need to get going.",
        price: "₦10,000",
        period: "/month",
        annualPrice: "₦100,000/year",
        link: "https://my.ebihost.com/index.php?rp=/store/reseller-hosting/entry",
        features: [
            "50 cPanel Accounts",
            "100GB SSD Storage",
            "Unmetered Bandwidth",
            "Free WHMCS License",
            "Free SSL Certificates",
            "Free cPanel Migrations",
            "White-label Hosting",
            "Private Nameservers",
        ],
        extras: [
            "24/7 Customer Support",
            "99.9% Uptime Guarantee",
        ],
        popular: false,
    },
    {
        name: "Performance",
        subtitle: "For growing businesses",
        description: "More resources and accounts for your expanding hosting business.",
        price: "₦18,000",
        period: "/month",
        annualPrice: "₦200,000/year",
        link: "https://my.ebihost.com/index.php?rp=/store/reseller-hosting/performance",
        features: [
            "100 cPanel Accounts",
            "300GB SSD Storage",
            "Unmetered Bandwidth",
            "Free WHMCS License",
            "Free SSL Certificates",
            "Free cPanel Migrations",
            "White-label Hosting",
            "Private Nameservers",
        ],
        extras: [
            "Priority 24/7 Support",
            "99.9% Uptime Guarantee",
        ],
        popular: true,
    },
    {
        name: "Business",
        subtitle: "For established businesses",
        description: "Unlimited resources for serious hosting providers.",
        price: "₦28,000",
        period: "/month",
        annualPrice: "₦320,000/year",
        link: "https://my.ebihost.com/index.php?rp=/store/reseller-hosting/business",
        features: [
            "Unlimited cPanel Accounts",
            "Unmetered SSD Storage",
            "Unmetered Bandwidth",
            "Free WHMCS License",
            "Free SSL Certificates",
            "Free cPanel Migrations",
            "White-label Hosting",
            "Private Nameservers",
        ],
        extras: [
            "Dedicated 24/7 Support",
            "99.9% Uptime Guarantee",
        ],
        popular: false,
    },
];

export default function ResellerHostingPricing() {
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
                                Fully Managed with 24/7 Support Included.
                            </h2>
                            <p className="fs-6 text-dark dark:text-white text-opacity-70">
                                Everything you need to start, manage and grow your hosting business.
                            </p>
                        </div>
                        <div className="row child-cols-12 md:child-cols-6 lg:child-cols-4 g-3 col-match">
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
                                        <div className="vstack gap-0">
                                            <div className="hstack gap-1 items-end">
                                                <span className="h3 m-0">{plan.price}</span>
                                                <span className={`fs-6 ${plan.popular ? "text-white text-opacity-70" : "text-gray-600 dark:text-gray-400"}`}>
                                                    {plan.period}
                                                </span>
                                            </div>
                                            <span className={`fs-7 ${plan.popular ? "text-white text-opacity-60" : "text-gray-500 dark:text-gray-400"}`}>
                                                or {plan.annualPrice}
                                            </span>
                                        </div>
                                        <Link
                                            href={plan.link}
                                            target="_blank"
                                            className={`btn btn-md w-100 ${plan.popular ? "bg-white text-primary hover:bg-gray-100" : "btn-primary text-white"
                                                }`}
                                        >
                                            Get Started
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
