const WHATSAPP_URL =
  'https://api.whatsapp.com/send/?phone=919311961520&text=Hello%21+I%27m+interested+in+Servesmile+services.&type=phone_number&app_absent=0'

function WhatsAppFloatingButton() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-[70] inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_12px_24px_rgba(37,211,102,0.45)] transition hover:scale-105 hover:bg-[#1fbe59] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#25D366]/40"
    >
      <svg viewBox="0 0 32 32" aria-hidden="true" className="h-7 w-7 fill-current">
        <path d="M19.11 17.21c-.27-.14-1.58-.78-1.82-.87-.24-.09-.41-.14-.58.14-.17.27-.67.86-.82 1.03-.15.17-.31.2-.58.07-.27-.14-1.15-.42-2.18-1.33-.81-.72-1.36-1.61-1.51-1.88-.16-.27-.02-.42.12-.56.12-.12.27-.31.4-.46.14-.15.18-.27.27-.45.09-.17.05-.33-.02-.46-.07-.14-.58-1.4-.8-1.92-.21-.5-.42-.43-.58-.43h-.49c-.17 0-.45.07-.68.33-.23.27-.88.86-.88 2.1s.91 2.43 1.04 2.6c.14.17 1.8 2.74 4.36 3.84.61.27 1.09.43 1.47.55.62.2 1.19.17 1.64.1.5-.07 1.58-.64 1.8-1.25.22-.61.22-1.14.15-1.25-.06-.11-.23-.17-.5-.31z" />
        <path d="M16 3.2C8.93 3.2 3.2 8.93 3.2 16c0 2.24.58 4.42 1.68 6.34L3 29l6.85-1.8A12.74 12.74 0 0 0 16 28.8c7.07 0 12.8-5.73 12.8-12.8S23.07 3.2 16 3.2zm0 23.2c-1.91 0-3.79-.5-5.44-1.45l-.39-.22-4.06 1.07 1.08-3.96-.25-.41A10.37 10.37 0 0 1 5.6 16c0-5.73 4.67-10.4 10.4-10.4S26.4 10.27 26.4 16 21.73 26.4 16 26.4z" />
      </svg>
    </a>
  )
}

export default WhatsAppFloatingButton