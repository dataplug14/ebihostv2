import Header2 from "@/components/headers/Header2";
import Footer2 from "@/components/footers/Footer2";
import WordPressHostingHero from "@/components/hosting/WordPressHostingHero";
import WordPressHostingPricing from "@/components/hosting/WordPressHostingPricing";
import WordPressHostingFeatures from "@/components/hosting/WordPressHostingFeatures";
import Faq from "@/components/homes/home-2/Faq";

export const metadata = {
    title: "WordPress Hosting || Ebihost - Optimized Hosting for WordPress",
    description:
        "Host your WordPress site with Ebihost for unmatched speed, security, and 24/7 support. Get started today and enjoy optimized performance.",
};

export default function WordPressHostingPage() {
    return (
        <>
            <div className="page-wrapper uni-body panel bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200 overflow-x-hidden bp-xs bp-sm bp-md bp-lg bp-xl bp-xxl dom-ready">
                <Header2 />
                <div id="wrapper" className="wrap">
                    <WordPressHostingHero />
                    <WordPressHostingPricing />
                    <WordPressHostingFeatures />
                    <Faq />
                </div>
                <Footer2 />
            </div>
        </>
    );
}
