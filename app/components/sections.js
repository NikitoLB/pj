import { Icon } from "./icons";

export function HomeHero({ title, subtitle, paragraphs }) {
  return (
    <section className="home-hero">
      <div className="home-hero__inner">
        <h1>{title}</h1>
        <p className="home-hero__subtitle">{subtitle}</p>
        <div className="home-hero__copy">
          {paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
}

export function InnerPage({ title, intro, icon, children, wide = false }) {
  return (
    <section className={wide ? "inner-page inner-page--wide" : "inner-page"}>
      <header className="page-header">
        {icon ? (
          <div className="page-header__title page-header__title--with-icon">
            <Icon name={icon} className="page-header__icon" />
            <h1>{title}</h1>
          </div>
        ) : (
          <h1>{title}</h1>
        )}
        {intro ? <p>{intro}</p> : null}
      </header>
      {children}
    </section>
  );
}

export function InfoIntroCard() {
  return (
    <section className="glass-card info-intro">
      <h2>
        <Icon name="coins" className="inline-heading-icon" />
        Sistema de Puntos.
      </h2>
      <p>
        En KillZero contamos con un sistema de economia propio totalmente integrado. Puedes
        conseguir puntos jugando de manera gratuita:
        <strong> se otorgan puntos simplemente por estar conectado en el servidor, y por cada baja (kill) que realices contra otros jugadores.</strong>
      </p>
      <p>
        Para que sirven? Estos puntos son la moneda de nuestra pagina web. Con ellos podras
        <strong> comprar vehiculos, materiales para construir tu base, lockers, herramientas y ropa.</strong>
        Tambien puedes usar tus monedas recolectadas en el juego para adquirir los rangos VIP desde nuestra tienda.
      </p>
      <p>
        Ademas de conseguir puntos jugando, ofrecemos la posibilidad de <strong>cargar saldo (puntos) con dinero real</strong> para agilizar tu progreso.
      </p>
    </section>
  );
}

export function SectionTitle({ children }) {
  return <h2 className="section-title">{children}</h2>;
}

export function VipCard({ tier }) {
  return (
    <article className={`vip-card vip-card--${tier.accent}`}>
      <div className={`vip-card__icon vip-card__icon--${tier.accent}`}>
        <Icon name={tier.icon} className="vip-card__symbol" />
      </div>
      <h3>{tier.name}</h3>
      <p className="vip-card__duration">{tier.duration}</p>
      <p className="vip-card__points">
        <Icon name="coins" className="mini-icon" />
        {tier.points}
      </p>
      <ul>
        {tier.perks.map((perk) => (
          <li key={perk}>{perk}</li>
        ))}
      </ul>
    </article>
  );
}

export function PackCard({ pack }) {
  return (
    <article className={pack.featured ? "pack-card pack-card--featured" : "pack-card"}>
      {pack.featured ? <span className="pack-card__tag">Mas vendido</span> : null}
      <div className={pack.cyan ? "pack-card__icon pack-card__icon--cyan" : "pack-card__icon"}>
        <Icon name={pack.icon} className="pack-card__symbol" />
      </div>
      <h3>{pack.name}</h3>
      <p className={pack.cyan ? "pack-card__points pack-card__points--cyan" : "pack-card__points"}>
        {pack.points}
      </p>
      <p className="pack-card__description">{pack.description}</p>
    </article>
  );
}

export function ServerBlock({ server }) {
  const live = server.status === "live";

  return (
    <section className="server-block">
      <h2 className={server.headingAccent === "red" ? "server-block__heading server-block__heading--red" : "server-block__heading"}>
        {server.heading}
      </h2>

      <div className="server-block__divider" />

      {server.details.length === 1 && !live ? (
        <p className="server-block__soon">{server.details[0]}</p>
      ) : (
        <ul className="server-block__list">
          {server.details.map((detail) => (
            <li key={detail}>{detail}</li>
          ))}
        </ul>
      )}

      <article className={live ? "server-card" : "server-card server-card--disabled"}>
        <div className={live ? "server-card__icon-wrap" : "server-card__icon-wrap server-card__icon-wrap--muted"}>
          <Icon name="server" className="server-card__icon" />
        </div>

        <div className="server-card__content">
          <h3>{server.title}</h3>
          <p className="server-card__meta">Mapa: {server.map} | Slots: {server.slots}</p>
          <div className={live ? "server-card__ip" : "server-card__ip server-card__ip--muted"}>IP: {server.ip}</div>
        </div>

        <div className="server-card__cta">
          {server.cta.disabled ? (
            <span className="server-button server-button--disabled">{server.cta.label}</span>
          ) : (
            <a className="server-button" href={server.cta.href}>
              {server.cta.label}
            </a>
          )}
        </div>
      </article>
    </section>
  );
}

export function EmbedPanel({ src, title }) {
  return (
    <div className="embed-panel">
      <iframe src={src} title={title} loading="lazy" />
    </div>
  );
}

export function LegalBox({ title, children }) {
  return (
    <section className="legal-box">
      <h2>{title}</h2>
      <div className="legal-box__content">{children}</div>
    </section>
  );
}
