import Link from 'next/link';
import Image from 'next/image';
import { Clock, Calendar } from 'lucide-react';

import { BLOG_CATEGORIES } from '@/data/blog';
import type { BlogPost } from '@/data/blog/types';

interface BlogCardProps {
  post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
  const categoryMeta = BLOG_CATEGORIES[post.category];

  return (
    <article className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all hover:shadow-md">
      <Link href={`/blog/${post.slug}`} className="block">
        <div className="relative aspect-[16/9] overflow-hidden">
          <Image
            src={post.heroImage}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          <div className="absolute top-3 left-3">
            <span className="inline-flex items-center rounded-full bg-teal-600/90 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
              {categoryMeta.label}
            </span>
          </div>
        </div>
      </Link>

      <div className="p-5">
        <div className="mb-3 flex items-center gap-4 text-xs text-slate-500">
          <span className="inline-flex items-center gap-1">
            <Calendar className="h-3.5 w-3.5" />
            {new Date(post.publishDate).toLocaleDateString('en-US', {
              month: 'short',
              day: 'numeric',
              year: 'numeric',
            })}
          </span>
          <span className="inline-flex items-center gap-1">
            <Clock className="h-3.5 w-3.5" />
            {post.readingTime} min read
          </span>
        </div>

        <Link href={`/blog/${post.slug}`} className="block">
          <h3 className="mb-2 text-lg font-bold leading-snug text-slate-900 transition-colors group-hover:text-teal-700">
            {post.title}
          </h3>
        </Link>

        <p className="text-sm leading-relaxed text-slate-600 line-clamp-3">
          {post.excerpt}
        </p>
      </div>
    </article>
  );
}
