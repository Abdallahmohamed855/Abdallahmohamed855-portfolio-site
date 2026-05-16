"use client"

import { ArrowUpRight, Star } from "lucide-react"
import Image from "next/image"

const projects = [
  {
    title: "Neural Style Transfer",
    description: "Deep learning model that applies artistic styles to images using CNNs. Implements VGG-19 architecture with custom loss functions for style and content preservation.",
    image: "https://images.unsplash.com/photo-1547954575-855750c57bd3?w=800&h=600&fit=crop",
    url: "https://github.com/AbdallahMohamed",
    technologies: ["PyTorch", "CNN", "VGG-19", "Python"],
    stars: 1850,
  },
  {
    title: "LLM-Powered Chatbot",
    description: "Advanced conversational AI using fine-tuned large language models with RAG (Retrieval Augmented Generation) for context-aware responses and knowledge base integration.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
    url: "https://github.com/AbdallahMohamed",
    technologies: ["LangChain", "OpenAI", "Pinecone", "FastAPI"],
    stars: 2340,
  },
  {
    title: "Object Detection System",
    description: "Real-time object detection and tracking system using YOLO v8 architecture. Deployed on edge devices for autonomous vehicle applications.",
    image: "https://images.unsplash.com/photo-1535378917042-10a22c95931a?w=800&h=600&fit=crop",
    url: "https://github.com/AbdallahMohamed",
    technologies: ["YOLO", "TensorFlow", "OpenCV", "CUDA"],
    stars: 1560,
  },
  {
    title: "Sentiment Analysis Pipeline",
    description: "End-to-end NLP pipeline for sentiment analysis on social media data. Features transformer-based models with 94% accuracy on benchmark datasets.",
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&h=600&fit=crop",
    url: "https://github.com/AbdallahMohamed",
    technologies: ["BERT", "Hugging Face", "spaCy", "MLflow"],
    stars: 980,
  },
  {
    title: "Recommendation Engine",
    description: "Hybrid recommendation system combining collaborative filtering and content-based approaches. Powers personalized suggestions for e-commerce platforms.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    url: "https://github.com/AbdallahMohamed",
    technologies: ["Scikit-learn", "Spark", "Redis", "Docker"],
    stars: 1120,
  },
  {
    title: "Time Series Forecasting",
    description: "LSTM-based model for financial time series prediction with attention mechanisms. Achieved 15% improvement over traditional ARIMA models.",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=600&fit=crop",
    url: "https://github.com/AbdallahMohamed",
    technologies: ["LSTM", "Keras", "Pandas", "Plotly"],
    stars: 745,
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-sm uppercase tracking-widest text-muted-foreground mb-12 lg:hidden">Projects</h2>
        
        <div className="space-y-12">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block p-6 -mx-6 rounded-lg hover:bg-secondary/50 transition-all duration-300"
            >
              <div className="grid lg:grid-cols-[200px_1fr] gap-6">
                <div className="relative aspect-video lg:aspect-[4/3] rounded-md overflow-hidden bg-muted">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div>
                  <h3 className="text-foreground font-medium flex items-center gap-2 group-hover:text-primary transition-colors">
                    {project.title}
                    <ArrowUpRight className="w-4 h-4 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                  </h3>
                  <p className="text-muted-foreground mt-2 leading-relaxed text-sm">
                    {project.description}
                  </p>
                  <div className="flex items-center gap-4 mt-4">
                    <div className="flex items-center gap-1 text-muted-foreground text-sm">
                      <Star className="w-4 h-4 fill-primary text-primary" />
                      {project.stars.toLocaleString()}
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.technologies.map((tech) => (
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
          href="https://github.com/AbdallahMohamed" 
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 mt-12 text-foreground font-medium hover:text-primary transition-colors group"
        >
          View Full Project Archive
          <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </a>
      </div>
    </section>
  )
}
