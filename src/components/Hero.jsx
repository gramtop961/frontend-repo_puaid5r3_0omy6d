import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-white via-white/80 to-white/40" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-28 relative">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs text-zinc-600">
              Calm, affordable web design for mindful creatives
            </div>
            <h1 className="mt-6 text-4xl md:text-5xl font-semibold tracking-tight text-zinc-900">
              Clarity-first websites for people who don’t speak tech
            </h1>
            <p className="mt-4 text-lg text-zinc-700 leading-relaxed">
              Clear7Flow helps artists, facilitators, and soulful makers get a simple, grounded online home — without overwhelm, jargon, or big-agency prices.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#packages" className="rounded-full bg-zinc-900 text-white px-5 py-3 text-sm hover:bg-zinc-800">Explore packages</a>
              <a href="/contact" className="rounded-full border border-zinc-300 px-5 py-3 text-sm text-zinc-800 hover:bg-zinc-50">Talk to a human</a>
            </div>
            <p className="mt-3 text-sm text-zinc-500">No pressure. Just gentle guidance and clear steps.</p>
          </div>
          <div className="h-[380px] md:h-[520px] rounded-2xl bg-gradient-to-br from-violet-100 via-sky-50 to-white border border-white shadow-inner">
            <Spline scene="https://prod.spline.design/myxXfbNiwnbTpGFp/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          </div>
        </div>
      </div>
    </section>
  )
}
