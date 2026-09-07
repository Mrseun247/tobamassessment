import Image from "next/image";
import Button from "@/components/ui/Button";
import PillList from "@/components/ui/PillList";
import { transformationHubHighlights } from "@/lib/content";

export default function TransformationHub() {
  return (
    <section className="bg-white" aria-labelledby="transformation-hub-heading">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
        <div className="rounded-3xl bg-pink-tint-2 p-6 sm:p-10 lg:p-12">
          <div className="mb-8 flex max-w-3xl flex-col gap-2">
            <p className="font-serif text-sm italic text-sky-600">Learning With Our CEO:</p>
            <h2
              id="transformation-hub-heading"
              className="font-serif text-3xl font-bold italic text-brand-purple sm:text-4xl"
            >
              Transformation Hub With Jite Newton
            </h2>
            <p className="mt-2 text-sm text-neutral-700 sm:text-base">
              Transformation Hub with Jite Newton is a flagship webinar series curated by the
              CEO, Dr. Jite Newton. Designed to elevate career trajectories and leadership
              capabilities, this exclusive event offers invaluable insights and strategies for
              personal and professional growth. Whether you&apos;re seeking to advance your
              career or enhance your leadership skills, the Transformation Hub provides a
              transformative learning experience to unlock your full potential and drive success
              in your endeavours.
            </p>
          </div>

          <div className="grid items-start gap-8 lg:grid-cols-2">
            <div className="min-w-0 overflow-hidden rounded-2xl">
              <Image
                src="/images/transformation-hub.png"
                alt="Video thumbnail for the Transformation Hub webinar series with Jite Newton"
                width={800}
                height={520}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex min-w-0 flex-col gap-6">
              <PillList items={transformationHubHighlights} variant="card" columns={2} />
              <Button href="#transformation-hub" variant="solid-purple" withArrow className="w-fit">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
