const onlineSteps = [
  'Order card: choose the card type.',
  'Personal details.',
  'Services and benefits.',
  'Terms and conditions.',
  'Payment: basic price ₹500, special offer 50% off, final price ₹250 including GST.',
  'Completion.',
  'Delivery within 7 working days.',
]

const requirements = [
  'Passport style photo.',
  'Aadhar card, passport, or any official legal identification document (ID card).',
  'Applicant over 18 years of age: scan or photograph of the applicant’s identity card (ID card or passport).',
  'Applicant under the age of 18: scan or photograph of the applicant’s identity card (ID card, passport, insurance card, or birth certificate) and the legal representative’s identity card (ID card or passport).',
]

const physicalSteps = [
  'Contact the sales team at the ServeSmile sales department.',
  'Order by phone, visit through our agents, or visit ServeSmile offices.',
  'Fill in the purchase order and keep a copy of it.',
  'Present any required documents.',
  'Complete payment by cash or transfer.',
  'Start getting benefits either by the copy of the purchase order or the online code.',
  'If it is a physical card, it will be delivered within 7 working days after the purchase order is approved.',
]

const renewalSteps = [
  'Contact the renewal department at ServeSmile offices by phone, contact media, or visit physically.',
  'Use self online renewal.',
  'ServeSmile sales agents can also visit you for renewal.',
]

function MuskaanHowToApply() {
  return (
    <section id="how-to-apply" className="mx-auto max-w-7xl px-4 pt-8 sm:px-6 lg:px-8">
      <div className="rounded-[2rem] border border-slate-200 bg-white px-5 py-6 shadow-[0_18px_45px_rgba(15,23,42,0.08)] sm:px-7 sm:py-8">
        <div className="max-w-3xl">
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-orange">How To Apply</p>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-800 sm:text-3xl">
            Muskan Discount Card Application Steps
          </h2>
          <p className="mt-3 text-sm leading-6 text-slate-500">
            Follow the online or physical application flow, complete the required documents, and finish payment to activate your card.
          </p>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-2">
          <article className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <h3 className="text-lg font-semibold text-slate-800">Online virtual ordering</h3>
            <ol className="mt-4 space-y-3 text-sm leading-6 text-slate-600">
              {onlineSteps.map((step, index) => (
                <li key={step} className="flex gap-3">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-slate-900 text-xs font-semibold text-white">
                    {index + 1}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <h3 className="text-lg font-semibold text-slate-800">Requirements for issuing</h3>
            <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-600">
              {requirements.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-orange" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <h3 className="text-lg font-semibold text-slate-800">Physical card ordering</h3>
            <ol className="mt-4 space-y-3 text-sm leading-6 text-slate-600">
              {physicalSteps.map((step, index) => (
                <li key={step} className="flex gap-3">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-slate-900 text-xs font-semibold text-white">
                    {index + 1}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <h3 className="text-lg font-semibold text-slate-800">Renewal of subscription</h3>
            <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-600">
              {renewalSteps.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-emerald-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  )
}

export default MuskaanHowToApply