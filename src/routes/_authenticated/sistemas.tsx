import { createFileRoute } from "@tanstack/react-router";

import { AppShell } from "@/components/AppShell";
import { AppsExplorer } from "@/components/AppsExplorer";

export const Route = createFileRoute("/_authenticated/sistemas")({
  head: () => ({
    meta: [
      { title: "Meus sistemas — AppShelf" },
      {
        name: "description",
        content: "Organize ferramentas internas, APIs e aplicativos no AppShelf.",
      },
      { property: "og:title", content: "Meus sistemas — AppShelf" },
      {
        property: "og:description",
        content: "Ferramentas internas, APIs e aplicativos organizados automaticamente.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => (
    <AppShell>
      <AppsExplorer archived={false} collection="systems" />
    </AppShell>
  ),
});