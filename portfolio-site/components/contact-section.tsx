import { Mail, ArrowUpRight } from "lucide-react"

export function ContactSection() {
  return (
    <section className="py-24 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-2xl">
          <h2 className="text-sm uppercase tracking-widest text-muted-foreground mb-6">Contact</h2>
          <p className="text-2xl md:text-3xl font-medium leading-relaxed text-balance">
            {"I'm currently open to new opportunities and collaborations. If you'd like to work together or just say hi, feel free to reach out."}
          </p>
          
          <a
            href="mailto:hello@example.com"
            className="inline-flex items-center gap-3 mt-8 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors group"
          >
            <Mail className="w-5 h-5" />
            Get in Touch
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  )
}
