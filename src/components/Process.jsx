export default function Process() {
  const steps = [
    {
      title: 'Listen',
      text: 'A friendly chat to understand your work, your rhythm, and what “clarity” looks like for you.'
    },
    {
      title: 'Shape',
      text: 'We map a simple flow, choose calm colors and type, and sketch your site with plenty of space.'
    },
    {
      title: 'Create',
      text: 'We build gently, show progress, and keep tech-speak out. You always know the next step.'
    },
    {
      title: 'Launch',
      text: 'Soft launch with a checklist and a handover video so you feel steady and supported.'
    }
  ]

  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-900">A calm, step‑by‑step process</h2>
          <p className="mt-3 text-zinc-600">Clear steps, simple language, no overwhelm. We move at a human pace.</p>
        </div>

        <div className="mt-12 grid md:grid-cols-4 gap-6">
          {steps.map((s) => (
            <div key={s.title} className="rounded-2xl border border-zinc-200 bg-white p-6">
              <div className="text-sm font-medium text-zinc-500">{s.title}</div>
              <p className="mt-2 text-zinc-800">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
