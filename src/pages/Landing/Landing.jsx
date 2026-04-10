import { useEffect, useState } from 'react'
import heroGif from '../../assets/hero.gif'


const benefitSections = {
  discountCentre: {
    label: 'Discount Centre',
    chip: 'Discount Centre Benefits',
    partnerTitle: 'Grow your store network with high-intent local demand',
    summary:
      'A practical ecosystem for merchants to attract, convert, and retain nearby customers with structured promotional campaigns.',
    points: [
      'Increase and maximize buyer and potential customer flow.',
      'Build stronger customer loyalty with recurring store visits.',
      'Improve sales velocity through localized discount campaigns.',
      'Create additional financial income channels for merchants.',
      'Strengthen your brand visibility in high-intent audiences.',
    ],
    outcomes: ['Increase customers', 'Increase sales', 'Increase income'],
    kpis: [
      { label: 'Avg buyer uplift', value: '+28%' },
      { label: 'Repeat visits', value: '2.3x' },
      { label: 'Campaign ROI', value: '+41%' },
    ],
    primaryCta: 'Read More',
    secondaryCta: 'Apply Now',
    registerCta: 'Register Now',
  },
  discountCard: {
    label: 'Discount Card',
    chip: 'Discount Card Benefits',
    partnerTitle: 'Launch card programs that customers actually keep using',
    summary:
      'Design loyalty cards with clear savings, repeat value, and partner utility so customers stay engaged over time.',
    points: [
      'Offer member-exclusive rewards that feel immediately valuable.',
      'Drive repeat purchases with tiered rewards and cashback.',
      'Use card analytics to personalize campaigns and offers.',
      'Reduce churn with renewal incentives and milestone perks.',
      'Enable seamless partnerships with partner merchants.',
    ],
    outcomes: ['Higher retention', 'More transactions', 'Smarter campaigns'],
    kpis: [
      { label: 'Retention rate', value: '+34%' },
      { label: 'Card usage', value: '3.1x' },
      { label: 'Offer redemption', value: '+52%' },
    ],
    primaryCta: 'Read Features',
    secondaryCta: 'Apply Now',
    registerCta: 'Get Started',
  },
  jobCandidate: {
    label: 'Job Candidate',
    chip: 'Job Candidate Benefits',
    partnerTitle: 'Connect opportunities with the right talent faster',
    summary:
      'Modern candidate workflows for employers and applicants with faster screening, stronger fit, and reduced hiring costs.',
    points: [
      'Get role-matched candidate recommendations instantly.',
      'Track candidate progress from application to onboarding.',
      'Promote vacancies to high-intent local talent pools.',
      'Improve placement quality with profile-based screening.',
      'Build sustainable hiring pipelines with lower acquisition cost.',
    ],
    outcomes: ['Faster hiring', 'Better matches', 'Lower hiring cost'],
    kpis: [
      { label: 'Time to hire', value: '-37%' },
      { label: 'Match quality', value: '+29%' },
      { label: 'Cost per hire', value: '-21%' },
    ],
    primaryCta: 'Read More',
    secondaryCta: 'Post Job',
    registerCta: 'Register Employer',
  },
}

const targetMetrics = [
  '1.26+ Million Company',
  '36+ Million Small Businesses',
  '100+ Million Individual Business',
  '472+ Million Labors',
  '100+ Million Job and Income Seekers',
  '1.39+ Billion Support Ecosystem',
]

const loopingTargetMetrics = [...targetMetrics, ...targetMetrics]

