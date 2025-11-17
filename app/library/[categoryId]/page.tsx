import Link from "next/link";
import { notFound } from "next/navigation";
import { writeUpCategories } from "../../lib/content";

interface PageProps {
  params: {
    categoryId: string;
  };
}

export default function LibraryCategoryPage({ params }: PageProps) {
  const category = writeUpCategories.find((item) => item.id === params.categoryId);

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
        <Link
          href="/library"
          style={{ color: "#c4b5fd", fontWeight: 600, textDecoration: "none" }}
        >
          ← Retour
        </Link>
        <h1 style={{ fontSize: "2.75rem", margin: "1rem 0 0.5rem", color: "#f9f5ff" }}>{category.name}</h1>
        <p style={{ color: "rgba(226, 215, 255, 0.75)", maxWidth: "720px" }}>{category.description}</p>
      </header>

      <section style={{ display: "grid", gap: "1.25rem" }}>
        {category.articles.map((article) => (
          <article
            key={article.slug}
            style={{
              border: "1px solid rgba(148, 95, 255, 0.25)",
              borderRadius: "16px",
              padding: "1.75rem",
              background: "linear-gradient(155deg, rgba(88, 28, 135, 0.25), rgba(30, 10, 60, 0.35))",
              display: "flex",
              flexDirection: "column",
              gap: "0.65rem",
            }}
          >
            <h2 style={{ margin: 0, color: "#f3e8ff", fontSize: "1.35rem" }}>{article.title}</h2>
            <p style={{ margin: 0, color: "rgba(226, 215, 255, 0.7)" }}>{article.description}</p>
            <Link
              href={article.pdfHref}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#c4b5fd", fontWeight: 600 }}
            >
              Ouvrir le PDF →
            </Link>
          </article>
        ))}
      </section>
    </main>
  );
}
