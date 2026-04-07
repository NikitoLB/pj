import { Navigation } from "./navigation";
import { SiteFooter } from "./footer";

export function SiteShell({ children, home = false }) {
  return (
    <main className="site-shell">
      <div className="site-backdrop" />
      <div className={home ? "site-page site-page--home" : "site-page"}>
        <Navigation />
        {children}
        <SiteFooter />
      </div>
    </main>
  );
}
