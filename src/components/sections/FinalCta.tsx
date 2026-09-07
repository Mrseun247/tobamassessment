import Button from "@/components/ui/Button";

export default function FinalCta() {
  return (
    <section className="bg-maroon-900" aria-labelledby="final-cta-heading">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-4 py-14 text-center sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:text-left lg:px-8">
        <div className="w-full max-w-xl min-w-0">
          <p className="text-sm text-neutral-300">Ready to be a part of something extraordinary?</p>
          <h2 id="final-cta-heading" className="mt-1 text-2xl font-bold text-white sm:text-3xl">
            Let&apos;s work together to create a difference
          </h2>
        </div>
        <Button href="#contact" variant="solid-rose" className="shrink-0">
          Get In Touch
        </Button>
      </div>
    </section>
  );
}
