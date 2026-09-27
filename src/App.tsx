import { useEffect, useState } from "react";

import "./App.css";

type Theme = "dark" | "light";

const projects = [
    {
        name: "SALIKSIK",
        category: "Financial Research Platform",
        description:
            "A full-stack financial research platform for comparing US companies using synchronized SEC financial data and transparent reported metrics.",
        stack: ["Python", "FastAPI", "React"],
        stat: "FULL STACK",
        url: "https://github.com/jdpapena/saliksik",
        image: "/projects/saliksik.png",
        imageAlt:
            "SALIKSIK interface comparing financial data for Apple and Microsoft",
    },
    {
        name: "CRYPTO BACKTEST ENGINE",
        category: "Market Data & Backtesting",
        description:
            "An in-memory Python engine that processes historical Binance market data, detects defined market events, and exports structured results for further analysis.",
        stack: ["Python", "Binance Data", "CSV"],
        stat: "BACKTEST ENGINE",
        url: "https://github.com/jdpapena/crypto-backtest-engine",
        image: "/projects/crypto-backtest.png",
        imageAlt:
            "Crypto Market Event Analytics dashboard showing historical market events and session analysis",
    },
    {
        name: "MOLDS",
        category: "Decision System",
        description:
            "A Python decision engine for organizing EXP-lane matchup knowledge into counter picks, itemization, and laning strategies.",
        stack: ["Python", "Streamlit", "JSON"],
        stat: "DECISION ENGINE",
        url: "https://github.com/jdpapena/mlbb-counter-generator",
        image: "/projects/mlbb-counter.png",
        imageAlt:
            "MOLDS EXP-lane counter interface showing matchup recommendations",
    },
    {
        name: "AUTOMATIC FISH FEEDER",
        category: "Embedded System",
        description:
            "A microcontroller-based automatic fish feeder designed for reliable scheduled feeding using RTC-controlled operation.",
        stack: ["Arduino", "C/C++", "RTC"],
        stat: "EMBEDDED",
        url: "https://github.com/jdpapena/automatic-fish-feeder",
        image: "/projects/fish-feeder.png",
        imageAlt:
            "CAD model of the automatic fish feeder enclosure and dispensing mechanism",
    },
];

const skillGroups = [
    {
        label: "SOFTWARE",
        skills: [
            "Python",
            "FastAPI",
            "REST APIs",
            "SQLAlchemy",
            "React",
            "TypeScript",
            "Git",
        ],
    },
    {
        label: "DATA",
        skills: ["SQL", "Pandas", "NumPy", "Excel"],
    },
    {
        label: "ENGINEERING",
        skills: ["MATLAB", "ANSYS Fluent", "Arduino", "C/C++"],
    },
];

const candles = [
    [18, 125, 108, 98, 137],
    [38, 109, 118, 101, 128],
    [58, 117, 99, 91, 125],
    [78, 100, 87, 79, 108],
    [98, 88, 96, 82, 105],
    [118, 95, 77, 69, 103],
    [138, 78, 65, 57, 86],
    [158, 66, 74, 59, 82],
    [178, 73, 56, 48, 81],
    [198, 57, 47, 39, 65],
    [218, 48, 62, 41, 71],
    [238, 61, 43, 35, 69],
    [258, 44, 31, 23, 52],
    [278, 32, 40, 25, 48],
    [298, 39, 26, 18, 47],
    [318, 27, 18, 10, 35],
    [338, 19, 29, 12, 37],
    [358, 28, 15, 8, 36],
    [378, 16, 9, 4, 24],
];

