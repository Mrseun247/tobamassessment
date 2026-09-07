import Image from "next/image";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden" aria-labelledby="hero-heading">
      <Image
        src="/images/hero-bg.svg"
        alt="Professionals collaborating during a Tobams Group training session"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/55" aria-hidden="true" />
      <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-5 px-4 py-24 text-center sm:px-6 sm:py-32 lg:px-8">
        <Badge tone="dark">What We Do</Badge>
        <h1 id="hero-heading" className="max-w-2xl text-4xl font-bold text-white sm:text-5xl">
          Training and Development
        </h1>
        <p className="max-w-xl text-base text-neutral-200 sm:text-lg">
          Our comprehensive range of programs and resources is designed to enhance skills,
          broaden knowledge, and propel careers forward in today&apos;s ever-evolving landscape.
        </p>
        <Button href="#consultation" variant="solid-purple" className="mt-2">
          Book a Consultation
        </Button>
      </div>
    </section>
  );
}
