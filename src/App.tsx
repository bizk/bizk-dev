import { useState, useEffect } from 'react'
import { Routes, Route, Navigate, useNavigate, useParams, NavLink, useLocation } from 'react-router-dom'
import hljs from 'highlight.js'
import 'highlight.js/styles/a11y-dark.css'
import { Marked, type Tokens } from 'marked'
import mermaid from 'mermaid'
import './App.css'
import { loadBlogPostById, loadBlogSummaries } from './utils/blogs'
import { loadProjects, loadProjectById, type ProjectArticle } from './utils/projects'
import { ShareButton } from './components/ShareButton'

// Removed View type - now using URL-based routing

type Experience = {
  role: string
  company: string
  period: string
  summary: string
  technologies: string[]
  points: string[]
}

const experiences: Experience[] = [
  {
    role: 'Blockchain Engineer | Product - Wallet',
    company: 'sFox',
    period: 'February 2024 - Present',
    summary:
      'Building critical Payments infrastructer, transaction signing systems, and travel rule (AML / KYC) capabilities for a crypto OTC exchange operating across multiple regions.',
    technologies: ['Go', 'Node.js', 'TypeScript', 'Kubernetes', 'Blockchain', 'HSM', 'PKCS#11'],
    points: [
      'Integrated wallet backend services with the Coinbase TRUST network for compliant KYC data exchange.',
      'Designed and implemented a Bitcoin signing system in Go using HSM and PKCS#11 for production wallet flows.',
      'Built UTXO signing infrastructure for Ledger-based devices handling high daily transaction volume.',
      'Led travel rule compliance delivery across the US, Europe, and Asia by aligning engineering and compliance teams.',
    ],
  },
  {
    role: 'Founder',
    company: 'Austral Tech',
    period: 'January 2024 - Present',
    summary:
      'Leading a small engineering consultancy focused on AI automation, document intelligence, and chat-driven customer operations.',
    technologies: ['Go', 'Node.js', 'Python', 'PostgreSQL', 'Linux', 'LLMs', 'Redis', 'MCP', 'WhatsApp API'],
    points: [
      'Built Ventify, a sales automation chatbot product currently serving multiple businesses and thousands of end users weekly.',
      'Delivered a WhatsApp LLM support assistant for a major energy company with payment, claims, and inquiry workflows.',
      'Implemented OCR and CRM automations for a law firm, removing more than 200 manual hours per month.',
      'Automated cereal loading workflows in an export company and reduced time costs and operational errors.',
    ],
  },
  {
    role: 'Lecturer',
    company: 'UADE',
    period: 'June 2024 - Present',
    summary:
      'Teaching API development with an emphasis on practical delivery, full-stack systems, and production-oriented tooling.',
    technologies: ['Java', 'Spring', 'React', 'TypeScript', 'Docker', 'PostgreSQL', 'Postman', 'cURL'],
    points: [
      'Co-created coursework around Java, Spring, React, Docker, PostgreSQL, Postman, and cURL.',
      'Led project-based learning so students could produce portfolio-quality full-stack applications.',
    ],
  },
  {
    role: 'Software Engineer | Data - Blockchain - R&D',
    company: 'Zondax',
    period: 'February 2023 - February 2024',
    summary:
      'Worked on blockchain development, cryptography, data indexing, and infrastructure for wallet and node systems.',
    technologies: ['Go', 'Node.js', 'Kubernetes', 'Earthly', 'ArgoCD', 'Zcash', 'Cosmos', 'Rosetta'],
    points: [
      'Implemented cryptography and security features for Cosmos-based blockchain systems.',
      'Worked on blockchain data indexers and Coinbase Rosetta integrations.',
      'Maintained blockchain node infrastructure on Kubernetes with Earthly and ArgoCD.',
    ],
  },
  {
    role: 'Sr. Software Engineer (AMTS → MTS → SMTS) | R&D',
    company: 'Salesforce',
    period: 'May 2020 - February 2023',
    summary:
      'Led technical initiatives in distributed systems, analytics platforms, API testing automation, and internal developer tooling.',
    technologies: ['Java', 'Spring', 'Node.js', 'TypeScript', 'Go', 'Kubernetes', 'Jenkins', 'Tableau', 'Chaos Engineering'],
    points: [
      'Led a Java Spring analytics service and pipeline processing data from over 2,000 projects.',
      'Designed a patent-backed microservice that generated API specifications and tests from live traffic.',
      'Mentored engineers and interns while contributing to company-wide technical talks.',
      'Developed chaos engineering and internal platform tooling used across multiple teams.',
    ],
  },
  {
    role: 'Software Engineering Intern',
    company: 'JPMorgan Chase',
    period: 'June 2019 - May 2020',
    summary:
      'Contributed to payment and messaging systems used across LATAM financial institutions.',
    technologies: ['Java', 'Microservices', 'Payment Processing'],
    points: [
      'Worked on modernization of key messaging microservices used by banks and institutions across LATAM.',
      'Participated in development of a Java payment processing system.',
    ],
  },
]

const projects = loadProjects()
const blogSummaries = loadBlogSummaries()
// const technicalBlogs = blogSummaries.filter((post) => post.tags.includes('engineering'))
const projectBlogs = blogSummaries.filter((post) => post.tags.includes('project') || post.category.toLowerCase() === 'project')

