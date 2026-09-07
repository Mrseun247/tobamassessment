import Button from "@/components/ui/Button";

export default function ConsultationBanner() {
  return (
    <section className="bg-neutral-50" aria-labelledby="consultation-banner-heading">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
        <div className="flex flex-col items-center gap-6 rounded-3xl bg-brand-purple px-6 py-14 text-center sm:px-12">
          <h2 id="consultation-banner-heading" className="w-full max-w-2xl text-2xl font-bold text-white sm:text-3xl">
            Want to accelerate professional growth and development at your organisation? See how
            we can help.
          </h2>
          <Button href="#consultation" variant="solid-white">
            Book a Consultation
          </Button>
        </div>
      </div>
    </section>
  );
}
