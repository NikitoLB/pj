import { SiteShell } from "../components/page-shell";
import { EmbedPanel, InnerPage } from "../components/sections";

export default function LeaderboardPage() {
  return (
    <SiteShell>
      <InnerPage title="LEADERBOARD" wide>
        <EmbedPanel
          title="Leaderboard KillZero"
          src="https://panel.clusterz.cloud/api/v1/leaderboard/646ba14c-ac3a-46eb-a4bc-b488270333c9"
        />
      </InnerPage>
    </SiteShell>
  );
}
