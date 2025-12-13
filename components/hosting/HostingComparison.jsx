import Link from "next/link";

const plans = [
    {
        feature: "Best For",
        shared: "Personal sites",
        wordpress: "WordPress sites",
        reseller: "Hosting business",
    },
    {
        feature: "Starting Price",
        shared: "₦1,499/mo",
        wordpress: "₦2,098/mo",
        reseller: "₦10,000/mo",
    },
    {
        feature: "Storage",
        shared: "15GB - 45GB NVMe",
        wordpress: "15GB - 45GB NVMe",
        reseller: "100GB - Unmetered",
    },
    {
        feature: "Bandwidth",
        shared: "Unmetered",
        wordpress: "Unmetered",
        reseller: "Unmetered",
    },
    {
        feature: "Free Domain",
        shared: "✓",
        wordpress: "✓",
        reseller: "—",
    },
    {
        feature: "Free SSL",
        shared: "✓",
        wordpress: "✓",
        reseller: "✓",
    },
    {
        feature: "cPanel",
        shared: "✓",
        wordpress: "✓",
        reseller: "WHM + cPanel",
    },
    {
        feature: "1-Click WordPress",
        shared: "✓",
        wordpress: "✓",
        reseller: "✓",
    },
    {
        feature: "Free WHMCS",
        shared: "—",
        wordpress: "—",
        reseller: "✓",
    },
    {
        feature: "24/7 Support",
        shared: "✓",
        wordpress: "✓",
        reseller: "✓",
    },
];

export default function HostingComparison() {
    return (
        <div
            id="compare"
            className="section panel overflow-hidden py-6 lg:py-9 bg-secondary dark:bg-gray-800"
        >
            <div className="container max-w-xl">
                <div className="section-inner panel">
                    <div
                        className="panel vstack gap-4 sm:gap-6 lg:gap-8"
                        data-anime="onview: -100; targets: > *; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});"
                    >
                        <div className="heading vstack items-center gap-2 text-center max-w-650px mx-auto">
                            <h2 className="h3 lg:h2 m-0">Compare Hosting Plans.</h2>
                            <p className="fs-6 text-dark dark:text-white text-opacity-70">
                                Find the right hosting solution for your needs.
                            </p>
                        </div>
                        <div className="panel overflow-auto">
                            <table className="table table-bordered bg-white dark:bg-gray-900 rounded-2 overflow-hidden">
                                <thead>
                                    <tr className="bg-primary text-white">
                                        <th className="p-3 fs-6 fw-medium">Feature</th>
                                        <th className="p-3 fs-6 fw-medium text-center">Shared Hosting</th>
                                        <th className="p-3 fs-6 fw-medium text-center">WordPress Hosting</th>
                                        <th className="p-3 fs-6 fw-medium text-center">Reseller Hosting</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {plans.map((plan, index) => (
                                        <tr key={index} className={index % 2 === 0 ? "bg-secondary dark:bg-gray-800" : ""}>
                                            <td className="p-3 fs-6 fw-medium">{plan.feature}</td>
                                            <td className="p-3 fs-6 text-center">{plan.shared}</td>
                                            <td className="p-3 fs-6 text-center">{plan.wordpress}</td>
                                            <td className="p-3 fs-6 text-center">{plan.reseller}</td>
                                        </tr>
                                    ))}
                                </tbody>
                                <tfoot>
                                    <tr>
                                        <td className="p-3"></td>
                                        <td className="p-3 text-center">
                                            <Link href="/hosting/shared" className="btn btn-sm btn-primary text-white text-nowrap">
                                                View Plans
                                            </Link>
                                        </td>
                                        <td className="p-3 text-center">
                                            <Link href="/hosting/wordpress" className="btn btn-sm btn-primary text-white text-nowrap">
                                                View Plans
                                            </Link>
                                        </td>
                                        <td className="p-3 text-center">
                                            <Link href="/hosting/reseller" className="btn btn-sm btn-primary text-white text-nowrap">
                                                View Plans
                                            </Link>
                                        </td>
                                    </tr>
                                </tfoot>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
