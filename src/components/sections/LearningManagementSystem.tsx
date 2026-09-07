import Image from "next/image";
import Button from "@/components/ui/Button";
import BulletList from "@/components/ui/BulletList";

const courses = [
  "Business Analysis",
  "Design Thinking",
  "Effective Communication",
  "Entrepreneurship",
  "Career Development",
  "Business Model",
];

export default function LearningManagementSystem() {
  return (
    <section className="bg-pink-tint" aria-labelledby="lms-heading">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-24">
        <div className="mx-auto aspect-square w-full min-w-0 max-w-sm overflow-hidden rounded-full">
          <Image
            src="/images/lms-photo.png"
            alt="Two Tobams Group facilitators who lead the TG Academy learning programs"
            width={600}
            height={600}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="flex min-w-0 flex-col gap-5">
          <h2 id="lms-heading" className="text-3xl font-bold text-brand-purple sm:text-4xl">
            Learning Management System
          </h2>
          <p className="text-sm text-neutral-700 sm:text-base">
            TG Academy is a hub of knowledge and skill-building resources designed to empower
            tech talents on their learning journey. From technical courses covering the latest
            programming languages and development frameworks to soft skills training in
            leadership, effective communication and project management, TG Academy offers a
            wide range of courses to cater to diverse learning needs. With accessible and
            interactive learning materials, individuals can enhance their skills and stay ahead
            in today&apos;s competitive tech landscape.
          </p>
          <div>
            <p className="mb-3 text-sm font-semibold text-brand-purple">
              Some of our courses include:
            </p>
            <BulletList items={courses} columns={3} variant="dot" toneClassName="text-ink" />
          </div>
          <Button href="#tg-academy" variant="solid-purple" className="w-fit">
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
}
