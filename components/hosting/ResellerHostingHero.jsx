import Link from "next/link";

export default function ResellerHostingHero() {
    return (
        <div id="hero_header" className="hero-header section panel overflow-hidden">
            <div className="section-outer panel pt-9 lg:pt-10 pb-6 sm:pb-8 lg:pb-9">
                <div className="container max-w-xl">
                    <div
                        className="section-inner panel mt-2 sm:mt-4 lg:mt-0"
                        data-anime="targets: > *; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});"
                    >
                        <div className="vstack items-center gap-2 lg:gap-4 mb-4 sm:mb-6 lg:mb-8 max-w-750px mx-auto text-center">
                            <h1 className="h2 sm:h1 lg:display-6 xl:display-5 m-0">
                                Start Your Own Hosting Business.
                            </h1>
                            <p className="fs-6 sm:fs-5 text-dark dark:text-white text-opacity-70">
                                Launch your hosting business with our fully managed reseller
                                hosting. Free WHMCS, cPanel, SSL certificates, and 24/7 support
                                included. Start from ₦10,000/month.
                            </p>
                            <div className="hstack gap-2 mt-2">
                                <Link
                                    href="#pricing"
                                    className="btn btn-md btn-primary text-white"
                                >
                                    See Plans & Pricing
                                </Link>
                                <Link
                                    href="#features"
                                    className="btn btn-md btn-outline-primary dark:text-white dark:border-white"
                                >
                                    See Features
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
