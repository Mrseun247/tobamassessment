import Button from "@/components/ui/Button";

export default function FinalCta() {
  return (
    <section className="bg-maroon-900" aria-labelledby="final-cta-heading">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-4 py-16 text-center sm:px-6 lg:flex-row lg:justify-between lg:text-left lg:px-8">
        <h2 id="final-cta-heading" className="max-w-xl text-2xl font-bold text-white sm:text-3xl">
          Ready to be a part of something extraordinary? Let&apos;s work together to create a
          difference
        </h2>
        <Button href="#contact" variant="solid-rose" className="shrink-0">
          Get In Touch
        </Button>
      </div>
    </section>
  );
}
