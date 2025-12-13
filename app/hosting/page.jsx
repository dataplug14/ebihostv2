import Header2 from "@/components/headers/Header2";
import Footer2 from "@/components/footers/Footer2";
import HostingHero from "@/components/hosting/HostingHero";
import HostingProducts from "@/components/hosting/HostingProducts";
import HostingComparison from "@/components/hosting/HostingComparison";
import Faq from "@/components/homes/home-2/Faq";
import Cta from "@/components/innerpages/features/Cta";

export const metadata = {
    title: "Web Hosting || Ebihost - Fast, Secure & Reliable Hosting Solutions",
    description:
        "Explore Ebihost's hosting solutions. Shared hosting, WordPress hosting, business email, reseller hosting, and cloud VPS. Find the perfect plan for your needs.",
};

export default function HostingPage() {
    return (
        <>
            <div className="page-wrapper uni-body panel bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200 overflow-x-hidden bp-xs bp-sm bp-md bp-lg bp-xl bp-xxl dom-ready">
                <Header2 />
                <div id="wrapper" className="wrap">
                    <HostingHero />
                    <HostingProducts />
                    <HostingComparison />
                    <Faq />
                    <Cta />
                </div>
                <Footer2 />
            </div>
        </>
    );
}