function App() {
    const [theme, setTheme] = useState<Theme>(() => {
        return localStorage.getItem("jdp-theme") === "light" ? "light" : "dark";
    });

    useEffect(() => {
        document.documentElement.dataset.theme = theme;
        localStorage.setItem("jdp-theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((current) => (current === "dark" ? "light" : "dark"));
    };

    return (
        <div className="site">
            <header className="topbar">
                <a className="brand" href="#home">
                    jdpapena
                </a>

                <nav className="nav">
                    <a href="#about">About</a>
                    <a href="#projects">Projects</a>
                    <a href="#skills">Skills</a>
                    <a href="#background">Background</a>
                    <a href="#contact">Contact</a>
                </nav>

                <button
                    className="theme-toggle"
                    onClick={toggleTheme}
                    aria-label="Toggle color theme"
                    title="Toggle theme"
                >
                    {theme === "dark" ? "☼" : "◐"}
                </button>
            </header>

            <main>
                {/* HERO */}
                <section id="home" className="hero">
                    <div className="hero-copy">
                        <p className="eyebrow">
                            REGISTERED MECHANICAL ENGINEER
                        </p>

                        <h1>
                            Hi, I'm Jeremiah.
                            <br />I build <span>useful systems.</span>
                        </h1>

                        <p className="role">
                            Mechanical Engineer → Software, Data & Automation
                        </p>

                        <p className="intro">
                            I build practical software and data systems by
                            breaking complex problems into things I can measure,
                            test, automate, and improve.
                        </p>

                        <div className="hero-links">
                            <a className="primary-link" href="#projects">
                                View Projects
                            </a>

                            <a
                                href="https://github.com/jdpapena"
                                target="_blank"
                                rel="noreferrer"
                            >
                                GitHub ↗
                            </a>
                        </div>
                    </div>

                    <CandlestickChart />

                    <div className="metrics">
                        <div>
                            <strong>2.2M+</strong>
                            <span>data points processed</span>
                        </div>

                        <div>
                            <strong>Python</strong>
                            <span>primary language</span>
                        </div>

                        <div>
                            <strong>2020 - 2026</strong>
                            <span>market data</span>
                        </div>
                    </div>
                </section>

                {/* PROJECTS */}
                <section id="projects" className="section">
                    <div className="section-header">
                        <p>PROJECTS</p>
                        <h2>Selected work</h2>
                    </div>

                    <div className="project-grid">
                        {projects.map((project) => (
                            <article className="project" key={project.name}>
                                {project.image && (
                                    <a
                                        className="project-preview"
                                        href={project.url}
                                        target="_blank"
                                        rel="noreferrer"
                                        aria-label={`View ${project.name} on GitHub`}
                                    >
                                        <img
                                            src={project.image}
                                            alt={project.imageAlt}
                                            loading="lazy"
                                        />
                                    </a>
                                )}

                                <div className="project-body">
                                    <div className="project-top">
                                        <p>{project.category}</p>
                                        <span>{project.stat}</span>
                                    </div>

                                    <h3>{project.name}</h3>

                                    <p className="project-description">
                                        {project.description}
                                    </p>

                                    <div className="project-stack">
                                        {project.stack.map((technology) => (
                                            <span key={technology}>
                                                {technology}
                                            </span>
                                        ))}
                                    </div>

                                    <a
                                        className="project-link"
                                        href={project.url}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        View on GitHub ↗
                                    </a>
                                </div>
                            </article>
                        ))}
                    </div>
                </section>

                {/* ABOUT */}
                <section id="about" className="section text-section">
                    <div className="section-header">
                        <p>ABOUT</p>
                    </div>

                    <div className="section-content">
                        <h2>
                            Engineering mindset.
                            <br />
                            Software direction.
                        </h2>

                        <p>
                            I'm a Registered Mechanical Engineer from UP Diliman
                            who builds software and data systems with Python. My
                            work spans backend development, data processing,
                            automation, and quantitative analysis.
                        </p>

                        <p>
                            I enjoy problems where the challenge is in the
                            logic, data, and implementation - understanding how
                            something works, building a reliable solution, and
                            improving it through testing and iteration.
                        </p>
                    </div>
                </section>

                {/* SKILLS */}
                <section id="skills" className="section text-section">
                    <div className="section-header">
                        <p>SKILLS</p>
                    </div>

                    <div className="section-content">
                        <h2>Tools I actually use.</h2>

                        <div className="skill-groups">
                            {skillGroups.map((group) => (
                                <div className="skill-group" key={group.label}>
                                    <p>{group.label}</p>

                                    <div className="skill-list">
                                        {group.skills.map((skill) => (
                                            <span key={skill}>{skill}</span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* BACKGROUND */}
                <section id="background" className="section text-section">
                    <div className="section-header">
                        <p>BACKGROUND</p>
                    </div>

                    <div className="section-content background-list">
                        <div className="background-item">
                            <span>2025</span>

                            <div>
                                <h3>Registered Mechanical Engineer</h3>
                                <p>Professional Regulation Commission</p>
                            </div>
                        </div>

                        <div className="background-item">
                            <span>2019 - 2024</span>

                            <div>
                                <h3>BS Mechanical Engineering</h3>
                                <p>
                                    University of the Philippines Diliman · GWA
                                    1.721
                                </p>
                            </div>
                        </div>

                        <div className="background-item">
                            <span>2025 - 2026</span>

                            <div>
                                <h3>Operations Lead</h3>
                                <p>Jessie's Flower Shop</p>
                            </div>
                        </div>

                        <div className="background-item">
                            <span>2025 - 2026</span>

                            <div>
                                <h3>Professional Certifications</h3>
                                <p>
                                    Google Data Analytics · Google AI
                                    Specialization · freeCodeCamp Python
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CONTACT */}
                <section id="contact" className="section contact">
                    <p>CONTACT</p>

                    <h2>Let's connect.</h2>

                    <p className="contact-copy">
                        I'm open to opportunities in software, data, automation,
                        and related engineering roles.
                    </p>

                    <div className="contact-links">
                        <a href="mailto:jeremiah.papena@gmail.com">Email ↗</a>

                        <a
                            href="https://github.com/jdpapena"
                            target="_blank"
                            rel="noreferrer"
                        >
                            GitHub ↗
                        </a>

                        <a
                            href="https://www.linkedin.com/in/jeremiahpapena"
                            target="_blank"
                            rel="noreferrer"
                        >
                            LinkedIn ↗
                        </a>
                    </div>
                </section>
            </main>

            <footer>
                <span>jdpapena</span>
                <span>Engineering · Software · Data · Automation</span>
                <span>2026</span>
            </footer>
        </div>
    );
}

function CandlestickChart() {
    return (
        <div className="chart" aria-hidden="true">
            <svg viewBox="0 0 400 160" preserveAspectRatio="none">
                {candles.map(([x, open, close, high, low], index) => {
                    const bullish = close < open;
                    const top = Math.min(open, close);
                    const height = Math.max(Math.abs(close - open), 3);

                    return (
                        <g key={index} className={bullish ? "bull" : "bear"}>
                            <line x1={x} x2={x} y1={high} y2={low} />

                            <rect x={x - 4} y={top} width="8" height={height} />
                        </g>
                    );
                })}
            </svg>
        </div>
    );
}

export default App;
