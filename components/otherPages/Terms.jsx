import React from "react";

export default function Terms() {
  return (
    <div className="section py-4 lg:py-6 xl:py-8">
      <div className="container max-w-lg">
        <div className="page-wrap panel vstack gap-4 lg:gap-6 xl:gap-8">
          <header className="page-header panel vstack justify-center gap-2 lg:gap-4 text-center">
            <div className="panel">
              <h1 className="h3 lg:h1 m-0">Terms of Service</h1>
            </div>
          </header>
          <div className="page-content panel fs-6 md:fs-5">
            <p>
              Welcome to Ebihost. By accessing or using our web hosting services,
              you agree to be bound by these Terms of Service. Please read them carefully
              before using our services.
            </p>

            <h3 className="h4 md:h3 mt-3 lg:mt-6 mb-2">1. Acceptance of Terms</h3>
            <p>
              By creating an account, making a purchase, or using any of our services,
              you acknowledge that you have read, understood, and agree to be bound by
              these Terms of Service and our Privacy Policy.
            </p>

            <h3 className="h4 md:h3 mt-3 lg:mt-6 mb-2">2. Service Description</h3>
            <p>
              Ebihost provides web hosting services including but not limited to shared hosting,
              WordPress hosting, reseller hosting, business email, domain registration,
              SSL certificates, and related services. We reserve the right to modify,
              suspend, or discontinue any service at any time.
            </p>

            <h3 className="h4 md:h3 mt-3 lg:mt-6 mb-2">3. Account Responsibilities</h3>
            <p>
              You are responsible for maintaining the confidentiality of your account credentials
              and for all activities that occur under your account. You agree to notify us
              immediately of any unauthorized use of your account.
            </p>

            <h3 className="h4 md:h3 mt-3 lg:mt-6 mb-2">4. Acceptable Use Policy</h3>
            <p>
              You agree not to use our services for any unlawful purpose or in any way that
              could damage, disable, or impair our servers or networks. Prohibited activities
              include but are not limited to: spamming, distributing malware, hosting illegal
              content, and infringing on intellectual property rights.
            </p>

            <h3 className="h4 md:h3 mt-3 lg:mt-6 mb-2">5. Payment Terms</h3>
            <p>
              All fees are due upon purchase. We accept various payment methods as displayed
              during checkout. Subscription services will automatically renew unless cancelled
              before the renewal date. Refunds are subject to our 30-day money-back guarantee
              policy for eligible services.
            </p>

            <h3 className="h4 md:h3 mt-3 lg:mt-6 mb-2">6. Service Level Agreement</h3>
            <p>
              We guarantee 99.9% uptime for our hosting services. In the event of service
              unavailability exceeding our SLA, eligible customers may request service credits
              as compensation.
            </p>

            <h3 className="h4 md:h3 mt-3 lg:mt-6 mb-2">7. Limitation of Liability</h3>
            <p>
              Ebihost shall not be liable for any indirect, incidental, special, consequential,
              or punitive damages arising from your use of our services. Our total liability
              shall not exceed the amount paid by you for the service in question.
            </p>

            <h3 className="h4 md:h3 mt-3 lg:mt-6 mb-2">8. Termination</h3>
            <p>
              We reserve the right to terminate or suspend your account at any time for
              violation of these terms or for any other reason at our sole discretion.
              Upon termination, your right to use our services will immediately cease.
            </p>

            <h3 className="h4 md:h3 mt-3 lg:mt-6 mb-2">9. Changes to Terms</h3>
            <p>
              We may update these Terms of Service from time to time. We will notify you
              of any material changes by posting the new terms on our website. Your continued
              use of our services after such changes constitutes acceptance of the new terms.
            </p>

            <h3 className="h4 md:h3 mt-3 lg:mt-6 mb-2">10. Contact Us</h3>
            <p>
              If you have any questions about these Terms of Service, please contact us
              through our support channels or visit our Contact page.
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
