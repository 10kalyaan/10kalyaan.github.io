export type ProjectCategory =
  | "AI Agents"
  | "Backend"
  | "LLM Systems"
  | "AI / ML"
  | "Full Stack"
  | "Systems";

export type Project = {
  title: string;
  category: ProjectCategory;
  tech: string[];
  description: string;
  link?: string;
};

export const featuredProject = {
  title: "FileGuard Agent",
  categories: ["AI Agents", "Backend", "Automation"],
  tech: ["Python", "SQLite", "Claude", "OpenClaw", "Agentic Workflows"],
  link: "https://github.com/10kalyaan/fileguard-agent",
  description:
    "A permission-aware local file organization agent that scans messy folders, creates dry-run movement plans, uses Claude-first semantic classification with rule-based fallback, requires explicit approval before execution, blocks protected paths, logs actions, and supports rollback.",
  highlights: [
    "Claude-first semantic file sorting with rule-based fallback",
    "Dry-run planning before execution",
    "Approval-gated file moves",
    "Protected path blocking",
    "SQLite audit logs and rollback support",
    "OpenClaw skill integration",
  ],
} as const;

export const projectFilters = [
  "All",
  "AI Agents",
  "Backend",
  "LLM Systems",
  "AI / ML",
  "Full Stack",
  "Systems",
] as const;

export const projects: Project[] = [
  {
    title: "FileGuard Agent",
    category: "AI Agents",
    tech: ["Python", "SQLite", "Claude", "OpenClaw"],
    description:
      "A permission-aware local file organization agent with dry-run planning, approval-gated moves, protected path blocking, duplicate-safe renaming, audit logs, and rollback support.",
    link: "https://github.com/10kalyaan/fileguard-agent",
  },
  {
    title: "Context Forge",
    category: "LLM Systems",
    tech: ["Python", "LLM Evaluation", "Long-Context Systems"],
    description:
      "A long-context LLM memory experiment that compares raw retrieval, summary retrieval, and controller-based routing to decide when an assistant should rely on summaries versus original evidence.",
    link: "https://github.com/10kalyaan/context-forge",
  },
  {
    title: "Distributed Task Queue",
    category: "Backend",
    tech: ["Python", "Kafka", "Redis"],
    description:
      "A distributed task queue with Kafka-based producer-consumer messaging, Python workers, Redis-backed state management, retries, and asynchronous task execution patterns.",
    link: "https://github.com/10kalyaan/kafka-yadtq",
  },
  {
    title: "Fake Audio Detection System",
    category: "AI / ML",
    tech: ["Python", "TensorFlow", "Librosa", "Scikit-learn"],
    description:
      "A real-time audio classification system using Librosa feature extraction and TensorFlow to detect synthetic speech from live microphone input.",
    link: "https://github.com/10kalyaan/ai_audio_detection",
  },
  {
    title: "Collaborative Markdown Editor",
    category: "Full Stack",
    tech: ["Java", "Spring Boot", "JavaFX", "PostgreSQL"],
    description:
      "A full-stack collaborative markdown editor with a Spring Boot backend, PostgreSQL persistence, JavaFX client, document versioning, and real-time collaboration workflows.",
    link: "https://github.com/10kalyaan/ooad",
  },
  {
    title: "Mini Kubernetes Simulation System",
    category: "Systems",
    tech: ["Python", "Docker", "JavaScript"],
    description:
      "A simulation of Kubernetes-style cluster management with Python orchestration, Docker-based workload isolation, and a web dashboard for nodes, jobs, and scheduling behavior.",
    link: "https://github.com/10kalyaan/PES2UG22CS_070_088_102_119_DistributedSystemsClusterSimulation",
  },
];
