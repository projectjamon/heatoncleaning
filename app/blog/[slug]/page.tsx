import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllPosts, getPostSource } from "@/lib/blog";

export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostSource(slug);
  if (!post) return {};
  return { title: post.meta.title, description: post.meta.excerpt };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostSource(slug);
  if (!post) notFound();

  return (
    <article className="mx-auto max-w-3xl px-4 py-12">
      <Link href="/blog/" className="text-sm text-brand-600 hover:underline">
        ← Back to Blog
      </Link>
      <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-brand-500">{post.meta.category}</p>
      <h1 className="mt-1 text-3xl font-bold text-brand-900 sm:text-4xl">{post.meta.title}</h1>
      <p className="mt-2 text-sm text-brand-600">
        {new Date(post.meta.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
      </p>
      <div className="mt-8 max-w-none text-brand-800 [&_a]:text-brand-600 [&_a]:underline [&_h2]:mt-8 [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-brand-900 [&_li]:mt-1 [&_p]:mt-4 [&_ul]:list-disc [&_ul]:pl-5">
        <MDXRemote source={post.content} />
      </div>
    </article>
  );
}
