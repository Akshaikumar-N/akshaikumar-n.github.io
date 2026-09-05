/* =====================================================================
   EDIT YOUR INFORMATION HERE.
   This is the only file you should need to touch to update the site.
   Everything below is plain data — change the text, add or remove
   array entries, and the page updates itself.
   ===================================================================== */

const SITE = {

  name: "Akshai",
  role: "AI & Data Engineer",

  bio: "Artificial Intelligence & Data Science student with a passion for technology and innovation. I design intelligent systems using Python, machine learning, and deep learning frameworks like TensorFlow, PyTorch, and scikit-learn, and I'm comfortable setting things up end-to-end with SQL, APIs, and cloud tools like GCP. From data to decisions, I focus on creating real solutions — whether it's NLP, computer vision, or just making better decisions with data.",

  // Paste your real links here. GitHub is shown first and most
  // prominently since this website — not a GitHub profile — is
  // what's on your resume.
  socials: {
    github: "#",          // e.g. "https://github.com/yourusername"
    linkedin: "#",        // e.g. "https://linkedin.com/in/yourusername"
    email: "you@gmail.com"
  },

  // ---------------------------------------------------------------
  // SKILLS — add, remove, or rename categories and items freely.
  // ---------------------------------------------------------------
  skills: [
    { category: "Programming", items: ["Python", "Java", "R"] },
    { category: "Data Science", items: ["NumPy", "Pandas", "Scikit-learn", "Tableau"] },
    { category: "Machine Learning / Deep Learning", items: ["PyTorch", "TensorFlow"] },
    { category: "Data Engineering", items: ["PySpark", "Databricks", "PostgreSQL"] },
    { category: "Generative AI", items: ["LLM", "RAG", "GenAI", "Fine-tuning"] },
    { category: "AI Frameworks / Agents", items: ["LangChain", "LangGraph", "LlamaIndex"] },
    { category: "Backend / Deployment", items: ["FastAPI", "Docker"] },
    { category: "Cloud / Version Control", items: ["GCP", "Git & GitHub"] }
  ],

  // ---------------------------------------------------------------
  // PROJECTS — fill in "description" and "link" as each is ready.
  // Add or remove objects from this array for more or fewer projects.
  // ---------------------------------------------------------------
  projects: [
    {
      title: "SLM — Small Language Model from Scratch",
      tags: ["PyTorch", "Tokenization", "Transformers"],
      description: "Add a short description: what the model does, how it was trained, and what you learned building a language model from the ground up.",
      link: "#"
    },
    {
      title: "Multi-Agent Systems",
      tags: ["LangGraph", "Agents"],
      description: "Add a short description of the two agents, how they communicate, and the problem they solve together.",
      link: "#"
    },
    {
      title: "Neural Network from Scratch",
      tags: ["NumPy", "Backpropagation"],
      description: "Add a short description of the network, the math you implemented by hand, and the dataset it runs on.",
      link: "#"
    },
    {
      title: "BPE Tokenizer from Scratch",
      tags: ["NLP", "Tokenization"],
      description: "Add a short description of your byte-pair encoding implementation and why you built it without external libraries.",
      link: "#"
    },
    {
      title: "RAG from Scratch",
      tags: ["Retrieval", "Embeddings"],
      description: "Add a short description of the retrieval pipeline, how documents are indexed, and what powers the generation step.",
      link: "#"
    },
    {
      title: "Rough / Experiments",
      tags: ["Misc"],
      description: "Add a short description of what lives here — smaller experiments, prototypes, or work in progress.",
      link: "#"
    }
  ],

  // ---------------------------------------------------------------
  // CERTIFICATES — leave the array empty to show a placeholder.
  // Uncomment the example and duplicate it for each certificate.
  // ---------------------------------------------------------------
  certificates: [
    // { title: "Certificate name", meta: "Issuing organization · 2026", link: "#" }
  ],

  // ---------------------------------------------------------------
  // EXPERIENCE — leave the array empty to show a placeholder.
  // ---------------------------------------------------------------
  experience: [
    // { title: "Role, Company", meta: "Jan 2026 – Present", description: "What you worked on." }
  ],

  // ---------------------------------------------------------------
  // HOBBIES — plain list of words or short phrases.
  // ---------------------------------------------------------------
  hobbies: [
    // "Formula 1", "Reading", "Chess"
  ]

};
