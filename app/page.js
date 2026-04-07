import Image from "next/image";
import { coinPacks, legalSections, navItems, serverCards, vipTiers } from "./site-data";

function SectionHeading({ eyebrow, title, description, center = false }) {
  return (
    <div className={center ? "section-heading section-heading-center" : "section-heading"}>
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2>{title}</h2>
      {description ? <p className="section-copy">{description}</p> : null}
    </div>
  );
}

function FrameCard({ title, description, src }) {
  return (
    <div className="frame-card">
      <div className="frame-card__header">
        <div>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
      <iframe src={src} title={title} loading="lazy" />
    </div>
  );
}

function LegalCard({ id, title, items, numbered = false }) {
  return (
    <section id={id} className="legal-card">
      <h3>{title}</h3>
      <div className="legal-card__content">
        {numbered
          ? items.map((item) => (
              <article key={item.title} className="legal-point">
                <h4>{item.title}</h4>
                <p>{item.body}</p>
              </article>
            ))
          : items.map((item) => <p key={item}>{item}</p>)}
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <main className="site-shell">
      <div className="site-backdrop" />

      <header className="hero" id="inicio">
        <nav className="topbar">
          <a href="#inicio" className="brand">
            <Image src="/img/logo.png" alt="KillZero logo" width={48} height={48} priority />
            <span>KILLZERO</span>
          </a>

          <div className="topbar__links">
            {navItems.map((item) => (
              <a key={item.id} href={`#${item.id}`}>
                {item.label}
              </a>
            ))}
          </div>

          <div className="topbar__actions">
            <a className="button button-discord" href="https://discord.me/killzero" target="_blank" rel="noreferrer">
              Discord
            </a>
            <a className="button button-primary" href="#tienda">
              Entrar
            </a>
          </div>
        </nav>

        <div className="hero__content">
          <p className="eyebrow">DayZ LATAM Community</p>
          <h1>KILL ZERO</h1>
          <p className="hero__lead">
            Bienvenido a la pagina oficial de KillZero LATAM. Aqui vas a encontrar novedades,
            servidores, economia, ranking y la tienda conectada a tu comunidad.
          </p>

          <div className="hero__cta">
            <a className="button button-primary" href="#servidores">
              Ver servidores
            </a>
            <a className="button button-secondary" href="#leaderboard">
              Abrir ranking
            </a>
          </div>

          <div className="hero__stats">
            <div className="stat-card">
              <strong>Vanilla +</strong>
              <span>PvP, raids, airdrops y progreso balanceado.</span>
            </div>
            <div className="stat-card">
              <strong>Economia propia</strong>
              <span>Puntos por juego, kills y compras dentro del sitio.</span>
            </div>
            <div className="stat-card">
              <strong>Comunidad 24/7</strong>
              <span>Discord activo, soporte y eventos para la region.</span>
            </div>
          </div>
        </div>
      </header>

      <section id="informacion" className="content-section">
        <SectionHeading
          eyebrow="Economia"
          title="Informacion y sistema de puntos"
          description="KillZero integra una economia propia: ganas puntos por permanecer conectado y por cada kill realizada contra otros jugadores. Esos puntos se convierten en la moneda del sitio para progresar mas rapido dentro del servidor."
        />

        <div className="feature-panel">
          <div>
            <h3>Que puedes conseguir</h3>
            <p>
              Usa tus puntos para comprar vehiculos, materiales para bases, lockers,
              herramientas, ropa y tambien rangos VIP desde la tienda web.
            </p>
          </div>
          <div>
            <h3>Progreso gratis o acelerado</h3>
            <p>
              Puedes avanzar solo jugando o cargar saldo con dinero real para agilizar tu
              progreso cuando lo necesites.
            </p>
          </div>
        </div>

        <SectionHeading eyebrow="VIP" title="Rangos VIP" center />
        <div className="card-grid card-grid--vip">
          {vipTiers.map((tier) => (
            <article
              key={tier.name}
              className={`info-card info-card--${tier.accent}${tier.featured ? " info-card--featured" : ""}`}
            >
              <div className="info-card__badge">{tier.duration}</div>
              <h3>{tier.name}</h3>
              <p className="points-pill">{tier.points}</p>
              <ul>
                {tier.perks.map((perk) => (
                  <li key={perk}>{perk}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <SectionHeading eyebrow="Packs" title="Packs de monedas" center />
        <div className="card-grid card-grid--packs">
          {coinPacks.map((pack) => (
            <article key={pack.name} className={`pack-card${pack.featured ? " pack-card--featured" : ""}`}>
              {pack.featured ? <span className="tag">Mas vendido</span> : null}
              <h3>{pack.name}</h3>
              <strong>{pack.points}</strong>
              <p>{pack.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="servidores" className="content-section">
        <SectionHeading
          eyebrow="Servidores"
          title="Conectate a KillZero LATAM"
          description="Dos experiencias pensadas para la comunidad: un servidor Vanilla + ya disponible y un Deathmatch en preparacion."
        />

        <div className="server-list">
          {serverCards.map((server) => (
            <article key={server.name} className={`server-card server-card--${server.accent}`}>
              <div className="server-card__body">
                <div className="server-card__copy">
                  <p className="server-card__label">{server.accent === "live" ? "En linea" : "Proximamente"}</p>
                  <h3>{server.name}</h3>
                  <p className="server-card__meta">
                    Mapa: {server.map} | Slots: {server.slots}
                  </p>
                  <div className="server-card__ip">{server.ip}</div>
                  <ul>
                    {server.description.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div className="server-card__actions">
                  {server.cta.disabled ? (
                    <span className="button button-disabled">{server.cta.label}</span>
                  ) : (
                    <a className="button button-primary" href={server.cta.href}>
                      {server.cta.label}
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="leaderboard" className="content-section">
        <SectionHeading
          eyebrow="Ranking"
          title="Leaderboard en vivo"
          description="Consulta el panel de Clusterz para seguir el rendimiento de la comunidad y los jugadores destacados."
        />
        <FrameCard
          title="Ranking KillZero"
          description="Panel embebido desde Clusterz."
          src="https://panel.clusterz.cloud/api/v1/leaderboard/646ba14c-ac3a-46eb-a4bc-b488270333c9"
        />
      </section>

      <section id="tienda" className="content-section">
        <SectionHeading
          eyebrow="Store"
          title="Tienda de items"
          description="Equipamientos esenciales para tu supervivencia, desde suministros basicos hasta vehiculos y utilidades para tu base."
        />
        <FrameCard
          title="Tienda KillZero"
          description="Usa tus monedas del juego para progresar desde la web."
          src="https://panel.clusterz.cloud/api/v1/store/3f775493-0b9f-464e-99fe-f635545f3852"
        />
      </section>

      <section className="content-section content-section--legal">
        <SectionHeading
          eyebrow="Legal"
          title="Terminos, reglas y uso"
          description="Todo lo necesario para jugar y comprar dentro de KillZero con claridad."
        />

        <div className="legal-grid">
          <LegalCard id="terminos" title="Terminos y condiciones" items={legalSections.terminos} numbered />
          <LegalCard id="reglas" title="Reglas del servidor" items={legalSections.reglas} />
          <LegalCard id="terminos-uso" title="Terminos de uso" items={legalSections.uso} />
        </div>
      </section>

      <footer className="footer">
        <div className="footer__grid">
          <div>
            <h3>Sobre el servidor</h3>
            <p>
              Pagina oficial del servidor KillZero. Aqui puedes ver estado de servidores,
              tienda y ranking en un solo lugar.
            </p>
          </div>
          <div>
            <h3>Links utiles</h3>
            <a href="#reglas">Reglas del servidor</a>
            <a href="#terminos-uso">Terminos de uso</a>
            <a href="#terminos">Terminos y condiciones</a>
          </div>
          <div>
            <h3>Soporte</h3>
            <a href="https://discord.me/killzero" target="_blank" rel="noreferrer">
              Discord del servidor
            </a>
            <p>Online: 24/7</p>
          </div>
          <div>
            <h3>KILL ZERO</h3>
            <p>
              Elevando el estandar de la comunidad de DayZ con servidores balanceados y
              rendimiento optimizado.
            </p>
          </div>
        </div>
        <p className="footer__copy">Sistema desarrollado por KillZero Team © 2026. Todos los derechos reservados.</p>
      </footer>
    </main>
  );
}
