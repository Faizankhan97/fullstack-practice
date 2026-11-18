import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../image/almosafer.svg";

const travelTabs = [
  {
    label: "Flights",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M21 16v-2l-8-5V3.5a1.5 1.5 0 0 0-3 0V9l-7 5v2l7-2.2V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.2L21 16Z" />
      </svg>
    ),
  },
  {
    label: "Stays",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M3 5h2v9h14V8h2v12h-2v-3H5v3H3V5Zm4 2h4a3 3 0 0 1 3 3v2H7V7Zm9 1h2a2 2 0 0 1 2 2v2h-4V8Z" />
      </svg>
    ),
  },
  {
    label: "Activities",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2a5 5 0 0 0-3 9v2h6v-2a5 5 0 0 0-3-9Zm-2 13h4v2h-4v-2Zm1 3h2v3h-2v-3Z" />
      </svg>
    ),
  },
  {
    label: "Rides",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="m5 11 1.5-4.5A2 2 0 0 1 8.4 5h7.2a2 2 0 0 1 1.9 1.5L19 11a3 3 0 0 1 2 2.8V19h-2v-2H5v2H3v-5.2A3 3 0 0 1 5 11Zm2.1-.5h9.8l-1.2-3.5H8.3l-1.2 3.5ZM6 14a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm12 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z" />
      </svg>
    ),
    badge: "NEW",
  },
];

function Header() {
  const [activeTab, setActiveTab] = useState("Flights");

  return (
    <header className="site-header">
      <div className="header-inner">
        <div className="header-top">
          <Link className="header-logo" to="/" aria-label="Almosafer home">
            <img src={logo} alt="Almosafer" />
          </Link>

          <nav className="header-utilities" aria-label="Account and language">
            <button className="header-text-button" type="button">
              SAR <span className="chevron" aria-hidden="true" />
            </button>
            <button className="header-text-button header-language" type="button" lang="ar">
              العربية
            </button>
            <a className="header-text-link" href="#retrieve-trip">
              Retrieve my trip
            </a>
            <a
              className="header-phone"
              href="tel:+966554400000"
              aria-label="Call +966 55 440 0000"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2a9.8 9.8 0 0 0-8.5 14.7L2 22l5.5-1.4A10 10 0 1 0 12 2Zm0 18a8 8 0 0 1-4.1-1.1l-.4-.2-3.2.8.8-3.1-.3-.5A8 8 0 1 1 12 20Zm4.4-6c-.2-.1-1.4-.7-1.6-.7-.2-.1-.4-.1-.5.1l-.7.8c-.1.2-.3.2-.5.1a6.6 6.6 0 0 1-3.2-2.8c-.2-.3.2-.3.6-1.1.1-.2 0-.3 0-.5l-.7-1.7c-.2-.4-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.3-.9.9-.9 2.1s.9 2.4 1 2.6c.1.2 1.8 2.8 4.4 3.8 1.6.6 2.3.7 3.1.6.5-.1 1.4-.6 1.6-1.2.2-.6.2-1.1.1-1.2 0-.1-.2-.2-.4-.3Z" />
              </svg>
              <span>+966554400000</span>
            </a>
            <button className="sign-in-button" type="button">
              Sign in
            </button>
          </nav>
        </div>

        <nav className="travel-tabs" aria-label="Travel services">
          {travelTabs.map(({ label, icon, badge }) => (
            <button
              className={`travel-tab${activeTab === label ? " is-active" : ""}`}
              type="button"
              key={label}
              aria-pressed={activeTab === label}
              onClick={() => setActiveTab(label)}
            >
              {icon}
              <span>{label}</span>
              {badge && <span className="tab-badge">{badge}</span>}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Header;
