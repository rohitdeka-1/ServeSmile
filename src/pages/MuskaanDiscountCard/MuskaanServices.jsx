const services = [
  'ServeSmile advertising, informational media, and service center.',
  'Reducing expenses by purchasing goods and services at the lowest cost compared to market prices.',
  'Website: Servesmile.in / Servesmilediscounts.com / ServeSmile applications and software.',
  'Call center.',
  'Hotline 24/7.',
  'Directory, guides, and different printed accessories.',
  'Company sales representatives and marketing departments and units.',
  'ServeSmile offices and branches.',
  'Specialized professional service by an excellent team, follow-up, and field inspection.',
]

function MuskaanServices() {
  return (
    <section id="services" className="mx-auto max-w-7xl px-4 pt-8 sm:px-6 lg:px-8">
      <div className="rounded-[2rem] border border-slate-200 bg-white px-5 py-6 shadow-[0_18px_45px_rgba(15,23,42,0.08)] sm:px-7 sm:py-8">
        <div className="max-w-3xl">
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-orange">Muskan Discount Card Services</p>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-800 sm:text-3xl">
            Services for Subscribers
          </h2>
          <p className="mt-3 text-sm leading-6 text-slate-500">
            The services provided by Servesmile to subscribers of the Muskan discount card help them use it and get the maximum benefit.
          </p>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
          {services.map((service, index) => (
            <article key={`${index + 1}-${service.slice(0, 18)}`} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <div className="flex items-start gap-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-900 text-sm font-semibold text-white">
                  {index + 1}
                </span>
                <p className="text-sm leading-6 text-slate-600">{service}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default MuskaanServices