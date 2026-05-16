"use client"

import { ArrowDown } from "lucide-react"

export function HeroSection() {
  return (
    <section id="about" className="min-h-screen flex flex-col justify-center px-6 pt-20">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left Column - Name and Navigation */}
          <div className="lg:sticky lg:top-24">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance">
              Abdallah Mohamed Abdelaziz
            </h1>
            <p className="text-xl md:text-2xl text-primary mt-2 font-medium">
              AI & Machine Learning Engineer
            </p>
            <p className="text-muted-foreground mt-4 max-w-md leading-relaxed">
              I build intelligent systems and AI-powered solutions that solve real-world problems.
            </p>
            
            {/* Section Links */}
            <nav className="hidden lg:flex flex-col gap-3 mt-12" aria-label="In-page navigation">
              {[
                { href: "#about", label: "About", active: true },
                { href: "#skills", label: "Skills", active: false },
                { href: "#experience", label: "Experience", active: false },
                { href: "#projects", label: "Projects", active: false },
              ].map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className={`group flex items-center gap-4 text-sm uppercase tracking-widest transition-colors ${
                    item.active ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <span className={`h-px transition-all ${item.active ? "w-16 bg-foreground" : "w-8 bg-muted-foreground group-hover:w-16 group-hover:bg-foreground"}`} />
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Right Column - About */}
          <div className="space-y-6">
            <p className="text-muted-foreground leading-relaxed">
              {"I'm an AI & Machine Learning Engineer passionate about building intelligent systems that solve complex problems. My expertise spans deep learning, natural language processing, and computer vision, creating solutions that push the boundaries of what's possible with AI."}
            </p>
            <p className="text-muted-foreground leading-relaxed">
              {"Currently, I'm focused on developing cutting-edge "}
              <span className="text-foreground font-medium">Large Language Models</span>
              {" and "}
              <span className="text-foreground font-medium">Computer Vision</span>
              {" applications. I specialize in building scalable ML pipelines and deploying models to production environments."}
            </p>
            <p className="text-muted-foreground leading-relaxed">
              {"I've worked on diverse AI projects including "}
              <span className="text-foreground">neural networks</span>
              {", "}
              <span className="text-foreground">recommendation systems</span>
              {", "}
              <span className="text-foreground">NLP pipelines</span>
              {", and "}
              <span className="text-foreground">real-time object detection</span>
              {"."}
            </p>
            <p className="text-muted-foreground leading-relaxed">
              {"When I'm not training models, I enjoy reading research papers, contributing to open-source ML projects, and exploring the latest advancements in artificial intelligence."}
            </p>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="flex justify-center mt-20 lg:hidden">
          <a 
            href="#experience" 
            className="text-muted-foreground hover:text-foreground transition-colors animate-bounce"
            aria-label="Scroll to experience section"
          >
            <ArrowDown className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  )
}
