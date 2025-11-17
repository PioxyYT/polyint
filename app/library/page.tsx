import Link from "next/link";
import { writeUpCategories } from "../lib/content";

export default function LibraryPage() {
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
        <h1 style={{ fontSize: "2.5rem", marginBottom: "0.35rem", color: "#f9f5ff" }}>
          Library – Write ups & fiches méthodo
        </h1>
        <p style={{ color: "rgba(226, 215, 255, 0.7)" }}>
          Conserve les solutions de challenges, fiches process et playbooks prêts à l'emploi.
        </p>
      </header>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "1.5rem",
        }}
      >
        {writeUpCategories.map((category) => (
          <article
            key={category.id}
            style={{
              border: "1px solid rgba(148, 95, 255, 0.25)",
              borderRadius: "18px",
              padding: "1.9rem",
              background: "linear-gradient(155deg, rgba(88, 28, 135, 0.25), rgba(30, 10, 60, 0.35))",
              display: "flex",
              flexDirection: "column",
              gap: "0.75rem",
            }}
          >
            <h2 style={{ margin: 0, color: "#f3e8ff" }}>{category.name}</h2>
            <p style={{ margin: 0, color: "rgba(226, 215, 255, 0.7)" }}>{category.description}</p>
            <Link
              href={`/library/${category.id}`}
              style={{ color: "#c4b5fd", fontWeight: 600, textDecoration: "none" }}
            >
              Voir les challenges →
            </Link>
          </article>
        ))}
      </div>
    </main>
  );
}
