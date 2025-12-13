import Header2 from "@/components/headers/Header2";
import Footer2 from "@/components/footers/Footer2";
import Breadcumb from "@/components/otherPages/Breadcumb";
import Refund from "@/components/otherPages/Refund";

export const metadata = {
    title: "Refund Policy || Ebihost - Web Hosting Solutions",
    description:
        "Learn about Ebihost's 30-day money-back guarantee and refund policy for our web hosting services.",
};

export default function RefundPage() {
    return (
        <>
            <div className="page-wrapper uni-body panel bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200 overflow-x-hidden bp-xs bp-sm bp-md bp-lg bp-xl bp-xxl dom-ready">
                <Header2 />
                <div id="wrapper" className="wrap">
                    <Breadcumb />
                    <Refund />
                </div>
                <Footer2 />
            </div>
        </>
    );
}
