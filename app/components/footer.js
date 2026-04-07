import Link from "next/link";
import { footerLinks } from "../site-data";
import { Icon } from "./icons";

export function SiteFooter() {
  return (
    <footer className="footer">
      <div className="footer__grid">
        <div className="footer__col">
          <h3><Icon name="gamepad" className="footer__icon" /> Sobre el Servidor</h3>
          <p>Pagina oficial del servidor KillZero. Podras ver el estado de servidores, tienda y ranking.</p>
        </div>

        <div className="footer__col">
          <h3><Icon name="link" className="footer__icon" /> Links Utiles</h3>
          <div className="footer__links">
            {footerLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="footer__col">
          <h3><Icon name="shield" className="footer__icon" /> Soporte</h3>
          <div className="footer__links">
            <a href="https://discord.me/killzero" target="_blank" rel="noreferrer">
              Discord del Servidor
            </a>
            <p><Icon name="users" className="footer__inline-icon" /> Online: 24/7</p>
          </div>
        </div>

        <div className="footer__col">
          <h3 className="footer__brand">KILL ZERO</h3>
          <p>Elevando el estandar de la comunidad de DayZ a traves de nuestros servidores balanceados y de un rendimiento optimo.</p>
          <div className="footer__socials">
            <a href="https://discord.me/killzero" target="_blank" rel="noreferrer" aria-label="Instagram">
              <Icon name="instagram" className="social-icon" />
            </a>
            <a href="https://discord.me/killzero" target="_blank" rel="noreferrer" aria-label="Twitter">
              <Icon name="twitter" className="social-icon" />
            </a>
            <a href="https://discord.me/killzero" target="_blank" rel="noreferrer" aria-label="YouTube">
              <Icon name="youtube" className="social-icon" />
            </a>
            <a href="https://discord.me/killzero" target="_blank" rel="noreferrer" aria-label="Discord">
              <Icon name="discord" className="social-icon" />
            </a>
          </div>
        </div>
      </div>

      <div className="footer__copy">Sistema desarrollado por <strong>KillZero Team</strong> (c) 2026. Todos los derechos reservados.</div>
    </footer>
  );
}
