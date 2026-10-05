import { useState } from "react";

const districtTrendSignals = {
  Pune: {
    status: "High Growth Pressure",
    insight:
      "Urban pressure is increasing while agricultural land retention is declining.",
    years: [
      { year: "2018", urban: 42, agriculture: 78, climate: 38 },
      { year: "2020", urban: 49, agriculture: 73, climate: 42 },
      { year: "2022", urban: 57, agriculture: 67, climate: 47 },
      { year: "2024", urban: 66, agriculture: 60, climate: 51 },
      { year: "2026", urban: 76, agriculture: 53, climate: 56 },
    ],
  },

  Nagpur: {
    status: "Moderate Pressure",
    insight:
      "Urban development is growing steadily with gradual pressure on agricultural land.",
    years: [
      { year: "2018", urban: 35, agriculture: 82, climate: 40 },
      { year: "2020", urban: 39, agriculture: 79, climate: 43 },
      { year: "2022", urban: 45, agriculture: 75, climate: 46 },
      { year: "2024", urban: 51, agriculture: 71, climate: 50 },
      { year: "2026", urban: 58, agriculture: 66, climate: 54 },
    ],
  },

  Nanded: {
    status: "Climate Watch",
    insight:
      "Urban pressure remains lower, but climate exposure is increasing more rapidly.",
    years: [
      { year: "2018", urban: 24, agriculture: 88, climate: 43 },
      { year: "2020", urban: 27, agriculture: 86, climate: 49 },
      { year: "2022", urban: 31, agriculture: 83, climate: 56 },
      { year: "2024", urban: 36, agriculture: 80, climate: 63 },
      { year: "2026", urban: 41, agriculture: 76, climate: 71 },
    ],
  },
};

function TrendAnalysis() {
  const [trendDistrict, setTrendDistrict] = useState("Pune");

  const districtData = districtTrendSignals[trendDistrict];
  const latest =
    districtData.years[districtData.years.length - 1];

  return (
    <section className="simple-trend-panel">

      <div className="simple-trend-heading">
        <div>
          <p className="eyebrow">
            LAND PATTERN INTELLIGENCE
          </p>

          <h2>Trend Analysis</h2>
        </div>

        <div className="simple-trend-controls">

          <select
            value={trendDistrict}
            onChange={(event) =>
              setTrendDistrict(event.target.value)
            }
          >
            {Object.keys(districtTrendSignals).map(
              (district) => (
                <option key={district}>
                  {district}
                </option>
              )
            )}
          </select>

          <span>{districtData.status}</span>

        </div>
      </div>

      <div className="simple-trend-metrics">

        <div>
          <span>2026 Urban Pressure</span>
          <strong>{latest.urban}%</strong>
        </div>

        <div>
          <span>Agriculture Retention</span>
          <strong>{latest.agriculture}%</strong>
        </div>

        <div>
          <span>Climate Exposure</span>
          <strong>{latest.climate}%</strong>
        </div>

      </div>

      <div className="trend-table">

        <div className="trend-table-header">
          <span>Year</span>
          <span>Urban Pressure</span>
          <span>Agriculture</span>
          <span>Climate Exposure</span>
        </div>

        {districtData.years.map((signal) => (
          <div
            className="trend-table-row"
            key={signal.year}
          >

            <strong>{signal.year}</strong>

            <TrendIndicator value={signal.urban} />

            <TrendIndicator
              value={signal.agriculture}
              type="agriculture"
            />

            <TrendIndicator
              value={signal.climate}
              type="climate"
            />

          </div>
        ))}

      </div>

      <div className="simple-trend-insight">
        <span>TREND INSIGHT</span>
        <strong>{districtData.insight}</strong>
      </div>

      <p className="prototype-note">
        Illustrative prototype indicators demonstrate how
        long-term land patterns can support governance decisions.
      </p>

    </section>
  );
}

function TrendIndicator({ value, type = "urban" }) {
  return (
    <div className="trend-indicator">

      <div className="trend-indicator-track">
        <div
          className={`trend-indicator-fill ${type}`}
          style={{ width: `${value}%` }}
        ></div>
      </div>

      <span>{value}%</span>

    </div>
  );
}

export default TrendAnalysis;
