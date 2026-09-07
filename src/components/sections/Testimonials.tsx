"use client";

import { useState } from "react";
import Image from "next/image";
import { testimonials } from "@/lib/content";

const PAGE_SIZE = 3;

export default function Testimonials() {
  const pageCount = Math.ceil(testimonials.length / PAGE_SIZE);
  const [page, setPage] = useState(0);

  const visible = testimonials.slice(page * PAGE_SIZE, page * PAGE_SIZE + PAGE_SIZE);

  return (
    <section className="bg-white" aria-labelledby="testimonials-heading">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mb-10 flex items-center justify-between">
          <h2 id="testimonials-heading" className="text-3xl font-bold text-maroon-900 sm:text-4xl">
            Testimonials
          </h2>
          {pageCount > 1 && (
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setPage((p) => (p - 1 + pageCount) % pageCount)}
                aria-label="Previous testimonials"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-neutral-200 text-maroon-900 hover:bg-pink-tint focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-purple"
              >
                <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M12.7 15.3a1 1 0 0 1-1.4 0l-5-5a1 1 0 0 1 0-1.4l5-5a1 1 0 1 1 1.4 1.4L8.4 9.6H16a1 1 0 1 1 0 2H8.4l4.3 4.3a1 1 0 0 1 0 1.4Z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              <button
                type="button"
                onClick={() => setPage((p) => (p + 1) % pageCount)}
                aria-label="Next testimonials"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-neutral-200 text-maroon-900 hover:bg-pink-tint focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-purple"
              >
                <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M7.3 4.7a1 1 0 0 1 1.4 0l5 5a1 1 0 0 1 0 1.4l-5 5a1 1 0 1 1-1.4-1.4l4.3-4.3H4a1 1 0 1 1 0-2h7.6L7.3 6.1a1 1 0 0 1 0-1.4Z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          )}
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((testimonial) => (
            <figure
              key={testimonial.name}
              className="flex flex-col gap-4 rounded-2xl border border-neutral-100 bg-pink-tint p-6"
            >
              <div className="flex items-center gap-3">
                <Image
                  src={testimonial.avatar}
                  alt=""
                  width={48}
                  height={48}
                  className="h-12 w-12 rounded-full"
                />
                <figcaption>
                  <p className="text-sm font-semibold text-maroon-900">{testimonial.name}</p>
                  <p className="text-xs text-neutral-500">{testimonial.role}</p>
                </figcaption>
              </div>
              <blockquote className="text-sm text-neutral-700">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
