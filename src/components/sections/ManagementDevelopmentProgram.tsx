import Image from "next/image";
import PillList from "@/components/ui/PillList";
import { managementProgramHighlights } from "@/lib/content";

export default function ManagementDevelopmentProgram() {
  return (
    <section className="bg-maroon-700" aria-labelledby="management-program-heading">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-24">
        <div className="min-w-0 overflow-hidden rounded-2xl">
          <Image
            src="/images/management-program.png"
            alt="Organisational leaders reviewing management development materials together"
            width={800}
            height={600}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="flex min-w-0 flex-col gap-5">
          <h2 id="management-program-heading" className="text-3xl font-bold text-white sm:text-4xl">
            Management Development Program
          </h2>
          <p className="text-sm text-neutral-200 sm:text-base">
            Tobams Group offers a comprehensive Management Development Program designed to equip
            corporate organisations with the high-performing leaders they need to thrive.
          </p>
          <p className="text-sm text-neutral-200 sm:text-base">
            Our program includes workshops, seminars, coaching sessions, online learning and
            experiential learning opportunities designed to improve leadership, strategic
            thinking, communication, and other essential managerial competencies for corporate
            organisations.
          </p>
          <PillList items={managementProgramHighlights} variant="row" />
        </div>
      </div>
    </section>
  );
}
