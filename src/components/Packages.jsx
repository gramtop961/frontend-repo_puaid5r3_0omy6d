import { CheckCircle2, Leaf, Flower2, Sparkles } from 'lucide-react'

const packages = [
  {
    name: 'CoreFlow',
    tagline: 'Your calm, starter website — simple, clear, and ready.',
    price: '$590',
    features: [
      '1-page website with clean sections',
      'Brand-aligned colors & typography',
      'Mobile-friendly, fast, and accessible',
      'Basic contact form',
      'Launch checklist + handover video'
    ],
    why: 'Perfect if you need a grounded online home fast without complexity.',
    icon: Leaf,
  },
  {
    name: 'GatherFlow',
    tagline: 'A small, thoughtful site to share your offers and story.',
    price: '$1,290',
    features: [
      'Up to 4 pages (Home, About, Services, Contact)',
      'Gentle animations & organic shapes',
      'Scheduling link integration',
      'Testimonials & simple galleries',
      'One revision round + guidance call'
    ],
    why: 'For growing creatives who want clarity, warmth, and room to share.',
    icon: Flower2,
  },
  {
    name: 'StudioFlow',
    tagline: 'Your full, serene digital presence with room to evolve.',
    price: '$2,400',
    features: [
      'Up to 8 pages with custom layouts',
      'Blog or resources section',
      'Payments or shop setup (lightweight)',
      'Email collection & automations (gentle)',
      'Two revision rounds + training session'
    ],
    why: 'When you’re ready for a deeper foundation that still feels simple.',
    icon: Sparkles,
  },
]

export default function Packages() {
  return (
    <section id="packages" className="py-20 md:py-28 bg-gradient-to-b from-white to-zinc-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-900">Simple packages with honest pricing</h2>
          <p className="mt-3 text-zinc-600">Everything you need, nothing you don’t. Made for non‑techy creatives who value ease.</p>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {packages.map((p) => (
            <div key={p.name} className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3">
                <p.icon className="text-zinc-700" size={22} />
                <h3 className="text-xl font-semibold text-zinc-900">{p.name}</h3>
              </div>
              <p className="mt-2 text-zinc-600">{p.tagline}</p>
              <div className="mt-4 text-3xl font-semibold text-zinc-900">{p.price}</div>
              <ul className="mt-4 space-y-2">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-zinc-700">
                    <CheckCircle2 className="mt-0.5 text-emerald-600" size={18} />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm text-zinc-500">{p.why}</p>
              <a href="/contact" className="mt-6 inline-flex rounded-full bg-zinc-900 text-white px-4 py-2 text-sm hover:bg-zinc-800">Get started</a>
            </div>
          ))}
        </div>

        <div className="mt-14 rounded-2xl border border-zinc-200 bg-white p-6">
          <h4 className="font-medium text-zinc-900">Optional add‑ons</h4>
          <p className="mt-1 text-sm text-zinc-600">Brand kit, logo refresh, newsletter setup, extra pages, gentle e‑commerce, photo direction.</p>
        </div>
      </div>
    </section>
  )
}
