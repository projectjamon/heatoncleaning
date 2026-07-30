import type { Metadata } from "next";
import { getAllPosts, getCategories } from "@/lib/blog";
import { BlogIndexClient } from "@/components/blog/BlogIndexClient";

export const metadata: Metadata = {
  title: "Blog",
  description: "Cleaning tips, home maintenance advice, and news from Extreme Cleaning Services.",
};

export default function BlogPage() {
  const posts = getAllPosts();
  const categories = getCategories(posts);

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-3xl font-bold text-brand-900 sm:text-4xl">Blog</h1>
      <p className="mt-3 max-w-2xl text-brand-700">
        Practical tips on keeping your home and business in great shape, from the team that does it for a living.
      </p>
      <BlogIndexClient posts={posts} categories={categories} />
    </div>
  );
}
