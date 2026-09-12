import { createFileRoute } from "@tanstack/react-router";

import { AppShell } from "@/components/AppShell";
import { AppsExplorer } from "@/components/AppsExplorer";

export const Route = createFileRoute("/_authenticated/sites")({
  head: () => ({
    meta: [
      { title: "Meus sites — AppShelf" },
      {
        name: "description",
        content: "Organize seus sites publicados e em desenvolvimento no AppShelf.",
      },
      { property: "og:title", content: "Meus sites — AppShelf" },
      {
        property: "og:description",
        content: "Seus projetos Web organizados automaticamente em um só lugar.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => (
    <AppShell>
      <AppsExplorer archived={false} collection="sites" />
    </AppShell>
  ),
});
