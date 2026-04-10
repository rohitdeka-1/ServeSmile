import MuskaanTermsAndConditions from './MuskaanTermsAndConditions'
import MuskaanFAQ from './MuskaanFAQ'
import MuskaanHowItWorks from './MuskaanHowItWorks'
import MuskaanServices from './MuskaanServices'
import MuskaanHowToApply from './MuskaanHowToApply'
import MuskaanBenefits from './MuskaanBenefits'

function MuskaanDiscountCard() {
  const muskaanCardImage = 'https://servesmile.in/siteImages/discountcardmuskanfront.png'
  const prerequisites = [
    'Valid Government ID (Aadhar/Voter ID)',
    'Passport size digital photograph',
    'Applicant age: 18 to 65 years',
    'Residency proof within operating network',
  ]

  return (
    <main className="min-h-screen bg-[#f6f7fb] pb-14">
      <section id="muskan-discount-card" className="relative overflow-hidden px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 rounded-[2rem] bg-[#f7f8fc] px-4 py-6 shadow-[0_30px_80px_rgba(15,23,42,0.08)] ring-1 ring-slate-200/70 sm:px-6 sm:py-8 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-10">
          <div className="max-w-2xl">
            <div className="inline-flex rounded-full bg-orange/15 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.16em] text-[#8d4f08]">
              Limited Launch Offer - ₹250
            </div>

            <h1 className="mt-5 text-4xl font-extrabold leading-[0.95] tracking-tight text-[#0f2740] sm:text-5xl lg:text-6xl">
              The Future of <span className="block text-[#ca6d06]">Smart Savings</span>
            </h1>

            <p className="mt-5 max-w-xl text-sm leading-7 text-slate-600 sm:text-base">
              Elevate your lifestyle with Muskan Discount Card. A curated ecosystem of high-end healthcare,
              shopping, and professional services designed for the architectural mind.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <button className="rounded-xl bg-[#1f3347] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_10px_20px_rgba(31,51,71,0.22)] transition hover:bg-[#17283a]">
                Apply for My Card
              </button>
              <button className="rounded-xl bg-[#d9e6f7] px-6 py-3.5 text-sm font-semibold text-[#24364b] transition hover:bg-[#c9daef]">
                View Merchant Network
              </button>
            </div>

            <div className="mt-8 border-t border-slate-200 pt-6">
              <div className="grid grid-cols-2 gap-6 sm:max-w-md sm:grid-cols-2">
                <div>
                  <div className="text-3xl font-bold tracking-tight text-[#1f3347]">500+</div>
                  <div className="mt-1 text-sm text-slate-500">Partner Stores</div>
                </div>
                <div>
                  <div className="text-3xl font-bold tracking-tight text-[#1f3347]">4.9/5</div>
                  <div className="mt-1 text-sm text-slate-500">User Rating</div>
                </div>
              </div>
            </div>
          </div>

          <div className="mx-auto w-full max-w-[32rem]">
            <div className="rounded-[1.7rem] bg-gradient-to-br from-[#20384e] via-[#223b51] to-[#2f475d] p-4 shadow-[0_28px_60px_rgba(15,23,42,0.18)] ring-1 ring-white/10 sm:p-5">
              <div className="rounded-[1.35rem] bg-[#0c1520] p-4 sm:p-5">
                <img
                  src={muskaanCardImage}
                  alt="Muskaan discount card"
                  className="w-full rounded-[1rem] object-cover shadow-[0_8px_24px_rgba(0,0,0,0.2)]"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <MuskaanBenefits />

      <MuskaanServices />

      <MuskaanHowItWorks />

      <MuskaanTermsAndConditions />

      <MuskaanFAQ />

      <MuskaanHowToApply />

      <section id="apply-now" className="mx-auto max-w-7xl px-4 pt-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 overflow-hidden rounded-[2rem] bg-[#15283a] shadow-[0_24px_60px_rgba(15,23,42,0.12)] lg:grid-cols-[1fr_0.92fr]">
          <div className="px-5 py-7 text-white sm:px-8 sm:py-10 lg:px-10 lg:py-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Apply for Muskan Card</h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-slate-400 sm:text-base">
              Join the network of elite savers. Our application process is streamlined for professional efficiency.
            </p>

            <div className="mt-8">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-orange/70">Prerequisites</p>
              <ul className="mt-5 space-y-4 text-sm text-slate-200">
                {prerequisites.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-400">
                      ✓
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-[#15283a] px-5 py-7 sm:px-8 sm:py-10 lg:px-10 lg:py-12">
            <div className="rounded-[1.5rem] bg-white px-5 py-6 shadow-[0_18px_40px_rgba(15,23,42,0.18)] sm:px-7 sm:py-8">
              <h3 className="text-2xl font-bold text-slate-800">Start Your Application</h3>

              <form className="mt-6 space-y-5">
                <label className="block">
                  <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-slate-500">Full Legal Name</span>
                  <input
                    type="text"
                    placeholder="Enter your full name"
                    className="mt-2 w-full rounded-lg border-0 bg-[#eef4ff] px-4 py-3 text-sm text-slate-700 outline-none ring-1 ring-transparent transition placeholder:text-slate-400 focus:ring-2 focus:ring-orange/40"
                  />
                </label>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <label className="block">
                    <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-slate-500">Phone Number</span>
                    <input
                      type="tel"
                      placeholder="+91"
                      className="mt-2 w-full rounded-lg border-0 bg-[#eef4ff] px-4 py-3 text-sm text-slate-700 outline-none ring-1 ring-transparent transition placeholder:text-slate-400 focus:ring-2 focus:ring-orange/40"
                    />
                  </label>

                  <label className="block">
                    <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-slate-500">Date of Birth</span>
                    <input
                      type="text"
                      placeholder="mm/dd/yyyy"
                      className="mt-2 w-full rounded-lg border-0 bg-[#eef4ff] px-4 py-3 text-sm text-slate-700 outline-none ring-1 ring-transparent transition placeholder:text-slate-400 focus:ring-2 focus:ring-orange/40"
                    />
                  </label>
                </div>

                <label className="block">
                  <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-slate-500">Email Address</span>
                  <input
                    type="email"
                    placeholder="name@example.com"
                    className="mt-2 w-full rounded-lg border-0 bg-[#eef4ff] px-4 py-3 text-sm text-slate-700 outline-none ring-1 ring-transparent transition placeholder:text-slate-400 focus:ring-2 focus:ring-orange/40"
                  />
                </label>

                <button
                  type="button"
                  className="w-full rounded-lg bg-[#b36400] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_12px_24px_rgba(179,100,0,0.25)] transition hover:bg-[#9f5900]"
                >
                  Submit & Pay ₹250
                </button>

                <p className="text-center text-xs text-slate-400">Secure SSL Encrypted Payment Process</p>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="mt-8 border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-10 md:px-10">
          <div className="overflow-hidden rounded-[2rem] bg-gradient-to-r from-slate-900 via-[#102a42] to-[#16384c] px-5 py-9 text-center text-white shadow-[0_16px_30px_rgba(15,23,42,0.2)] sm:px-10 sm:py-12">
            <div className="pointer-events-none mx-auto mb-3 h-1 w-20 rounded-full bg-gradient-to-r from-emerald-400 to-orange" />
            <h2 className="mx-auto max-w-2xl text-2xl font-bold leading-tight sm:text-4xl">
              Ready to curate your professional future?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm text-slate-300 sm:text-xl">
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

          <div className="mt-8 flex flex-col gap-3 border-t border-slate-200 pt-5 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">
            <p>Copyright 2026 ServeSmile. All rights reserved.</p>
            <div className="flex gap-4 sm:gap-6">
              <a href="#privacy" className="transition hover:text-slate-600">Privacy Policy</a>
              <a href="#terms" className="transition hover:text-slate-600">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}

export default MuskaanDiscountCard
