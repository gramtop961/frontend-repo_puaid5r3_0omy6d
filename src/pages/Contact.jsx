import Navbar from '../components/Navbar'

export default function Contact() {
  return (
    <div className="bg-white text-zinc-800">
      <Navbar />
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-semibold tracking-tight text-zinc-900">Let’s connect</h1>
          <p className="mt-3 text-lg text-zinc-700">Tell us about your work and what clarity would feel like for you. We’ll reply with friendly next steps.</p>

          <form className="mt-8 grid gap-4">
            <div>
              <label className="text-sm text-zinc-700">Name</label>
              <input className="mt-1 w-full rounded-xl border border-zinc-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-zinc-900" placeholder="Your name" />
            </div>
            <div>
              <label className="text-sm text-zinc-700">Email</label>
              <input type="email" className="mt-1 w-full rounded-xl border border-zinc-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-zinc-900" placeholder="you@example.com" />
            </div>
            <div>
              <label className="text-sm text-zinc-700">What do you need?</label>
              <select className="mt-1 w-full rounded-xl border border-zinc-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-zinc-900">
                <option>CoreFlow</option>
                <option>GatherFlow</option>
                <option>StudioFlow</option>
                <option>Not sure yet</option>
              </select>
            </div>
            <div>
              <label className="text-sm text-zinc-700">Message</label>
              <textarea rows="5" className="mt-1 w-full rounded-xl border border-zinc-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-zinc-900" placeholder="Share a little about your work and timeline" />
            </div>
            <button className="rounded-full bg-zinc-900 text-white px-5 py-3 text-sm hover:bg-zinc-800 w-fit">Send message</button>
          </form>

          <div className="mt-10 rounded-2xl border border-zinc-200 bg-white p-6">
            <h3 className="font-medium text-zinc-900">Prefer to talk?</h3>
            <p className="mt-2 text-zinc-700">You can also schedule a calm 20‑minute call. We’ll listen, offer gentle guidance, and suggest the simplest next step.</p>
            <a href="#" className="mt-3 inline-block rounded-full border border-zinc-300 px-4 py-2 text-sm text-zinc-800 hover:bg-zinc-50">Schedule a call</a>
            <div className="mt-4 text-sm text-zinc-500">Social: Instagram • LinkedIn • Email</div>
          </div>
        </div>
      </section>
    </div>
  )
}
