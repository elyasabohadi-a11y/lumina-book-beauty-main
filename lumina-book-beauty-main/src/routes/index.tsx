import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/hero-finnish.jpg";
import stylistImg from "@/assets/stylist.jpg";
import interiorImg from "@/assets/interior.jpg";
import galleryHair from "@/assets/gallery-hair.jpg";
import galleryNails from "@/assets/gallery-nails.jpg";
import gallerySkin from "@/assets/gallery-skin.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Lumina Studio | Book a Downtown Hair & Beauty Appointment" },
      {
        name: "description",
        content:
          "Upscale hair styling, colour, advanced skincare and luxury nails in the city centre. Precise work, on schedule. Book your appointment at Lumina Studio.",
      },
      {
        property: "og:title",
        content: "Lumina Studio | Book a Downtown Hair & Beauty Appointment",
      },
      {
        property: "og:description",
        content:
          "Expert colour, cuts, facials and nails downtown. Clear pricing, exact session times, booking one tap away.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const PHONE = "+1 (555) 240 8890";
const PHONE_HREF = "tel:+15552408890";

const services = [
  {
    name: "Precision Cut & Style",
    focus: "Hair",
    duration: "60 min",
    price: "from $85",
    note: "Consultation, cut, finish",
  },
  {
    name: "Signature Balayage",
    focus: "Hair",
    duration: "180 min",
    price: "from $240",
    note: "Hand-painted, toned, glossed",
  },
  {
    name: "Full Colour & Gloss",
    focus: "Hair",
    duration: "120 min",
    price: "from $160",
    note: "Root-to-tip, ammonia-free options",
  },
  {
    name: "Keratin Smoothing",
    focus: "Hair",
    duration: "150 min",
    price: "from $210",
    note: "Frizz control up to 12 weeks",
  },
  {
    name: "Advanced Glow Facial",
    focus: "Skincare",
    duration: "75 min",
    price: "from $145",
    note: "Peel, extraction, LED",
  },
  {
    name: "Express Radiance Facial",
    focus: "Skincare",
    duration: "40 min",
    price: "from $90",
    note: "Lunch-hour reset",
  },
  {
    name: "Luxury Gel Manicure",
    focus: "Nails",
    duration: "60 min",
    price: "from $65",
    note: "Structured gel, 3-week wear",
  },
  {
    name: "Pedicure & Foot Ritual",
    focus: "Nails",
    duration: "70 min",
    price: "from $80",
    note: "Soak, shape, massage",
  },
  {
    name: "Event Makeup",
    focus: "Makeup",
    duration: "50 min",
    price: "from $110",
    note: "Long-wear, photo-ready",
  },
];

const testimonials = [
  {
    quote: "Third balayage here and the tone is identical every time. I never wait past my slot.",
    name: "Sofia",
    service: "Signature Balayage",
    type: "Consultant, books monthly",
  },
  {
    quote: "Booked the 40-minute facial between meetings and walked out looking rested.",
    name: "Amara",
    service: "Express Radiance Facial",
    type: "First-time client",
  },
  {
    quote: "They fixed a cut I'd been hiding for months. Precise, calm, no upselling.",
    name: "Elena",
    service: "Precision Cut & Style",
    type: "Regular since 2023",
  },
];

const gallery = [
  { src: galleryHair, alt: "Glossy hand-painted balayage result at Lumina Studio" },
  { src: galleryNails, alt: "Nude and rose gold luxury gel manicure" },
  { src: gallerySkin, alt: "Dewy, even skin after an advanced glow facial" },
];

function BookButton({ label = "Book Your Appointment", ghost = false }) {
  return (
    <a href={PHONE_HREF} className={ghost ? "btn-book-ghost" : "btn-book"}>
      {label}
    </a>
  );
}

function Index() {
  return (
    <main className="overflow-x-hidden">
      {/* Sticky booking bar */}
      <div className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur">
        <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-5 py-3">
          <div className="min-w-0">
            <p className="font-display truncate text-lg tracking-wide">Lumina Studio</p>
            <p className="eyebrow truncate">Downtown · City Center</p>
          </div>
          <BookButton label="Book" ghost />
        </div>
      </div>

      {/* 1. Hero */}
      <section className="mx-auto max-w-6xl px-5 pt-12 pb-16 sm:pt-20 sm:pb-24">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="eyebrow">Hair · Skincare · Nails · Makeup</p>
            <h1 className="mt-5 text-4xl leading-[1.08] sm:text-5xl lg:text-6xl">
              Precision styling that looks effortless when you walk out.
            </h1>
            <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground">
              Full-service hair, advanced skincare and luxury nail treatments under one roof, in
              sessions timed to the minute.
            </p>
            <p className="mt-3 max-w-md text-sm text-muted-foreground">
              Same-week appointments usually available.
            </p>
            <div className="mt-9 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <BookButton />
              <a
                href="#services"
                className="border-b border-champagne pb-1 text-sm tracking-wide text-foreground/80 transition-colors hover:text-primary"
              >
                View Services Menu
              </a>
            </div>
          </div>
          <div className="relative">
            <img
              src={heroImg}
              alt="Client with freshly styled glossy hair at Lumina Studio"
              width={1600}
              height={1200}
              className="aspect-[4/3] w-full rounded-sm object-cover shadow-[var(--shadow-lift)]"
            />
            <div className="absolute -bottom-5 left-5 rounded-sm border border-champagne bg-card px-5 py-3 shadow-[var(--shadow-soft)]">
              <p className="eyebrow">This week</p>
              <p className="mt-1 text-sm">Openings Wed–Sat</p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Services */}
      <section id="services" className="border-y border-border bg-card/60 py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-5">
          <div className="grid grid-cols-[minmax(0,1fr)_auto] items-end gap-4">
            <div className="min-w-0">
              <p className="eyebrow">Services & Treatments</p>
              <h2 className="mt-3 text-3xl sm:text-4xl">Menu, duration, starting price.</h2>
            </div>
            <span className="hidden shrink-0 text-sm text-muted-foreground sm:block">
              Final price confirmed at consultation
            </span>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <article
                key={s.name}
                className="flex flex-col justify-between rounded-sm border border-border bg-background p-6 transition-shadow hover:shadow-[var(--shadow-soft)]"
              >
                <div>
                  <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-3">
                    <h3 className="min-w-0 text-xl leading-snug">{s.name}</h3>
                    <span className="shrink-0 rounded-full bg-secondary px-3 py-1 text-[0.625rem] tracking-[0.16em] uppercase text-muted-foreground">
                      {s.focus}
                    </span>
                  </div>
                  <div className="hairline mt-5" />
                  <dl className="mt-4 space-y-2 text-sm">
                    <div className="flex justify-between gap-3">
                      <dt className="text-muted-foreground">Duration</dt>
                      <dd>{s.duration}</dd>
                    </div>
                    <div className="flex justify-between gap-3">
                      <dt className="text-muted-foreground">Starting</dt>
                      <dd className="text-primary">{s.price}</dd>
                    </div>
                    <div className="flex justify-between gap-3">
                      <dt className="text-muted-foreground">Includes</dt>
                      <dd className="text-right">{s.note}</dd>
                    </div>
                  </dl>
                </div>
                <div className="mt-6">
                  <a href={PHONE_HREF} className="btn-book-ghost w-full">
                    Book {s.focus}
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Trust & stylists */}
      <section className="mx-auto max-w-6xl px-5 py-16 sm:py-24">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <img
            src={stylistImg}
            alt="Nadia Sorel, lead stylist and studio director at Lumina Studio"
            width={1008}
            height={1264}
            loading="lazy"
            className="aspect-[4/5] w-full rounded-sm object-cover shadow-[var(--shadow-soft)]"
          />
          <div>
            <p className="eyebrow">Lead Stylist</p>
            <h2 className="mt-3 text-3xl sm:text-4xl">Nadia Sorel, Studio Director</h2>
            <p className="mt-5 max-w-lg text-muted-foreground">
              Colour specialist and cutting instructor, leading a team of five.
            </p>
            <ul className="mt-8 space-y-4">
              {[
                "16 years behind the chair, 9 of them in colour correction.",
                "Ammonia-free and sulphate-free premium product lines only.",
                "Dry-cut precision technique, mapped to your growth pattern.",
              ].map((point) => (
                <li key={point} className="flex gap-4 border-b border-border pb-4 text-sm">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            <img
              src={interiorImg}
              alt="Minimal cream and rose gold interior of Lumina Studio"
              width={1408}
              height={1008}
              loading="lazy"
              className="mt-10 aspect-[7/5] w-full rounded-sm object-cover"
            />
          </div>
        </div>
      </section>

      {/* 4. Social proof */}
      <section className="border-y border-border bg-card/60 py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-5">
          <p className="eyebrow">Clients</p>
          <h2 className="mt-3 text-3xl sm:text-4xl">Repeat bookings, not first visits.</h2>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {testimonials.map((t) => (
              <figure
                key={t.name}
                className="flex h-full flex-col justify-between rounded-sm border border-border bg-background p-6"
              >
                <blockquote className="font-display text-xl leading-snug">"{t.quote}"</blockquote>
                <figcaption className="mt-6 text-sm">
                  <span className="text-foreground">{t.name}</span>
                  <span className="block text-primary">{t.service}</span>
                  <span className="block text-muted-foreground">{t.type}</span>
                </figcaption>
              </figure>
            ))}
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {gallery.map((g) => (
              <img
                key={g.alt}
                src={g.src}
                alt={g.alt}
                width={912}
                height={1104}
                loading="lazy"
                className="aspect-[4/5] w-full rounded-sm object-cover"
              />
            ))}
          </div>
        </div>
      </section>

      {/* 5. Practical logistics */}
      <section className="mx-auto max-w-6xl px-5 py-16 sm:py-24">
        <p className="eyebrow">Practical</p>
        <h2 className="mt-3 text-3xl sm:text-4xl">Where, when, how it runs.</h2>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-sm border border-border p-6">
            <h3 className="text-lg">Location</h3>
            <p className="mt-3 text-sm text-muted-foreground">
              48 Marlowe Street, Downtown, City Center. Two minutes from Central Station; paid
              garage next door.
            </p>
          </div>
          <div className="rounded-sm border border-border p-6">
            <h3 className="text-lg">Hours & policy</h3>
            <ul className="mt-3 space-y-1 text-sm text-muted-foreground">
              <li>Tue–Fri 10:00–20:00</li>
              <li>Sat 09:00–18:00</li>
              <li>Sun–Mon closed</li>
              <li className="text-foreground">24h notice to reschedule</li>
            </ul>
          </div>
          <div className="rounded-sm border border-border p-6">
            <h3 className="text-lg">What to expect</h3>
            <p className="mt-3 text-sm text-muted-foreground">
              10-minute consultation, then your session: 40–75 min for skincare and nails, 60–180
              min for colour work. We finish on time.
            </p>
          </div>
          <div className="rounded-sm border border-border p-6">
            <h3 className="text-lg">Who it's for</h3>
            <p className="mt-3 text-sm text-muted-foreground">
              For women who want a planned, precise result on a schedule.
            </p>
            <p className="mt-3 text-sm text-muted-foreground">
              Not for walk-ins or same-hour requests.
            </p>
          </div>
        </div>
      </section>

      {/* 6. Repeat CTA */}
      <section className="border-t border-border bg-secondary/60 py-20 sm:py-28">
        <div className="mx-auto max-w-3xl px-5 text-center">
          <p className="eyebrow">Openings this week</p>
          <h2 className="mt-4 text-4xl leading-tight sm:text-5xl">
            Pick a time. We'll handle the rest.
          </h2>
          <div className="mt-9 flex flex-col items-center gap-4">
            <BookButton />
            <a href={PHONE_HREF} className="text-sm tracking-wide text-muted-foreground">
              or call {PHONE}
            </a>
          </div>
        </div>
      </section>

      <footer className="mx-auto max-w-6xl px-5 py-10 text-sm text-muted-foreground">
        <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4">
          <p className="min-w-0 truncate">Lumina Studio · 48 Marlowe Street, Downtown</p>
          <a href={PHONE_HREF} className="shrink-0 text-primary">
            {PHONE}
          </a>
        </div>
      </footer>
    </main>
  );
}
