"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems } from "../site-data";
import { Icon } from "./icons";

function isActive(pathname, href) {
  if (href === "/") return pathname === "/";
  return pathname === href;
}

export function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="topbar">
      <Link href="/" className="brand" aria-label="KillZero home">
        <img src="/img/logo.png" alt="KillZero logo" className="brand__logo" />
      </Link>

      <div className="topbar__pill">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={isActive(pathname, item.href) ? "nav-link nav-link--active" : "nav-link"}
          >
            <Icon name={item.icon} className="nav-link__icon" />
            <span>{item.label}</span>
          </Link>
        ))}
      </div>

      <div className="topbar__actions">
        <a className="action-button action-button--discord" href="https://discord.me/killzero" target="_blank" rel="noreferrer">
          <Icon name="discord" className="action-button__icon" />
          <span>Discord</span>
        </a>
        <button className="action-button action-button--login" type="button">
          Login
        </button>
      </div>
    </nav>
  );
}
