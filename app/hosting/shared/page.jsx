import Header2 from "@/components/headers/Header2";
import Footer2 from "@/components/footers/Footer2";
import SharedHostingHero from "@/components/hosting/SharedHostingHero";
import SharedHostingPricing from "@/components/hosting/SharedHostingPricing";
import SharedHostingFeatures from "@/components/hosting/SharedHostingFeatures";
import Faq from "@/components/homes/home-2/Faq";
import Cta from "@/components/innerpages/features/Cta";

export const metadata = {
    title: "Shared Hosting || Ebihost - Fast, Secure & Affordable Web Hosting",
    description:
        "Get fast, secure, and affordable web hosting with Ebihost. Enjoy 99.9% uptime, free domain, unmetered bandwidth, free SSL, and 24/7 support.",
};

export default function SharedHostingPage() {
    return (
        <>
            <div className="page-wrapper uni-body panel bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200 overflow-x-hidden bp-xs bp-sm bp-md bp-lg bp-xl bp-xxl dom-ready">
                <Header2 />
                <div id="wrapper" className="wrap">
                    <SharedHostingHero />
                    <SharedHostingPricing />
                    <SharedHostingFeatures />
                    <Faq />
                    <Cta />
                </div>
                <Footer2 />
            </div>
        </>
    );
}