// Legacy hardcoded projects (replaced by loadProjects() - can be moved to projects/ folder)
// Commented out to avoid TypeScript unused variable warning
/*
const _legacyProjects = [
  {
    title: 'Ventify',
    category: 'AI Operations',
    summary:
      'Chat-based sales automation platform for businesses that need lead qualification, customer follow-up, and real operational workflows.',
    impact: 'Serving multiple businesses and more than 5,000 clients weekly.',
    technologies: ['Node.js', 'Python', 'LLMs', 'Redis', 'WhatsApp API'],
    featured: true,
  },
  {
    title: 'Wallet Signing Infrastructure',
    category: 'Blockchain',
    summary:
      'Secure transaction signing services for UTXO-based wallets using hardware security modules and PKCS#11 integrations.',
    impact: 'Supports production wallet operations at high daily transaction volume.',
    technologies: ['Go', 'Bitcoin', 'HSM', 'PKCS#11'],
    featured: true,
  },
  {
    title: 'Travel Rule Compliance Platform',
    category: 'Fintech',
    summary:
      'Cross-team compliance delivery for regulated crypto flows and identity-linked transaction data exchange.',
    impact: 'Enabled operations across the US, Europe, and Asia.',
    technologies: ['Node.js', 'TypeScript', 'Bitcoin'],
  },
  {
    title: 'Energy Company Support Assistant',
    category: 'Enterprise AI',
    summary:
      'WhatsApp-based LLM assistant connected to internal company software for payments, claims, and customer inquiries.',
    impact: 'Serves over 60,000 customers monthly.',
    technologies: ['Node.js', 'Redis', 'LLMs', 'MCP', 'WhatsApp API'],
  },
  {
    title: 'API Model Generation from Live Traffic',
    category: 'Platform Engineering',
    summary:
      'Patent-backed platform that inferred API models and generated test assets from production network traffic.',
    impact: 'Generated over 15,000 tests and cut engineering time spent per test by 91%.',
    technologies: ['Node.js', 'TypeScript', 'Kubernetes'],
  },
  {
    title: 'Blockchain Node Infrastructure',
    category: 'Infrastructure',
    summary:
      'Operations and deployment backbone for Cosmos and Zcash nodes using declarative infrastructure workflows.',
    impact: 'Improved maintainability and consistency of blockchain node environments.',
    technologies: ['Go', 'Kubernetes', 'Earthly', 'ArgoCD', 'Zcash', 'Cosmos'],
  },
]
*/

const education = [
  {
    title: 'MEng. Informatics Engineering',
    institution: 'Universidad Argentina de la Empresa (UADE)',
    period: '2017 - 2022',
    note: 'Thesis focused on distributed systems and blockchain.',
  },
  {
    title: 'CCNA 1 & 2',
    institution: 'Cisco / UADE',
    period: '2019 - 2020',
    note: 'Letter of Merit recognition for both networking courses.',
  },
]

const awards = [
  {
    title: 'Salesforce Innovation Award - Best Patent',
    period: 'August 2022',
    note: 'Recognized for a novel approach to testing distributed systems.',
  },
  {
    title: 'Mulesoft Team Innovation Award',
    period: 'December 2020',
    note: 'Awarded for a philanthropy-focused technology initiative with significant cross-team impact.',
  },
  {
    title: 'Salesforce - Biggest Employee Impact',
    period: '2020',
    note: 'Hackathon-winning work focused on user experience and engagement.',
  },
]

const patents = [
  {
    title: 'Automatic API model generation based on network traffic',
    id: 'US20230168871A1',
    note: 'Issued June 1, 2023',
  },
  {
    title: 'Testing integration applications for systems',
    id: 'US20240104003A1',
    note: 'Filed September 27, 2022',
  },
]

const navItems: { id: string; label: string }[] = [
  { id: 'home', label: 'Home' },
  { id: 'cv', label: 'CV' },
  { id: 'projects', label: 'Projects' },
  { id: 'blog', label: 'Blog' },
]

const contactLinks: { id: 'linkedin' | 'github' | 'email'; label: string; href: string }[] = [
  {
    id: 'linkedin',
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/carlos-santiago-yanzon/',
  },
  {
    id: 'github',
    label: 'GitHub',
    href: 'https://github.com/bizk',
  },
  {
    id: 'email',
    label: 'Email',
    href: 'mailto:carlosyanzon@protonmail.com',
  },
]

const articleMarkdown = new Marked({
  async: false,
  renderer: {
    code({ text, lang }: Tokens.Code) {
      const language = lang?.split(/\s+/)[0] ?? ''

      // Handle mermaid diagrams separately
      if (language === 'mermaid') {
        return `<div class="mermaid">${text}</div>`
      }

      const highlighted = language && hljs.getLanguage(language)
        ? hljs.highlight(text, { language, ignoreIllegals: true }).value
        : hljs.highlightAuto(text).value
      const languageClass = language ? ` language-${language}` : ''

      return `<pre><code class="hljs${languageClass}">${highlighted}</code></pre>`
    },
  },
})

const renderArticleMarkdown = (content: string) => articleMarkdown.parse(content)

const LoadingView = () => {
  return (
    <div className="loading-container">
      <div className="loading-card">
        <div className="loading-spinner">
          <div className="spinner-ring" />
          <div className="spinner-ring" />
          <div className="spinner-ring" />
        </div>
        <div className="loading-text">
          <span className="eyebrow">Please wait</span>
          <h2>Loading content...</h2>
        </div>
      </div>
    </div>
  )
}

