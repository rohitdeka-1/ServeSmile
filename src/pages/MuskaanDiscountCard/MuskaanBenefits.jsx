const benefits = [
  'Great discounts on offline and online shopping.',
  'Open limit for using Muskan Discount Card, with no limits for purchase and spending value.',
  'Reducing expenses by purchasing goods and services at the lowest cost compared to market prices.',
  'Saving money through discounts received when buying needs from our discount centers.',
  'Card holders can start saving money instantly on the same day of subscription.',
  'Increasing the purchasing power of members and cardholders by making prices more affordable.',
  'A unique discount saving card that can be used through lakhs of discount centers and merchant partners.',
  'Access to lakhs of multi-business fields and different shops online and offline.',
  'Developing the economic situation in the whole country.',
]

function MuskaanBenefits() {
  return (
    <section id="benefits" className="mx-auto max-w-7xl px-4 pt-8 sm:px-6 lg:px-8">
      <div className="rounded-[2rem] border border-slate-200 bg-white px-5 py-6 shadow-[0_18px_45px_rgba(15,23,42,0.08)] sm:px-7 sm:py-8">
        <div className="max-w-3xl">
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-orange">Muskan Discount Card Benefits</p>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-800 sm:text-3xl">
            For ServeSmile Savings Card Subscribers
          </h2>
          <p className="mt-3 text-sm leading-6 text-slate-500">
            These are the core benefits subscribers get from the Muskan Discount Card program.
          </p>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => (
            <article key={`${index + 1}-${benefit.slice(0, 18)}`} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <div className="flex items-start gap-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-900 text-sm font-semibold text-white">
                  {index + 1}
                </span>
                <p className="text-sm leading-6 text-slate-600">{benefit}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default MuskaanBenefits