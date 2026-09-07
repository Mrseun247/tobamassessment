import Button from "@/components/ui/Button";

export default function ConsultationBanner() {
  return (
    <section className="bg-maroon-700" aria-labelledby="consultation-banner-heading">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-4 py-14 text-center sm:px-6 lg:flex-row lg:justify-between lg:text-left lg:px-8">
        <h2 id="consultation-banner-heading" className="max-w-xl text-2xl font-bold text-white sm:text-3xl">
          Want to accelerate professional growth and development at your organisation? See how we
          can help.
        </h2>
        <Button href="#consultation" variant="solid-white" className="shrink-0">
          Book a Consultation
        </Button>
      </div>
    </section>
  );
}
