export default function BeforeAfter() {
  const before = [
    'Scattered links and no clear home',
    'DIY site that feels heavy',
    'Tech overwhelm and confusion',
    'Inconsistent visuals',
  ]
  const after = [
    'A soft, clear home for your work',
    'Calm navigation and gentle rhythm',
    'Simple tools you can actually use',
    'Unified visuals that feel like you',
  ]

  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-zinc-50 to-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-900">From scattered to serene</h2>
          <p className="mt-3 text-zinc-600">See how a clarity‑first website feels before and after.</p>
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-zinc-200 bg-white p-6">
            <div className="text-sm font-medium text-rose-600">Before</div>
            <ul className="mt-4 space-y-2 text-zinc-700 list-disc list-inside">
              {before.map((b) => (<li key={b}>{b}</li>))}
            </ul>
          </div>
          <div className="rounded-2xl border border-zinc-200 bg-white p-6">
            <div className="text-sm font-medium text-emerald-600">After</div>
            <ul className="mt-4 space-y-2 text-zinc-700 list-disc list-inside">
              {after.map((a) => (<li key={a}>{a}</li>))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
