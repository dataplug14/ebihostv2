import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Cta() {
  return (
    <div id="cta" className="cta section panel overflow-hidden">
      <div className="section-outer panel py-4 xl:py-9">
        <div className="container max-w-xl">
          <div className="vstack gap-4 items-center text-center m-auto max-w-750px">
            <h2 className="h3 sm:h2 lg:h1 m-0">
              Enjoy 40% off your plan + a free domain
            </h2>
            <p className="fs-6 text-dark dark:text-white text-opacity-70">
              30-day money-back guarantee: If you're not satisfied, we'll refund you. No hassle, no risk.
            </p>
            <div className="vstack sm:hstack justify-center gap-2">
              <Link
                href="/hosting/shared"
                className="btn btn-md lg:btn-lg btn-primary text-white"
              >
                Get started
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
