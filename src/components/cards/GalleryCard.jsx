import { useState } from 'react';

export default function GalleryCard({ item }) {
  const [failedSrc, setFailedSrc] = useState('');

  return (
    <figure className="overflow-hidden rounded-lg border border-navy-200 bg-navy-900 shadow-card transition-shadow duration-300 hover:shadow-card-hover">
      <div className="relative aspect-[4/3] bg-navy-900 p-2 md:p-3">
        <img
          src={item.image}
          alt={item.title}
          loading="eager"
          decoding="async"
          onError={() => setFailedSrc(item.image)}
          className="block h-full w-full rounded-sm bg-white object-contain shadow-sm"
        />
        {failedSrc && (
          <span className="pointer-events-none absolute inset-3 flex items-center justify-center rounded-sm bg-white p-4 text-center text-xs font-semibold text-crimson-600">
            Image failed to load: {failedSrc}
          </span>
        )}
      </div>
    </figure>
  );
}
