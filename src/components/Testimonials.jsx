export default function Testimonials() {
  const items = [
    {
      quote:
        'I finally have a home for my work that feels like breathing room. No tech headaches, just clarity.',
      author: 'Mara, meditation teacher',
    },
    {
      quote:
        'Gentle, organized, and deeply supportive. My site feels like me — simple and soulful.',
      author: 'Ilan, ceramic artist',
    },
    {
      quote:
        'The process was calm and human. I understand my site now and feel confident sharing it.',
      author: 'Rae, facilitator',
    },
  ]

  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-900">Kind words from gentle creatives</h2>
          <p className="mt-3 text-zinc-600">Real humans, real relief.</p>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {items.map((t) => (
            <figure key={t.author} className="rounded-2xl border border-zinc-200 bg-white p-6">
              <blockquote className="text-zinc-800">“{t.quote}”</blockquote>
              <figcaption className="mt-4 text-sm text-zinc-500">— {t.author}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
