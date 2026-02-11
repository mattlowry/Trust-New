import { BlogCard } from '@/components/ui/BlogCard';
import type { BlogPost } from '@/data/blog/types';

interface RelatedPostsProps {
  posts: BlogPost[];
}

export function RelatedPosts({ posts }: RelatedPostsProps) {
  if (posts.length === 0) return null;

  return (
    <section className="py-16 sm:py-20">
      <div className="container mx-auto max-w-6xl px-4">
        <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl text-center mb-10">
          Related Articles
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}
