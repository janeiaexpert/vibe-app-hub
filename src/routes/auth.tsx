import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Boxes, Loader2 } from "lucide-react";

import { supabase } from "@/integrations/supabase/client";
import { lovable } from "@/integrations/lovable/index";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/auth")({
  head: () => ({
    meta: [
      { title: "Entrar no AppShelf — sua estante de apps" },
      {
        name: "description",
        content:
          "Acesse o AppShelf para cadastrar, organizar e acompanhar seus aplicativos Vibe Coding em um só lugar.",
      },
      { property: "og:title", content: "Entrar no AppShelf" },
      {
        property: "og:description",
        content: "Acesse sua estante pessoal de aplicativos Vibe Coding.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AuthPage,
});

function AuthPage() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      if (data.session) navigate({ to: "/dashboard", replace: true });
      else setChecking(false);
    });
  }, [navigate]);

  async function handleGoogle() {
    setError("");
    setLoading(true);
    try {
      const result = await lovable.auth.signInWithOAuth("google", {
        redirect_uri: window.location.origin,
      });
      if (result.error) {
        setError("Não foi possível entrar com o Google.");
        return;
      }
      if (result.redirected) return;
      navigate({ to: "/dashboard", replace: true });
    } catch {
      setError("Não foi possível entrar com o Google.");
    } finally {
      setLoading(false);
    }
  }

  if (checking) {
    return (
      <div className="grid min-h-screen place-items-center bg-background">
        <Loader2 className="size-6 animate-spin text-muted-foreground" aria-label="Carregando" />
      </div>
    );
  }

  return (
    <div className="grid min-h-screen bg-background lg:grid-cols-2">
      <section className="hidden flex-col justify-between bg-primary p-12 text-primary-foreground lg:flex">
        <div className="flex items-center gap-2">
          <Boxes className="size-6" aria-hidden="true" />
          <span className="font-display text-xl font-semibold">AppShelf</span>
        </div>
        <div className="max-w-sm">
          <h2 className="font-display text-4xl leading-tight font-semibold">
            Sua estante pessoal de apps Vibe Coding.
          </h2>
          <p className="mt-4 text-primary-foreground/80">
            Cadastre projetos, marque favoritos, acompanhe a situação de cada um e guarde
            observações — tudo organizado e só seu.
          </p>
        </div>
        <p className="text-sm text-primary-foreground/60">Feito para quem cria muito.</p>
      </section>

      <section className="flex items-center justify-center p-6">
        <div className="w-full max-w-sm">
          <div className="mb-8 flex items-center gap-2 lg:hidden">
            <span className="grid size-9 place-items-center rounded-xl bg-primary text-primary-foreground">
              <Boxes className="size-5" aria-hidden="true" />
            </span>
            <span className="font-display text-xl font-semibold">AppShelf</span>
          </div>

          <h1 className="font-display text-2xl font-semibold">Bem-vindo</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Entre com sua conta Google para acessar seus aplicativos.
          </p>

          {error && (
            <p role="alert" className="mt-6 text-sm text-destructive">
              {error}
            </p>
          )}

          <Button className="mt-6 w-full" onClick={handleGoogle} disabled={loading}>
            {loading && <Loader2 className="size-4 animate-spin" aria-hidden="true" />}
            Continuar com Google
          </Button>
        </div>
      </section>
    </div>
  );
}
