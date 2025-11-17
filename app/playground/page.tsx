import Link from "next/link";

export default function PlaygroundPage() {
  return (
    <main
      style={{
        padding: "3.5rem 1.5rem 4.5rem",
        maxWidth: "1100px",
        margin: "0 auto",
        fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, sans-serif",
      }}
    >
      <header style={{ margin: "2rem 0 1.75rem" }}>
        <h1 style={{ fontSize: "2.5rem", marginBottom: "0.35rem", color: "#f9f5ff" }}>Playground – Automations</h1>
        <p style={{ color: "rgba(226, 215, 255, 0.7)" }}>
          Prépare des workflows orchestrés : upload, run, log et export. Les modules seront progressivement ajoutés ici.
        </p>
      </header>

      <div
        style={{
          display: "grid",
          gap: "1.5rem",
          gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
        }}
      >
        <div
          style={{
            borderRadius: "16px",
            border: "1px solid rgba(148, 95, 255, 0.35)",
            background: "linear-gradient(130deg, rgba(124, 58, 237, 0.35), rgba(57, 26, 109, 0.55))",
            padding: "2rem",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          <h2 style={{ margin: 0, color: "#f3e8ff" }}>Runner local</h2>
          <p style={{ margin: 0, color: "rgba(226, 215, 255, 0.78)" }}>
            Lance un pipeline d'outils depuis le navigateur : upload des artefacts, séquençage des scripts,
            suivi d'exécution avec logs temps réel.
          </p>
          <p style={{ margin: 0, color: "#c084fc" }}>Module en cours de prototypage.</p>
          <button
            type="button"
            disabled
            style={{
              alignSelf: "flex-start",
              padding: "0.65rem 1.4rem",
              borderRadius: "10px",
              border: "none",
              backgroundColor: "rgba(236, 233, 254, 0.25)",
              color: "#ede9fe",
              fontWeight: 600,
              cursor: "not-allowed",
            }}
          >
            Bientôt disponible
          </button>
        </div>

        <div
          style={{
            borderRadius: "16px",
            border: "1px solid rgba(148, 95, 255, 0.25)",
            padding: "2rem",
            background: "linear-gradient(155deg, rgba(88, 28, 135, 0.25), rgba(30, 10, 60, 0.35))",
            display: "flex",
            flexDirection: "column",
            gap: "0.85rem",
          }}
        >
          <h2 style={{ margin: 0, color: "#f3e8ff" }}>API hub</h2>
          <p style={{ margin: 0, color: "rgba(226, 215, 255, 0.7)" }}>
            Toutes les fonctions externes (FastAPI, serverless, scripts Python) seront orchestrées depuis ce hub.
            ExifTool est déjà prêt via Docker.
          </p>
          <Link href="/tools/exif" style={{ color: "#c4b5fd", fontWeight: 600 }}>
            Tester ExifTool →
          </Link>
        </div>

        <div
          style={{
            borderRadius: "16px",
            border: "1px dashed rgba(148, 95, 255, 0.3)",
            padding: "2rem",
            backgroundColor: "rgba(19, 12, 32, 0.7)",
            display: "flex",
            flexDirection: "column",
            gap: "0.85rem",
          }}
        >
          <h2 style={{ margin: 0, color: "#f3e8ff" }}>Idées à intégrer</h2>
          <ul
            style={{
              margin: 0,
              paddingLeft: "1.25rem",
              color: "rgba(226, 215, 255, 0.7)",
              display: "flex",
              flexDirection: "column",
              gap: "0.5rem",
            }}
          >
            <li>Orchestrateur de wordlists (stegseek, zipcrack, etc.)</li>
            <li>Scraping ciblé (forums, marketplaces) avec normalisation</li>
            <li>Export structuré vers Markdown / JSON / Graphs</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
