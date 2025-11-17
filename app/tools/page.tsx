"use client";

import Link from "next/link";
import { useState, ChangeEvent } from "react";
import { toolCategories } from "../lib/content";

const SectionTitle = ({ title, subtitle }: { title: string; subtitle: string }) => (
  <header style={{ margin: "2rem 0 1.5rem" }}>
    <h1 style={{ fontSize: "2.5rem", marginBottom: "0.35rem", color: "#f9f5ff" }}>{title}</h1>
    <p style={{ color: "rgba(226, 215, 255, 0.7)" }}>{subtitle}</p>
  </header>
);

export default function ToolsPage() {
  const [query, setQuery] = useState("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const normalizedQuery = query.trim().toLowerCase();
  const filteredCategories = normalizedQuery
    ? toolCategories.filter((category) => {
        const inName = category.name.toLowerCase().includes(normalizedQuery);
        const inLinks = category.links.some((link) => link.label.toLowerCase().includes(normalizedQuery));
        return inName || inLinks;
      })
    : toolCategories;

  return (
    <main
      style={{
        padding: "3.5rem 1.5rem 4.5rem",
        maxWidth: "1100px",
        margin: "0 auto",
        fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, sans-serif",
      }}
    >
      <SectionTitle
        title="Toolbox par catégorie"
        subtitle="Accède rapidement aux scripts et méthodologies classés par discipline."
      />

      <div style={{ marginBottom: "2rem", maxWidth: "420px" }}>
        <label
          htmlFor="tool-search"
          style={{ display: "block", marginBottom: "0.4rem", color: "rgba(226, 215, 255, 0.8)", fontSize: "0.9rem" }}
        >
          Rechercher une discipline ou un outil
        </label>
        <input
          id="tool-search"
          type="text"
          value={query}
          onChange={handleChange}
          placeholder="CTI, GEOINT, Any.run, Wayback…"
          style={{
            width: "100%",
            padding: "0.6rem 0.85rem",
            borderRadius: "9999px",
            border: "1px solid rgba(148, 95, 255, 0.4)",
            backgroundColor: "rgba(15, 23, 42, 0.7)",
            color: "#e5e7eb",
            outline: "none",
          }}
        />
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "1.5rem",
        }}
      >
        {filteredCategories.map((category) => (
          <div
            key={category.id}
            style={{
              borderRadius: "18px",
              border: "1px solid rgba(148, 95, 255, 0.25)",
              padding: "1.9rem 1.6rem",
              background: "linear-gradient(155deg, rgba(88, 28, 135, 0.25), rgba(30, 10, 60, 0.35))",
              display: "flex",
              flexDirection: "column",
              gap: "0.75rem",
            }}
          >
            <div>
              <h2 style={{ margin: 0, fontSize: "1.35rem", color: "#f3e8ff" }}>{category.name}</h2>
              <p style={{ margin: "0.35rem 0 0", color: "rgba(226, 215, 255, 0.7)" }}>{category.description}</p>
            </div>

            <Link
              href={`/tools/${category.id}`}
              style={{ color: "#c4b5fd", fontWeight: 600, textDecoration: "none", marginTop: "0.5rem" }}
            >
              Voir les ressources →
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}
