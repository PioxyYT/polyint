"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const tabs = [
  { href: "/tools", label: "Tools" },
  { href: "/library", label: "Library" },
  { href: "/playground", label: "Playground" },
];

const baseStyle: React.CSSProperties = {
  padding: "0.6rem 1.1rem",
  borderRadius: "9999px",
  border: "1px solid transparent",
  textDecoration: "none",
  fontWeight: 600,
  transition: "transform 0.2s ease, box-shadow 0.2s ease, background-color 0.2s ease, color 0.2s ease",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
};

const activeStyle: React.CSSProperties = {
  backgroundColor: "rgba(124, 58, 237, 0.9)",
  color: "#f5f3ff",
  borderColor: "rgba(167, 139, 250, 0.8)",
  boxShadow: "0 12px 35px rgba(124, 58, 237, 0.3)",
};

const inactiveStyle: React.CSSProperties = {
  backgroundColor: "rgba(148, 95, 255, 0.15)",
  color: "rgba(226, 215, 255, 0.9)",
  borderColor: "rgba(148, 95, 255, 0.25)",
};

export function NavTabs() {
  const pathname = usePathname();

  return (
    <nav
      style={{
        display: "flex",
        gap: "0.85rem",
        justifyContent: "center",
        alignItems: "center",
        padding: "0.65rem 1.25rem",
        borderRadius: "9999px",
        background: "rgba(38, 24, 66, 0.75)",
        border: "1px solid rgba(148, 95, 255, 0.25)",
        boxShadow: "0 18px 45px rgba(10, 4, 24, 0.45)",
        backdropFilter: "blur(18px)",
      }}
    >
      {tabs.map((tab) => {
        const isActive = pathname === tab.href;
        const style = {
          ...baseStyle,
          ...(isActive ? activeStyle : inactiveStyle),
        } satisfies React.CSSProperties;

        return (
          <Link
            key={tab.href}
            href={tab.href}
            style={style}
            onMouseEnter={(event) => {
              event.currentTarget.style.transform = "translateY(-2px)";
              event.currentTarget.style.boxShadow = isActive
                ? "0 14px 36px rgba(124, 58, 237, 0.35)"
                : "0 10px 28px rgba(148, 95, 255, 0.25)";
            }}
            onMouseLeave={(event) => {
              event.currentTarget.style.transform = "translateY(0)";
              event.currentTarget.style.boxShadow = isActive
                ? "0 12px 35px rgba(124, 58, 237, 0.3)"
                : "none";
            }}
          >
            {tab.label}
          </Link>
        );
      })}
    </nav>
  );
}
