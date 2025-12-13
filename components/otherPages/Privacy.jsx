import React from "react";

export default function Privacy() {
  return (
    <div className="section py-4 lg:py-6 xl:py-8">
      <div className="container max-w-lg">
        <div className="page-wrap panel vstack gap-4 lg:gap-6 xl:gap-8">
          <header className="page-header panel vstack justify-center gap-2 lg:gap-4 text-center">
            <div className="panel">
              <h1 className="h3 lg:h1 m-0">Privacy Policy</h1>
            </div>
          </header>
          <div className="page-content panel fs-6 md:fs-5">
            <p>
              At Ebihost, we are committed to protecting your privacy. This Privacy Policy
              explains how we collect, use, disclose, and safeguard your information when
              you use our web hosting services.
            </p>

            <h3 className="h4 md:h3 mt-3 lg:mt-6 mb-2">Information We Collect</h3>
            <p>
              We collect information that you provide directly to us, including:
            </p>
            <ul className="list list-bullets">
              <li>Name, email address, and contact information</li>
              <li>Billing and payment information</li>
              <li>Account credentials</li>
              <li>Domain registration details</li>
              <li>Support ticket communications</li>
            </ul>

            <h3 className="h4 md:h3 mt-3 lg:mt-6 mb-2">How We Use Your Information</h3>
            <p>
              We use the information we collect to:
            </p>
            <ul className="list list-bullets">
              <li>Provide, maintain, and improve our services</li>
              <li>Process transactions and send related information</li>
              <li>Send technical notices, updates, and support messages</li>
              <li>Respond to your comments, questions, and requests</li>
              <li>Monitor and analyze usage trends</li>
              <li>Detect, investigate, and prevent fraudulent transactions</li>
            </ul>

            <h3 className="h4 md:h3 mt-3 lg:mt-6 mb-2">Information Sharing</h3>
            <p>
              We do not sell, trade, or rent your personal information to third parties.
              We may share your information only in the following circumstances:
            </p>
            <ul className="list list-bullets">
              <li>With service providers who assist in operating our services</li>
              <li>To comply with legal obligations</li>
              <li>To protect our rights, privacy, safety, or property</li>
              <li>In connection with a merger, acquisition, or sale of assets</li>
            </ul>

            <h3 className="h4 md:h3 mt-3 lg:mt-6 mb-2">Data Security</h3>
            <p>
              We implement appropriate technical and organizational measures to protect
              your personal information against unauthorized access, alteration, disclosure,
              or destruction. This includes encryption, firewalls, and secure server facilities.
            </p>

            <h3 className="h4 md:h3 mt-3 lg:mt-6 mb-2">Data Retention</h3>
            <p>
              We retain your personal information for as long as necessary to provide our
              services and fulfill the purposes outlined in this policy, unless a longer
              retention period is required by law.
            </p>

            <h3 className="h4 md:h3 mt-3 lg:mt-6 mb-2">Your Rights</h3>
            <p>
              You have the right to:
            </p>
            <ul className="list list-bullets">
              <li>Access and receive a copy of your personal data</li>
              <li>Rectify or update your personal information</li>
              <li>Request deletion of your personal data</li>
              <li>Object to or restrict processing of your data</li>
              <li>Withdraw consent at any time</li>
            </ul>

            <h3 className="h4 md:h3 mt-3 lg:mt-6 mb-2">Changes to This Policy</h3>
            <p>
              We may update this Privacy Policy from time to time. We will notify you
              of any changes by posting the new policy on this page and updating the
              "Last updated" date.
            </p>

            <h3 className="h4 md:h3 mt-3 lg:mt-6 mb-2">Contact Us</h3>
            <p>
              If you have any questions about this Privacy Policy or our data practices,
              please contact us through our support channels.
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
