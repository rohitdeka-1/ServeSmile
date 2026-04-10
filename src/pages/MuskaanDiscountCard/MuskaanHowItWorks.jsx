const steps = [
  {
    number: '1',
    text: 'Customers should buy and get their cards through online channels or directly through our offices or agents.',
  },
  {
    number: '2',
    text: 'Whether the card is physical or virtual, the buyer should keep it with them and show it to sellers at our discount centers.',
  },
  {
    number: '3',
    text: 'Discount centers will be listed on the Servesmile website or other media chosen by Servesmile, such as a printed directory, call and support center, hotline, applications, or others.',
  },
  {
    number: '4',
    text: 'After the buying process is completed, the cardholder should show the card to the cashier to get the discounts.',
  },
  {
    number: '5',
    text: 'If the service is not convenient or the buyer is not satisfied, they should send a message to Servesmile.',
  },
  {
    number: '6',
    text: 'The card has no limits, so the cardholder should use it as much as possible to get more discounts and save more.',
  },
]

function MuskaanHowItWorks() {
  return (
    <section id="how-it-works" className="mx-auto max-w-7xl px-4 pt-8 sm:px-6 lg:px-8">
      <div className="rounded-[2rem] border border-slate-200 bg-white px-5 py-6 shadow-[0_18px_45px_rgba(15,23,42,0.08)] sm:px-7 sm:py-8">
        <div className="max-w-3xl">
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-orange">How It Works</p>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-800 sm:text-3xl">
            Using the Muskaan Discount Card
          </h2>
          <p className="mt-3 text-sm leading-6 text-slate-500">
            A simple step-by-step overview of how members buy, carry, and use the card across discount centers.
          </p>
        </div>

        <div className="mt-6 space-y-4">
          {steps.map((step) => (
            <article key={step.number} className="rounded-2xl border border-slate-200 bg-slate-50 p-4 sm:p-5">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-orange text-sm font-bold text-white shadow-sm">
                  {step.number}
                </div>
                <p className="text-sm leading-6 text-slate-600 sm:text-base">{step.text}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-6 flex flex-col gap-3 rounded-2xl bg-slate-900 px-5 py-5 text-white sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 className="text-lg font-semibold">Ready to apply?</h3>
            <p className="mt-1 text-sm text-slate-300">Get started through the official registration page or contact the team.</p>
          </div>
          <a
            href="#apply-now"
            className="inline-flex items-center justify-center rounded-lg bg-orange px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#a85f13]"
          >
            Apply Now
          </a>
        </div>
      </div>
    </section>
  )
}

export default MuskaanHowItWorks