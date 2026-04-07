import { SiteShell } from "../components/page-shell";
import { InfoIntroCard, InnerPage, PackCard, SectionTitle, VipCard } from "../components/sections";
import { coinPacks, vipTiers } from "../site-data";

export default function InformacionPage() {
  return (
    <SiteShell>
      <InnerPage title="INFORMACION Y ECONOMIA">
        <InfoIntroCard />

        <SectionTitle>RANGOS VIP</SectionTitle>
        <div className="vip-grid">
          {vipTiers.map((tier) => (
            <VipCard key={tier.name} tier={tier} />
          ))}
        </div>

        <SectionTitle>PACKS DE MONEDAS</SectionTitle>
        <div className="pack-grid">
          {coinPacks.map((pack) => (
            <PackCard key={pack.name} pack={pack} />
          ))}
        </div>
      </InnerPage>
    </SiteShell>
  );
}
