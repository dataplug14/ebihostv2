"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { socialLinks } from "@/data/footer";

const footerColumns = [
  {
    title: "Hosting",
    links: [
      { href: "/hosting/shared", label: "Shared Hosting", external: false },
      { href: "/hosting/wordpress", label: "WordPress Hosting", external: false },
      { href: "/hosting/reseller", label: "Reseller Hosting", external: false },
      { href: "/hosting/email", label: "Business Email", external: false },
    ],
  },
  {
    title: "Domains",
    links: [
      { href: "https://my.ebihost.com/cart.php?a=add&domain=register", label: "Domain Registration", external: true },
      { href: "https://my.ebihost.com/cart.php?a=add&domain=transfer", label: "Transfer Your Domain", external: true },
      { href: "https://whois.ebihost.com", label: "Find Domain Owner (WHOIS)", external: true },
    ],
  },
  {
    title: "Web Security",
    links: [
      { href: "https://my.ebihost.com/store/ssl-certificates", label: "SSL Certificates", external: true },
      { href: "https://my.ebihost.com/store/sitelock", label: "Website Security", external: true },
      { href: "https://my.ebihost.com/store/codeguard", label: "Website Backup", external: true },
    ],
  },
  {
    title: "Resources",
    links: [
      { href: "https://my.ebihost.com/knowledgebase", label: "Knowledgebase", external: true },
      { href: "https://status.ebihost.com", label: "Network Status", external: true },
      { href: "/page-privacy", label: "Privacy Policy", external: false },
      { href: "/page-terms", label: "Terms of Service", external: false },
      { href: "/page-refund", label: "Refund Policy", external: false },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/page-contact", label: "Contact Us", external: false },
      { href: "/page-about", label: "About Ebihost", external: false },
      { href: "/blog", label: "Our Blog", external: false },
    ],
  },
];

export default function Footer2() {
  return (
    <footer id="uc-footer" className="uc-footer panel overflow-hidden uc-dark">
      <div className="footer-outer py-4 lg:py-6 xl:py-9 dark:bg-gray-900 dark:text-white">
        <div className="container max-w-xl">
          <div className="footer-inner vstack gap-4 lg:gap-6 xl:gap-8">
            {/* Footer Columns */}
            <div className="uc-footer-widgets panel">
              {/* Custom CSS for precise layout control */}
              <style jsx>{`
                .footer-cols {
                  display: grid;
                  grid-template-columns: repeat(2, 1fr); /* 2 columns on mobile */
                  gap: 2rem;
                }
                @media (min-width: 992px) { /* lg breakpoint and up */
                  .footer-cols {
                    display: flex;
                    flex-direction: row;
                    flex-wrap: nowrap;
                    justify-content: space-between;
                    gap: 1.5rem;
                  }
                  .footer-cols > div {
                    width: auto;
                    flex: 1; /* Distribute width equally */
                    flex-shrink: 0;
                  }
                }
              `}</style>

              <div className="footer-cols">
                {footerColumns.map((column, index) => (
                  <div key={index}>
                    <h6 className="h6 fw-bold mb-3 text-gray-900 dark:text-white">{column.title}</h6>
                    <ul className="nav-y gap-1">
                      {column.links.map((link, i) => (
                        <li key={i}>
                          {link.external ? (
                            <a
                              href={link.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors fs-7"
                            >
                              {link.label}
                            </a>
                          ) : (
                            <Link
                              href={link.href}
                              className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors fs-7"
                            >
                              {link.label}
                            </Link>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Payment Methods - Centered */}
            <div className="panel vstack gap-3 items-center text-center pt-4 border-top">
              <p className="fs-7 text-gray-600 dark:text-gray-400 m-0 px-2">
                We Accept: Debit Cards, Credit Cards, Bank Transfer, Mobile Payments and Cryptocurrencies.
              </p>
              <div className="hstack gap-3 items-center justify-center flex-wrap">
                <Image
                  src="/assets/images/common/paystack_logo.webp"
                  alt="Paystack"
                  width={70}
                  height={20}
                  className="opacity-90 hover:opacity-100 transition-opacity"
                  style={{ filter: "brightness(0) invert(1)" }}
                />
                <Image
                  src="/assets/images/common/flutterwave_logo.webp"
                  alt="Flutterwave"
                  width={90}
                  height={20}
                  className="opacity-90 hover:opacity-100 transition-opacity"
                  style={{ filter: "brightness(0) invert(1)" }}
                />
                <Image
                  src="/assets/images/common/cryptomus_logo.webp"
                  alt="Cryptomus"
                  width={80}
                  height={20}
                  className="opacity-90 hover:opacity-100 transition-opacity"
                  style={{ filter: "brightness(0) invert(1)" }}
                />
              </div>
            </div>

            {/* Footer Bottom */}
            <div className="uc-footer-bottom panel vstack sm:hstack gap-3 justify-center sm:justify-between items-center pt-4 border-top dark:text-white">
              <div className="hstack items-center gap-2">
                <Link href="/">
                  <Image
                    className="w-32px text-primary"
                    alt="Ebihost"
                    src="/assets/images/common/logo-mark.svg"
                    width="28"
                    height="28"
                  />
                </Link>
                <p className="opacity-60 m-0 fs-7">
                  Ebihost © {new Date().getFullYear()}, All rights reserved.
                </p>
              </div>
              <ul className="nav-x gap-3">
                {socialLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors"
                    >
                      <i className={`icon icon-2 ${link.iconClass}`} />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
