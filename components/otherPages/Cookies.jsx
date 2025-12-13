import React from "react";

export default function Cookies() {
    return (
        <div className="section py-4 lg:py-6 xl:py-8">
            <div className="container max-w-lg">
                <div className="page-wrap panel vstack gap-4 lg:gap-6 xl:gap-8">
                    <header className="page-header panel vstack justify-center gap-2 lg:gap-4 text-center">
                        <div className="panel">
                            <h1 className="h3 lg:h1 m-0">Cookie Policy</h1>
                        </div>
                    </header>
                    <div className="page-content panel fs-6 md:fs-5">
                        <p>
                            This Cookie Policy explains how Ebihost uses cookies and similar
                            technologies when you visit our website and use our services.
                        </p>

                        <h3 className="h4 md:h3 mt-3 lg:mt-6 mb-2">What Are Cookies?</h3>
                        <p>
                            Cookies are small text files that are stored on your device when you
                            visit a website. They help websites remember your preferences and
                            improve your browsing experience.
                        </p>

                        <h3 className="h4 md:h3 mt-3 lg:mt-6 mb-2">Types of Cookies We Use</h3>

                        <h4 className="h5 mt-3 mb-2">Essential Cookies</h4>
                        <p>
                            These cookies are necessary for the website to function properly.
                            They enable core features like security, session management, and
                            account authentication. You cannot opt out of these cookies.
                        </p>

                        <h4 className="h5 mt-3 mb-2">Performance Cookies</h4>
                        <p>
                            These cookies help us understand how visitors interact with our website
                            by collecting anonymous information. This helps us improve our website
                            and services.
                        </p>

                        <h4 className="h5 mt-3 mb-2">Functional Cookies</h4>
                        <p>
                            These cookies remember your preferences and settings to provide a more
                            personalized experience, such as your language preferences and display settings.
                        </p>

                        <h4 className="h5 mt-3 mb-2">Marketing Cookies</h4>
                        <p>
                            These cookies may be set by our advertising partners to build a profile
                            of your interests and show you relevant ads on other sites.
                        </p>

                        <h3 className="h4 md:h3 mt-3 lg:mt-6 mb-2">Managing Cookies</h3>
                        <p>
                            You can control and manage cookies in several ways:
                        </p>
                        <ul className="list list-bullets">
                            <li>
                                <strong>Browser Settings:</strong> Most browsers allow you to refuse
                                or accept cookies, delete existing cookies, and set preferences for
                                certain websites.
                            </li>
                            <li>
                                <strong>Opt-Out Links:</strong> Some analytics and advertising services
                                provide opt-out mechanisms directly.
                            </li>
                        </ul>
                        <p className="mt-2">
                            Please note that disabling certain cookies may affect the functionality
                            of our website and services.
                        </p>

                        <h3 className="h4 md:h3 mt-3 lg:mt-6 mb-2">Third-Party Cookies</h3>
                        <p>
                            We may use third-party services that set their own cookies, including:
                        </p>
                        <ul className="list list-bullets">
                            <li>Analytics providers (e.g., Google Analytics)</li>
                            <li>Payment processors</li>
                            <li>Customer support tools</li>
                        </ul>

                        <h3 className="h4 md:h3 mt-3 lg:mt-6 mb-2">Updates to This Policy</h3>
                        <p>
                            We may update this Cookie Policy from time to time to reflect changes
                            in our practices or for legal, operational, or regulatory reasons.
                        </p>

                        <h3 className="h4 md:h3 mt-3 lg:mt-6 mb-2">Contact Us</h3>
                        <p>
                            If you have any questions about our use of cookies, please contact us
                            through our support channels.
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
