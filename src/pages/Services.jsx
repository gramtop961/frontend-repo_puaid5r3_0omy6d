import Navbar from '../components/Navbar'
import { CheckCircle2, Leaf, Flower2, Sparkles, Plus } from 'lucide-react'
import CTA from '../components/CTA'

const packages = [
  {
    name: 'CoreFlow',
    price: '$590',
    blurb: 'A calm, 1‑page site with clean sections and a friendly contact form. Perfect for starting fresh without tech overwhelm.',
    includes: [
      '1-page layout (Home with clear sections)',
      'Brand colors & modern, soft typography',
      'Mobile-friendly build',
      'Simple contact form',
      'Handover video & mini guide'
    ],
    why: 'Gives you a clear, shareable home fast — so people understand you at a glance.',
    icon: Leaf
  },
  {
    name: 'GatherFlow',
    price: '$1,290',
    blurb: 'A small, spacious site for your story and offers — with gentle movement and clear pathways.',
    includes: [
      'Up to 4 pages (Home, About, Services, Contact)',
      'Soft animations & organic shapes',
      'Scheduling link integration',
      'Testimonials or simple gallery',
      'One revision round + guidance call'
    ],
    why: 'Expands your presence while staying light and easy to manage.',
    icon: Flower2
  },
  {
    name: 'StudioFlow',
    price: '$2,400',
    blurb: 'A fuller presence with room to grow — content hub, gentle commerce, and supportive training.',
    includes: [
      'Up to 8 pages with custom layouts',
      'Blog or resources area',
      'Lightweight shop or payments',
      'Email collection & simple automations',
      'Two revision rounds + training session'
    ],
    why: 'A serene foundation for the next season of your work, still grounded in simplicity.',
    icon: Sparkles
  }
]

const addons = [
  'Brand kit & logo refresh',
  'Newsletter setup & welcome sequence',
  'Extra pages or landing pages',
  'Photography direction & curation',
  'Copy polishing session'
]

export default function Services() {
  return (
    <div className="bg-white text-zinc-800">
      <Navbar />
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-semibold tracking-tight text-zinc-900">Services</h1>
            <p className="mt-3 text-lg text-zinc-700">Choose the flow that fits where you are. Every package is spacious, clear, and affordable.</p>
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {packages.map((p) => (
              <div key={p.name} className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3">
                  <p.icon className="text-zinc-700" size={22} />
                  <h3 className="text-xl font-semibold text-zinc-900">{p.name}</h3>
                </div>
                <div className="mt-2 text-3xl font-semibold text-zinc-900">{p.price}</div>
                <p className="mt-2 text-zinc-700">{p.blurb}</p>
                <ul className="mt-4 space-y-2">
                  {p.includes.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-zinc-700">
                      <CheckCircle2 className="mt-0.5 text-emerald-600" size={18} />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-sm text-zinc-500">{p.why}</p>
                <a href="/contact" className="mt-6 inline-flex rounded-full bg-zinc-900 text-white px-4 py-2 text-sm hover:bg-zinc-800">Start {p.name}</a>
              </div>
            ))}
          </div>

          <div className="mt-14 rounded-2xl border border-zinc-200 bg-white p-6">
            <h4 className="font-medium text-zinc-900 flex items-center gap-2"><Plus size={18} /> Optional add‑ons</h4>
            <ul className="mt-2 grid md:grid-cols-2 gap-2 list-disc list-inside text-zinc-700">
              {addons.map((a) => (<li key={a}>{a}</li>))}
            </ul>
          </div>
        </div>
      </section>
      <CTA />
    </div>
  )
}
