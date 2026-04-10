const termsAndConditions = [
  'The ServeSmile Discount Card is the property of ServeSmile Pvt. Ltd. It is not a credit or debit card. The beneficiary of the card shall be the cardholder.',
  'Any person can get a ServeSmile Discount Card, but the signature holder must be over 18 years of age. For applicants under 18 years of age, the legal representative must sign.',
  'Membership benefits under the ServeSmile Saving Discount Card project are at the sole discretion of ServeSmile, and the company may refuse membership to any applicant without assigning any reason.',
  'The benefits of the ServeSmile Discount Card are for the primary subscriber and those for whom the subscriber bears financial responsibility.',
  'This card is for personal and family use only and not for commercial purposes.',
  'The subscriber must show an identity card or other identification document when using the discount card at a discount center.',
  'The member must present the ServeSmile Discount Card at the cash counter before the start of billing to avail discounts and other benefits.',
  'The discount center has the right to verify the identity of the cardholder and the validity of the card.',
  'Available benefit programs by merchants and discount ratios may change from time to time or may be withdrawn without prior notice. Such changes are binding on the customer. ServeSmile Pvt. Ltd. shall not be responsible for any liabilities arising from such situations.',
  'When any emergency problem occurs, the company call center or hotline must be contacted to inform the company about the nature of the problem so it can be addressed and, where possible, resolved.',
  'The cardholder undertakes to send a written letter to the management of ServeSmile Company in the event that discounts or services due to the cardholder are not received.',
  'All claims and disputes arising under these terms and conditions must be brought to the notice of ServeSmile Pvt. Ltd. within 30 days at care@servesmile.in. Thereafter, no member shall have any claims against ServeSmile Pvt. Ltd.',
  'The approved discount centers shall bear full responsibility if they violate the conditions of participation, refuse to offer discounts, or manipulate prices.',
  'The subscriber or cardholder bears full responsibility in the event of misuse of the card or violation of the subscription terms.',
  'ServeSmile shall not be held responsible for any fraud or misuse of this membership card, and you agree to be personally liable for any costs, taxes, charges, claims, or liabilities arising from such fraud or misuse.',
  'ServeSmile reserves the right to disqualify any person from further participation in the ServeSmile Saving Discount Card project if it finds that person or party violating the terms and conditions mentioned herein.',
  'To obtain the full benefit from the subscription and the discount card, the subscriber must use it to the maximum extent possible at the authorized ServeSmile discount centers.',
  'The cardholder must communicate regularly with ServeSmile Company and its representatives to learn about the latest developments and progress that will help the cardholder make the most of the discount membership.',
  'The validity of the card depends on the type of card and the agreement with the subscriber, subject to renewal and extension with the consent of both parties: ServeSmile Company and the participant in the savings program.',
  'The subscriber can benefit from the savings service directly by showing a copy of the signed subscription application and paying the subscription value, or by submitting the application online and receiving the OTP code, client number, and subscription card number.',
  'The maximum date to approve the subscription is within 7 days from the date of receiving the application form, subscription application, and membership fees by the management of ServeSmile Company.',
  'The right to add, amend, change, alter, or terminate this program, including the program structure, without prior notice remains with ServeSmile Pvt. Ltd. Any changes will be notified on www.servesmile.in from time to time.',
  'Any communication from the ServeSmile Saving Discount Card program shall be done by mail or sent to the mobile number mentioned in the profile or via WhatsApp.',
  'By accepting this card, the ServeSmile Saving Discount Card member agrees to receive promotional messages from ServeSmile Pvt. Ltd., participating merchants, and related groups through mail, WhatsApp, and SMS regarding special offers, previews, discounts, and sales.',
  'The intimation of any change in address or contact number is the responsibility of the respective member and should be sent to care@servesmile.in.',
  'ServeSmile will have no responsibility for communication lost or not received.',
  'ServeSmile may at any time, without prior notice, change, modify, or vary the terms and conditions of the ServeSmile Savings Discount Card project.',
  'Any dispute arising under these terms and conditions shall be subject to the competent courts in Gurugram jurisdiction only, or as decided by ServeSmile Pvt. Ltd.',
  'All offers and updates on the ServeSmile Savings Discount Card Project will be communicated through email, WhatsApp, or SMS. As a member of this program, you consent to receive SMS, email, and media messages pertaining to special offers, previews, and other membership-related communications.',
  'Any duplication of this card will be subject to membership cancellation and financial compensation payable to ServeSmile Pvt. Ltd.',
  'Discounts or offers under the ServeSmile Saving Discount Card project cannot be merged with any other schemes or offers running in the store.',
  'Between any existing discount on a product and the discount under the ServeSmile Saving Discount Card, the higher one will be considered for availing the benefit.',
  'The ServeSmile Saving Discount Card may be a physical card delivered physically or a virtual card, number, or code sent by mail, SMS, WhatsApp, or other communication media. This depends on ServeSmile’s decision, plans, and policy.',
  'Lost card: cardholders must immediately notify ServeSmile Pvt. Ltd. if they have lost, misplaced, or had their physical Saving Discount Card stolen. They may receive a replacement card upon request. Replacement charges may apply.',
  'Cancellation and Refund Policy: once issued, the card will not be cancelled or refunded.',
  'Shipping Policy: if the card is physical, it will be shipped within 7 working days after receiving the proper documents and payment.',
]

function MuskaanTermsAndConditions() {
  return (
    <section id="terms" className="mx-auto max-w-7xl px-4 pt-8 sm:px-6 lg:px-8">
      <div className="rounded-[2rem] border border-slate-200 bg-white px-5 py-6 shadow-[0_18px_45px_rgba(15,23,42,0.08)] sm:px-7 sm:py-8">
        <div className="max-w-3xl">
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-orange">Terms and Conditions</p>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-800 sm:text-3xl">
            ServeSmile Savings Programs and Cards
          </h2>
          <p className="mt-3 text-sm leading-6 text-slate-500">
            Please review the following terms before subscribing to the ServeSmile Savings programs and cards.
          </p>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
          {termsAndConditions.map((term, index) => (
            <article key={`${index + 1}-${term.slice(0, 20)}`} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <div className="flex items-start gap-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-900 text-sm font-semibold text-white">
                  {index + 1}
                </span>
                <p className="text-sm leading-6 text-slate-600">{term}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default MuskaanTermsAndConditions