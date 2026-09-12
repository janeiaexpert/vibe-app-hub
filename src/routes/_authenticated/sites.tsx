import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/_authenticated/sites")({
  beforeLoad: () => {
    throw redirect({ to: "/apps", replace: true });
  },
});
