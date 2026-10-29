import "./styles.css";
import profilePhoto from "./assets/profile.jpg";
import React from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowUpRight, Github, Linkedin, Mail, Menu, X, Code2, ShieldCheck,
  BrainCircuit, Terminal, ExternalLink, GraduationCap, FlaskConical,
  BriefcaseBusiness, ChevronRight
} from "lucide-react";
import "./styles.css";

const profile = {
  name: "Hoysal Chengappa",
  initials: "PC",
  role: "Developer · AI/ML · Cybersecurity",
  location: "Bengaluru, India",
  email: "hoysalchengappa28@example.com",
  github: "https://github.com/warnii",
  linkedin: "https://www.linkedin.com/in/hoysal-chengappa-pc-321607349/",
};

const projects = [
  {
    number: "01",
    title: "Guardian Language",
    category: "Security-first programming",
    description: "A security-focused, natural-English programming language project exploring safer ways to express code and security intent.",
    tags: ["Language Design", "Security", "GitHub"],
    icon: ShieldCheck,
    link: "https://github.com/warnii/guardian-lang",
    status: "Open source Project",
  },
  {
    number: "02",
    title: "Social Media Sentiment Analysis",
    category: "AI / Machine Learning",
    description: "A project focused on analyzing social media text and classifying sentiment to help interpret online conversations.",
    tags: ["Python", "NLP", "Machine Learning"],
    icon: BrainCircuit,
    link: "https://github.com/warnii/social-media-sentiment-analysis",
    status: "College Project",
  },
{
  number: "03",
  title: "SOC Detective",
  category: "Security Operations",
  description: "A cybersecurity project focused on security operations and investigation. Explore the repository for its implementation and features.",
  tags: ["Cybersecurity", "SOC", "Investigation"],
  icon: ShieldCheck,
  link: "https://github.com/warnii/SOC-detective",
  status: "Project",
},
  {
    number: "04",
    title: "Cybersecurity Labs",
    category: "Security learning",
    description: "Hands-on learning across web security, network reconnaissance, virtual labs, and threat-hunting exercises.",
    tags: ["Burp Suite", "Nmap", "Virtual Labs"],
    icon: Terminal,
    status: "Learning",
  },
];

const skillGroups = [
  { title: "Programming", skills: ["Python", "JavaScript", "HTML & CSS"] },
  { title: "AI / ML", skills: ["NLP fundamentals", "Sentiment analysis", "Machine learning concepts", "Generative AI"] },
  { title: "Security", skills: ["Nmap", "Burp Suite", "Kali Linux", "Web security labs"] },
  { title: "Tools", skills: ["Git & GitHub", "VS Code", "React", "MySQL"] },
];

