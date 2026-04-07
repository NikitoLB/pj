import { SiteShell } from "../components/page-shell";
import { InnerPage, LegalBox } from "../components/sections";
import { legalSections } from "../site-data";

export default function ReglasPage() {
  return (
    <SiteShell>
      <InnerPage title="REGLAS DEL SERVIDOR">
        <LegalBox title="Reglas Generales del Servidor">
          <div className="rules-list">
            {legalSections.reglas.map((rule) => (
              <p key={rule}>• {rule}</p>
            ))}
          </div>
        </LegalBox>
      </InnerPage>
    </SiteShell>
  );
}
