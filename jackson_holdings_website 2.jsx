export default function JacksonHoldingsWebsite() {

  const companies = [
    {
      name: "Omega Waypoint",
      category: "Commercial Logistics",
      description:
        "Omega Waypoint focuses on commercial logistics and transportation coordination. The company is designed to support Class‑A logistics operations, freight coordination, and scalable supply chain solutions for business clients.",
      logo: "OW",
    },
    {
      name: "Longview Stewardship",
      category: "Entrepreneurial Network & Services",
      description:
        "Longview Stewardship is a private entrepreneurial network built to connect operators, entrepreneurs, and service providers. The platform focuses on collaboration, referrals, advisory, marketing support, and strategic partnerships among trusted members.",
      logo: "LS",
    },
  ];

  const pillars = [
    "Build and operate durable companies under a single holding structure",
    "Develop logistics capability through Omega Waypoint",
    "Cultivate a strong entrepreneurial network through Longview Stewardship",
    "Create long-term value through ownership, collaboration, and disciplined growth",
  ];

  const longviewModel = [
    "Private membership network",
    "Entrepreneur and operator community",
    "Referral and opportunity ecosystem",
    "Advisory, marketing, and collaborative services",
  ];

  function Logo({ text }) {
    return (
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-400 font-bold text-stone-950">
        {text}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-stone-950 text-stone-100">

      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-stone-950/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">

          <div className="flex items-center gap-3">
            <Logo text="JH" />
            <div>
              <div className="text-sm font-semibold text-white">Jackson Holdings</div>
              <div className="text-xs text-stone-400">Holding Company</div>
            </div>
          </div>

          <nav className="hidden gap-8 text-sm text-stone-300 md:flex">
            <a href="#about" className="hover:text-white">About</a>
            <a href="#structure" className="hover:text-white">Structure</a>
            <a href="#companies" className="hover:text-white">Companies</a>
            <a href="#network" className="hover:text-white">Longview Network</a>
            <a href="#vision" className="hover:text-white">Vision</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>

        </div>
      </header>


      {/* HERO */}
      <section className="relative overflow-hidden">

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(245,158,11,0.18),transparent_40%)]" />

        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">

          <div className="max-w-3xl">

            <div className="mb-4 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.3em] text-stone-300">
              Parent Company
            </div>

            <h1 className="text-5xl font-semibold text-white md:text-6xl">
              Jackson Holdings
            </h1>

            <p className="mt-6 text-lg text-stone-300 leading-8">
              Jackson Holdings is a parent company focused on building and operating businesses across logistics, services, and entrepreneurial collaboration. The company develops and oversees operating ventures while cultivating long‑term opportunities through network, ownership, and strategic partnerships.
            </p>

          </div>

        </div>

      </section>


      {/* ABOUT */}
      <section id="about" className="border-t border-white/10 bg-stone-900/40">

        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">

          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <div className="text-sm uppercase tracking-[0.3em] text-amber-300">About</div>
              <h2 className="mt-4 text-3xl font-semibold text-white">
                A holding company built for ownership and expansion
              </h2>
            </div>

            <div className="space-y-6 text-stone-300 leading-8">
              <p>
                Jackson Holdings is structured as a parent company designed to own, develop, and oversee operating businesses in sectors where practical opportunity and long-term value can be created.
              </p>
              <p>
                The company brings together operating ventures, network development, and future business expansion under a single umbrella built around discipline, relationships, and execution.
              </p>
            </div>
          </div>

        </div>

      </section>


      {/* STRUCTURE */}
      <section id="structure" className="border-t border-white/10 bg-stone-900/60">

        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">

          <div className="mb-12">
            <div className="text-sm uppercase tracking-[0.3em] text-amber-300">Structure</div>
            <h2 className="mt-4 text-3xl font-semibold text-white">
              Company Structure
            </h2>
          </div>

          <div className="flex flex-col items-center gap-8 text-center">

            <div className="rounded-2xl border border-white/10 bg-white/5 px-8 py-6">
              <div className="font-semibold text-lg">Jackson Holdings</div>
              <div className="text-xs text-stone-400">Parent Company</div>
            </div>

            <div className="flex gap-10">

              <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-8 py-6">
                <div className="font-semibold">Omega Waypoint</div>
                <div className="text-xs text-stone-400">Commercial Logistics</div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-8 py-6">
                <div className="font-semibold">Longview Stewardship</div>
                <div className="text-xs text-stone-400">Entrepreneurial Network</div>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* COMPANIES */}
      <section id="companies" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">

        <div className="mb-12">
          <div className="text-sm uppercase tracking-[0.3em] text-amber-300">Operating Companies</div>
          <h2 className="mt-4 text-3xl font-semibold text-white">
            Current Ventures
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">

          {companies.map((company) => (

            <div key={company.name} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">

              <div className="flex items-center gap-4">
                <Logo text={company.logo} />

                <div>
                  <div className="text-xl font-semibold text-white">
                    {company.name}
                  </div>

                  <div className="text-xs uppercase tracking-wider text-stone-400">
                    {company.category}
                  </div>
                </div>

              </div>

              <p className="mt-4 text-sm text-stone-300">
                {company.description}
              </p>

            </div>

          ))}

        </div>

      </section>


      {/* LONGVIEW NETWORK */}
      <section id="network" className="border-t border-white/10 bg-stone-900/70">

        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">

          <div className="mb-12">
            <div className="text-sm uppercase tracking-[0.3em] text-amber-300">Longview Stewardship</div>
            <h2 className="mt-4 text-3xl font-semibold text-white">
              Private Entrepreneurial Network
            </h2>

            <p className="mt-4 max-w-3xl text-stone-300">
              Longview Stewardship operates as a private network designed to connect entrepreneurs, service providers, operators, and collaborators. Members participate in a curated ecosystem where referrals, advisory, partnerships, and marketing opportunities are shared among trusted participants.
            </p>

          </div>

          <div className="grid gap-4 md:grid-cols-2">

            {longviewModel.map((item, index) => (

              <div key={item} className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5">

                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-400 text-stone-950 font-semibold">
                  {index + 1}
                </div>

                <p className="text-stone-200">
                  {item}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* VISION */}
      <section id="vision" className="border-t border-white/10 bg-stone-900/50">

        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">

          <div className="mb-12">
            <div className="text-sm uppercase tracking-[0.3em] text-amber-300">Vision</div>
            <h2 className="mt-4 text-3xl font-semibold text-white">
              Built for long-term growth and selective expansion
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {pillars.map((pillar, index) => (
              <div key={pillar} className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-400 text-stone-950 font-semibold">
                  {index + 1}
                </div>
                <p className="text-stone-200">{pillar}</p>
              </div>
            ))}
          </div>

        </div>

      </section>


      {/* CONTACT */}
      <section id="contact" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">

        <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-10">

          <div className="text-sm uppercase tracking-[0.3em] text-amber-300">Contact</div>

          <h2 className="mt-4 text-3xl font-semibold text-white">
            Business Inquiries
          </h2>

          <p className="mt-4 text-stone-300">
            For partnerships, network membership inquiries, advisory opportunities, or discussions involving Jackson Holdings and its operating ventures.
          </p>

        </div>

      </section>


      {/* FOOTER */}
      <footer className="border-t border-white/10 px-6 py-8 text-sm text-stone-500 lg:px-8">

        <div className="mx-auto flex max-w-7xl flex-col gap-2 md:flex-row md:items-center md:justify-between">

          <div>© 2026 Jackson Holdings</div>

          <div>Parent company of Omega Waypoint and Longview Stewardship</div>

        </div>

      </footer>

    </div>
  );
}
