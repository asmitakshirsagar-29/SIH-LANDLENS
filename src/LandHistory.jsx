import { useState } from "react";

const districtTimelineVault = {
  Pune: {
    2016: { agriculture: 64, urban: 23, forest: 13 },
    2021: { agriculture: 58, urban: 29, forest: 13 },
    2026: { agriculture: 51, urban: 36, forest: 13 },
  },
  Nagpur: {
    2016: { agriculture: 67, urban: 18, forest: 15 },
    2021: { agriculture: 63, urban: 22, forest: 15 },
    2026: { agriculture: 59, urban: 27, forest: 14 },
  },
  Nanded: {
    2016: { agriculture: 76, urban: 11, forest: 13 },
    2021: { agriculture: 73, urban: 14, forest: 13 },
    2026: { agriculture: 69, urban: 18, forest: 13 },
  },
};

function calculateLandShift(districtName, oldYear, newYear) {
  const oldSnapshot = districtTimelineVault[districtName][oldYear];
  const newSnapshot = districtTimelineVault[districtName][newYear];

  return {
    agriculture: newSnapshot.agriculture - oldSnapshot.agriculture,
    urban: newSnapshot.urban - oldSnapshot.urban,
    forest: newSnapshot.forest - oldSnapshot.forest,
  };
}

function LandHistory() {
  const [focusDistrict, setFocusDistrict] = useState("Pune");
  const [baselineYear, setBaselineYear] = useState("2016");
  const [comparisonYear, setComparisonYear] = useState("2026");

  const baselineSnapshot =
    districtTimelineVault[focusDistrict][baselineYear];

  const comparisonSnapshot =
    districtTimelineVault[focusDistrict][comparisonYear];

  const landShift =
    calculateLandShift(
      focusDistrict,
      baselineYear,
      comparisonYear
    );

  return (
    <section className="history-panel">

      <div className="history-heading">
        <div>
          <p className="eyebrow">TEMPORAL LAND INTELLIGENCE</p>
          <h2>Historical Land-Use Comparison</h2>
        </div>

        <span className="live-badge">Change Detection</span>
      </div>

      <div className="history-controls">

        <select
          value={focusDistrict}
          onChange={(event) =>
            setFocusDistrict(event.target.value)
          }
        >
          {Object.keys(districtTimelineVault).map((district) => (
            <option key={district} value={district}>
              {district}
            </option>
          ))}
        </select>

        <select
          value={baselineYear}
          onChange={(event) =>
            setBaselineYear(event.target.value)
          }
        >
          <option value="2016">2016</option>
          <option value="2021">2021</option>
          <option value="2026">2026</option>
        </select>

        <span>vs</span>

        <select
          value={comparisonYear}
          onChange={(event) =>
            setComparisonYear(event.target.value)
          }
        >
          <option value="2016">2016</option>
          <option value="2021">2021</option>
          <option value="2026">2026</option>
        </select>

      </div>

      <div className="land-comparison-grid">

        <LandSnapshot
          label={baselineYear}
          snapshot={baselineSnapshot}
        />

        <div className="shift-summary">
          <span>LAND SHIFT</span>

          <strong>
            {landShift.urban > 0 ? "+" : ""}
            {landShift.urban}% Urban
          </strong>

          <p>
            Agriculture {landShift.agriculture > 0 ? "+" : ""}
            {landShift.agriculture}%
          </p>

          <p>
            Forest {landShift.forest > 0 ? "+" : ""}
            {landShift.forest}%
          </p>
        </div>

        <LandSnapshot
          label={comparisonYear}
          snapshot={comparisonSnapshot}
        />

      </div>

      <p className="prototype-note">
        Prototype values are illustrative and demonstrate how
        authoritative historical land datasets can be compared.
      </p>

    </section>
  );
}

function LandSnapshot({ label, snapshot }) {
  return (
    <div className="snapshot-card">

      <h3>{label}</h3>

      <LandBar
        label="Agriculture"
        value={snapshot.agriculture}
      />

      <LandBar
        label="Urban"
        value={snapshot.urban}
      />

      <LandBar
        label="Forest"
        value={snapshot.forest}
      />

    </div>
  );
}

function LandBar({ label, value }) {
  return (
    <div className="land-bar-row">

      <div className="bar-label">
        <span>{label}</span>
        <strong>{value}%</strong>
      </div>

      <div className="bar-track">
        <div
          className="bar-fill"
          style={{ width: `${value}%` }}
        ></div>
      </div>

    </div>
  );
}

export default LandHistory;
