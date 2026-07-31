import React, { useState, useEffect, useRef } from "react";
import "./index.css";

const profile = {
  name: "Sushil Saladi",
  title: "Full Stack Developer",
  eyebrow: "OPEN TO SENIOR ROLES · JAVA + REACT",
  lede:
    "Full stack developer with 7+ years shipping production software across fintech, sports tech, and enterprise platforms — from Spring Boot microservices to React interfaces used by real trading desks.",
  about:
    "I'm an accomplished full stack web developer with over seven years of experience designing and building web applications across front-end and back-end technologies. My work spans reusable React UI systems, secure Spring Boot microservices, and high-performance trading interfaces — with a track record of leading teams, optimizing performance, and running effective Agile practices. Currently Lead Engineer at Academian, building enterprise web applications with a strong focus on accessibility and API security.",
  location: "Hyderabad, India",
  phone: "+91 95973 62800",
  email: "saladi.sushil@gmail.com",
  linkedin: "linkedin.com/in/sushilsaladi",
};

const stats = [
  { num: "7+ yrs", lbl: "FULL STACK EXPERIENCE" },
  { num: "70%", lbl: "LOAD TIME REDUCTION (WEBSOCKETS)" },
  { num: "1M+", lbl: "MONTHLY USERS SUPPORTED BY APIS" },
];

const experience = [
  {
    path: "/experience/academian",
    method: "GET",
    role: "Lead Engineer",
    company: "Academian India Pvt. Ltd.",
    dates: "12/2023 – Present",
    place: "Hyderabad",
    current: true,
    bullets: [
      "Built reusable, responsive UI components with React.js, JavaScript, HTML5 and CSS3, improving consistency across enterprise applications.",
      "Implemented Figma-to-code UI focused on WCAG accessibility, responsive layouts, and cross-browser compatibility.",
      "Wrote comprehensive Jest unit tests to improve maintainability and reduce regressions.",
      "Designed scalable RESTful APIs with Spring Boot in a microservices architecture.",
      "Implemented authentication/authorization with Spring Security, JWT, and RBAC.",
    ],
    stack: ["React.js", "Spring Boot", "JWT", "Microservices", "Jest"],
    responseNote: "OK — currently active in this role",
  },
  {
    path: "/experience/citibank",
    method: "GET",
    role: "AVP – Apps Dev Intermediate Program Analyst",
    company: "Citi Bank",
    dates: "01/2022 – 06/2023",
    place: "Jersey City, NJ",
    bullets: [
      "Built a high-performance trading application using React, TypeScript, Redux, Redux Thunk and AG Grid for the Trader Desk.",
      "Developed Java 8 business logic for financial data publishing; contributed to AMPS Server message pub/sub.",
      "Contributed to Agile development through sprint planning, testing, and technical documentation.",
    ],
    stack: ["React", "TypeScript", "Redux", "Java 8", "AG Grid"],
    responseNote: "OK — role completed successfully",
  },
  {
    path: "/experience/playbook-sports",
    method: "GET",
    role: "Senior Developer",
    company: "Playbook Sports",
    dates: "06/2020 – 01/2022",
    place: "Hoboken, NJ",
    bullets: [
      "Led design and development of dashboards and reusable components for sports management software using React, Node.js and GraphQL.",
      "Built interactive visual graphs for projected revenue, ticket sales, and upcoming fixtures.",
      "Improved load time by over 70% by implementing WebSockets.",
    ],
    stack: ["React", "Node.js", "GraphQL", "WebSockets"],
    responseNote: "OK — 70% latency improvement recorded",
  },
  {
    path: "/experience/acuver",
    method: "GET",
    role: "Associate Consultant",
    company: "Acuver Consulting India Pvt. Ltd.",
    dates: "01/2018 – 08/2018",
    place: "Bangalore",
    bullets: [
      "Automated orders, inventory, and shipment management for e-commerce platforms using JavaScript.",
    ],
    stack: [],
    responseNote: "OK — role completed successfully",
  },
  {
    path: "/experience/qualton",
    method: "GET",
    role: "Technology Consultant – Java",
    company: "Qualton IT Services Pvt. Ltd.",
    dates: "08/2016 – 12/2017",
    place: "Hyderabad",
    bullets: [
      "Increased user base by 30% by developing a cab-sharing app using Spring MVC and Hibernate.",
    ],
    stack: ["Spring MVC", "Hibernate"],
    responseNote: "OK — 30% user base growth recorded",
  },
];

