import { SiteShell } from "../components/page-shell";
import { InnerPage, ServerBlock } from "../components/sections";
import { serverCards } from "../site-data";

export default function ServidoresPage() {
  return (
    <SiteShell>
      <InnerPage title="SERVIDORES">
        {serverCards.map((server) => (
          <ServerBlock key={server.title} server={server} />
        ))}
      </InnerPage>
    </SiteShell>
  );
}
