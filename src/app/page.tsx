import { ArrowRight, BadgeCheck, CircleDollarSign, Layers3, RadioTower, Sparkles } from "lucide-react";
import { BentoCard } from "@/components/bento-card";
import { HeroScene } from "@/components/hero-scene";
import { MotionSection } from "@/components/motion-section";
import { Navigation } from "@/components/navigation";
import { caseStudies, services } from "@/data/site";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Lumenforge Studio",
  url: "https://lumenforge.studio",
  description:
    "Creative technology studio building immersive digital experiences, 3D websites, and product storytelling systems.",
  areaServed: "Worldwide",
  serviceType: "Immersive Digital Experiences",
  slogan: "Spatial stories engineered for speed.",
  offers: services.map((service) => ({
    "@type": "Offer",
    name: service.title,
    description: service.description,
  })),
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navigation />
      <main>
        <section className="noise relative isolate flex min-h-[92svh] items-center overflow-hidden px-5 pb-16 pt-28 sm:px-8 lg:px-12">
          <HeroScene />
          <div className="mx-auto grid w-full max-w-7xl items-end gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(320px,0.55fr)]">
            <div className="relative z-10">
              <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-foreground/10 bg-white/55 px-3 py-1 text-sm font-medium text-foreground shadow-sm backdrop-blur-xl">
                <Sparkles aria-hidden className="h-4 w-4 text-[#3073ff]" />
                Independent creative technology studio
              </p>
              <h1 className="max-w-5xl text-5xl font-semibold leading-[0.96] tracking-normal text-foreground sm:text-7xl lg:text-8xl">
                Immersive Digital Experiences engineered for velocity.
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-muted sm:text-xl">
                We blend brand systems, high-performance frontends, and interactive 3D to turn complex products into
                launch-ready digital worlds.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#contact"
                  className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-foreground px-6 font-semibold text-background transition hover:-translate-y-0.5 hover:bg-[#3073ff]"
                >
                  Plan a launch
                  <ArrowRight aria-hidden className="h-4 w-4" />
                </a>
                <a
                  href="#case-studies"
                  className="focus-ring inline-flex min-h-12 items-center justify-center rounded-full border border-foreground/15 bg-white/50 px-6 font-semibold text-foreground backdrop-blur-xl transition hover:-translate-y-0.5 hover:border-foreground/30"
                >
                  View case studies
                </a>
              </div>
            </div>
            <aside className="relative z-10 rounded-[2rem] border border-white/70 bg-white/55 p-5 shadow-2xl shadow-foreground/10 backdrop-blur-2xl">
              <div className="grid grid-cols-3 gap-3">
                {[
                  ["98", "Perf score"],
                  ["4.8x", "Scroll depth"],
                  ["21d", "Launch sprint"],
                ].map(([value, label]) => (
                  <div key={label} className="rounded-3xl border border-foreground/10 bg-background/80 p-4">
                    <div className="font-mono text-2xl font-semibold">{value}</div>
                    <div className="mt-2 text-xs font-medium uppercase tracking-[0.18em] text-muted">{label}</div>
                  </div>
                ))}
              </div>
              <div className="mt-4 rounded-3xl bg-foreground p-5 text-background">
                <p className="text-sm uppercase tracking-[0.2em] text-background/60">Current focus</p>
                <p className="mt-3 text-2xl font-semibold leading-tight">
                  Interactive product launches with conversion architecture baked in.
                </p>
              </div>
            </aside>
          </div>
        </section>

        <MotionSection className="px-5 py-24 sm:px-8 lg:px-12" id="services">
          <div className="mx-auto max-w-7xl">
            <div className="flex max-w-3xl flex-col gap-4">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#3073ff]">Capabilities</p>
              <h2 className="text-4xl font-semibold leading-tight sm:text-6xl">A bento system for digital launches.</h2>
            </div>
            <div className="mt-12 grid auto-rows-[minmax(220px,auto)] gap-4 lg:grid-cols-4">
              <BentoCard className="lg:col-span-2 lg:row-span-2" icon={Layers3} title={services[0].title}>
                {services[0].description}
              </BentoCard>
              <BentoCard icon={RadioTower} title={services[1].title}>
                {services[1].description}
              </BentoCard>
              <BentoCard icon={BadgeCheck} title={services[2].title}>
                {services[2].description}
              </BentoCard>
              <BentoCard className="lg:col-span-2" icon={CircleDollarSign} title={services[3].title}>
                {services[3].description}
              </BentoCard>
            </div>
          </div>
        </MotionSection>

        <MotionSection className="border-y border-foreground/10 bg-[#10140f] px-5 py-24 text-background sm:px-8 lg:px-12" id="case-studies">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#9db8ff]">Case studies</p>
                <h2 className="mt-4 text-4xl font-semibold leading-tight sm:text-5xl">Mock content, production shape.</h2>
              </div>
              <div className="grid gap-4">
                {caseStudies.map((study) => (
                  <article
                    key={study.title}
                    className="group grid gap-5 rounded-[2rem] border border-white/10 bg-white/[0.06] p-5 transition hover:border-[#9db8ff]/50 hover:bg-white/[0.09] sm:grid-cols-[1fr_auto]"
                  >
                    <div>
                      <p className="text-sm font-medium text-background/55">{study.industry}</p>
                      <h3 className="mt-2 text-2xl font-semibold">{study.title}</h3>
                      <p className="mt-3 max-w-2xl leading-7 text-background/70">{study.summary}</p>
                    </div>
                    <div className="flex min-w-40 flex-col justify-end rounded-3xl bg-background p-4 text-foreground">
                      <span className="font-mono text-3xl font-semibold">{study.metric}</span>
                      <span className="mt-2 text-sm text-muted">{study.metricLabel}</span>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </MotionSection>
      </main>

      <footer id="contact" className="px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-8 rounded-[2rem] bg-[#3073ff] p-6 text-white sm:p-10 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/70">Conversion-ready footer</p>
            <h2 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight sm:text-6xl">
              Build a launch surface people can feel.
            </h2>
          </div>
          <a
            href="mailto:hello@lumenforge.studio"
            className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-6 font-semibold text-[#10224f] transition hover:-translate-y-0.5 hover:bg-[#eff4ff]"
          >
            Start the brief
            <ArrowRight aria-hidden className="h-4 w-4" />
          </a>
        </div>
      </footer>
    </>
  );
}
