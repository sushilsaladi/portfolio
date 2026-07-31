import React, { useState, useEffect, useRef } from "react";

/* ------------------------------------------------------------------ */
/*  Data — the "API" this portfolio serves                            */
/* ------------------------------------------------------------------ */

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

/* ------------------------------------------------------------------ */
/*  Hero terminal — typewriter "request/response"                     */
/* ------------------------------------------------------------------ */

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

/* ------------------------------------------------------------------ */
/*  Reusable "operation block" — collapsible, Swagger-flavored         */
/* ------------------------------------------------------------------ */

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

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function Portfolio() {
  return (
    <div className="page">
      <style>{css}</style>

      <nav>
        <div className="wrap nav-inner">
          <div className="nav-brand">
            saladi<span>.</span>dev
          </div>
          <div className="nav-links">
            <a href="#about">about</a>
            <a href="#experience">experience</a>
            <a href="#skills">skills</a>
            <a href="#education">education</a>
            <a href="#contact">contact</a>
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
          <TagHeader title="experience" desc="Employment history, most recent first" />
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
          <TagHeader title="skills" desc="Available technology parameters" />
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
          <TagHeader title="education" desc="Academic records" />
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
          <TagHeader title="contact" desc="Reach out — mutating endpoint, use responsibly" />
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

/* ------------------------------------------------------------------ */
/*  Styles                                                             */
/* ------------------------------------------------------------------ */

const css = `
@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap');

.page {
  --bg: #0B0F14;
  --panel: #10151C;
  --panel-2: #131A22;
  --border: #232B36;
  --text: #E7ECF2;
  --muted: #8A95A5;
  --get: #7EE787;
  --get-dim: rgba(126,231,135,0.12);
  --post: #F2A65A;
  --post-dim: rgba(242,166,90,0.14);
  --accent: #7AA2F7;
  --accent-2: #C792EA;

  background: var(--bg);
  color: var(--text);
  font-family: 'Inter', sans-serif;
  line-height: 1.55;
  min-height: 100vh;
}

.page * { box-sizing: border-box; }
.page h1, .page h2 { font-family: 'Space Grotesk', sans-serif; }
.page code, .page .mono { font-family: 'IBM Plex Mono', monospace; }

.wrap { max-width: 1040px; margin: 0 auto; padding: 0 28px; }

a { color: inherit; text-decoration: none; }

/* Nav */
nav {
  position: sticky; top: 0; z-index: 20;
  background: rgba(11,15,20,0.85);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--border);
}
.nav-inner { display: flex; align-items: center; justify-content: space-between; height: 60px; }
.nav-brand { font-family: 'IBM Plex Mono', monospace; font-weight: 500; font-size: 15px; letter-spacing: 0.02em; }
.nav-brand span { color: var(--accent-2); }
.nav-links { display: flex; gap: 24px; }
.nav-links a { font-family: 'IBM Plex Mono', monospace; font-size: 13px; color: var(--muted); transition: color .15s; }
.nav-links a:hover, .nav-links a:focus-visible { color: var(--get); outline: none; }

/* Hero */
.hero { padding: 64px 0 56px; border-bottom: 1px solid var(--border); }
.hero-grid { display: grid; grid-template-columns: 1.1fr 0.9fr; gap: 48px; align-items: start; }
.hero-eyebrow {
  display: inline-flex; align-items: center; gap: 8px;
  font-family: 'IBM Plex Mono', monospace; font-size: 12px; letter-spacing: 0.06em;
  color: var(--get); background: var(--get-dim);
  border: 1px solid rgba(126,231,135,0.3);
  padding: 6px 12px; border-radius: 100px; margin-bottom: 22px;
}
.dot { width: 6px; height: 6px; border-radius: 50%; background: var(--get); animation: pulse 2s infinite; }
@keyframes pulse { 0%,100% { opacity: 1; } 50% { opacity: 0.35; } }

.hero h1 { font-size: 40px; font-weight: 600; line-height: 1.18; margin: 0 0 18px; letter-spacing: -0.01em; }
.hero h1 em { font-style: normal; color: var(--accent); }
.lede { color: var(--muted); font-size: 16px; max-width: 46ch; margin: 0 0 28px; }

.hero-cta { display: flex; gap: 12px; margin-bottom: 28px; flex-wrap: wrap; }
.btn { padding: 11px 20px; border-radius: 8px; font-size: 14px; font-weight: 500; border: 1px solid transparent; transition: all .15s; }
.btn-primary { background: var(--get); color: #0B0F14; }
.btn-primary:hover { background: #93f0a0; }
.btn-ghost { border-color: var(--border); color: var(--text); }
.btn-ghost:hover { border-color: var(--accent); color: var(--accent); }

.meta-row { display: flex; gap: 18px; flex-wrap: wrap; font-family: 'IBM Plex Mono', monospace; font-size: 12.5px; color: var(--muted); }

/* Terminal */
.terminal { background: var(--panel); border: 1px solid var(--border); border-radius: 10px; overflow: hidden; box-shadow: 0 20px 60px -20px rgba(0,0,0,0.6); }
.term-bar { display: flex; align-items: center; gap: 8px; padding: 10px 14px; background: var(--panel-2); border-bottom: 1px solid var(--border); }
.term-dot { width: 10px; height: 10px; border-radius: 50%; }
.dot-r { background: #FF5F57; } .dot-y { background: #FEBC2E; } .dot-g { background: #28C840; }
.term-title { margin-left: 8px; font-family: 'IBM Plex Mono', monospace; font-size: 11.5px; color: var(--muted); }
.term-body { padding: 18px 16px 22px; font-family: 'IBM Plex Mono', monospace; font-size: 13px; min-height: 168px; }
.term-line { display: flex; gap: 8px; color: var(--text); }
.term-prompt { color: var(--get); }
.caret-blink { animation: blink 1s step-end infinite; color: var(--get); }
@keyframes blink { 50% { opacity: 0; } }
.term-json { margin: 14px 0 0; color: var(--muted); white-space: pre-wrap; }
.jk { color: var(--accent); }
.js { color: var(--get); }
.jn { color: var(--post); }

/* Main sections */
.main-col { padding: 60px 28px 20px; }
section { margin-bottom: 52px; }
.sec-head { margin-bottom: 20px; }
.sec-title { font-family: 'Space Grotesk', sans-serif; font-size: 22px; font-weight: 600; }

.about-grid { display: grid; grid-template-columns: 1.3fr 1fr; gap: 32px; align-items: start; }
.about-grid > p { color: var(--muted); font-size: 15px; }
.stat-cards { display: grid; gap: 12px; }
.stat-card { background: var(--panel); border: 1px solid var(--border); border-radius: 10px; padding: 16px 18px; }
.stat-card .num { font-family: 'Space Grotesk', sans-serif; font-size: 22px; font-weight: 600; color: var(--get); }
.stat-card .lbl { font-family: 'IBM Plex Mono', monospace; font-size: 11px; letter-spacing: 0.04em; color: var(--muted); margin-top: 2px; }

/* Tag groups / opblocks */
.tag-header { display: flex; align-items: baseline; gap: 12px; margin-bottom: 14px; border-bottom: 1px solid var(--border); padding-bottom: 10px; }
.tag-header h2 { font-size: 18px; font-weight: 600; text-transform: lowercase; }
.tag-desc { font-family: 'IBM Plex Mono', monospace; font-size: 12px; color: var(--muted); }

.opblock { border: 1px solid var(--border); border-radius: 8px; margin-bottom: 10px; background: var(--panel); overflow: hidden; }
.opblock.open { border-color: rgba(255,255,255,0.14); }
.opblock-summary {
  width: 100%; display: flex; align-items: center; gap: 12px;
  padding: 13px 16px; background: transparent; border: none; cursor: pointer;
  text-align: left; color: var(--text); font-size: 13.5px;
}
.opblock-summary:hover { background: rgba(255,255,255,0.02); }
.opblock-summary:focus-visible { outline: 2px solid var(--accent); outline-offset: -2px; }

.method-badge {
  font-family: 'IBM Plex Mono', monospace; font-size: 11px; font-weight: 500;
  padding: 4px 9px; border-radius: 5px; min-width: 44px; text-align: center; flex-shrink: 0;
}
.m-get { background: var(--get-dim); color: var(--get); border: 1px solid rgba(126,231,135,0.35); }
.m-post { background: var(--post-dim); color: var(--post); border: 1px solid rgba(242,166,90,0.4); }

.op-path { font-family: 'IBM Plex Mono', monospace; color: var(--muted); font-size: 12.5px; flex-shrink: 0; }
.op-summary { color: var(--text); flex: 1; }
.op-summary .company { color: var(--muted); font-weight: 400; }
.op-caret { color: var(--muted); transition: transform .15s; flex-shrink: 0; }
.opblock.open .op-caret { transform: rotate(180deg); }

.opblock-body { padding: 4px 18px 18px; border-top: 1px solid var(--border); }
.op-desc { color: var(--muted); font-size: 14px; margin: 14px 0; padding-left: 18px; }
.op-desc li { margin-bottom: 6px; }
.op-desc-p { color: var(--muted); font-size: 14px; margin: 14px 0; }

.section-label { font-family: 'IBM Plex Mono', monospace; font-size: 11px; letter-spacing: 0.05em; color: var(--muted); text-transform: uppercase; margin: 14px 0 8px; }
.chip-row { display: flex; flex-wrap: wrap; gap: 8px; }
.chip { font-family: 'IBM Plex Mono', monospace; font-size: 12px; background: var(--panel-2); border: 1px solid var(--border); color: var(--text); padding: 5px 10px; border-radius: 6px; }

.response-row { display: flex; align-items: center; gap: 10px; font-size: 13.5px; }
.response-code { font-family: 'IBM Plex Mono', monospace; background: var(--get-dim); color: var(--get); border: 1px solid rgba(126,231,135,0.3); padding: 2px 8px; border-radius: 5px; font-size: 12px; }
.response-desc { color: var(--muted); }

.params-table { width: 100%; border-collapse: collapse; font-size: 13px; margin-top: 4px; }
.params-table td { padding: 8px 10px; border-bottom: 1px solid var(--border); }
.param-name { font-family: 'IBM Plex Mono', monospace; color: var(--accent); width: 100px; }
.param-type { font-family: 'IBM Plex Mono', monospace; color: var(--muted); width: 80px; }
.param-desc { color: var(--text); }

.try-btn { display: inline-block; margin-top: 16px; font-family: 'IBM Plex Mono', monospace; font-size: 13px; background: var(--post-dim); color: var(--post); border: 1px solid rgba(242,166,90,0.4); padding: 9px 16px; border-radius: 6px; transition: all .15s; }
.try-btn:hover { background: rgba(242,166,90,0.22); }

/* Footer */
footer { border-top: 1px solid var(--border); padding: 56px 0 34px; margin-top: 40px; }
.contact-box h2 { font-size: 26px; font-weight: 600; max-width: 20ch; }
.contact-box h2 span { color: var(--get); }
.contact-links { display: flex; gap: 20px; flex-wrap: wrap; margin-top: 18px; font-family: 'IBM Plex Mono', monospace; font-size: 13px; color: var(--muted); }
.contact-links a:hover { color: var(--get); }
.fine { margin-top: 40px; font-size: 12px; color: var(--muted); font-family: 'IBM Plex Mono', monospace; }

/* Responsive */
@media (max-width: 800px) {
  .hero-grid { grid-template-columns: 1fr; }
  .about-grid { grid-template-columns: 1fr; }
  .nav-links { gap: 14px; }
  .hero h1 { font-size: 30px; }
}
@media (max-width: 560px) {
  .nav-links { display: none; }
  .wrap { padding: 0 18px; }
  .op-summary .company { display: block; }
}

@media (prefers-reduced-motion: reduce) {
  .dot, .caret-blink { animation: none; }
}
`;
