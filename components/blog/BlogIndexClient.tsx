"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import type { PostMeta } from "@/lib/blog";
import { PostCard } from "./PostCard";

export function BlogIndexClient({ posts, categories }: { posts: PostMeta[]; categories: string[] }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<string | null>(null);

  const filtered = useMemo(() => {
    return posts.filter((p) => {
      const matchesQuery =
        !query ||
        p.title.toLowerCase().includes(query.toLowerCase()) ||
        p.excerpt.toLowerCase().includes(query.toLowerCase());
      const matchesCategory = !category || p.category === category;
      return matchesQuery && matchesCategory;
    });
  }, [posts, query, category]);

  const recent = posts.slice(0, 5);

  return (
    <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_280px]">
      <div className="space-y-4">
        {filtered.length === 0 ? (
          <p className="text-brand-600">No posts match your search.</p>
        ) : (
          filtered.map((post) => <PostCard key={post.slug} post={post} />)
        )}
      </div>

      <aside className="space-y-8">
        <div>
          <label htmlFor="blog-search" className="mb-1 block text-sm font-semibold text-brand-900">
            Search
          </label>
          <input
            id="blog-search"
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search posts…"
            className="w-full rounded-md border border-brand-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-400"
          />
        </div>

        <div>
          <h2 className="mb-2 text-sm font-semibold text-brand-900">Categories</h2>
          <ul className="space-y-1 text-sm">
            <li>
              <button
                type="button"
                onClick={() => setCategory(null)}
                className={`text-left ${!category ? "font-semibold text-brand-600" : "text-brand-700 hover:text-brand-600"}`}
              >
                All
              </button>
            </li>
            {categories.map((c) => (
              <li key={c}>
                <button
                  type="button"
                  onClick={() => setCategory(c)}
                  className={`text-left ${category === c ? "font-semibold text-brand-600" : "text-brand-700 hover:text-brand-600"}`}
                >
                  {c}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="mb-2 text-sm font-semibold text-brand-900">Recent Posts</h2>
          <ul className="space-y-1.5 text-sm">
            {recent.map((p) => (
              <li key={p.slug}>
                <Link href={`/blog/${p.slug}/`} className="text-brand-700 hover:text-brand-600">
                  {p.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </div>
  );
}
