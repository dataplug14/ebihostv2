"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Nav() {
    const pathname = usePathname();

    return (
        <>
            {/* Hosting Mega Menu */}
            <li className="has-dd-menu">
                <a role="button" aria-haspopup="true">
                    Hosting{" "}
                    <span
                        data-uc-navbar-parent-icon=""
                        className="uc-icon uc-navbar-parent-icon"
                    >
                        <svg width={12} height={12} viewBox="0 0 12 12">
                            <polyline
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.1"
                                points="1 3.5 6 8.5 11 3.5"
                            />
                        </svg>
                    </span>
                </a>
                <div className="uc-navbar-dropdown uc-drop bg-white dark:bg-gray-900 shadow-lg rounded-2 overflow-hidden p-0"
                    style={{ width: "800px", maxWidth: "100vw" }}>
                    <div className="row g-0">
                        {/* Column 1: Core Hosting */}
                        <div className="col-4 border-end border-gray-100 dark:border-gray-800">
                            <div className="p-4">
                                <h6 className="h6 mb-3 text-primary fw-bold">Web Hosting</h6>
                                <ul className="nav-y gap-2">
                                    <li>
                                        <Link href="/hosting/shared" className="hstack items-start gap-3 p-2 rounded hover:bg-gray-50 dark:hover:bg-gray-800 transition-all group">
                                            <div className="icon-box w-32px h-32px rounded bg-primary-100 dark:bg-primary-900 text-primary d-flex items-center justify-center flex-shrink-0">
                                                <i className="icon-1 unicon-cloud fs-6"></i>
                                            </div>
                                            <div>
                                                <h6 className="fs-7 fw-bold m-0 group-hover:text-primary transition-colors">Shared Hosting</h6>
                                                <p className="fs-8 m-0 text-muted">Cost-effective start</p>
                                            </div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/hosting/wordpress" className="hstack items-start gap-3 p-2 rounded hover:bg-gray-50 dark:hover:bg-gray-800 transition-all group">
                                            <div className="icon-box w-32px h-32px rounded bg-primary-100 dark:bg-primary-900 text-primary d-flex items-center justify-center flex-shrink-0">
                                                <i className="icon-1 unicon-layers fs-6"></i>
                                            </div>
                                            <div>
                                                <h6 className="fs-7 fw-bold m-0 group-hover:text-primary transition-colors">WordPress Hosting</h6>
                                                <p className="fs-8 m-0 text-muted">Optimized for WP</p>
                                            </div>
                                        </Link>
                                    </li>
                                    <li>
                                        <a className="hstack items-start gap-3 p-2 rounded opacity-60 cursor-not-allowed">
                                            <div className="icon-box w-32px h-32px rounded bg-gray-100 dark:bg-gray-800 text-gray-500 d-flex items-center justify-center flex-shrink-0">
                                                <i className="icon-1 unicon-dashboard fs-6"></i>
                                            </div>
                                            <div>
                                                <h6 className="fs-7 fw-bold m-0">Website Builder</h6>
                                                <p className="fs-8 m-0 text-muted">Coming Soon</p>
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Column 2: Servers & Reseller - REMOVED Cloud VPS */}
                        <div className="col-4 border-end border-gray-100 dark:border-gray-800">
                            <div className="p-4">
                                <h6 className="h6 mb-3 text-primary fw-bold">Servers & Pro</h6>
                                <ul className="nav-y gap-2">
                                    {/* Cloud VPS Removed */}
                                    <li>
                                        <Link href="/hosting/reseller" className="hstack items-start gap-3 p-2 rounded hover:bg-gray-50 dark:hover:bg-gray-800 transition-all group">
                                            <div className="icon-box w-32px h-32px rounded bg-primary-100 dark:bg-primary-900 text-primary d-flex items-center justify-center flex-shrink-0">
                                                <i className="icon-1 unicon-store fs-6"></i>
                                            </div>
                                            <div>
                                                <h6 className="fs-7 fw-bold m-0 group-hover:text-primary transition-colors">Reseller Hosting</h6>
                                                <p className="fs-8 m-0 text-muted">Start your business</p>
                                            </div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/hosting/email" className="hstack items-start gap-3 p-2 rounded hover:bg-gray-50 dark:hover:bg-gray-800 transition-all group">
                                            <div className="icon-box w-32px h-32px rounded bg-primary-100 dark:bg-primary-900 text-primary d-flex items-center justify-center flex-shrink-0">
                                                <i className="icon-1 unicon-email fs-6"></i>
                                            </div>
                                            <div>
                                                <h6 className="fs-7 fw-bold m-0 group-hover:text-primary transition-colors">Business Email</h6>
                                                <p className="fs-8 m-0 text-muted">Professional email</p>
                                            </div>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Column 3: Feature / Promo */}
                        <div className="col-4 bg-gray-25 dark:bg-gray-800">
                            <div className="p-4 h-100 d-flex flex-column justify-center">
                                <h5 className="h6 mb-2">Why Ebihost?</h5>
                                <ul className="nav-y gap-2 mb-4">
                                    <li className="hstack gap-2 fs-7 text-muted">
                                        <i className="icon-1 unicon-checkmark-outline text-primary"></i> 99.9% Uptime Guarantee
                                    </li>
                                    <li className="hstack gap-2 fs-7 text-muted">
                                        <i className="icon-1 unicon-checkmark-outline text-primary"></i> 24/7 Expert Support
                                    </li>
                                    <li className="hstack gap-2 fs-7 text-muted">
                                        <i className="icon-1 unicon-checkmark-outline text-primary"></i> 30-Day Money Back
                                    </li>
                                </ul>
                                <Link href="/hosting/shared" className="btn btn-sm btn-primary w-100">Get Started</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </li>

            {/* Domains Dropdown */}
            <li className="has-dd-menu">
                <a role="button" aria-haspopup="true">
                    Domains{" "}
                    <span className="uc-icon uc-navbar-parent-icon">
                        <svg width={12} height={12} viewBox="0 0 12 12">
                            <polyline fill="none" stroke="currentColor" strokeWidth="1.1" points="1 3.5 6 8.5 11 3.5" />
                        </svg>
                    </span>
                </a>
                <div className="uc-navbar-dropdown uc-drop bg-white dark:bg-gray-900 shadow-lg rounded-2 p-3" style={{ minWidth: "260px" }}>
                    <ul className="nav-y gap-1">
                        <li>
                            <a href="https://my.ebihost.com/cart.php?a=add&domain=register" target="_blank" rel="noopener noreferrer" className="hstack gap-3 p-2 rounded hover:bg-gray-50 dark:hover:bg-gray-800 transition-all">
                                <i className="icon-1 unicon-globe text-primary fs-5"></i>
                                <span className="fw-medium fs-7">Register a Domain</span>
                            </a>
                        </li>
                        <li>
                            <a href="https://my.ebihost.com/cart.php?a=add&domain=transfer" target="_blank" rel="noopener noreferrer" className="hstack gap-3 p-2 rounded hover:bg-gray-50 dark:hover:bg-gray-800 transition-all">
                                <i className="icon-1 unicon-delivery text-primary fs-5"></i>
                                <span className="fw-medium fs-7">Transfer Domain</span>
                            </a>
                        </li>
                        <li>
                            <a href="https://whois.ebihost.com" target="_blank" rel="noopener noreferrer" className="hstack gap-3 p-2 rounded hover:bg-gray-50 dark:hover:bg-gray-800 transition-all">
                                <i className="icon-1 unicon-search text-primary fs-5"></i>
                                <span className="fw-medium fs-7">WHOIS Lookup</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </li>

            {/* Web Security Dropdown */}
            <li className="has-dd-menu" style={{ position: "relative" }}>
                <a role="button" aria-haspopup="true">
                    Web Security{" "}
                    <span className="uc-icon uc-navbar-parent-icon">
                        <svg width={12} height={12} viewBox="0 0 12 12">
                            <polyline fill="none" stroke="currentColor" strokeWidth="1.1" points="1 3.5 6 8.5 11 3.5" />
                        </svg>
                    </span>
                </a>
                <div className="uc-navbar-dropdown uc-drop bg-white dark:bg-gray-900 shadow-lg rounded-2 p-3"
                    style={{ minWidth: "260px", right: "0", left: "auto" }}>
                    <ul className="nav-y gap-1">
                        <li>
                            <a href="https://my.ebihost.com/store/ssl-certificates" target="_blank" rel="noopener noreferrer" className="hstack gap-3 p-2 rounded hover:bg-gray-50 dark:hover:bg-gray-800 transition-all">
                                <i className="icon-1 unicon-locked text-primary fs-5"></i>
                                <span className="fw-medium fs-7">SSL Certificates</span>
                            </a>
                        </li>
                        <li>
                            <a href="https://my.ebihost.com/store/sitelock" target="_blank" rel="noopener noreferrer" className="hstack gap-3 p-2 rounded hover:bg-gray-50 dark:hover:bg-gray-800 transition-all">
                                <i className="icon-1 unicon-security text-primary fs-5"></i>
                                <span className="fw-medium fs-7">Website Security</span>
                            </a>
                        </li>
                        <li>
                            <a href="https://my.ebihost.com/store/codeguard" target="_blank" rel="noopener noreferrer" className="hstack gap-3 p-2 rounded hover:bg-gray-50 dark:hover:bg-gray-800 transition-all">
                                <i className="icon-1 unicon-save text-primary fs-5"></i>
                                <span className="fw-medium fs-7">Website Backup</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </li>

            {/* Help / Company Dropdown */}
            <li className="has-dd-menu" style={{ position: "relative" }}>
                <a role="button" aria-haspopup="true">
                    Company{" "}
                    <span className="uc-icon uc-navbar-parent-icon">
                        <svg width={12} height={12} viewBox="0 0 12 12">
                            <polyline fill="none" stroke="currentColor" strokeWidth="1.1" points="1 3.5 6 8.5 11 3.5" />
                        </svg>
                    </span>
                </a>
                <div className="uc-navbar-dropdown uc-drop bg-white dark:bg-gray-900 shadow-lg rounded-2 p-3"
                    style={{ minWidth: "260px", right: "0", left: "auto" }}>
                    <ul className="nav-y gap-1">
                        <li>
                            <Link href="/page-about" className="hstack gap-3 p-2 rounded hover:bg-gray-50 dark:hover:bg-gray-800 transition-all">
                                <i className="icon-1 unicon-information text-primary fs-5"></i>
                                <span className="fw-medium fs-7">About Us</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/page-contact" className="hstack gap-3 p-2 rounded hover:bg-gray-50 dark:hover:bg-gray-800 transition-all">
                                <i className="icon-1 unicon-phone text-primary fs-5"></i>
                                <span className="fw-medium fs-7">Contact Support</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/blog" className="hstack gap-3 p-2 rounded hover:bg-gray-50 dark:hover:bg-gray-800 transition-all">
                                <i className="icon-1 unicon-blog text-primary fs-5"></i>
                                <span className="fw-medium fs-7">Blog & News</span>
                            </Link>
                        </li>
                        <li>
                            <a href="https://my.ebihost.com/knowledgebase" target="_blank" rel="noopener noreferrer" className="hstack gap-3 p-2 rounded hover:bg-gray-50 dark:hover:bg-gray-800 transition-all">
                                <i className="icon-1 unicon-book text-primary fs-5"></i>
                                <span className="fw-medium fs-7">Knowledgebase</span>
                            </a>
                        </li>
                        <li>
                            <a href="https://status.ebihost.com" target="_blank" rel="noopener noreferrer" className="hstack gap-3 p-2 rounded hover:bg-gray-50 dark:hover:bg-gray-800 transition-all">
                                <i className="icon-1 unicon-signal-strength text-primary fs-5"></i>
                                <span className="fw-medium fs-7">Network Status</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </li>
        </>
    );
}
