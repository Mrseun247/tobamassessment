import Image from "next/image";
import BulletList from "@/components/ui/BulletList";
import type { FeatureSection as FeatureSectionData } from "@/lib/content";

export default function FeatureSection({ section }: { section: FeatureSectionData }) {
  return (
    <section className="bg-white" aria-labelledby={`${section.id}-heading`}>
      <div
        className={`mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 lg:px-8 lg:py-20 ${
          section.imageFirst ? "lg:grid-cols-2" : "lg:grid-cols-2"
        }`}
      >
        <div className={`overflow-hidden rounded-2xl ${section.imageFirst ? "lg:order-1" : "lg:order-2"}`}>
          <Image
            src={section.image}
            alt={section.imageAlt}
            width={800}
            height={600}
            className="h-full w-full object-cover"
          />
        </div>
        <div className={`flex flex-col gap-4 ${section.imageFirst ? "lg:order-2" : "lg:order-1"}`}>
          <h2 id={`${section.id}-heading`} className="text-3xl font-bold text-maroon-900 sm:text-4xl">
            {section.title}
          </h2>
          <p className="text-sm text-neutral-700 sm:text-base">{section.description}</p>
          <BulletList items={section.bullets} columns={section.bullets.length > 4 ? 2 : 1} />
        </div>
      </div>
    </section>
  );
}
