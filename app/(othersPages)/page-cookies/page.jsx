import Header2 from "@/components/headers/Header2";
import Footer2 from "@/components/footers/Footer2";
import Breadcumb from "@/components/otherPages/Breadcumb";
import Cookies from "@/components/otherPages/Cookies";

export const metadata = {
    title: "Cookie Policy || Ebihost - Web Hosting Solutions",
    description:
        "Learn about how Ebihost uses cookies and similar technologies on our website.",
};

export default function CookiesPage() {
    return (
        <>
            <div className="page-wrapper uni-body panel bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200 overflow-x-hidden bp-xs bp-sm bp-md bp-lg bp-xl bp-xxl dom-ready">
                <Header2 />
                <div id="wrapper" className="wrap">
                    <Breadcumb />
                    <Cookies />
                </div>
                <Footer2 />
            </div>
        </>
    );
}
