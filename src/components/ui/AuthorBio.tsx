import Image from 'next/image';

import type { BlogAuthor } from '@/data/blog/types';

interface AuthorBioProps {
  author: BlogAuthor;
}

export function AuthorBio({ author }: AuthorBioProps) {
  return (
    <div className="my-10 flex items-center gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-5">
      <div className="relative h-14 w-14 flex-shrink-0 overflow-hidden rounded-full">
        <Image
          src={author.image}
          alt={author.name}
          fill
          className="object-cover"
          sizes="56px"
        />
      </div>
      <div>
        <p className="font-bold text-slate-900">
          {author.name}
          {author.credentials && (
            <span className="ml-1 font-normal text-slate-500">
              , {author.credentials}
            </span>
          )}
        </p>
        <p className="text-sm text-slate-500">{author.title}</p>
      </div>
    </div>
  );
}
