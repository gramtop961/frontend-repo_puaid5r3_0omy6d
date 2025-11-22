import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Packages from '../components/Packages'
import Process from '../components/Process'
import BeforeAfter from '../components/BeforeAfter'
import Testimonials from '../components/Testimonials'
import CTA from '../components/CTA'

export default function Home() {
  return (
    <div className="bg-white text-zinc-800">
      <Navbar />
      <Hero />
      <section className="py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-2xl font-semibold text-zinc-900">Clear7Flow is a tiny studio with a big heart</h2>
            <p className="mt-3 text-zinc-700 leading-relaxed">We design calm, minimal websites for artists, facilitators, healers, and mindful makers. No gimmicks. No complexity. Just clarity and gentle flow so your work can breathe.</p>
          </div>
          <div className="rounded-2xl border border-zinc-200 bg-gradient-to-br from-white to-zinc-50 p-6">
            <p className="text-zinc-700">We keep prices friendly and the process human. You’ll always know the next step, and you’ll never be asked to learn tech you don’t need.</p>
          </div>
        </div>
      </section>
      <Packages />
      <Process />
      <BeforeAfter />
      <Testimonials />
      <CTA />
      <footer className="border-t border-zinc-200 py-10 text-sm text-zinc-600">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 rounded-md bg-gradient-to-br from-violet-300 to-sky-200 border border-white/60" />
            <span>Clear7Flow</span>
          </div>
          <nav className="flex items-center gap-6">
            <a href="/about">About</a>
            <a href="/services">Services</a>
            <a href="/faqs">FAQs</a>
            <a href="/contact">Contact</a>
          </nav>
          <div>© {new Date().getFullYear()} Clear7Flow</div>
        </div>
      </footer>
    </div>
  )
}
