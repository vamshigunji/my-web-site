import { Company, Skill, ExperienceItem, ProjectItem, SocialLink } from "./types";

export const COMPANIES: Company[] = [
    {
        name: "Google",
        logo: "/assets/logos/google.svg",
        color: "#4285F4",
        angle: -45, // Top Right
        distance: 400,
    },
    {
        name: "Meta",
        logo: "/assets/logos/meta.svg",
        color: "#0668E1",
        angle: 0, // Right
        distance: 420,
    },
    {
        name: "Comcast",
        logo: "/assets/logos/comcast-new.svg",
        color: "#FFcc00",
        angle: 45, // Bottom Right
        distance: 400,
    },
    {
        name: "Workday",
        logo: "/assets/logos/workday-new.svg",
        color: "#CF3721",
        angle: 135, // Bottom Left
        distance: 400,
    },
    {
        name: "CVS",
        logo: "/assets/logos/cvs.svg",
        color: "#CC0033",
        angle: 225, // Top Left
        distance: 400,
    },
];

export const SKILLS: Skill[] = [
    // Languages
    { id: "python", name: "Python", category: "AI/ML", logo: "https://cdn.simpleicons.org/python" },
    { id: "sql", name: "SQL", category: "Backend", logo: "https://cdn.simpleicons.org/postgresql" },
    { id: "r", name: "R", category: "AI/ML", logo: "https://cdn.simpleicons.org/r" },

    // Core AI/ML
    { id: "ml", name: "Machine Learning", category: "AI/ML", logo: "https://cdn.simpleicons.org/scikitlearn" },
    { id: "deep-learning", name: "Deep Learning", category: "AI/ML", logo: "https://cdn.simpleicons.org/pytorch" },
    // NLP removed
    { id: "llms", name: "LLMs", category: "AI/ML", logo: "/assets/logos/openai.png" },
    { id: "generative-ai", name: "Generative AI", category: "AI/ML", logo: "https://cdn.simpleicons.org/google" },
    { id: "huggingface", name: "Hugging Face", category: "AI/ML", logo: "https://cdn.simpleicons.org/huggingface" },
    { id: "langchain", name: "LangChain", category: "AI/ML", logo: "https://cdn.simpleicons.org/langchain" },

    // Data Science & Analytics
    { id: "statistics", name: "Statistics", category: "Data", logo: "https://cdn.simpleicons.org/scipy" },
    { id: "pandas", name: "Pandas", category: "Data", logo: "/assets/logos/skill-pandas.svg" },
    { id: "numpy", name: "NumPy", category: "Data", logo: "https://cdn.simpleicons.org/numpy" },
    { id: "seaborn", name: "Seaborn", category: "Data", logo: "https://cdn.simpleicons.org/python" }, // Python lib fallback
    { id: "eda", name: "EDA", category: "Data", logo: "https://cdn.simpleicons.org/jupyter" },
    { id: "feature-engineering", name: "Feature Eng.", category: "Data", logo: "https://cdn.simpleicons.org/scikitlearn" },
    { id: "ab-testing", name: "A/B Testing", category: "Data", logo: "https://cdn.simpleicons.org/googleanalytics" },
    { id: "linear-algebra", name: "Math & Calc", category: "Data", logo: "https://cdn.simpleicons.org/wolframmathematica" },

    // Visualization
    { id: "tableau", name: "Tableau", category: "Data", logo: "/assets/logos/tableau.png" },
    { id: "powerbi", name: "Power BI", category: "Data", logo: "/assets/logos/powerbi.png" },

    // Engineering & Ops
    { id: "data-engineering", name: "Data Eng.", category: "Backend", logo: "https://cdn.simpleicons.org/apachespark" },
    { id: "mlops", name: "MLOps", category: "Ops", logo: "https://cdn.simpleicons.org/mlflow" },
    { id: "agent-dev", name: "Agent Dev", category: "AI/ML", logo: "/assets/logos/agent-dev.png" },
    { id: "git", name: "Git", category: "Tools", logo: "https://cdn.simpleicons.org/git" },

    // Cloud
    { id: "aws", name: "AWS", category: "Cloud", logo: "/assets/logos/aws.png" },
    { id: "gcp", name: "GCP", category: "Cloud", logo: "https://cdn.simpleicons.org/googlecloud" },
];

export const EXPERIENCE: ExperienceItem[] = [
    {
        id: "workday-senior",
        role: "Senior Data Scientist",
        company: "Workday",
        location: "Boulder, CO",
        period: "2023 - Present",
        description: [
            "Leading development of Generative AI capabilities for Workday Assistant.",
            "Architected RAG pipelines achieving 90% accuracy in Q&A tasks.",
            "Developed ML models for predicting employee churn and flight risk."
        ],
        techStack: ["Python", "PyTorch", "LangChain", "AWS", "Kubernetes"]
    },
    {
        id: "workday-ds",
        role: "Data Scientist",
        company: "Workday",
        location: "Boulder, CO",
        period: "2021 - 2023",
        description: [
            "Built NLP models for resume parsing and skill extraction.",
            "Optimized search relevance for candidate matching algorithms.",
            "Collaborated with engineering scale ML inference to 1M+ requests/day."
        ],
        techStack: ["Python", "Scikit-Learn", "Spacy", "ElasticSearch", "Scala"]
    },
    {
        id: "comcast",
        role: "Data Engineer",
        company: "Comcast",
        location: "Philadelphia, PA",
        period: "2019 - 2021",
        description: [
            "Designed and implemented real-time data pipelines using Kafka and Spark.",
            "Managed petabyte-scale data lakes on AWS S3.",
            "Automated ETL workflows reducing data latency by 40%."
        ],
        techStack: ["Scala", "Spark", "Kafka", "AWS EMR", "Airflow"]
    }
];

export const PROJECTS: ProjectItem[] = [
    {
        id: "rag-chatbot",
        title: "Enterprise RAG Assistant",
        description: "A secure, retrieval-augmented generation system for internal enterprise documentation. Features semantic search, citation handling, and role-based access control.",
        techStack: ["Python", "LangChain", "OpenAI", "Pinecone", "React"],
        repoLink: "https://github.com/vamshigunji/rag-demo",
        demoLink: "#"
    },
    {
        id: "churn-predictor",
        title: "Customer Churn Predictor",
        description: "End-to-end ML pipeline to predict customer churn risk. Deployed model serves real-time predictions via FastAPI with drift monitoring enabled.",
        techStack: ["Sklearn", "MLflow", "FastAPI", "Docker", "AWS SageMaker"],
        repoLink: "https://github.com/vamshigunji/churn-mlops",
        demoLink: "#"
    },
    {
        id: "portfolio",
        title: "Modern Portfolio",
        description: "This high-performance personal website built with Next.js 15, Tailwind CSS v4, and Framer Motion. Features advanced animations and glassmorphism.",
        techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
        repoLink: "https://github.com/vamshigunji/my-web-site",
        demoLink: "https://venkatagunji.com"
    }
];

export const SOCIAL_LINKS: SocialLink[] = [
    {
        label: "GitHub",
        href: "https://github.com/venkatavamshigunji",
        icon: "github",
        platform: "GitHub"
    },
    {
        label: "LinkedIn",
        href: "https://linkedin.com/in/venkatavamshigunji",
        icon: "linkedin",
        platform: "LinkedIn"
    },
    {
        label: "Email",
        href: "mailto:contact@venkatagunji.com",
        icon: "mail",
        platform: "Email"
    }
];
