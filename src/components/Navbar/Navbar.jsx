import { useState } from 'react'
import { Link } from 'react-router-dom'

const companyLinks = [
  { label: 'About Us', href: '#about' },
  { label: 'Our Mission', href: '#mission' },
  { label: 'Leadership', href: '#leadership' },
  { label: 'Careers', href: '#career' },
  { label: 'Contact', href: '#contact' },
]

const discountCardLinks = [
  { label: 'Muskaan Discount Card', href: '/muskaan-discount-card' },
  { label: 'Card Benefits', href: '#benefits' },
  { label: 'Card Services', href: '#services' },
  { label: 'How it works ?', href: '#how-it-works' },
  { label: 'Terms and Conditions', href: '#terms' },
  { label: 'FAQ', href: '#faq' },
  { label: 'How to Apply', href: '#how-to-apply' },
]

const discountCentreLinks = [
  { label: 'Retail Offers', href: '#retail' },
  { label: 'Dining Deals', href: '#dining' },
  { label: 'Travel Savings', href: '#travel' },
  { label: 'Healthcare', href: '#healthcare' },
  { label: 'Education', href: '#education' },
  { label: 'Lifestyle', href: '#lifestyle' },
]

function DropdownCard({ title, items, actionLabel, actionHref = '#' }) {
  return (
    <div className="pointer-events-none absolute left-1/2 top-full z-50 w-[21rem] -translate-x-1/2 pt-4 opacity-0 transition duration-200 group-hover:pointer-events-auto group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:opacity-100">
      <div className="overflow-hidden rounded-xl border border-slate-200 bg-white p-4 text-left shadow-sm">
        <div className="mb-3 border-b border-slate-100 pb-3">
          <h3 className="text-sm font-semibold tracking-wide text-dark-blue">{title}</h3>
        </div>

        <div className="space-y-1">
          {items.map((item) => (
            item.href.startsWith('/') ? (
              <Link
                key={item.label}
                to={item.href}
                className="block rounded-md px-3 py-2 text-sm font-medium text-gray-600 transition hover:bg-slate-100 hover:text-dark-blue"
              >
                {item.label}
              </Link>
            ) : (
              <a
                key={item.label}
                href={item.href}
                className="block rounded-md px-3 py-2 text-sm font-medium text-gray-600 transition hover:bg-slate-100 hover:text-dark-blue"
              >
                {item.label}
              </a>
            )
          ))}
        </div>

        {actionLabel ? (
          <div className="mt-4 border-t border-slate-100 pt-4">
            <a
              href={actionHref}
              className="inline-flex w-full items-center justify-center rounded-md bg-dark-blue px-4 py-3 text-sm font-semibold text-white transition hover:bg-navy-blue"
            >
              {actionLabel}
            </a>
          </div>
        ) : null}
      </div>
    </div>
  )
}

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="sticky top-2 z-50 px-3 sm:px-4 md:px-6">
      <div className="mx-auto flex max-w-7xl items-center justify-between rounded-2xl border border-slate-200 bg-white/95 px-3 py-2.5 sm:px-6 md:px-10 md:py-2 shadow-sm">
        <Link to="/" className="inline-flex items-center">
          <img
            src="/servesmilelogolatestnew3.png"
            alt="ServeSmile"
            className="h-8 w-auto sm:h-10"
          />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-8">
          <li className="group relative py-3">
            <button className="text-sm font-medium text-gray-600 transition hover:text-emerald-700">
              Company
            </button>
            <DropdownCard title="Company" items={companyLinks} />
          </li>

          <li>
            <a href="#trade" className="text-sm font-medium text-gray-600 transition hover:text-emerald-700">
              Global Trade
            </a>
          </li>

          <li className="group relative py-3">
            <Link to="/muskaan-discount-card" className="text-sm font-medium text-gray-600 transition hover:text-orange">
              Discount Card
            </Link>
            <DropdownCard
              title="Discount Card"
              items={discountCardLinks}
              actionLabel="Apply Now"
              actionHref="#apply-now"
            />
          </li>

          <li className="group relative py-3">
            <button className="text-sm font-medium text-gray-600 transition hover:text-orange">
              Discount Centre
            </button>
            <DropdownCard title="Discount Centre" items={discountCentreLinks} />
          </li>

          <li>
            <a href="#career" className="text-sm font-medium text-gray-600 transition hover:text-emerald-700">
              Career
            </a>
          </li>
        </ul>

        {/* Desktop CTA Buttons */}
        <div className="hidden lg:flex gap-3 items-center">
          <button className="text-gray-600 text-sm font-medium px-4 py-2 hover:text-emerald-700 transition">Sign In</button>
          <button className="bg-dark-blue text-white text-sm font-semibold px-6 py-2 rounded-lg hover:bg-navy-blue transition">Get Started</button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden flex flex-col gap-1.5 rounded-lg border border-slate-200 bg-white p-2"
          aria-label="Toggle menu"
        >
          <span className={`block h-0.5 w-5 bg-dark-blue transition ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block h-0.5 w-5 bg-dark-blue transition ${mobileMenuOpen ? 'opacity-0' : ''}`} />
          <span className={`block h-0.5 w-5 bg-dark-blue transition ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-2 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_10px_24px_rgba(15,23,42,0.12)]">
          <div className="flex flex-col">
            <a href="#company" className="px-4 py-3 text-sm font-medium text-gray-600 border-b border-slate-100 active:bg-slate-50">Company</a>
            <a href="#trade" className="px-4 py-3 text-sm font-medium text-gray-600 border-b border-slate-100 active:bg-slate-50">Global Trade</a>
            <Link to="/muskaan-discount-card" className="px-4 py-3 text-sm font-medium text-gray-600 border-b border-slate-100 active:bg-slate-50">Discount Card</Link>
            <a href="#discount-centre" className="px-4 py-3 text-sm font-medium text-gray-600 border-b border-slate-100 active:bg-slate-50">Discount Centre</a>
            <a href="#career" className="px-4 py-3 text-sm font-medium text-gray-600 border-b border-slate-100 active:bg-slate-50">Career</a>
            <div className="flex flex-col gap-2 p-3">
              <button className="text-gray-600 text-sm font-medium px-4 py-2 hover:text-emerald-700 transition w-full border border-slate-200 rounded-lg">Sign In</button>
              <button className="bg-dark-blue text-white text-sm font-semibold px-4 py-2 rounded-lg hover:bg-navy-blue transition w-full">Get Started</button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