const skillGroups = [
  {
    path: "/skills/backend",
    label: "List backend capabilities",
    items: [
      "Java",
      "Spring Boot",
      "Spring MVC",
      "Spring Security",
      "Microservices",
      "Hibernate",
      "JWT",
      "REST",
    ],
  },
  {
    path: "/skills/frontend",
    label: "List frontend capabilities",
    items: [
      "React",
      "Redux",
      "TypeScript",
      "JavaScript",
      "HTML/CSS",
      "Tailwind",
      "Micro Frontend",
      "Accessibility",
    ],
  },
  {
    path: "/skills/data-and-tooling",
    label: "List data & tooling capabilities",
    items: [
      "MongoDB",
      "PostgreSQL",
      "MySQL",
      "GraphQL",
      "WebSockets",
      "Node.js",
      "Jest",
      "Git",
      "Agile",
    ],
  },
];

const education = [
  {
    path: "/education/stevens",
    degree: "Master of Science",
    school: "Stevens Institute of Technology",
    dates: "08/2015 – 06/2020",
    place: "Hoboken, NJ",
  },
  {
    path: "/education/vit",
    degree: "Bachelor of Science",
    school: "Vellore Institute of Technology",
    dates: "01/2015 – 05/2020",
    place: "Vellore, India",
  },
];

function HeroTerminal() {
  const fullCommand = "curl -s https://saladi.dev/api/profile | jq";
  const [typed, setTyped] = useState("");
  const [showResponse, setShowResponse] = useState(false);
  const doneRef = useRef(false);

  useEffect(() => {
    if (doneRef.current) return;
    doneRef.current = true;
    let i = 0;
    const iv = setInterval(() => {
      i += 1;
      setTyped(fullCommand.slice(0, i));
      if (i >= fullCommand.length) {
        clearInterval(iv);
        setTimeout(() => setShowResponse(true), 260);
      }
    }, 28);
    return () => clearInterval(iv);
  }, []);

  return (
    <div className="terminal" role="img" aria-label="Terminal showing a request for Sushil's profile data">
      <div className="term-bar">
        <span className="term-dot dot-r" />
        <span className="term-dot dot-y" />
        <span className="term-dot dot-g" />
        <span className="term-title">zsh — saladi.dev</span>
      </div>
      <div className="term-body">
        <div className="term-line">
          <span className="term-prompt">➜</span>
          <span className="term-cmd">
            {typed}
            <span className="caret-blink">▍</span>
          </span>
        </div>
        {showResponse && (
          <pre className="term-json">
            {"{\n"}
            <span className="jk">  "name"</span>: <span className="js">"Sushil Saladi"</span>{",\n"}
            <span className="jk">  "role"</span>: <span className="js">"Full Stack Developer"</span>{",\n"}
            <span className="jk">  "experience_years"</span>: <span className="jn">7</span>{",\n"}
            <span className="jk">  "status"</span>: <span className="js">"open_to_senior_roles"</span>{"\n"}
            {"}"}
          </pre>
        )}
      </div>
    </div>
  );
}

function MethodBadge({ method }) {
  return <span className={`method-badge m-${method.toLowerCase()}`}>{method}</span>;
}

function OpBlock({ method, path, summary, subtitle, defaultOpen, children, footer }) {
  const [open, setOpen] = useState(!!defaultOpen);
  return (
    <div className={`opblock ${method.toLowerCase()} ${open ? "open" : ""}`}>
      <button
        className="opblock-summary"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
      >
        <MethodBadge method={method} />
        <span className="op-path">{path}</span>
        <span className="op-summary">
          {summary}
          {subtitle && <span className="company"> — {subtitle}</span>}
        </span>
        <span className="op-caret">▾</span>
      </button>
      {open && (
        <div className="opblock-body">
          {children}
          {footer}
        </div>
      )}
    </div>
  );
}

function TagHeader({ title, desc }) {
  return (
    <div className="tag-header">
      <h2>{title}</h2>
      <span className="tag-desc">{desc}</span>
    </div>
  );
}

