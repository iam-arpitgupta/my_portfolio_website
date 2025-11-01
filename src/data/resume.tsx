import { Icons } from "@/components/icons";
import { Certificate } from "crypto";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Arpit Gupta",
  initials: "AG",
  url: "https://github.com/iam-arpitgupta",
  location: "Jaipur, India",
  locationLink: "https://www.google.com/maps/place/Jaipur,+India",
  description:
    "Data Scientist & MLOps enthusiast passionate about building and deploying scalable AI solutions. Skilled in Generative AI, LLMs, and agentic workflows.",
  summary:
    "As a Data Science and MLOps enthusiast, I specialize in designing, building, and deploying end-to-end ML pipelines using Python, MLflow, and Docker. My experience spans CI/CD automation, AWS deployment, and agentic AI workflows using LLMs. I'm particularly focused on applying data-driven insights and AI automation in finance and analytics to enhance decision-making and efficiency.",
  skills: [
    "Python",
    "SQL",
    "Pandas",
    "NumPy",
    "TensorFlow",
    "PyTorch",
    "Scikit-Learn",
    "Flask",
    "FastAPI",
    "Docker",
    "Kubernetes",
    "AWS",
    "LangGraph",
    "Groq LLM",
    "MongoDB",
    "MLflow",
    "DVC",
    "Prometheus",
    "Grafana",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "thearpitgupta2003@gmail.com",
    tel: "+91-9549991005",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/iam-arpitgupta",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/arpit-gupta-ab87b7272",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/Arpit09",
        icon: Icons.x,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:thearpitgupta2003@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Comacks",
      href: "https://comacks.com",
      badges: [],
      location: "Remote",
      title: "MLOps Intern",
      logoUrl: "/comacks.png",
      start: "May 2025",
      end: "August 2025",
      description:
        "Built a real-time fraud detection system using ML to flag suspicious financial transactions. Developed an end-to-end ML pipeline with DVC, MLflow, Flask, and Docker. Deployed to AWS EKS using ECR and monitored via Prometheus & Grafana. Achieved a 40% reduction in manual reviews and accelerated CI/CD release cycles.",
    },
  ],

  projects: [
    {
      title: "MLOPS-LLMOPS: End-to-End Crop Advisor & Agentic LLM Project",
      href: "https://github.com/iam-arpitgupta/MLOPS-LLMOPS",
      dates: "2025",
      active: true,
      description:
        "Built a full-scale MLOps + LLMops pipeline for crop analysis: ingest data, feature-engineer NPK & environmental variables, train models (Decision Tree / RF / XGBoost), track experiments with MLflow, version data with DVC, deploy via FastAPI + Streamlit, containerize via Docker, and orchestrate on AWS EKS/ECR. Integrated an LLM agent to provide natural language agronomic advice.",
      technologies: [
        "Python",
        "scikit-learn",
        "XGBoost",
        "DVC",
        "MLflow",
        "FastAPI",
        "Streamlit",
        "Docker",
        "AWS EKS/ECR",
        "LLM Agent",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/iam-arpitgupta/MLOPS-LLMOPS",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Agentic RAG System for Game Simulation Agents",
      href: "#",
      dates: "Aug 2025 – Present",
      active: true,
      description:
        "Developed an agentic RAG system to simulate intelligent agents that reason and interact in a game environment. Integrated LangGraph, Groq LLM, and FastAPI backend with a JavaScript-based frontend. Implemented vector retrieval with MongoDB and built observability using Opik for LLM evaluation.",
      technologies: [
        "LangGraph",
        "FastAPI",
        "Groq LLM",
        "MongoDB",
        "Docker",
        "Opik",
        "JavaScript",
        "HTML",
        "CSS",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/iam-arpitgupta/Game",
          icon: <Icons.github className="size-3" />,
        },
      ],
    },
    {
      title: "Sentiment Classification System (IMDB Dataset)",
      href: "#",
      dates: "July – August 2025",
      active: true,
      description:
        "Built a sentiment analysis model to classify IMDB movie reviews. Implemented text preprocessing using NLTK, trained multiple models (Logistic Regression, SVM), and deployed via Flask API on AWS EKS. Used DVC & MLflow for versioning and monitoring with Prometheus & Grafana.",
      technologies: [
        "Python",
        "Scikit-learn",
        "NLTK",
        "DVC",
        "MLflow",
        "Flask",
        "Docker",
        "AWS",
        "Prometheus",
        "Grafana",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/iam-arpitgupta/capstone3",
          icon: <Icons.github className="size-3" />,
        },
      ],
    },
    {
      title: "Fraud Detection System (End-to-End MLOps)",
      href: "#",
      dates: "May – August 2025",
      active: true,
      description:
        "Developed a complete MLOps pipeline for fraud detection using Flask, DVC, MLflow, and AWS. Automated CI/CD, built monitoring dashboards, and improved fraud detection accuracy significantly.",
      technologies: [
        "Python",
        "Scikit-learn",
        "Flask",
        "DVC",
        "MLflow",
        "Docker",
        "AWS",
        "Prometheus",
        "Grafana",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/iam-arpitgupta/capstone1",
          icon: <Icons.github className="size-3" />,
        },
      ],
    },
  ],

  education: [
    {
      school: "Poornima Institute of Technology and Engineering",
      href: "https://www.poornima.org",
      degree: "Bachelor of Technology (B.Tech) in Computer Science",
      logoUrl: "/poornima.png",
      start: "2022",
      end: "2026",
    },
  ],

  certificates: [
    { title: "Complete MLOps Bootcamp (Udemy)" },
    { title: "Python for AI (deeplearning.ai)" },
    { title: "Machine Learning Specialization (Coursera)" },
    { title: "Neural Networks & Deep Learning (deeplearning.ai, Coursera)" },
  ],

  Certificate: [],
} as const;
