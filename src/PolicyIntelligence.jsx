import { useState } from "react";

const evidenceBridgeVault = {
  "Urban Expansion": {
    district: "Pune",
    confidence: 87,
    priority: "High Priority",
    finding:
      "Built-up growth is increasing pressure on peri-urban agricultural land.",
    sources: [
      {
        id: "UE-R01",
        type: "Research Study",
        title: "Urban Expansion and Agricultural Land Change",
        year: "2025",
      },
      {
        id: "UE-G04",
        type: "GIS Dataset",
        title: "District Land-Use Change Assessment",
        year: "2026",
      },
      {
        id: "UE-P02",
        type: "Policy Report",
        title: "Peri-Urban Land Management Review",
        year: "2025",
      },
    ],
    recommendation:
      "Review growth boundaries and strengthen agricultural land monitoring.",
  },

  "Climate Risk": {
    district: "Nanded",
    confidence: 81,
    priority: "Watch",
    finding:
      "Agricultural zones show increasing exposure to climate-related land stress.",
    sources: [
      {
        id: "CR-R03",
        type: "Research Study",
        title: "Climate Resilience in Rural Land Management",
        year: "2025",
      },
      {
        id: "CR-G07",
        type: "GIS Dataset",
        title: "District Climate Exposure Layer",
        year: "2026",
      },
      {
        id: "CR-P05",
        type: "Policy Report",
        title: "Rural Resilience Planning Framework",
        year: "2026",
      },
    ],
    recommendation:
      "Link land-use planning with district climate-resilience measures.",
  },

  "Land Fragmentation": {
    district: "Nagpur",
    confidence: 76,
    priority: "Moderate",
    finding:
      "Fragmented parcels may reduce planning efficiency and infrastructure coordination.",
    sources: [
      {
        id: "LF-R06",
        type: "Research Study",
        title: "Parcel Fragmentation and Rural Development",
        year: "2024",
      },
      {
        id: "LF-D11",
        type: "Land Records",
        title: "Parcel Pattern Assessment",
        year: "2026",
      },
      {
        id: "LF-P08",
        type: "Policy Report",
        title: "Land Consolidation Practice Review",
        year: "2025",
      },
    ],
    recommendation:
      "Review parcel patterns before major infrastructure and development approvals.",
  },
};

function PolicyIntelligence() {
  const [activeEvidenceTopic, setActiveEvidenceTopic] =
    useState("Urban Expansion");

  const evidenceBundle =
    evidenceBridgeVault[activeEvidenceTopic];

  return (
    <section className="policy-intelligence-panel">

      <div className="policy-intelligence-heading">
        <div>
          <p className="eyebrow">CONNECTED EVIDENCE ENGINE</p>
          <h2>Evidence Connection</h2>
        </div>

        <span className="live-badge">Evidence Linked</span>
      </div>

      <div className="evidence-topic-tabs">
        {Object.keys(evidenceBridgeVault).map((topic) => (
          <button
            key={topic}
            className={
              activeEvidenceTopic === topic
                ? "evidence-topic active-evidence-topic"
                : "evidence-topic"
            }
            onClick={() => setActiveEvidenceTopic(topic)}
          >
            {topic}
          </button>
        ))}
      </div>

      <div className="evidence-connection-grid">

        <div className="governance-signal-card">
          <span>GOVERNANCE SIGNAL</span>

          <h3>{activeEvidenceTopic}</h3>

          <p>{evidenceBundle.finding}</p>

          <div className="signal-metrics">
            <div>
              <span>District</span>
              <strong>{evidenceBundle.district}</strong>
            </div>

            <div>
              <span>Confidence</span>
              <strong>{evidenceBundle.confidence}%</strong>
            </div>

            <div>
              <span>Priority</span>
              <strong>{evidenceBundle.priority}</strong>
            </div>
          </div>
        </div>

        <div className="evidence-source-chain">
          {evidenceBundle.sources.map((source, index) => (
            <article className="connected-source" key={source.id}>
              <div className="source-number">
                {index + 1}
              </div>

              <div>
                <span>
                  {source.type} · {source.id}
                </span>

                <strong>{source.title}</strong>

                <p>{source.year}</p>
              </div>
            </article>
          ))}
        </div>

      </div>

      <div className="evidence-action-box">
        <span>EVIDENCE-BASED ACTION</span>
        <strong>{evidenceBundle.recommendation}</strong>
      </div>

      <p className="prototype-note">
        Illustrative prototype evidence used to demonstrate how
        research, geospatial data, land records and policy documents
        can be connected for decision support.
      </p>

    </section>
  );
}

export default PolicyIntelligence;
