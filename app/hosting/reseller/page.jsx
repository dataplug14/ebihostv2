import Header2 from "@/components/headers/Header2";
import Footer2 from "@/components/footers/Footer2";
import ResellerHostingHero from "@/components/hosting/ResellerHostingHero";
import ResellerHostingPricing from "@/components/hosting/ResellerHostingPricing";
import ResellerHostingFeatures from "@/components/hosting/ResellerHostingFeatures";
import Faq from "@/components/homes/home-2/Faq";
import Cta from "@/components/innerpages/features/Cta";

export const metadata = {
    title: "Reseller Hosting || Ebihost - Start Your Own Hosting Business",
    description:
        "With Ebihost, reseller hosting is simple. Get your account online quickly with cPanel, free WHMCS, free SSL, and 24/7 support.",
};

export default function ResellerHostingPage() {
    return (
        <>
            <div className="page-wrapper uni-body panel bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200 overflow-x-hidden bp-xs bp-sm bp-md bp-lg bp-xl bp-xxl dom-ready">
                <Header2 />
                <div id="wrapper" className="wrap">
                    <ResellerHostingHero />
                    <ResellerHostingPricing />
                    <ResellerHostingFeatures />
                    <Faq />
                    <Cta />
                </div>
                <Footer2 />

            </div>
        </>
    );
}
