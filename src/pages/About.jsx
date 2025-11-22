import Navbar from '../components/Navbar'
import CTA from '../components/CTA'

export default function About() {
  const principles = [
    'Space before detail',
    'Language over jargon',
    'Few choices, clear outcomes',
    'Gentle movement, never noise',
    'Real humans over automation',
    'Build only what’s needed',
    'Calm rhythms everywhere',
  ]

  return (
    <div className="bg-white text-zinc-800">
      <Navbar />
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-semibold tracking-tight text-zinc-900">About Clear7Flow</h1>
          <p className="mt-4 text-lg text-zinc-700 leading-relaxed">
            Clear7Flow began as a gentle response to a noisy web. We help mindful creatives build simple, affordable websites that feel like a deep breath. Our approach is human, spacious, and grounded.
          </p>

          <div className="mt-10 rounded-2xl border border-zinc-200 bg-white p-6">
            <h2 className="text-2xl font-semibold text-zinc-900">Founder story</h2>
            <p className="mt-3 text-zinc-700">I’ve worked with artists, facilitators, and small makers for years. Again and again, I heard the same thing: “I just want something clear that I understand.” Clear7Flow is my way of offering web design that feels caring and accessible — websites with soul, built without the overwhelm.</p>
          </div>

          <div className="mt-10 grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-zinc-200 bg-white p-6">
              <h3 className="font-medium text-zinc-900">Our philosophy</h3>
              <p className="mt-2 text-zinc-700">Simplicity is powerful. Fewer choices make space for better decisions. We design for clarity, so your visitors understand you in a heartbeat.</p>
            </div>
            <div className="rounded-2xl border border-zinc-200 bg-white p-6">
              <h3 className="font-medium text-zinc-900">Why not complicated</h3>
              <p className="mt-2 text-zinc-700">You don’t need a complex system to share your gifts. We keep tools lightweight, costs friendly, and tech anxiety low.</p>
            </div>
          </div>

          <div className="mt-10 rounded-2xl border border-zinc-200 bg-white p-6">
            <h3 className="text-xl font-semibold text-zinc-900">The 7 Principles of Clarity</h3>
            <ul className="mt-3 grid md:grid-cols-2 gap-2 list-disc list-inside text-zinc-700">
              {principles.map((p) => (<li key={p}>{p}</li>))}
            </ul>
          </div>
        </div>
      </section>
      <CTA />
    </div>
  )
}