const ContactIcon = ({ id }: { id: 'linkedin' | 'github' | 'email' }) => {
  switch (id) {
    case 'linkedin':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path
            fill="currentColor"
            d="M6.94 8.5H3.56V20h3.38zm.22-3.69a1.96 1.96 0 1 0-3.92 0a1.96 1.96 0 0 0 3.92 0M20 12.78C20 9.5 18.25 8 15.92 8c-1.88 0-2.72 1.03-3.19 1.76V8.5H9.35V20h3.38v-5.7c0-1.5.28-2.95 2.14-2.95c1.83 0 1.86 1.71 1.86 3.05V20H20z"
          />
        </svg>
      )
    case 'github':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path
            fill="currentColor"
            d="M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.03c-3.34.72-4.04-1.41-4.04-1.41c-.55-1.38-1.33-1.74-1.33-1.74c-1.09-.73.08-.72.08-.72c1.2.09 1.84 1.24 1.84 1.24c1.08 1.84 2.82 1.31 3.5 1a2.6 2.6 0 0 1 .77-1.64c-2.67-.31-5.48-1.34-5.48-5.95c0-1.31.47-2.38 1.24-3.22c-.12-.31-.54-1.56.12-3.25c0 0 1.01-.32 3.3 1.23A11.5 11.5 0 0 1 12 6.32c1.02 0 2.04.14 3 .42c2.3-1.55 3.3-1.23 3.3-1.23c.66 1.69.24 2.94.12 3.25c.77.84 1.24 1.91 1.24 3.22c0 4.62-2.82 5.63-5.5 5.94c.43.37.82 1.1.82 2.23v3.3c0 .32.22.69.83.57A12 12 0 0 0 12 .5"
          />
        </svg>
      )
    case 'email':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path
            fill="currentColor"
            d="M20 5H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2m0 2l-8 5l-8-5zm0 10H4V9l8 5l8-5z"
          />
        </svg>
      )
  }
}

const skillAreas = [
  {
    title: 'Distributed Systems',
    text: 'Designing resilient backends, event flows, and service boundaries for payments systems that handle thousand of transactions every day.',
    accent: 'primary',
  },
  {
    title: 'Blockchain Infrastructure',
    text: 'Wallets, signing systems, encryption, staking flows, compliance integrations, and blockchain node operations.',
    accent: 'tertiary',
  },
  {
    title: 'AI Automation',
    text: 'Operational assistants, OCR pipelines, and chat-based workflows for customers across different industries.',
    accent: 'primary',
  },
  {
    title: 'Entrepreneurship & Leadership',
    text: 'Cross-team delivery, mentoring, architectural decisions, and practical execution in ambiguous environments.',
    accent: 'tertiary',
  },
]

// View Components
function HomeView() {
  const navigate = useNavigate()

  return (
    <>
      <section className="hero-section">
        <div className="hero-copy">
          <span className="eyebrow">Distributed Systems • Blockchain • AI Automation</span>
          <h1>
            <span>World class</span> engineering for the products of tomorrow.
          </h1>
          <p className="hero-text">
            Informatics engineer with +7 years of experience across Fintech, Blockchain,
            Product, Research and development, Payments Infrastructure and AI Bots.
          </p>
          <div className="hero-actions">
            <button type="button" className="primary-action" onClick={() => navigate('/cv')}>
              Visit CV
            </button>
            <button type="button" className="secondary-action" onClick={() => navigate('/projects')}>
              View Projects
            </button>
          </div>
          <div className="contact-links-row">
            {contactLinks.map((link) => (
              <a
                key={link.label}
                className="contact-link-button"
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
                aria-label={link.label}
                title={link.label}
              >
                <ContactIcon id={link.id} />
                <span className="sr-only">{link.label}</span>
              </a>
            ))}
          </div>
          <div className="hero-meta">
            <div>
              <span className="meta-label">Current focus</span>
              <strong>Payments infrastructure, compliance, and AI automation</strong>
            </div>
            {/* <div>
              <span className="meta-label">Based in</span>
              <strong>Buenos Aires, Argentina</strong>
            </div> */}
          </div>
        </div>

        <aside className="hero-panel">
          <div className="portrait-cluster">
            <div className="portrait-orb">
              <img src="/profile.jpg" alt="Carlos Santiago Yanzon" className="portrait-image" />
            </div>
            <div className="status-card">
              <span className="meta-label">Profile</span>
              <strong>Senior engineer, founder, lecturer</strong>
              <p>Strong backend execution with an operator mindset and direct communication style.</p>
            </div>
          </div>
        </aside>
      </section>

      <section className="bento-grid">
        {skillAreas.map((area) => (
          <article key={area.title} className={`bento-card accent-${area.accent}`}>
            <span className="card-tag">{area.accent === 'primary' ? 'Core' : 'Applied'}</span>
            <h2>{area.title}</h2>
            <p>{area.text}</p>
          </article>
        ))}
      </section>

      <section className="highlight-strip">
        <div className="metric-card">
          <span className="metric-value">+7 Years</span>
          <span className="metric-label">Work experience in startups, enterprise, education, and consulting</span>
        </div>
        <div className="metric-card">
          <span className="metric-value">2 Patents</span>
          <span className="metric-label">Research patents related to distributed systems and testing automation</span>
        </div>
        <div className="metric-card">
          <span className="metric-value">+3 Products</span>
          <span className="metric-label">Delivered up to 3 products related to AI automation, OCR and chat-based workflows</span>
        </div>
      </section>
    </>
  )
}

