import { ArrowUpRight } from "lucide-react"

const experiences = [
  {
    period: "2023 — Present",
    title: "Senior AI/ML Engineer",
    company: "AI Solutions Inc.",
    url: "https://example.com",
    description: "Lead the development of production-grade machine learning systems. Design and implement LLM-based applications, RAG pipelines, and real-time inference systems. Collaborate with cross-functional teams to deploy models at scale serving millions of users.",
    technologies: ["PyTorch", "LangChain", "AWS SageMaker", "Kubernetes", "FastAPI", "PostgreSQL"],
  },
  {
    period: "2021 — 2023",
    title: "Machine Learning Engineer",
    company: "DataTech Labs",
    url: "https://example.com",
    description: "Developed and deployed deep learning models for computer vision and NLP applications. Built end-to-end ML pipelines using MLOps best practices. Achieved 40% improvement in model accuracy through advanced feature engineering and hyperparameter optimization.",
    technologies: ["TensorFlow", "Scikit-learn", "MLflow", "Docker", "Python", "GCP"],
  },
  {
    period: "2019 — 2021",
    title: "Data Scientist",
    company: "Analytics Corp",
    url: "https://example.com",
    description: "Designed and implemented predictive models for customer behavior analysis and demand forecasting. Created interactive dashboards and data visualizations for stakeholders. Reduced customer churn by 25% through ML-driven insights.",
    technologies: ["Python", "Pandas", "NumPy", "Spark", "Tableau", "SQL"],
  },
  {
    period: "2018 — 2019",
    title: "AI Research Intern",
    company: "Research Institute",
    url: "https://example.com",
    description: "Conducted research on neural network architectures for image classification tasks. Published findings on novel attention mechanisms. Contributed to open-source deep learning frameworks and research papers.",
    technologies: ["PyTorch", "CUDA", "OpenCV", "Jupyter", "LaTeX"],
  },
]

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-sm uppercase tracking-widest text-muted-foreground mb-12 lg:hidden">Experience</h2>
        
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <a
              key={index}
              href={exp.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block p-6 -mx-6 rounded-lg hover:bg-secondary/50 transition-all duration-300"
            >
              <div className="grid lg:grid-cols-[200px_1fr] gap-4">
                <div className="text-sm text-muted-foreground font-mono">
                  {exp.period}
                </div>
                <div>
                  <h3 className="text-foreground font-medium flex items-center gap-2 group-hover:text-primary transition-colors">
                    {exp.title} · {exp.company}
                    <ArrowUpRight className="w-4 h-4 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                  </h3>
                  <p className="text-muted-foreground mt-2 leading-relaxed text-sm">
                    {exp.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

        <a 
          href="/resume.pdf" 
          className="inline-flex items-center gap-2 mt-12 text-foreground font-medium hover:text-primary transition-colors group"
        >
          View Full Résumé
          <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </a>
      </div>
    </section>
  )
}
