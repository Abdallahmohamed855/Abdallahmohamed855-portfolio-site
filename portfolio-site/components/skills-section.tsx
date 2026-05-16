"use client"

const skillCategories = [
  {
    title: "Machine Learning",
    skills: [
      { name: "TensorFlow", level: 90 },
      { name: "PyTorch", level: 85 },
      { name: "Scikit-learn", level: 95 },
      { name: "Keras", level: 88 },
    ],
  },
  {
    title: "Deep Learning",
    skills: [
      { name: "Neural Networks", level: 92 },
      { name: "CNNs", level: 88 },
      { name: "RNNs/LSTMs", level: 85 },
      { name: "Transformers", level: 90 },
    ],
  },
  {
    title: "Data Science",
    skills: [
      { name: "Python", level: 95 },
      { name: "Pandas", level: 92 },
      { name: "NumPy", level: 90 },
      { name: "Data Visualization", level: 88 },
    ],
  },
  {
    title: "AI Tools & Platforms",
    skills: [
      { name: "OpenAI API", level: 90 },
      { name: "Hugging Face", level: 85 },
      { name: "LangChain", level: 82 },
      { name: "AWS SageMaker", level: 78 },
    ],
  },
]

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 px-6 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-sm uppercase tracking-widest text-muted-foreground mb-4">Skills</h2>
        <p className="text-2xl lg:text-3xl font-medium text-foreground mb-12 max-w-2xl">
          Specialized in AI & Machine Learning with hands-on experience across the full ML pipeline.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="p-6 rounded-lg bg-background/50 border border-border/50 hover:border-primary/30 transition-colors duration-300"
            >
              <h3 className="text-lg font-medium text-foreground mb-6">{category.title}</h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm text-muted-foreground">{skill.name}</span>
                      <span className="text-sm text-primary">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <div
                        className="h-full bg-primary rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap gap-3">
          {["NLP", "Computer Vision", "GANs", "Reinforcement Learning", "MLOps", "Model Deployment", "Feature Engineering", "A/B Testing"].map(
            (tag) => (
              <span
                key={tag}
                className="px-4 py-2 text-sm bg-primary/10 text-primary rounded-full border border-primary/20 hover:bg-primary/20 transition-colors"
              >
                {tag}
              </span>
            )
          )}
        </div>
      </div>
    </section>
  )
}
