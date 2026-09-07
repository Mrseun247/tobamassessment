import Button from "@/components/ui/Button";
import { consultantCards } from "@/lib/content";

export default function TrainingTheConsultant() {
  return (
    <section className="bg-white" aria-labelledby="training-consultant-heading">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mb-10 max-w-2xl">
          <h2 id="training-consultant-heading" className="text-3xl font-bold text-maroon-900 sm:text-4xl">
            Training The Consultant
          </h2>
          <p className="mt-4 text-sm text-neutral-700 sm:text-base">
            Maximise Your Potential as a Certified Trainer. With the help of our Training
            Consultants program, take a revolutionary step toward becoming a distinguished
            certified training consultant. Learn from professionals in the field, immerse
            yourself in a thorough curriculum, and hone your training methods through interactive
            workshops. Participating in our program will enable you to gain expertise in the
            field as they mentor you through the subtleties of business analysis, and other
            essential managerial competencies for corporate organisations.
          </p>
        </div>

        <div className="grid gap-4 rounded-2xl bg-maroon-700 p-4 sm:grid-cols-2 sm:p-6 lg:p-8">
          {consultantCards.map((card) => (
            <div key={card.title} className="rounded-xl bg-white/5 p-6 ring-1 ring-inset ring-white/10">
              <h3 className="text-base font-semibold text-white">{card.title}</h3>
              <p className="mt-2 text-sm text-neutral-200">{card.description}</p>
            </div>
          ))}
        </div>

        <Button href="#training-consultant" variant="solid-purple" className="mt-8 w-fit">
          Learn More
        </Button>
      </div>
    </section>
  );
}
