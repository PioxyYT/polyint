"use client";

import Link from "next/link";
import { toolCategories, writeUpCategories } from "./lib/content";

export default function HomePage() {
  return (
    <main
      style={{
        padding: "3.5rem 1.5rem 4.5rem",
        maxWidth: "1120px",
        margin: "0 auto",
        fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, sans-serif",
      }}
    >
      <section style={{ marginBottom: "3.75rem" }}>
        <p style={{ color: "#a855f7", fontWeight: 600, letterSpacing: "0.12em" }}>POLYINT TOOLBOX</p>
        <h1 style={{ fontSize: "3.2rem", lineHeight: 1.05, margin: "0.5rem 0 1rem", color: "#f9f5ff" }}>
          Centraliser, documenter et automatiser tes workflows OSINT.
        </h1>
        <p style={{ color: "rgba(226, 215, 255, 0.75)", maxWidth: "760px" }}>
          Cette interface regroupe les outils classés par domaines, une bibliothèque de write ups
          et un playground pour orchestrer des runs automatisés. Sélectionne une section ci-dessous
          pour commencer.
        </p>

      </section>

      <section style={{ marginBottom: "3rem" }}>
        <h2 style={{ fontSize: "2rem", marginBottom: "1rem", color: "#f3e8ff" }}>Aperçu rapide</h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "1.5rem",
          }}
        >
          <div
            style={{
              borderRadius: "16px",
              border: "1px solid rgba(148, 95, 255, 0.25)",
              padding: "1.6rem",
              background: "linear-gradient(155deg, rgba(88, 28, 135, 0.25), rgba(30, 10, 60, 0.35))",
              display: "flex",
              flexDirection: "column",
              gap: "0.75rem",
            }}
          >
            <h3 style={{ margin: 0, color: "#ede9fe" }}>Toolbox</h3>
            <p style={{ margin: 0, color: "rgba(214, 199, 255, 0.7)" }}>
              {toolCategories.length} disciplines OSINT catégorisées.
            </p>
            <Link href="/tools" style={{ color: "#c4b5fd", fontWeight: 600 }}>
              Explorer les outils →
            </Link>
          </div>

          <div
            style={{
              borderRadius: "16px",
              border: "1px solid rgba(148, 95, 255, 0.25)",
              padding: "1.6rem",
              background: "linear-gradient(155deg, rgba(88, 28, 135, 0.25), rgba(30, 10, 60, 0.35))",
              display: "flex",
              flexDirection: "column",
              gap: "0.75rem",
            }}
          >
            <h3 style={{ margin: 0, color: "#ede9fe" }}>Library</h3>
            <p style={{ margin: 0, color: "rgba(214, 199, 255, 0.7)" }}>
              {writeUpCategories.length} write ups prêts à intégrer. Organisés par disciplines.
            </p>
            <Link href="/library" style={{ color: "#c4b5fd", fontWeight: 600 }}>
              Accéder à la bibliothèque →
            </Link>
          </div>

          <div
            style={{
              borderRadius: "16px",
              border: "1px solid rgba(148, 95, 255, 0.25)",
              padding: "1.6rem",
              background: "linear-gradient(155deg, rgba(88, 28, 135, 0.25), rgba(30, 10, 60, 0.35))",
              display: "flex",
              flexDirection: "column",
              gap: "0.75rem",
            }}
          >
            <h3 style={{ margin: 0, color: "#ede9fe" }}>Playground</h3>
            <p style={{ margin: 0, color: "rgba(214, 199, 255, 0.7)" }}>
              Prévisualise les automatisations en cours et pilote les services Docker.
            </p>
            <Link href="/playground" style={{ color: "#c4b5fd", fontWeight: 600 }}>
              Ouvrir le playground →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}


