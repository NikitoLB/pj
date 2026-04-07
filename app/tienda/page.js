import { SiteShell } from "../components/page-shell";
import { InnerPage, LegalBox } from "../components/sections";
import { legalSections } from "../site-data";

export default function TerminosPage() {
  return (
    <SiteShell>
      <InnerPage
        title="TERMINOS Y CONDICIONES"
        intro="Al realizar una donacion o compra en KillZero, aceptas automaticamente los siguientes terminos."
      >
        <LegalBox title="Condiciones de Compra y Beneficios">
          <div className="terms-list">
            {legalSections.terminos.map((item) => (
              <article key={item.title} className="terms-item">
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </LegalBox>
      </InnerPage>
    </SiteShell>
  );
}
