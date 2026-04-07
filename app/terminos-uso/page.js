import { SiteShell } from "../components/page-shell";
import { InnerPage, LegalBox } from "../components/sections";
import { legalSections } from "../site-data";

export default function TerminosUsoPage() {
  return (
    <SiteShell>
      <InnerPage title="TERMINOS DE USO">
        <LegalBox title="Limitacion de Responsabilidad y Aceptacion de los Terminos">
          <div className="rules-list">
            {legalSections.uso.map((item) => (
              <p key={item}>• {item}</p>
            ))}
          </div>
        </LegalBox>
      </InnerPage>
    </SiteShell>
  );
}
