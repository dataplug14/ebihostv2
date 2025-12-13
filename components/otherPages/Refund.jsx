import React from "react";

export default function Refund() {
    return (
        <div className="section py-4 lg:py-6 xl:py-8">
            <div className="container max-w-lg">
                <div className="page-wrap panel vstack gap-4 lg:gap-6 xl:gap-8">
                    <header className="page-header panel vstack justify-center gap-2 lg:gap-4 text-center">
                        <div className="panel">
                            <h1 className="h3 lg:h1 m-0">Refund Policy</h1>
                        </div>
                    </header>
                    <div className="page-content panel fs-6 md:fs-5">
                        <p>
                            At Ebihost, we want you to be completely satisfied with our services.
                            If you're not happy with your purchase, we offer a straightforward
                            refund policy as outlined below.
                        </p>

                        <h3 className="h4 md:h3 mt-3 lg:mt-6 mb-2">30-Day Money-Back Guarantee</h3>
                        <p>
                            All new shared hosting, WordPress hosting, and reseller hosting accounts
                            are eligible for a full refund within 30 days of the initial purchase.
                            This allows you to try our services risk-free.
                        </p>

                        <h3 className="h4 md:h3 mt-3 lg:mt-6 mb-2">Eligible Services</h3>
                        <p>
                            The following services are covered by our 30-day money-back guarantee:
                        </p>
                        <ul className="list list-bullets">
                            <li>Shared Hosting (all plans)</li>
                            <li>WordPress Hosting (all plans)</li>
                            <li>Reseller Hosting (all plans)</li>
                            <li>Business Email Hosting (first 30 days)</li>
                        </ul>

                        <h3 className="h4 md:h3 mt-3 lg:mt-6 mb-2">Non-Refundable Services</h3>
                        <p>
                            The following services are not eligible for refunds:
                        </p>
                        <ul className="list list-bullets">
                            <li>Domain registrations and renewals</li>
                            <li>SSL Certificates</li>
                            <li>Add-on services (SiteLock, CodeGuard, etc.)</li>
                            <li>Setup fees (if applicable)</li>
                            <li>Services cancelled after the 30-day period</li>
                        </ul>

                        <h3 className="h4 md:h3 mt-3 lg:mt-6 mb-2">How to Request a Refund</h3>
                        <p>
                            To request a refund, please follow these steps:
                        </p>
                        <ul className="list list-bullets">
                            <li>Log in to your client area at my.ebihost.com</li>
                            <li>Open a support ticket with the subject "Refund Request"</li>
                            <li>Include your account details and reason for the refund</li>
                            <li>Our team will process your request within 3-5 business days</li>
                        </ul>

                        <h3 className="h4 md:h3 mt-3 lg:mt-6 mb-2">Refund Processing</h3>
                        <p>
                            Once your refund is approved, the funds will be returned to your original
                            payment method within 5-10 business days, depending on your bank or
                            payment provider. For cryptocurrency payments, refunds will be issued
                            in the equivalent value at the current exchange rate.
                        </p>

                        <h3 className="h4 md:h3 mt-3 lg:mt-6 mb-2">Renewal Refunds</h3>
                        <p>
                            Renewal payments are generally non-refundable. However, if you request
                            a cancellation within 48 hours of an automatic renewal, we may issue
                            a refund at our discretion. To avoid automatic renewals, please disable
                            auto-renewal in your client area before the renewal date.
                        </p>

                        <h3 className="h4 md:h3 mt-3 lg:mt-6 mb-2">Service Termination</h3>
                        <p>
                            Please note that accounts terminated for Terms of Service violations
                            are not eligible for any refund. This includes but is not limited to
                            spamming, hosting illegal content, or any form of abuse.
                        </p>

                        <h3 className="h4 md:h3 mt-3 lg:mt-6 mb-2">Contact Us</h3>
                        <p>
                            If you have any questions about our refund policy, please contact our
                            support team through your client area or visit our Contact page.
                        </p>
                    </div>
                    <div className="page-footer panel">
                        <p className="fs-7 opacity-60 m-0">Last updated: December {new Date().getFullYear()}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