const latestInsights = [
  {
    category: 'Industry Trends',
    readTime: '5 min read',
    title: 'The Convergence of Architecture and Trade Dynamics',
    summary: 'How modern architectural principles are being applied to streamline global supply chains and trade networks...',
    visual: 'from-[#0b1829] via-[#122744] to-[#0d2238]',
  },
  {
    category: 'Technology',
    readTime: '8 min read',
    title: 'Next-Gen Loyalty: Beyond the Traditional Points System',
    summary: 'Exploring the shift towards experiential rewards and community-driven loyalty programs in the B2B space...',
    visual: 'from-[#0b1725] via-[#0f2238] to-[#0a1422]',
  },
  {
    category: 'Enterprise',
    readTime: '4 min read',
    title: 'Building a Sustainable Business Ecosystem',
    summary: 'Practical steps for enterprises to leverage circular economy principles through smart trade and procurement...',
    visual: 'from-[#0f2239] via-[#243f60] to-[#142a43]',
  },
]

function Landing() {
  const [activeSection, setActiveSection] = useState('discountCentre')
  const [showAllPoints, setShowAllPoints] = useState(false)
  const [currentInsight, setCurrentInsight] = useState(0)
  const [isCarouselAnimating, setIsCarouselAnimating] = useState(true)
  const activeData = benefitSections[activeSection]
  const visiblePoints = showAllPoints ? activeData.points : activeData.points.slice(0, 3)
  const carouselInsights = [...latestInsights, ...latestInsights]
  const activeInsightIndex = currentInsight % latestInsights.length

  useEffect(() => {
    setShowAllPoints(false)
  }, [activeSection])

  useEffect(() => {
    const carouselTimer = window.setInterval(() => {
      setCurrentInsight((prev) => prev + 1)
    }, 3000)

    return () => {
      window.clearInterval(carouselTimer)
    }
  }, [])

  useEffect(() => {
    if (currentInsight >= latestInsights.length) {
      setIsCarouselAnimating(false)
      const resetTimer = window.setTimeout(() => {
        setCurrentInsight(0)
      }, 500)

      return () => {
        window.clearTimeout(resetTimer)
      }
    }

    setIsCarouselAnimating(true)
  }, [currentInsight])

  useEffect(() => {
    if (!isCarouselAnimating) {
      const frame = window.requestAnimationFrame(() => {
        setIsCarouselAnimating(true)
      })

      return () => {
        window.cancelAnimationFrame(frame)
      }
    }
  }, [isCarouselAnimating])

  const showPreviousInsight = () => {
    if (currentInsight === 0) {
      setIsCarouselAnimating(false)
      setCurrentInsight(latestInsights.length)

      window.requestAnimationFrame(() => {
        setIsCarouselAnimating(true)
        setCurrentInsight(latestInsights.length - 1)
      })
      return
    }

    setCurrentInsight((prev) => prev - 1)
  }

  const showNextInsight = () => {
    setCurrentInsight((prev) => prev + 1)
  }

  return (
    <>
      <section className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-6 sm:gap-8 md:gap-14 px-4 sm:px-6 md:px-10 pb-10 sm:pb-16 pt-7 sm:pt-12 md:pb-20 md:pt-16 lg:grid-cols-2">
        <div className="flex max-w-3xl flex-col items-center gap-4 text-center sm:gap-6 md:items-start md:text-left">
          <div className="inline-block w-fit rounded-full border border-emerald-200 bg-emerald-600 px-3 sm:px-4 py-1.5 sm:py-2 text-xs font-semibold tracking-wider text-white">
            ✓ TRUSTED BY 500+ GLOBAL ENTERPRISES
          </div>
          <h1 className="text-2xl sm:text-4xl md:text-4xl lg:text-5xl font-bold leading-tight text-dark-blue">
            Empowering <span className="text-orange">Businesses,</span> Rewarding <span className="italic">Customers.</span>
          </h1>
          <p className="max-w-md text-sm sm:text-base leading-relaxed text-gray-600">
            The ultimate ecosystem where architectural precision meets curated trade opportunities. Drive growth, minimize costs, and maximize loyalty.
          </p>
          <div className="mt-2 flex w-full flex-col gap-2.5 sm:w-auto sm:flex-row sm:gap-3">
            <button className="w-full sm:w-auto rounded-lg bg-dark-blue px-6 sm:px-8 py-2.5 sm:py-3 text-xs sm:text-sm font-semibold text-white transition hover:bg-navy-blue">Join ServeSmile</button>
            <button className="w-full sm:w-auto rounded-lg border border-emerald-200 bg-emerald-50 px-6 sm:px-8 py-2.5 sm:py-3 text-xs sm:text-sm font-semibold text-emerald-700 transition hover:bg-emerald-100">Watch Vision Film</button>
          </div>
        </div>

        <div className="mt-4 flex items-center justify-center md:mt-0 md:justify-end">
          <img
            src={heroGif}
            alt="ServeSmile hero"
            width="640"
            height="640"
            loading="lazy"
            decoding="async"
            fetchPriority="low"
            className="h-48 sm:h-56 md:h-64 lg:h-72 w-auto object-contain"
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 md:px-10 pb-9 sm:pb-12 lg:pb-16">
        <div className="mb-5 sm:mb-8 rounded-2xl border border-slate-200 bg-white p-3 sm:p-4 md:p-4 shadow-[0_10px_30px_rgba(15,23,42,0.08)]">
          <div className="flex flex-col gap-2 sm:gap-3 md:flex-row md:items-center">
            <div className="shrink-0 rounded-xl bg-slate-50 px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm md:text-base font-semibold text-slate-700 border border-slate-200">
              Our Target
            </div>

            <div className="w-full overflow-x-auto">
              <div className="w-full overflow-hidden rounded-xl bg-slate-800">
                <div className="target-marquee inline-flex w-max items-center gap-2 sm:gap-4 px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm font-medium text-slate-100 will-change-transform motion-reduce:animate-none">
                  {loopingTargetMetrics.map((metric, index) => (
                    <span key={`${metric}-${index}`} className="whitespace-nowrap">
                      {metric}
                      <span className="mx-4 text-slate-400">.</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4 rounded-2xl border border-slate-200 bg-slate-100/70 p-4 sm:p-5">
            <h3 className="text-2xl font-bold tracking-tight text-slate-800">Strategic Advantages</h3>
            <p className="mt-2 text-sm text-slate-600">
              A dual-sided ecosystem designed to curate value for both ends of the marketplace.
            </p>

            <div className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-[1.4fr_1fr]">
              <article className="overflow-hidden rounded-2xl bg-slate-900 text-white">
                <div className="grid grid-cols-1 sm:grid-cols-[1fr_170px]">
                  <div className="p-5 sm:p-6">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-orange">For sellers and partners</p>
                    <h4 className="mt-3 text-3xl font-bold leading-tight">Scale Your Enterprise</h4>

                    <ul className="mt-4 space-y-2.5 text-sm text-slate-100">
                      <li className="flex items-center gap-2.5">
                        <span className="inline-flex h-4 w-4 items-center justify-center rounded-full border border-orange text-[10px] text-orange">✓</span>
                        Direct Access to High-Intent Corporate Buyers
                      </li>
                      <li className="flex items-center gap-2.5">
                        <span className="inline-flex h-4 w-4 items-center justify-center rounded-full border border-orange text-[10px] text-orange">✓</span>
                        Automated Loyalty and Reward Infrastructure
                      </li>
                      <li className="flex items-center gap-2.5">
                        <span className="inline-flex h-4 w-4 items-center justify-center rounded-full border border-orange text-[10px] text-orange">✓</span>
                        Real-time Market Insights and Analytics
                      </li>
                    </ul>

                    <button className="mt-5 rounded-lg bg-orange px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#ab6015]">
                      Partner with Us
                    </button>
                  </div>

                  <div className="hidden bg-gradient-to-br from-[#114044] to-[#0f3034] sm:block" />
                </div>
              </article>

              <article className="rounded-2xl bg-[#e7edf5] p-5 sm:p-6">
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-orange">For customers</p>
                <h4 className="mt-3 text-3xl font-bold leading-tight text-slate-800">Curated Rewards</h4>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  Unlock exclusive institutional-grade discounts and earn ServeSmile points with every interaction.
                </p>

                <div className="mt-5 space-y-2.5">
                  <button className="flex w-full items-center justify-between rounded-lg bg-white px-4 py-2.5 text-left text-sm font-semibold text-slate-700 transition hover:bg-slate-50">
                    Discount Centre
                    <span className="text-orange">&gt;</span>
                  </button>
                  <button className="flex w-full items-center justify-between rounded-lg bg-white px-4 py-2.5 text-left text-sm font-semibold text-slate-700 transition hover:bg-slate-50">
                    Premium Membership
                    <span className="text-orange">&gt;</span>
                  </button>
                </div>
              </article>
            </div>
          </div>
        </div>

        <div className="mb-4 sm:mb-5 text-center">
          <span className="inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500 shadow-sm">
            Featured Benefits
          </span>
          <h2 className="mt-2 text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-slate-800">
            ServeSmile Projects <span className="text-orange">Benefits</span>
          </h2>
          <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm md:text-base text-slate-500">Save More - Grow More - Get More Income</p>
        </div>

        <div className="grid grid-cols-1 gap-2 rounded-xl border border-slate-200 bg-white/90 p-2 sm:grid-cols-3">
          {Object.entries(benefitSections).map(([key, section]) => {
            const isActive = activeSection === key

            return (
              <button
                key={key}
                type="button"
                onClick={() => setActiveSection(key)}
                className={`rounded-lg border px-3 py-2.5 text-center text-sm font-semibold tracking-normal transition ${
                  isActive
                    ? 'border-slate-900 bg-slate-900 text-white shadow-[0_6px_16px_rgba(15,23,42,0.28)]'
                    : 'border-transparent bg-white text-slate-600 hover:border-slate-200 hover:bg-slate-50'
                }`}
              >
                {section.label}
              </button>
            )
          })}
        </div>

        <div className="mt-3 sm:mt-4 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_12px_30px_rgba(15,23,42,0.08)]">
          <div className="grid gap-0 grid-cols-1 md:grid-cols-[1.15fr_0.85fr]">
            <div className="bg-white p-4 sm:p-5 md:p-6">
              <div className="inline-flex rounded-lg border border-emerald-200 bg-emerald-50 px-2.5 py-0.5 sm:px-3 sm:py-1 text-xs font-semibold tracking-wide text-emerald-700">
                {activeData.chip}
              </div>

              <h3 className="mt-2 sm:mt-3 text-base sm:text-lg md:text-xl font-semibold leading-snug text-slate-900">
                {activeData.partnerTitle}
              </h3>

              <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm md:text-[15px] leading-5 sm:leading-6 text-slate-600">
                {activeData.summary}
              </p>

              <div className="mt-3 sm:mt-4 grid grid-cols-1 gap-2.5 md:grid-cols-2">
                {visiblePoints.map((point, index) => (
                  <div key={point} className="group relative rounded-xl border border-slate-200 bg-white p-3 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md cursor-default">
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-slate-50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    <div className="relative flex items-start gap-2 sm:gap-3">
                      <div className="inline-flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-lg bg-slate-900 text-xs font-bold text-white flex-shrink-0 group-hover:bg-orange transition-colors duration-300">
                        {index + 1}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs sm:text-sm md:text-sm font-medium text-slate-800 leading-4 sm:leading-5 group-hover:text-dark-blue transition-colors">{point}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {activeData.points.length > 3 ? (
                <button
                  type="button"
                  onClick={() => setShowAllPoints((prev) => !prev)}
                  className="mt-2 inline-flex items-center rounded-md border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs font-semibold text-slate-700 transition hover:bg-slate-100"
                >
                  {showAllPoints ? 'Show less' : `Show all ${activeData.points.length} benefits`}
                </button>
              ) : null}

              <div className="mt-3 flex flex-col gap-2 sm:mt-3 sm:flex-row sm:flex-wrap sm:gap-2">
                <button className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs font-semibold text-slate-700 transition hover:bg-slate-50 sm:w-auto">
                  {activeData.primaryCta}
                </button>
                <button className="w-full rounded-lg bg-dark-blue px-3 py-2 text-xs font-semibold text-white transition hover:bg-navy-blue sm:w-auto">
                  {activeData.secondaryCta}
                </button>
              </div>
            </div>

            <div className="border-t border-slate-200 bg-slate-900 p-4 sm:p-5 text-white md:border-l md:border-t-0 md:p-6">
              <h4 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-300">Key Outcomes</h4>

              <ul className="mt-2 sm:mt-3 space-y-1 sm:space-y-1.5 text-xs sm:text-sm text-slate-100">
                {activeData.outcomes.map((outcome) => (
                  <li key={outcome} className="flex items-center gap-1.5">
                    <span className="h-1 w-1 sm:h-1.5 sm:w-1.5 rounded-full bg-emerald-400 flex-shrink-0" />
                    {outcome}
                  </li>
                ))}
              </ul>

              <div className="mt-2.5 sm:mt-3 space-y-1 sm:space-y-1.5">
                {activeData.kpis.map((kpi) => (
                  <div key={kpi.label} className="flex items-center justify-between rounded-lg border border-white/10 bg-white/10 px-2 sm:px-2.5 py-1 sm:py-1.5 backdrop-blur-[1px]">
                    <span className="text-xs text-slate-300">{kpi.label}</span>
                    <span className="text-xs sm:text-sm font-semibold text-white">{kpi.value}</span>
                  </div>
                ))}
              </div>

              <button className="mt-3 w-full rounded-lg bg-orange px-3 py-2 text-xs font-semibold text-white transition hover:bg-[#b6691f]">
                {activeData.registerCta}
              </button>
              <p className="mt-1 text-center text-[11px] text-slate-300">No setup fee. Start in minutes.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 md:px-10 pb-10 sm:pb-12">
        <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-800">Latest Insights</h2>
            <p className="mt-2 text-sm text-slate-600">
              Curated perspectives on trade, architecture, and business efficiency.
            </p>
          </div>
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              type="button"
              onClick={showPreviousInsight}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 transition hover:border-slate-300 hover:text-slate-800"
              aria-label="Previous article"
            >
              &larr;
            </button>
            <button
              type="button"
              onClick={showNextInsight}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 transition hover:border-slate-300 hover:text-slate-800"
              aria-label="Next article"
            >
              &rarr;
            </button>
            <a href="#articles" className="ml-1 inline-flex items-center gap-2 text-sm font-semibold text-orange transition hover:text-[#a85f13]">
              View All Articles
              <span>&rarr;</span>
            </a>
          </div>
        </div>

        <div className="overflow-hidden">
          <div
            className={`flex ${isCarouselAnimating ? 'transition-transform duration-500 ease-in-out' : ''}`}
            style={{ transform: `translateX(-${(currentInsight * 100) / 3}%)` }}
          >
            {carouselInsights.map((article, index) => (
              <div key={`${article.title}-${index}`} className="w-full shrink-0 px-2 lg:w-1/3">
                <article className="group rounded-2xl border border-slate-200 bg-white p-3 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
                  <div className={`relative h-44 overflow-hidden rounded-xl bg-gradient-to-br ${article.visual}`}>
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(16,185,129,0.18),transparent_55%)]" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,rgba(249,115,22,0.18),transparent_55%)]" />
                  </div>

                  <div className="mt-3 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-orange">
                    <span>{article.category}</span>
                    <span className="text-slate-300">•</span>
                    <span className="normal-case tracking-normal text-slate-500">{article.readTime}</span>
                  </div>

                  <h3 className="mt-2 text-2xl font-bold leading-tight text-slate-800">{article.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-500">{article.summary}</p>
                </article>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-3 flex items-center justify-center gap-2">
          {latestInsights.map((article, index) => (
            <button
              key={article.title}
              type="button"
              onClick={() => setCurrentInsight(index)}
              className={`h-2.5 rounded-full transition ${index === activeInsightIndex ? 'w-6 bg-orange' : 'w-2.5 bg-slate-300 hover:bg-slate-400'}`}
              aria-label={`Go to article ${index + 1}`}
            />
          ))}
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-10 py-8 sm:py-10">
          <div className="overflow-hidden rounded-[2rem] bg-gradient-to-r from-slate-900 via-[#102a42] to-[#16384c] px-5 py-9 text-center text-white shadow-[0_16px_30px_rgba(15,23,42,0.2)] sm:px-10 sm:py-12">
            <div className="pointer-events-none mx-auto mb-3 h-1 w-20 rounded-full bg-gradient-to-r from-emerald-400 to-orange" />
            <h2 className="mx-auto max-w-2xl text-2xl sm:text-4xl font-bold leading-tight">
              Ready to curate your professional future?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm sm:text-xl text-slate-300">
              Join thousands of businesses and professionals already benefiting from the ServeSmile ecosystem.
            </p>

            <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:mt-8 sm:flex-row sm:gap-4">
              <button className="w-full max-w-[320px] rounded-lg bg-orange px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#a85f13] sm:text-base">
                Create Business Account
              </button>
              <button className="w-full max-w-[320px] rounded-lg border border-emerald-300/40 bg-transparent px-6 py-3 text-sm font-semibold text-emerald-100 transition hover:bg-emerald-500/10 sm:text-base">
                Contact Our Team
              </button>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <img
                src="/servesmilelogolatestnew3.png"
                alt="ServeSmile"
                className="h-10 w-auto"
              />
              <p className="mt-3 max-w-[230px] text-sm leading-6 text-slate-500">
                The premier architectural trade curation platform.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-slate-900">Company Info</h4>
              <ul className="mt-3 space-y-2 text-sm text-slate-500">
                <li><a href="#about" className="transition hover:text-emerald-700">About Us</a></li>
                <li><a href="#vision" className="transition hover:text-emerald-700">Our Vision</a></li>
                <li><a href="#leadership" className="transition hover:text-emerald-700">Leadership</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-slate-900">Quick Links</h4>
              <ul className="mt-3 space-y-2 text-sm text-slate-500">
                <li><a href="#discount-centre" className="transition hover:text-orange">Discount Centre</a></li>
                <li><a href="#career" className="transition hover:text-orange">Career Portal</a></li>
                <li><a href="#trade" className="transition hover:text-orange">Global Trade Hub</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-slate-900">Contact Us</h4>
              <a href="mailto:support@servesmile.com" className="mt-3 inline-block text-sm text-slate-500 transition hover:text-emerald-700">
                support@servesmile.com
              </a>
              <div className="mt-4 flex gap-2">
                <button className="h-9 w-9 rounded-full border border-slate-300 text-xs font-semibold text-slate-500 transition hover:border-emerald-300 hover:text-emerald-700">in</button>
                <button className="h-9 w-9 rounded-full border border-slate-300 text-xs font-semibold text-slate-500 transition hover:border-orange/50 hover:text-orange">x</button>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-3 border-t border-slate-200 pt-5 text-xs sm:flex-row sm:items-center sm:justify-between text-slate-400">
            <p>Copyright 2026 ServeSmile. All rights reserved.</p>
            <div className="flex gap-4 sm:gap-6">
              <a href="#privacy" className="transition hover:text-slate-600">Privacy Policy</a>
              <a href="#terms" className="transition hover:text-slate-600">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Landing
