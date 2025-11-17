import Link from "next/link";
import { notFound } from "next/navigation";
import { toolCategories } from "../../lib/content";

interface PageProps {
  params: {
    categoryId: string;
  };
}

export default function ToolsCategoryPage({ params }: PageProps) {
  const category = toolCategories.find((item) => item.id === params.categoryId);

  if (!category) {
    notFound();
  }

  return (
    <main
      style={{
        padding: "3.5rem 1.5rem 4.5rem",
        maxWidth: "960px",
        margin: "0 auto",
        fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, sans-serif",
      }}
    >
      <header style={{ marginBottom: "2rem" }}>
        <Link href="/tools" style={{ color: "#c4b5fd", fontWeight: 600, textDecoration: "none" }}>
          ← Retour
        </Link>
        <h1 style={{ fontSize: "2.75rem", margin: "1rem 0 0.5rem", color: "#f9f5ff" }}>{category.name}</h1>
        <p style={{ color: "rgba(226, 215, 255, 0.75)", maxWidth: "720px" }}>{category.description}</p>
      </header>

      <section style={{ display: "grid", gap: "1rem" }}>
        {category.links.map((link) => (
          <article
            key={link.href}
            style={{
              border: "1px solid rgba(148, 95, 255, 0.25)",
              borderRadius: "16px",
              padding: "1.25rem 1.5rem",
              background: "linear-gradient(155deg, rgba(88, 28, 135, 0.25), rgba(30, 10, 60, 0.35))",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "1rem",
            }}
          >
            <span style={{ color: "#f3e8ff", fontWeight: 600 }}>{link.label}</span>
            <Link
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              style={{ color: "#c4b5fd", fontWeight: 600 }}
            >
              Ouvrir →
            </Link>
          </article>
        ))}
      </section>
    </main>
  );
}



