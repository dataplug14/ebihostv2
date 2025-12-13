import Header2 from "@/components/headers/Header2";
import Footer2 from "@/components/footers/Footer2";
import BusinessEmailHero from "@/components/hosting/BusinessEmailHero";
import BusinessEmailPricing from "@/components/hosting/BusinessEmailPricing";
import BusinessEmailFeatures from "@/components/hosting/BusinessEmailFeatures";
import Faq from "@/components/homes/home-2/Faq";
import Cta from "@/components/innerpages/features/Cta";

export const metadata = {
    title: "Professional Business Email || Ebihost - Custom Email for Your Domain",
    description:
        "Set up your custom email address in minutes and start building trust with every message. Perfect for businesses looking to look professional.",
};

export default function BusinessEmailPage() {
    return (
        <>
            <div className="page-wrapper uni-body panel bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200 overflow-x-hidden bp-xs bp-sm bp-md bp-lg bp-xl bp-xxl dom-ready">
                <Header2 />
                <div id="wrapper" className="wrap">
                    <BusinessEmailHero />
                    <BusinessEmailPricing />
                    <BusinessEmailFeatures />
                    <Faq />
                    <Cta />
                </div>
                <Footer2 />
            </div>
        </>
    );
}
