import { useState } from "react";

const districtBaselines = {
  Pune: {
    urbanPressure: 76,
    agriculture: 53,
    climateResilience: 48,
  },
  Nagpur: {
    urbanPressure: 58,
    agriculture: 66,
    climateResilience: 56,
  },
  Nanded: {
    urbanPressure: 41,
    agriculture: 76,
    climateResilience: 42,
  },
};

const policyOptions = {
  "Urban Growth Boundary": {
    urbanEffect: -12,
    agricultureEffect: 8,
    climateEffect: 4,
    effort: "Medium",
  },
  "Farmland Protection": {
    urbanEffect: -7,
    agricultureEffect: 13,
    climateEffect: 3,
    effort: "Medium",
  },
  "Climate-Resilient Zoning": {
    urbanEffect: -4,
    agricultureEffect: 6,
    climateEffect: 15,
    effort: "High",
  },
};

const intensityScale = {
  Low: 0.5,
  Moderate: 0.75,
  High: 1,
};

function clampScore(value) {
  return Math.max(0, Math.min(100, Math.round(value)));
}

function calculatePolicyProjection(
  district,
  policy,
  intensity
) {
  const baseline = districtBaselines[district];
  const intervention = policyOptions[policy];
  const factor = intensityScale[intensity];

  return {
    urbanPressure: clampScore(
      baseline.urbanPressure +
        intervention.urbanEffect * factor
    ),

    agriculture: clampScore(
      baseline.agriculture +
        intervention.agricultureEffect * factor
    ),

    climateResilience: clampScore(
      baseline.climateResilience +
        intervention.climateEffect * factor
    ),

    effort:
      intensity === "High"
        ? intervention.effort
        : intensity === "Moderate"
        ? "Medium"
        : "Low",
  };
}

function PolicySimulation() {
  const [district, setDistrict] = useState("Pune");

  const [policy, setPolicy] = useState(
    "Urban Growth Boundary"
  );

  const [intensity, setIntensity] =
    useState("Moderate");

  const [simulationResult, setSimulationResult] =
    useState(() =>
      calculatePolicyProjection(
        "Pune",
        "Urban Growth Boundary",
        "Moderate"
      )
    );

  const runSimulation = () => {
    setSimulationResult(
      calculatePolicyProjection(
        district,
        policy,
        intensity
      )
    );
  };

  const baseline = districtBaselines[district];

  return (
    <section className="simulation-panel">

      <div className="simulation-heading">

        <div>
          <p className="eyebrow">
            POLICY DECISION SUPPORT
          </p>

          <h2>Policy Simulation Lab</h2>
        </div>

        <span className="live-badge">
          Scenario Testing
        </span>

      </div>

      <div className="simulation-workspace">

        <div className="simulation-controls">

          <h3>Build Policy Scenario</h3>

          <label>
            District

            <select
              value={district}
              onChange={(event) =>
                setDistrict(event.target.value)
              }
            >
              {Object.keys(districtBaselines).map(
                (districtName) => (
                  <option key={districtName}>
                    {districtName}
                  </option>
                )
              )}
            </select>
          </label>

          <label>
            Policy Intervention

            <select
              value={policy}
              onChange={(event) =>
                setPolicy(event.target.value)
              }
            >
              {Object.keys(policyOptions).map(
                (policyName) => (
                  <option key={policyName}>
                    {policyName}
                  </option>
                )
              )}
            </select>
          </label>

          <label>
            Intervention Intensity

            <select
              value={intensity}
              onChange={(event) =>
                setIntensity(event.target.value)
              }
            >
              <option>Low</option>
              <option>Moderate</option>
              <option>High</option>
            </select>
          </label>

          <button
            className="run-simulation-button"
            onClick={runSimulation}
          >
            Run Simulation →
          </button>

        </div>

        <div className="simulation-results">

          <div className="simulation-result-title">
            <div>
              <span>PROJECTED OUTCOME</span>
              <h3>{district}</h3>
            </div>

            <span className="simulation-status">
              {intensity} Scenario
            </span>
          </div>

          <SimulationMetric
            label="Urban Pressure"
            before={baseline.urbanPressure}
            after={simulationResult.urbanPressure}
          />

          <SimulationMetric
            label="Agriculture Retention"
            before={baseline.agriculture}
            after={simulationResult.agriculture}
          />

          <SimulationMetric
            label="Climate Resilience"
            before={baseline.climateResilience}
            after={simulationResult.climateResilience}
          />

          <div className="implementation-effort">
            <span>Implementation Effort</span>
            <strong>{simulationResult.effort}</strong>
          </div>

        </div>

      </div>

      <div className="simulation-explanation">

        <span>SCENARIO</span>

        <strong>
          {policy} · {intensity} intensity · {district}
        </strong>

        <p>
          Compare the baseline with the projected policy
          outcome before moving to detailed evidence review.
        </p>

      </div>

      <p className="prototype-note">
        Simulation outputs are illustrative prototype projections
        for decision-support demonstration and are not official
        forecasts.
      </p>

    </section>
  );
}

function SimulationMetric({ label, before, after }) {
  const change = after - before;

  return (
    <div className="simulation-metric">

      <div className="simulation-metric-label">
        <strong>{label}</strong>

        <span>
          {change > 0 ? "+" : ""}
          {change} pts
        </span>
      </div>

      <div className="simulation-values">

        <div>
          <span>Baseline</span>
          <strong>{before}%</strong>
        </div>

        <div className="simulation-arrow">→</div>

        <div>
          <span>Projected</span>
          <strong>{after}%</strong>
        </div>

      </div>

    </div>
  );
}

export default PolicySimulation;
