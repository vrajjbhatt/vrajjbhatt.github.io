export const siteConfig = {
  name: "Vraj Bhatt",
  title: "DevOps | SRE | Platform Engineer",
  email: "vrajjbhatt@gmail.com",
  phone: "+1 732-320-6490",
  location: "New Jersey, United States",
  linkedin: "https://www.linkedin.com/in/vraj-bhatt-090835133/",
  github: "https://github.com/vrajjbhatt",
  resume: "https://github.com/vrajjbhatt/vrajjbhatt.github.io/blob/main/Vraj_DevOps_Resume.pdf",

  // ✅ Required by index.astro
  description: `Engineer with 4.5+ years of experience building and optimizing cloud-native systems 
  through automation, monitoring, and scalable architecture. Skilled in Kubernetes, 
  multi-cloud environments, and DevOps practices with a proven record of improving reliability, 
  reducing costs, and enabling 99.99% uptime for production systems.`,

  // ✅ Projects.astro will map over this
  projects: [
  {
    name: "Build, Automate, and Scale on Cloud",
    description: "End-to-end DevOps automation (CI/CD, IaC, scaling, monitoring).",
    link: "https://github.com/vrajjbhatt",
    skills: ["AWS", "Terraform", "Ansible", "CloudFormation", "CI/CD"]
  },
  {
    name: "CoviDist Smart Band",
    description: "IoT wristband to detect distancing violations (Springer publication).",
    link: "https://link.springer.com/chapter/10.1007/978-981-19-8963-6_7",
    skills: ["IoT", "Arduino", "C++"]
  },
  {
    name: "Organization Portfolio Info System",
    description: "Next.js + AWS app providing ESG-based company insights.",
    link: "https://github.com/vrajjbhatt",
    skills: ["Next.js", "Python", "PostgreSQL", "AWS Amplify", "AWS Beanstalk"]
  }
  ],

  // ✅ Experience.astro will map over this
  experience: [
    {
      role: "DevOps Engineer",
      company: "Anblicks Inc (Remote, USA)",
      period: "May 2025 - Aug 2025",
      details: [
        "Managed AWS + Kubernetes infra (5 prod and 18 lower env clusters, 50+ microservices).",
        "Implemented KEDA autoscaling (cut idle compute usage by 30%).",
        "Enhanced observability with Prometheus, Grafana, ELK (reduced MTTR from 2h → 45m).",
        "Applied AWS cost optimization (rightsizing, storage tiering).",
        "Collaborated with US/India teams to evolve CI/CD pipelines (deployment frequency +50%)."
      ]
    },
    {
      role: "DevOps Engineer (L3)",
      company: "Anblicks Inc (India)",
      period: "Jul 2023 - May 2025",
      details: [
        "Automated ELK stack with Fluent Bit for Kubernetes monitoring.",
        "Deployed Prometheus + Grafana on AWS EKS for observability.",
        "Developed Python Boto3 scripts for RDS slow query optimization.",
        "Built custom Lambda layer to forward logs to ELK (cut CloudWatch costs by 30%).",
        "Directed uptime improvement from 98% → 99.9%."
      ]
    },
    {
      role: "Software Engineer (Full Stack + DevOps)",
      company: "Bosc Tech Labs (India)",
      period: "Apr 2022 - Jun 2023",
      details: [
        "Built & deployed crypto token platform on AWS with scalable architecture.",
        "Hosted Next.js app on AWS Amplify + serverless backend on Beanstalk.",
        "Developed React Native social music app (1K+ downloads).",
        "Engineered TypeScript APIs (-200ms latency improvement)."
      ]
    },
    {
      role: "Jr. DevOps Engineer",
      company: "Anblicks Inc (India)",
      period: "Jan 2021 - Apr 2022",
      details: [
        "Implemented IaC with CloudFormation, CodePipeline, CodeBuild.",
        "24x7 SRE support for SLA uptime 99.9%.",
        "Executed deployments & maintenance for US clients."
      ]
    }
  ],

  // ✅ Education.astro will map over this
  education: [
    {
      degree: "MCA - Computer Science",
      school: "Nirma University",
      grade: "CGPA: 8.59"
    },
    {
      degree: "BCA - Computer Science",
      school: "Kadi Sarva Vishwavidyalaya",
      grade: "CGPA: 9.37"
    }
  ]
};
