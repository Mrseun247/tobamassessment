import Image from "next/image";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import PillList from "@/components/ui/PillList";
import { transformationHubHighlights } from "@/lib/content";

export default function TransformationHub() {
  return (
    <section className="bg-pink-tint-2" aria-labelledby="transformation-hub-heading">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto mb-10 flex max-w-2xl flex-col items-start gap-3">
          <Badge>Learning With Our CEO</Badge>
          <h2 id="transformation-hub-heading" className="text-3xl font-bold text-maroon-900 sm:text-4xl">
            Transformation Hub With Jite Newton
          </h2>
          <p className="text-sm text-neutral-700 sm:text-base">
            Transformation Hub with Jite Newton is a flagship webinar series curated by the CEO,
            Dr. Jite Newton. Designed to elevate career trajectories and leadership capabilities,
            this exclusive event offers invaluable insights and strategies for personal and
            professional growth. Whether you&apos;re seeking to advance your career or enhance
            your leadership skills, the Transformation Hub provides a transformative learning
            experience to unlock your full potential and drive success in your endeavours.
          </p>
        </div>

        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="overflow-hidden rounded-2xl">
            <Image
              src="/images/transformation-hub.svg"
              alt="Video thumbnail for the Transformation Hub webinar series with Jite Newton"
              width={800}
              height={520}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex flex-col gap-6">
            <PillList items={transformationHubHighlights} icon="star" columns={2} />
            <Button href="#transformation-hub" variant="solid-purple" className="w-fit">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
