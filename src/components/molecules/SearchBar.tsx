"use client";

import { useEffect, useState } from "react";

type SearchBarProps = {
  onSearch: (value: string) => void;
  debounceMs?: number;
};

export function SearchBar({ onSearch, debounceMs = 350 }: SearchBarProps) {
  const [query, setQuery] = useState("");

  useEffect(() => {
    const timeout = window.setTimeout(() => {
      onSearch(query);
    }, debounceMs);

    return () => window.clearTimeout(timeout);
  }, [debounceMs, onSearch, query]);

  return (
    <div className="flex items-center">
      <button
        type="button"
        aria-label="Open search"
        className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white/80 text-slate-700 md:hidden"
      >
        <MagnifierIcon />
      </button>

      <label className="relative hidden min-w-56 items-center md:flex lg:min-w-72">
        <span className="pointer-events-none absolute left-3 text-slate-500" aria-hidden="true">
          <MagnifierIcon />
        </span>
        <input
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search"
          aria-label="Search"
          className="h-10 w-full rounded-full border border-slate-200 bg-white/80 pl-10 pr-4 text-sm text-slate-800 outline-none transition-colors duration-300 focus:border-slate-300"
        />
      </label>
    </div>
  );
}

function MagnifierIcon() {
  return (
    <svg viewBox="0 0 20 20" width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M13.9 13.9L18 18M15.3333 8.66667C15.3333 12.3486 12.3486 15.3333 8.66667 15.3333C4.98477 15.3333 2 12.3486 2 8.66667C2 4.98477 4.98477 2 8.66667 2C12.3486 2 15.3333 4.98477 15.3333 8.66667Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
