import { useState } from "react";
import "./App.css";
import LandMap from "./LandMap";
import LandHistory from "./LandHistory";
import PolicyIntelligence from "./PolicyIntelligence";
import TrendAnalysis from "./TrendAnalysis";

function App() {
  const [searchText, setSearchText] = useState("");

  const evidenceRecords = [
    {
      id: 1,
      title: "Urban Expansion and Agricultural Land Change",
      place: "Pune, Maharashtra",
      category: "Research Study",
      year: "2025",
    },
    {
      id: 2,
      title: "District Land Use and Land Cover Assessment",
      place: "Nagpur, Maharashtra",
      category: "GIS Dataset",
      year: "2026",
    },
    {
      id: 3,
      title: "Climate Resilience in Rural Land Management",
      place: "Maharashtra",
      category: "Policy Report",
      year: "2025",
    },
  ];

  const visibleRecords = evidenceRecords.filter((item) => {
    const searchArea =
      `${item.title} ${item.place} ${item.category}`.toLowerCase();

    return searchArea.includes(searchText.toLowerCase());
  });

  return (
    <div className="landlens-shell">

      <aside className="landlens-sidebar">

        <div className="brand-block">
          <div className="brand-mark">L</div>

          <div>
            <h2>LandLens</h2>
            <span>Land Governance Intelligence</span>
          </div>
        </div>

        <nav className="side-navigation">
          <button className="nav-item active">Dashboard</button>
          <button className="nav-item">Research Hub</button>
          <button className="nav-item">GIS Intelligence</button>
          <button className="nav-item">Policy Lab</button>
          <button className="nav-item">Evidence Reports</button>
        </nav>

        <div className="sidebar-footer">
          <span>SIH26019</span>
          <p>National Digital Platform</p>
        </div>

      </aside>

      <main className="landlens-main">

        <header className="topbar">

          <div>
            <p className="eyebrow">
              LAND GOVERNANCE COMMAND CENTRE
            </p>

            <h1>National Land Intelligence Dashboard</h1>
          </div>

          <div className="officer-chip">
            <span className="status-dot"></span>
            Government Research Portal
          </div>

        </header>

        <section className="metric-grid">

          <StatCard
            heading="Research Papers"
            number="1,284"
            detail="+46 this month"
          />

          <StatCard
            heading="Land Datasets"
            number="356"
            detail="28 states covered"
          />

          <StatCard
            heading="Policy Studies"
            number="92"
            detail="17 under review"
          />

          <StatCard
            heading="Active Projects"
            number="27"
            detail="Across 14 institutions"
          />

        </section>

        <section className="workspace-grid">

          <div className="panel research-panel">

            <div className="panel-heading">

              <div>
                <p className="eyebrow">EVIDENCE DISCOVERY</p>
                <h2>Research & Knowledge Hub</h2>
              </div>

              <span className="live-badge">AI Assisted</span>

            </div>

            <div className="evidence-search">

              <input
                type="text"
                placeholder="Search research, policies, datasets or location..."
                value={searchText}
                onChange={(event) => setSearchText(event.target.value)}
              />

              <button>Search Evidence</button>

            </div>

            <div className="evidence-list">

              {visibleRecords.map((item) => (
                <article className="evidence-card" key={item.id}>

                  <div className="document-icon">▤</div>

                  <div>
                    <span className="record-type">
                      {item.category}
                    </span>

                    <h3>{item.title}</h3>

                    <p>
                      {item.place} · {item.year}
                    </p>
                  </div>

                  <button className="view-button">
                    View
                  </button>

                </article>
              ))}

              {visibleRecords.length === 0 && (
                <div className="empty-search">
                  No matching evidence found.
                </div>
              )}

            </div>

          </div>

          <div className="panel map-panel">

            <div className="panel-heading">

              <div>
                <p className="eyebrow">
                  GEOSPATIAL INTELLIGENCE
                </p>

                <h2>Land Observation Map</h2>
              </div>

              <span className="live-badge">GIS</span>

            </div>

            <LandMap />

          </div>

        </section>

        <LandHistory />

        <PolicyIntelligence />

        <TrendAnalysis />

        <section className="insight-strip">

          <div>

            <p className="eyebrow">
              LATEST SYSTEM INSIGHT
            </p>

            <h3>
              Urban expansion requires closer evidence review
            </h3>

            <p>
              Recent land-use records indicate increasing
              conversion pressure around selected urban districts.
              GIS analysis can be used to examine the supporting
              evidence.
            </p>

          </div>

          <button>
            Explore Insight →
          </button>

        </section>

      </main>

    </div>
  );
}

function StatCard({ heading, number, detail }) {
  return (
    <article className="metric-card">
      <span>{heading}</span>
      <strong>{number}</strong>
      <p>{detail}</p>
    </article>
  );
}

export default App;