export default function Portfolio() {
  return (
    <div className="page">
      <nav>
        <div className="wrap nav-inner">
          <div className="nav-brand">
            saladi<span>.</span>dev
          </div>
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#experience">Experience</a>
            <a href="#skills">Skills</a>
            <a href="#education">Education</a>
            <a href="#contact">Contact1111</a>
          </div>
        </div>
      </nav>

      <header className="hero">
        <div className="wrap hero-grid">
          <div>
            <div className="hero-eyebrow">
              <span className="dot" />
              {profile.eyebrow}
            </div>
            <h1>
              {profile.name} builds <em>scalable</em> full-stack systems, end to end.
            </h1>
            <p className="lede">{profile.lede}</p>
            <div className="hero-cta">
              <a className="btn btn-primary" href={`mailto:${profile.email}`}>
                Get in touch
              </a>
              <a className="btn btn-ghost" href="#experience">
                View experience
              </a>
            </div>
            <div className="meta-row">
              <span>📍 {profile.location}</span>
              <span>📞 {profile.phone}</span>
              <span>✉️ {profile.email}</span>
            </div>
          </div>
          <HeroTerminal />
        </div>
      </header>

      <main className="wrap main-col">
        <section id="about">
          <div className="sec-head">
            <span className="sec-title">About</span>
          </div>
          <div className="about-grid">
            <p>{profile.about}</p>
            <div className="stat-cards">
              {stats.map((s) => (
                <div className="stat-card" key={s.lbl}>
                  <div className="num">{s.num}</div>
                  <div className="lbl">{s.lbl}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="experience" className="tag-group">
          <TagHeader title="Experience" desc="Employment history, most recent first" />
          {experience.map((e, idx) => (
            <OpBlock
              key={e.path}
              method={e.method}
              path={e.path}
              summary={e.role}
              subtitle={`${e.company} · ${e.dates} · ${e.place}`}
              defaultOpen={idx === 0}
            >
              <ul className="op-desc">
                {e.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
              {e.stack.length > 0 && (
                <>
                  <div className="section-label">Parameters (stack)</div>
                  <div className="chip-row">
                    {e.stack.map((c) => (
                      <span className="chip" key={c}>
                        {c}
                      </span>
                    ))}
                  </div>
                </>
              )}
              <div className="section-label">Responses</div>
              <div className="response-row">
                <span className="response-code">200</span>
                <span className="response-desc">{e.responseNote}</span>
              </div>
            </OpBlock>
          ))}
        </section>

        <section id="skills" className="tag-group">
          <TagHeader title="Skills" desc="Available technology parameters" />
          {skillGroups.map((g) => (
            <OpBlock key={g.path} method="GET" path={g.path} summary={g.label}>
              <div className="chip-row">
                {g.items.map((c) => (
                  <span className="chip" key={c}>
                    {c}
                  </span>
                ))}
              </div>
              <div className="section-label">Responses</div>
              <div className="response-row">
                <span className="response-code">200</span>
                <span className="response-desc">
                  OK — {g.items.length} capabilities returned
                </span>
              </div>
            </OpBlock>
          ))}
        </section>

        <section id="education" className="tag-group">
          <TagHeader title="Education" desc="Academic records" />
          {education.map((ed) => (
            <OpBlock
              key={ed.path}
              method="GET"
              path={ed.path}
              summary={ed.degree}
              subtitle={`${ed.school} · ${ed.dates} · ${ed.place}`}
            >
              <div className="response-row">
                <span className="response-code">200</span>
                <span className="response-desc">OK — degree conferred</span>
              </div>
            </OpBlock>
          ))}
        </section>

        <section id="contact" className="tag-group">
          <TagHeader title="Contact" desc="Reach out — mutating endpoint, use responsibly" />
          <OpBlock method="POST" path="/contact" summary="Send a message to Sushil" defaultOpen>
            <p className="op-desc-p">
              Reach out about senior software developer opportunities (Java backend + React
              frontend). Direct and fast — no middleware.
            </p>
            <div className="section-label">Request body</div>
            <table className="params-table">
              <tbody>
                <tr>
                  <td className="param-name">email</td>
                  <td className="param-type">string</td>
                  <td className="param-desc">{profile.email}</td>
                </tr>
                <tr>
                  <td className="param-name">phone</td>
                  <td className="param-type">string</td>
                  <td className="param-desc">{profile.phone}</td>
                </tr>
                <tr>
                  <td className="param-name">location</td>
                  <td className="param-type">string</td>
                  <td className="param-desc">{profile.location}</td>
                </tr>
              </tbody>
            </table>
            <div className="section-label">Responses</div>
            <div className="response-row">
              <span className="response-code">200</span>
              <span className="response-desc">OK — message received, response within 24h</span>
            </div>
            <a className="try-btn" href={`mailto:${profile.email}`}>
              Try it out — send email
            </a>
          </OpBlock>
        </section>
      </main>

      <footer>
        <div className="wrap">
          <div className="contact-box">
            <h2>
              Let's build something <span>scalable</span> together.
            </h2>
            <div className="contact-links">
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
              <a href={`tel:${profile.phone.replace(/\s+/g, "")}`}>{profile.phone}</a>
              <a href={`https://${profile.linkedin}`} target="_blank" rel="noreferrer">
                {profile.linkedin}
              </a>
            </div>
          </div>
          <p className="fine">Built by {profile.name} · {profile.location}</p>
        </div>
      </footer>
    </div>
  );
}
