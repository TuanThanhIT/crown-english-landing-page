"use client";
import { useEffect } from "react";

export function ThemeToggle() {
  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    function sync() {
      let saved: string | null = null;
      try {
        saved = localStorage.getItem("crown-theme");
      } catch {}
      document.documentElement.dataset.theme =
        saved === "light" || saved === "dark"
          ? saved
          : media.matches
            ? "dark"
            : "light";
    }
    sync();
    media.addEventListener("change", sync);
    window.addEventListener("storage", sync);
    return () => {
      media.removeEventListener("change", sync);
      window.removeEventListener("storage", sync);
    };
  }, []);
  function toggle() {
    const theme =
      document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = theme;
    try {
      localStorage.setItem("crown-theme", theme);
    } catch {}
  }
  return (
    <button
      type="button"
      onClick={toggle}
      className="grid size-10 shrink-0 place-items-center rounded-xl border border-line bg-surface text-foreground hover:bg-tint focus-visible:outline-2 focus-visible:outline-primary cursor-pointer"
      aria-label="Chuyển giao diện sáng / tối"
      title="Chuyển giao diện sáng / tối"
    >
      <svg
        className="theme-sun size-5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5m11 11L19 19M5 19l1.5-1.5m11-11L19 5" />
      </svg>
      <svg
        className="theme-moon size-5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        aria-hidden="true"
      >
        <path d="M20.5 14A8.5 8.5 0 0 1 10 3.5 8.5 8.5 0 1 0 20.5 14Z" />
      </svg>
    </button>
  );
}
