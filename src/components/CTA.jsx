export default function CTA() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-zinc-200 bg-gradient-to-br from-violet-50 via-sky-50 to-white p-10 text-center">
          <h3 className="text-2xl md:text-3xl font-semibold text-zinc-900">Ready for a website that feels like a deep breath?</h3>
          <p className="mt-3 text-zinc-700">Let’s make a simple, soulful home for your work — with gentle guidance at every step.</p>
          <div className="mt-6 flex items-center justify-center gap-3">
            <a href="/contact" className="rounded-full bg-zinc-900 text-white px-5 py-3 text-sm hover:bg-zinc-800">Start a project</a>
            <a href="/services" className="rounded-full border border-zinc-300 px-5 py-3 text-sm text-zinc-800 hover:bg-zinc-50">See packages</a>
          </div>
        </div>
      </div>
    </section>
  )
}
