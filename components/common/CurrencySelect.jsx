"use client";
import { useState } from "react";

const currencies = [
    { code: "NGN", symbol: "₦", name: "Nigerian Naira" },
    { code: "USD", symbol: "$", name: "US Dollar" },
    { code: "GBP", symbol: "£", name: "British Pound" },
    { code: "EUR", symbol: "€", name: "Euro" },
];

export default function CurrencySelect() {
    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState(currencies[0]);

    return (
        <div className="d-inline-block" style={{ position: "relative" }}>
            <a
                onClick={() => setIsOpen((prev) => !prev)}
                className="hstack gap-1 text-none fw-medium"
                role="button"
                aria-expanded={isOpen}
                aria-haspopup="true"
            >
                <span>{selected.code} ({selected.symbol})</span>
                <span
                    data-uc-drop-parent-icon=""
                    className="uc-icon uc-drop-parent-icon"
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
            <div
                className={`p-2 bg-white dark:bg-gray-800 shadow-xs rounded uc-drop ${isOpen ? "uc-open" : ""
                    }`}
                style={{
                    position: "absolute",
                    top: "30px",
                    right: 0,
                    minWidth: "150px",
                    zIndex: 1000,
                }}
            >
                <ul className="nav-y gap-1 fw-medium">
                    {currencies.map((currency, index) => (
                        <li
                            onClick={() => {
                                setSelected(currency);
                                setIsOpen(false);
                            }}
                            key={index}
                            className={`p-2 rounded cursor-pointer hover:bg-secondary dark:hover:bg-gray-700 ${selected.code === currency.code ? "bg-secondary dark:bg-gray-700" : ""
                                }`}
                        >
                            <a className="text-none">
                                {currency.code} ({currency.symbol})
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
