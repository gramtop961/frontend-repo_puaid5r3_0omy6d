import Navbar from '../components/Navbar'
import CTA from '../components/CTA'

const faqs = [
  {
    q: 'I’m not techy. Will I be able to use my site?',
    a: 'Yes. We pick simple tools, record a handover video, and give you a short guide. You’ll only learn what you need.'
  },
  {
    q: 'How long does it take?',
    a: 'CoreFlow launches in about 2 weeks. GatherFlow is 3–4 weeks. StudioFlow is 5–7 weeks, depending on content.'
  },
  {
    q: 'Do you write copy?',
    a: 'We lightly polish your words and guide tone. Full copywriting is available as an add‑on if needed.'
  },
  {
    q: 'Can we start small and grow?',
    a: 'Absolutely. Begin with CoreFlow and upgrade later. Everything is built with room to evolve.'
  },
  {
    q: 'What about hosting and domains?',
    a: 'We’ll recommend affordable, reliable options and handle setup together during launch.'
  }
]

export default function FAQs() {
  return (
    <div className="bg-white text-zinc-800">
      <Navbar />
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-semibold tracking-tight text-zinc-900">FAQs</h1>
          <p className="mt-3 text-lg text-zinc-700">Simple, friendly answers to common questions.</p>

          <div className="mt-10 space-y-4">
            {faqs.map((f) => (
              <div key={f.q} className="rounded-2xl border border-zinc-200 bg-white p-6">
                <h3 className="font-medium text-zinc-900">{f.q}</h3>
                <p className="mt-2 text-zinc-700">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CTA />
    </div>
  )
}