function CVView() {
  return (
    <>
      <section className="page-intro">
        <span className="eyebrow">Curriculum Vitae</span>
        <h1>Who am I?</h1>
        <p>
          I'm a person driven by challenge and Innovation. With a wide range of experience across different roles, induestries and technologies, I'm a polyglot engineer, entrepreneur and team player. I thrive in dynamic environments and am always looking to improve and reflect on my work.
        </p>
        <div className="contact-links-row">
          {contactLinks.map((link) => (
            <a
              key={`cv-${link.label}`}
              className="contact-link-button"
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
              aria-label={link.label}
              title={link.label}
            >
              <ContactIcon id={link.id} />
              <span className="sr-only">{link.label}</span>
            </a>
          ))}
        </div>
      </section>

      <section className="timeline-section">
        <div className="section-heading">
          <h2>Experience</h2>
          <span />
        </div>
        <div className="timeline-list">
          {experiences.map((experience) => (
            <article key={`${experience.company}-${experience.period}`} className="timeline-item">
              <div className="timeline-meta">
                <p>{experience.period}</p>
                <span>{experience.role}</span>
              </div>
              <div className="timeline-card">
                <div className="timeline-card-header">
                  <h3>{experience.company}</h3>
                </div>
                <p className="timeline-summary">{experience.summary}</p>
                <div className="pill-row">
                  {experience.technologies.map((technology) => (
                    <span key={`${experience.company}-${technology}`} className="pill">
                      {technology}
                    </span>
                  ))}
                </div>
                <ul className="timeline-points">
                  {experience.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="detail-grid">
        <div>
          <div className="section-heading">
            <h2>Education</h2>
            <span />
          </div>
          <div className="stack-list">
            {education.map((item) => (
              <article key={item.title} className="stack-card">
                <span className="stack-period">{item.period}</span>
                <h3>{item.title}</h3>
                <p>{item.institution}</p>
                <small>{item.note}</small>
              </article>
            ))}
          </div>
        </div>

        <div>
          <div className="section-heading">
            <h2>Awards</h2>
            <span />
          </div>
          <div className="stack-list">
            {awards.map((item) => (
              <article key={item.title} className="stack-card accent-card">
                <span className="stack-period">{item.period}</span>
                <h3>{item.title}</h3>
                <small>{item.note}</small>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="callout-section">
        <div className="section-heading">
          <h2>Patents</h2>
          <span />
        </div>
        <div className="patent-grid">
          {patents.map((patent) => (
            <article key={patent.id} className="patent-card">
              <span className="stack-period">{patent.id}</span>
              <h3>{patent.title}</h3>
              <p>{patent.note}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}

function ProjectsView() {
  const navigate = useNavigate()

  return (
    <>
      <section className="projects-intro">
        <span className="eyebrow">Engineering Portfolio</span>
        <h1>Projects</h1>
        <div className="projects-intro-line" />
        <p>
          A collection of experiences, side projects and experiments from my career.
        </p>
      </section>

      {projectBlogs.length > 0 && (
        <>
          <section className="page-intro">
            <span className="eyebrow">Project Insights</span>
            <h2>Behind the Build</h2>
            <p>
              Detailed write-ups exploring the architecture, challenges, and lessons learned from real-world project implementations.
            </p>
          </section>

          <section className="blog-grid">
            {projectBlogs.slice(0, 1).map((post) => (
              <button
                key={post.id}
                type="button"
                className="blog-feature-card blog-card-clickable"
                onClick={() => navigate(`/blog/${encodeURIComponent(post.id)}`)}
              >
                <div
                  className="blog-feature-visual"
                  style={post.imageUrl ? { backgroundImage: `url(${post.imageUrl})` } : undefined}
                >
                  <div className="blog-visual-overlay" />
                </div>
                <div className="blog-feature-copy">
                  <div className="blog-card-meta">
                    <span className="card-tag">Project</span>
                    <span>{post.date}</span>
                  </div>
                  <h2>{post.title}</h2>
                  <p>{post.summary}</p>
                  <div className="blog-feature-footer">
                    <div className="blog-context-cluster">
                      <span className="blog-context-icon" aria-hidden="true">
                        ≈
                      </span>
                      <span className="blog-card-context">{post.category}</span>
                    </div>
                    <span className="text-action">Read Article →</span>
                  </div>
                </div>
              </button>
            ))}

            {projectBlogs.slice(1, 2).map((post) => (
              <button
                key={post.id}
                type="button"
                className="blog-side-card blog-card-clickable"
                onClick={() => navigate(`/blog/${encodeURIComponent(post.id)}`)}
              >
                <div>
                  <div className="blog-card-meta">
                    <span className="card-tag card-tag-primary">{post.category}</span>
                    <span>{post.date}</span>
                  </div>
                  <h3>{post.title}</h3>
                  <p>{post.summary}</p>
                </div>
                <div className="blog-side-footer">
                  <div className="blog-side-tags">
                    {post.tags.slice(0, 3).map((tag) => (
                      <span key={`${post.id}-${tag}`} className="blog-side-pill">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <span className="text-action">Read Article →</span>
                </div>
              </button>
            ))}

            {projectBlogs.slice(2, 5).map((post) => (
              <button
                key={post.id}
                type="button"
                className="blog-compact-card blog-card-clickable"
                onClick={() => navigate(`/blog/${encodeURIComponent(post.id)}`)}
              >
                <div className="blog-compact-body">
                  <span className="card-tag">{post.category}</span>
                  <h3>{post.title}</h3>
                  <p>{post.summary}</p>
                </div>
                <div className="blog-compact-meta">
                  <span>{post.date}</span>
                  <span>{post.tags[0] ?? post.category}</span>
                </div>
              </button>
            ))}

            {projectBlogs.length > 5 && projectBlogs.slice(5, 6).map((post) => (
              <button
                key={post.id}
                type="button"
                className="blog-wide-card blog-card-clickable"
                onClick={() => navigate(`/blog/${encodeURIComponent(post.id)}`)}
              >
                <div
                  className="blog-wide-visual"
                  style={post.imageUrl ? { backgroundImage: `url(${post.imageUrl})` } : undefined}
                >
                  <div className="blog-visual-overlay" />
                </div>
                <div className="blog-wide-copy">
                  <div className="blog-card-meta">
                    <span className="card-tag">Deep Dive</span>
                    <span>{post.date}</span>
                  </div>
                  <h2>{post.title}</h2>
                  <p>{post.summary}</p>
                  <div className="blog-wide-footer">
                    <span className="blog-card-context">Project case study • {post.readTime}</span>
                    <span className="text-action">Read Article →</span>
                  </div>
                </div>
              </button>
            ))}
          </section>

          {projectBlogs.length > 6 && (
            <section className="blog-pagination">
              <button
                type="button"
                className="blog-page-button secondary-action"
                onClick={() => navigate('/blog')}
              >
                View All Project Articles →
              </button>
            </section>
          )}
        </>
      )}

      {projects.length > 0 && (
        <section className="projects-grid">
          {projects[0] && (
            <button
              type="button"
              className="project-feature project-feature-left blog-card-clickable"
              onClick={() => navigate(`/projects/${encodeURIComponent(projects[0].id)}`)}
            >
              <div className="project-feature-copy">
                <div>
                  <span className="card-tag">{projects[0].category}</span>
                  <h2>{projects[0].title}</h2>
                  <p>{projects[0].summary}</p>
                </div>
                <div className="project-feature-footer">
                  <strong>{projects[0].impact}</strong>
                  <div className="pill-row">
                    {projects[0].technologies.map((technology) => (
                      <span key={`${projects[0].title}-${technology}`} className="pill">
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div
                className="project-feature-visual project-visual-emerald"
                style={projects[0].showImage && projects[0].imageUrl ? { backgroundImage: `url(${projects[0].imageUrl})`, backgroundSize: 'cover', backgroundPosition: 'center' } : undefined}
              />
            </button>
          )}

          {projects[1] && (
            <button
              type="button"
              className="project-side-card blog-card-clickable"
              onClick={() => navigate(`/projects/${encodeURIComponent(projects[1].id)}`)}
            >
              <div>
                <span className="card-tag">{projects[1].category}</span>
                <h2>{projects[1].title}</h2>
                <p>{projects[1].summary}</p>
              </div>
              <div className="project-side-footer">
                <strong>{projects[1].impact}</strong>
                <div className="pill-row">
                  {projects[1].technologies.map((technology) => (
                    <span key={`${projects[1].title}-${technology}`} className="pill">
                      {technology}
                    </span>
                  ))}
                </div>
              </div>
            </button>
          )}

          {projects[2] && (
            <button
              type="button"
              className="project-side-card project-side-card-alt blog-card-clickable"
              onClick={() => navigate(`/projects/${encodeURIComponent(projects[2].id)}`)}
            >
              <div>
                <span className="card-tag">{projects[2].category}</span>
                <h2>{projects[2].title}</h2>
                <p>{projects[2].summary}</p>
              </div>
              <div className="project-side-footer">
                <strong>{projects[2].impact}</strong>
                <div className="pill-row">
                  {projects[2].technologies.map((technology) => (
                    <span key={`${projects[2].title}-${technology}`} className="pill">
                      {technology}
                    </span>
                  ))}
                </div>
              </div>
            </button>
          )}

          {projects[3] && (
            <button
              type="button"
              className="project-feature project-feature-right blog-card-clickable"
              onClick={() => navigate(`/projects/${encodeURIComponent(projects[3].id)}`)}
            >
              <div className="project-feature-copy">
                <div>
                  <span className="card-tag">{projects[3].category}</span>
                  <h2>{projects[3].title}</h2>
                  <p>{projects[3].summary}</p>
                </div>
                <div className="project-feature-footer">
                  <strong>{projects[3].impact}</strong>
                  <div className="pill-row">
                    {projects[3].technologies.map((technology) => (
                      <span key={`${projects[3].title}-${technology}`} className="pill">
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div
                className="project-feature-visual project-visual-blue"
                style={projects[3].showImage && projects[3].imageUrl ? { backgroundImage: `url(${projects[3].imageUrl})`, backgroundSize: 'cover', backgroundPosition: 'center' } : undefined}
              />
            </button>
          )}

          {projects[4] && (
            <button
              type="button"
              className="project-standard-card blog-card-clickable"
              onClick={() => navigate(`/projects/${encodeURIComponent(projects[4].id)}`)}
            >
              <span className="card-tag">{projects[4].category}</span>
              <h2>{projects[4].title}</h2>
              <p>{projects[4].summary}</p>
              <strong>{projects[4].impact}</strong>
              <div className="pill-row">
                {projects[4].technologies.map((technology) => (
                  <span key={`${projects[4].title}-${technology}`} className="pill">
                    {technology}
                  </span>
                ))}
              </div>
            </button>
          )}

          {projects[5] && (
            <button
              type="button"
              className="project-standard-card blog-card-clickable"
              onClick={() => navigate(`/projects/${encodeURIComponent(projects[5].id)}`)}
            >
              <span className="card-tag">{projects[5].category}</span>
              <h2>{projects[5].title}</h2>
              <p>{projects[5].summary}</p>
              <strong>{projects[5].impact}</strong>
              <div className="pill-row">
                {projects[5].technologies.map((technology) => (
                  <span key={`${projects[5].title}-${technology}`} className="pill">
                    {technology}
                  </span>
                ))}
              </div>
            </button>
          )}
        </section>
      )}
    </>
  )
}

function BlogView() {
  const navigate = useNavigate()
  const [activeBlogFilter, setActiveBlogFilter] = useState<string>('All Blogs')

  // Derive filter options from blog tags
  const allTags = new Set<string>()
  blogSummaries.forEach((post) => {
    post.tags.forEach((tag) => allTags.add(tag))
  })
  const blogFilterOptions = ['All Blogs', ...Array.from(allTags).sort()]

  // Filter blogs based on active filter
  const filteredBlogPosts = activeBlogFilter === 'All Blogs'
    ? blogSummaries
    : blogSummaries.filter((post) => post.tags.includes(activeBlogFilter))

  // Layout assignments
  const featuredBlog = filteredBlogPosts[0]
  const sideBlog = filteredBlogPosts[1]
  const compactBlogs = filteredBlogPosts.slice(2, 5)
  const wideBlog = filteredBlogPosts[5]
  const hasMultipleBlogPages = filteredBlogPosts.length > 6

  return (
    <>
      <section className="blog-intro">
        <span className="eyebrow">Thoughts on life, technology and the future</span>
        <p>
          These entries are a collection of thoughts, reflections, learnings and insights from my life and career.
          My intention is to leave a piece of value on the bast internet ocean to whoever might find it useful.
          I'm not a writer, these entries are written as is.
          Thanks for being here.
        </p>
      </section>

      <section className="blog-filters">
        <div className="blog-filters-header">
          <div className="blog-filters-label">
            <span className="filter-icon" aria-hidden="true">
              ≡
            </span>
            <span>Filter blogs</span>
          </div>
          <span className="blog-filters-count">{filteredBlogPosts.length} entries found</span>
        </div>
        <div className="blog-filter-pills">
          {blogFilterOptions.map((filter) => (
            <button
              key={filter}
              type="button"
              className={`blog-filter-pill ${activeBlogFilter === filter ? 'is-active' : ''}`}
              onClick={() => setActiveBlogFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>
      </section>

      {featuredBlog ? (
        <>
          <section className="blog-grid">
            <button type="button" className="blog-feature-card blog-card-clickable" onClick={() => navigate(`/blog/${encodeURIComponent(featuredBlog.id)}`)}>
              <div
                className="blog-feature-visual"
                style={featuredBlog.imageUrl ? { backgroundImage: `url(${featuredBlog.imageUrl})` } : undefined}
              >
                <div className="blog-visual-overlay" />
              </div>
              <div className="blog-feature-copy">
                <div className="blog-card-meta">
                  <span className="card-tag">Featured System</span>
                  <span>{featuredBlog.date}</span>
                </div>
                <h2>{featuredBlog.title}</h2>
                <p>{featuredBlog.summary}</p>
                <div className="blog-feature-footer">
                  <div className="blog-context-cluster">
                    <span className="blog-context-icon" aria-hidden="true">
                      ≈
                    </span>
                    <span className="blog-card-context">{featuredBlog.category}</span>
                  </div>
                  <span className="text-action">Read Blog →</span>
                </div>
              </div>
            </button>

            {sideBlog && (
              <button type="button" className="blog-side-card blog-card-clickable" onClick={() => navigate(`/blog/${encodeURIComponent(sideBlog.id)}`)}>
                <div>
                  <div className="blog-card-meta">
                    <span className="card-tag card-tag-primary">{sideBlog.category}</span>
                    <span>{sideBlog.date}</span>
                  </div>
                  <h3>{sideBlog.title}</h3>
                  <p>{sideBlog.summary}</p>
                </div>
                <div className="blog-side-footer">
                  <div className="blog-side-tags">
                    {sideBlog.tags.map((tag) => (
                      <span key={`${sideBlog.id}-${tag}`} className="blog-side-pill">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <span className="text-action">Read Blog →</span>
                </div>
              </button>
            )}

            {compactBlogs.map((post) => (
              <button
                key={post.id}
                type="button"
                className="blog-compact-card blog-card-clickable"
                onClick={() => navigate(`/blog/${encodeURIComponent(post.id)}`)}
              >
                <div className="blog-compact-body">
                  <span className="card-tag">{post.category}</span>
                  <h3>{post.title}</h3>
                  <p>{post.summary}</p>
                </div>
                <div className="blog-compact-meta">
                  <span>{post.date}</span>
                  <span>{post.tags[0] ?? post.category}</span>
                </div>
              </button>
            ))}

            {wideBlog && (
              <button type="button" className="blog-wide-card blog-card-clickable" onClick={() => navigate(`/blog/${encodeURIComponent(wideBlog.id)}`)}>
                <div
                  className="blog-wide-visual"
                  style={wideBlog.imageUrl ? { backgroundImage: `url(${wideBlog.imageUrl})` } : undefined}
                >
                  <div className="blog-visual-overlay" />
                </div>
                <div className="blog-wide-copy">
                  <div className="blog-card-meta">
                    <span className="card-tag">Deep Dive</span>
                    <span>{wideBlog.date}</span>
                  </div>
                  <h2>{wideBlog.title}</h2>
                  <p>{wideBlog.summary}</p>
                  <div className="blog-wide-footer">
                    <span className="blog-card-context">Technical paper • {wideBlog.readTime}</span>
                    <span className="text-action">Read Blog →</span>
                  </div>
                </div>
              </button>
            )}

            {!sideBlog && filteredBlogPosts.length === 1 && (
              <div className="blog-single-note">
                <p className="meta-label">Latest entry</p>
                <p>
                  Add more blog folders under `blogs/` and this overview will expand into the full
                  editorial grid from the reference.
                </p>
              </div>
            )}
          </section>

          {hasMultipleBlogPages && (
            <section className="blog-pagination">
              <button type="button" className="blog-page-button">
                ‹
              </button>
              <button type="button" className="blog-page-button is-active">
                1
              </button>
              <button type="button" className="blog-page-button">
                2
              </button>
              <button type="button" className="blog-page-button">
                3
              </button>
              <button type="button" className="blog-page-button">
                ›
              </button>
            </section>
          )}
        </>
      ) : (
        <section className="empty-blog-state">
          <p>No blog entries found in `blogs/` yet.</p>
        </section>
      )}
    </>
  )
}

function BlogArticleView() {
  const navigate = useNavigate()
  const { id } = useParams<{ id: string }>()
  const [selectedPost, setSelectedPost] = useState<typeof blogSummaries[0] & { content: string } | null>(null)

  useEffect(() => {
    if (id) {
      const decodedId = decodeURIComponent(id)
      const post = loadBlogPostById(decodedId)
      if (post) {
        setSelectedPost(post)
      }
    }
  }, [id])

  // Initialize and render mermaid diagrams after content is loaded
  useEffect(() => {
    if (selectedPost?.content) {
      mermaid.initialize({ startOnLoad: false, theme: 'dark' })
      mermaid.run({
        querySelector: '.mermaid',
      }).catch((error) => console.error('Mermaid rendering error:', error))
    }
  }, [selectedPost])

  if (!selectedPost) {
    return <LoadingView />
  }

  return (
    <article className="article-shell">
      <button type="button" className="back-link" onClick={() => navigate('/blog')}>
        Back to Blog
      </button>

      <nav className="article-breadcrumbs" aria-label="Breadcrumb">
        <button type="button" className="article-breadcrumb-link" onClick={() => navigate('/blog')}>
          Blog
        </button>
        <span className="article-breadcrumb-separator">›</span>
        <span>{selectedPost.category}</span>
      </nav>

      <header className="article-header">
        <h1>{selectedPost.title}</h1>
        <div className="article-meta-bar">
          <div className="article-author">
            <div className="article-author-avatar">
              <img src="/profile.jpg" alt="Carlos Santiago Yanzon" />
            </div>
            <div>
              <p>Carlos Santiago Yanzon</p>
              <span>Software Engineer</span>
            </div>
          </div>
          <div className="article-meta-divider" aria-hidden="true" />
          <div className="article-meta">
            <span>{selectedPost.date}</span>
            <span>{selectedPost.readTime}</span>
          </div>
          <ShareButton title={selectedPost.title} url={window.location.href} />
          {selectedPost.tags.length > 0 && (
            <div className="article-tag-row">
              {selectedPost.tags.map((tag) => (
                <span key={`${selectedPost.id}-${tag}`} className="article-tag">
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </header>

      {selectedPost.showImage && selectedPost.imageUrl && (
        <section className="article-image-wrap">
          <div className="article-image-frame">
            <img src={selectedPost.imageUrl} alt={selectedPost.title} className="article-image" />
          </div>
          <div className="article-image-note">
            <p className="meta-label">Key Concept</p>
            <p>{selectedPost.summary}</p>
          </div>
        </section>
      )}

      {selectedPost.content.trim() ? (
        <div
          className="article-content markdown-content"
          dangerouslySetInnerHTML={{ __html: renderArticleMarkdown(selectedPost.content) as string }}
        />
      ) : (
        <div className="article-content article-empty-state">
          <p>No article content found in this post&apos;s `blog.md` yet.</p>
        </div>
      )}

      <section className="article-author-panel">
        <div className="article-author-panel-avatar">
          <img src="/profile.jpg" alt="Carlos Santiago Yanzon" />
        </div>
        <div className="article-author-panel-copy">
          <h4>Carlos Santiago Yanzon</h4>
          <p>
            Software Engineer focused on distributed systems, blockchain infrastructure, and AI
            automation for real operational workflows.
          </p>
          <div className="contact-links-row">
            {contactLinks.map((link) => (
              <a
                key={`article-${link.label}`}
                className="contact-link-button"
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
                aria-label={link.label}
                title={link.label}
              >
                <ContactIcon id={link.id} />
                <span className="sr-only">{link.label}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="article-cta">
        <div className="article-cta-inner">
          <h3>Need help with a complex system that has to scale reliably?</h3>
          <p>
            Available for consulting on backend architecture, distributed systems design, and
            production engineering.
          </p>
          <div className="article-cta-actions">
            <a className="primary-action article-cta-link" href="mailto:carlosyanzon@protonmail.com">
              Send Email
            </a>
            <a
              className="secondary-action article-cta-link"
              href="https://www.linkedin.com/in/carlos-santiago-yanzon/"
              target="_blank"
              rel="noreferrer"
            >
              Chat on LinkedIn
            </a>
          </div>
        </div>
      </section>
    </article>
  )
}

function ProjectArticleView() {
  const navigate = useNavigate()
  const { id } = useParams<{ id: string }>()
  const [selectedProject, setSelectedProject] = useState<ProjectArticle | null>(null)

  useEffect(() => {
    if (id) {
      const decodedId = decodeURIComponent(id)
      loadProjectById(decodedId).then((project) => {
        if (project) {
          setSelectedProject(project)
        }
      })
    }
  }, [id])

  // Initialize and render mermaid diagrams after content is loaded
  useEffect(() => {
    if (selectedProject?.content) {
      mermaid.initialize({ startOnLoad: false, theme: 'dark' })
      mermaid.run({
        querySelector: '.mermaid',
      }).catch((error) => console.error('Mermaid rendering error:', error))
    }
  }, [selectedProject])

  if (!selectedProject) {
    return <LoadingView />
  }

  return (
    <article className="article-shell">
      <button type="button" className="back-link" onClick={() => navigate('/projects')}>
        Back to Projects
      </button>

      <nav className="article-breadcrumbs" aria-label="Breadcrumb">
        <button type="button" className="article-breadcrumb-link" onClick={() => navigate('/projects')}>
          Projects
        </button>
        <span className="article-breadcrumb-separator">›</span>
        <span>{selectedProject.category}</span>
      </nav>

      <header className="article-header">
        <h1>{selectedProject.title}</h1>
        <div className="article-meta-bar">
          <div className="article-author">
            <div className="article-author-avatar">
              <img src="/profile.jpg" alt="Carlos Santiago Yanzon" />
            </div>
            <div>
              <p>Carlos Santiago Yanzon</p>
              <span>Software Engineer</span>
            </div>
          </div>
          <div className="article-meta-divider" aria-hidden="true" />
          <div className="article-meta">
            <span>{selectedProject.category}</span>
          </div>
          <ShareButton title={selectedProject.title} url={window.location.href} />
          <div className="article-tag-row">
            {selectedProject.technologies.map((tech) => (
              <span key={`${selectedProject.id}-${tech}`} className="article-tag">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </header>

      {selectedProject.showImage && selectedProject.imageUrl && (
        <section className="article-image-wrap">
          <div className="article-image-frame">
            <img src={selectedProject.imageUrl} alt={selectedProject.title} className="article-image" />
          </div>
          <div className="article-image-note">
            <p className="meta-label">Project Impact</p>
            <p>{selectedProject.impact}</p>
          </div>
        </section>
      )}

      {selectedProject.content && selectedProject.content.trim() ? (
        <div
          className="article-content markdown-content"
          dangerouslySetInnerHTML={{ __html: renderArticleMarkdown(selectedProject.content) as string }}
        />
      ) : (
        <div className="article-content article-empty-state">
          <p>No detailed documentation found for this project yet.</p>
          <div className="project-summary-fallback">
            <h3>Summary</h3>
            <p>{selectedProject.summary}</p>
            <h3>Impact</h3>
            <p>{selectedProject.impact}</p>
            <h3>Technologies</h3>
            <div className="pill-row">
              {selectedProject.technologies.map((tech) => (
                <span key={`fallback-${tech}`} className="pill">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}

      <section className="article-author-panel">
        <div className="article-author-panel-avatar">
          <img src="/profile.jpg" alt="Carlos Santiago Yanzon" />
        </div>
        <div className="article-author-panel-copy">
          <h4>Carlos Santiago Yanzon</h4>
          <p>
            Software Engineer focused on distributed systems, blockchain infrastructure, and AI
            automation for real operational workflows.
          </p>
          <div className="contact-links-row">
            {contactLinks.map((link) => (
              <a
                key={`project-article-${link.label}`}
                className="contact-link-button"
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
                aria-label={link.label}
                title={link.label}
              >
                <ContactIcon id={link.id} />
                <span className="sr-only">{link.label}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="article-cta">
        <div className="article-cta-inner">
          <h3>Need help with a complex system that has to scale reliably?</h3>
          <p>
            Available for consulting on backend architecture, distributed systems design, and
            production engineering.
          </p>
          <div className="article-cta-actions">
            <a className="primary-action article-cta-link" href="mailto:carlosyanzon@protonmail.com">
              Send Email
            </a>
            <a
              className="secondary-action article-cta-link"
              href="https://www.linkedin.com/in/carlos-santiago-yanzon/"
              target="_blank"
              rel="noreferrer"
            >
              Chat on LinkedIn
            </a>
          </div>
        </div>
      </section>
    </article>
  )
}

function App() {
  const location = useLocation()
  const isBlogSectionActive = location.pathname.startsWith('/blog')

  return (
    <div className="app-shell">
      <div className="site-bg" />
      <Header isBlogSectionActive={isBlogSectionActive} />

      <main className="page-shell">
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="/cv" element={<CVView />} />
          <Route path="/projects" element={<ProjectsView />} />
          <Route path="/projects/:id" element={<ProjectArticleView />} />
          <Route path="/blog" element={<BlogView />} />
          <Route path="/blog/:id" element={<BlogArticleView />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      <Footer />
    </div>
  )
}

// Header component
function Header({ isBlogSectionActive }: { isBlogSectionActive: boolean }) {
  return (
    <header className="topbar">
      <div className="brand-block">
        <span className="brand-kicker">Bizk Dev</span>
        <span className="brand-name">Carlos Santiago Yanzon</span>
      </div>

      <nav className="topnav" aria-label="Primary">
        {navItems.map((item) => (
          <NavLink
            key={item.id}
            to={item.id === 'home' ? '/' : `/${item.id}`}
            className={({ isActive }) => {
              const active = isActive || (item.id === 'blog' && isBlogSectionActive)
              return `nav-link ${active ? 'is-active' : ''}`
            }}
          >
            {item.label}
          </NavLink>
        ))}
      </nav>

      <div className="topbar-actions">
        <NavLink to="/cv" className="contact-button">
          Contact / CV
        </NavLink>
      </div>
    </header>
  )
}

// Footer component
function Footer() {
  const navigate = useNavigate()

  return (
    <footer className="site-footer">
      <div className="footer-links">
        <button type="button" onClick={() => navigate('/')}>
          Home
        </button>
        <button type="button" onClick={() => navigate('/cv')}>
          CV
        </button>
        <button type="button" onClick={() => navigate('/projects')}>
          Projects
        </button>
        <button type="button" onClick={() => navigate('/blog')}>
          Blog
        </button>
      </div>
    </footer>
  )
}

export default App
