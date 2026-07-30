import Link from "next/link";
import type { PostMeta } from "@/lib/blog";

export function PostCard({ post }: { post: PostMeta }) {
  return (
    <article className="rounded-lg border border-brand-100 p-5 transition hover:border-brand-300 hover:shadow-md">
      <p className="text-xs font-semibold uppercase tracking-wide text-brand-500">{post.category}</p>
      <h2 className="mt-1 text-lg font-bold text-brand-900">
        <Link href={`/blog/${post.slug}/`} className="hover:text-brand-600">
          {post.title}
        </Link>
      </h2>
      <p className="mt-2 text-sm text-brand-600">
        {new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
      </p>
      <p className="mt-3 text-brand-700">{post.excerpt}</p>
      <Link href={`/blog/${post.slug}/`} className="mt-3 inline-block text-sm font-semibold text-brand-600 underline">
        Read more →
      </Link>
    </article>
  );
}