function App() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <header className="header">
        <a className="brand" href="#home" onClick={closeMenu} aria-label="Hoysal home">
          <span className="brand-mark">H<span>.</span></span>
          <span className="brand-name">Hoysal<span>chengappa PC</span></span>
        </a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
        <nav className={menuOpen ? "nav nav-open" : "nav"}>
          {["About", "Skills", "Projects", "Research", "Contact"].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} onClick={closeMenu}>{item}</a>
          ))}
          <a className="nav-cta" href={profile.github} target="_blank" rel="noreferrer">
            GitHub <ArrowUpRight size={15} />
          </a>
        </nav>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <div className="eyebrow"><span className="status-dot" /> OPEN TO LEARNING & OPPORTUNITIES</div>
            <h1>Building with curiosity.<br /><span>Securing with purpose.</span></h1>
            <p className="hero-text">
              I'm Hoysal — a BCA student exploring software development, AI/ML,
              and cybersecurity. I like turning ideas into practical projects and
              learning by building.
            </p>
            <div className="hero-actions">
              <a className="button button-dark" href="#projects">Explore my work <ArrowUpRight size={17} /></a>
              <a className="button button-light" href={`mailto:${profile.email}`}><Mail size={16} /> Get in touch</a>
            </div>
            <div className="hero-socials">
              <a href={profile.github} target="_blank" rel="noreferrer"><Github size={17} /> GitHub <ArrowUpRight size={13} /></a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={17} /> LinkedIn <ArrowUpRight size={13} /></a>
            </div>
          </div>
          <div className="hero-visual" aria-label="Developer profile visual">
            <div className="visual-top"><span>PROFILE / 001</span><span>2026</span></div>
            <img
              className="avatar"
              src={profilePhoto}
              alt="Hoysal Chengappa profile"
            />
            <div className="visual-name">{profile.name}</div>
            <div className="visual-role">{profile.role}</div>
            <div className="visual-divider" />
            <div className="visual-row"><span>FOCUS</span><strong>Build · Learn · Secure</strong></div>
            <div className="visual-row"><span>BASED IN</span><strong>{profile.location}</strong></div>
            <div className="visual-stamp"><Code2 size={18} /> <span>Always<br />in progress</span></div>
            <div className="visual-grid" />
          </div>
          <div className="hero-footnote"><span>SCROLL TO EXPLORE</span><span className="scroll-line" /></div>
        </section>

        <section className="intro section-wrap" id="about">
          <div className="section-label"><span>01</span> ABOUT</div>
          <div className="intro-content">
            <h2>Curious by nature.<br /><span>Driven by making.</span></h2>
            <div className="intro-details">
              <p>
                I’m currently pursuing a Bachelor of Computer Applications (BCA) at
                Yenepoya (Deemed to be University), Bengaluru. My interests sit at
                the intersection of building software, understanding intelligent
                systems, and making technology more secure.
              </p>
              <p>
                I learn best by creating, testing, and iterating. From a security-first
                language project to AI/ML experiments and hands-on lab work, I’m
                growing my skills one practical challenge at a time.
              </p>
              <a className="text-link" href="#projects">See selected projects <ChevronRight size={16} /></a>
            </div>
          </div>
          <div className="stats-strip">
            <div><strong>BCA</strong><span>Computer Applications</span></div>
            <div><strong>AI / ML</strong><span>Exploring intelligent systems</span></div>
            <div><strong>Security</strong><span>Learning through hands-on labs</span></div>
          </div>
        </section>

        <section className="skills section-wrap" id="skills">
          <div className="section-heading">
            <div className="section-label"><span>02</span> SKILLS</div>
            <h2>Tools I use to<br /><span>turn ideas into work.</span></h2>
            <p>My current toolkit is evolving as I build projects and deepen my fundamentals.</p>
          </div>
          <div className="skill-grid">
            {skillGroups.map((group, index) => (
              <article className="skill-card" key={group.title}>
                <div className="skill-card-top"><span>0{index + 1}</span><Code2 size={18} /></div>
                <h3>{group.title}</h3>
                <div className="skill-tags">{group.skills.map(skill => <span key={skill}>{skill}</span>)}</div>
              </article>
            ))}
          </div>
        </section>

        <section className="projects section-wrap" id="projects">
          <div className="section-heading project-heading">
            <div>
              <div className="section-label"><span>03</span> SELECTED WORK</div>
              <h2>Projects with a<br /><span>purpose.</span></h2>
            </div>
            <a className="text-link" href={profile.github} target="_blank" rel="noreferrer">View GitHub <ArrowUpRight size={16} /></a>
          </div>
          <div className="project-list">
            {projects.map((project) => {
              const Icon = project.icon;
              return (
                <article className="project-card" key={project.number}>
                  <div className="project-number">{project.number}</div>
                  <div className="project-icon"><Icon size={22} /></div>
                  <div className="project-main">
                    <div className="project-category">{project.category}</div>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <div className="project-tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
                  </div>
                  <div className="project-side">
                    <span className="project-status">{project.status}</span>
                    <a href={project.link} target="_blank" rel="noreferrer" aria-label={`Open ${project.title}`}><ArrowUpRight size={19} /></a>
                  </div>
                </article>
              );
            })}
          </div>
          <p className="project-note">Project descriptions reflect current learning and work. Add demos, screenshots, and repository-specific links as each project is published.</p>
        </section>

        <section className="background section-wrap" id="research">
          <div className="section-label"><span>04</span> BACKGROUND</div>
          <div className="background-grid">
            <div>
              <h2>Learning today.<br /><span>Building for tomorrow.</span></h2>
              <p className="background-copy">A foundation in computer applications, practical project work, and research curiosity.</p>
            </div>
            <div className="timeline">
              <article className="timeline-item">
                <div className="timeline-icon"><GraduationCap size={18} /></div>
                <div><span className="timeline-date">2024 — 2027 · EXPECTED</span><h3>Bachelor of Computer Applications</h3><p>Yenepoya (Deemed to be University), Bengaluru</p><span className="timeline-detail">AI/ML · Programming · Cybersecurity</span></div>
              </article>
              <article className="timeline-item">
                <div className="timeline-icon"><BriefcaseBusiness size={18} /></div>
                <div><span className="timeline-date">EXPERIENCE</span><h3>Part-time team member</h3><p>KFC · Bengaluru</p><span className="timeline-detail">Customer service, teamwork, and day-to-day operations</span></div>
              </article>
              <article className="timeline-item">
                <div className="timeline-icon"><FlaskConical size={18} /></div>
                <div><span className="timeline-date">RESEARCH · IN PROGRESS</span><h3>AI-assisted academic writing</h3><p>Prompt engineering literacy & perceived authorship authenticity</p><span className="timeline-detail">Undergraduate research topic · early-stage progress</span></div>
              </article>
            </div>
          </div>
        </section>

        <section className="contact section-wrap" id="contact">
          <div className="contact-card">
            <div className="section-label"><span>05</span> CONTACT</div>
            <h2>Have an idea?<br /><span>Let’s build something.</span></h2>
            <p>Open to learning opportunities, collaborations, and conversations about software, AI/ML, and security.</p>
            <a className="button button-dark" href={`mailto:${profile.email}`}>Say hello <ArrowUpRight size={17} /></a>
            <div className="contact-links">
              <a href={profile.github} target="_blank" rel="noreferrer"><Github size={17} /> GitHub <ExternalLink size={13} /></a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={17} /> LinkedIn <ExternalLink size={13} /></a>
              <a href={`mailto:${profile.email}`}><Mail size={17} /> Email <ExternalLink size={13} /></a>
            </div>
            <div className="contact-orbit orbit-one" /><div className="contact-orbit orbit-two" />
          </div>
        </section>
      </main>

      <footer className="footer section-wrap">
        <a className="brand" href="#home"><span className="brand-mark">h<span>.</span></span></a>
        <span>© {new Date().getFullYear()} Hoysal Chengappa PC. Made with curiosity.</span>
        <a href="#home">Back to top ↑</a>
      </footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
