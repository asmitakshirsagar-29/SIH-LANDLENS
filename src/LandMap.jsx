import { useState } from "react";

const geoEvidenceNodes = [
  {
    nodeId: "pune-node",
    district: "Pune",
    top: "67%",
    left: "36%",
    landUse: "Urban + Agricultural",
    urbanPressure: "High",
    climateRisk: "Moderate",
    evidenceCount: 42,
  },
  {
    nodeId: "mumbai-node",
    district: "Mumbai",
    top: "64%",
    left: "18%",
    landUse: "Dense Urban",
    urbanPressure: "High",
    climateRisk: "High",
    evidenceCount: 56,
  },
  {
    nodeId: "nashik-node",
    district: "Nashik",
    top: "45%",
    left: "27%",
    landUse: "Agricultural + Urban",
    urbanPressure: "Moderate",
    climateRisk: "Moderate",
    evidenceCount: 27,
  },
  {
    nodeId: "nanded-node",
    district: "Nanded",
    top: "58%",
    left: "69%",
    landUse: "Predominantly Agricultural",
    urbanPressure: "Moderate",
    climateRisk: "High",
    evidenceCount: 18,
  },
  {
    nodeId: "nagpur-node",
    district: "Nagpur",
    top: "34%",
    left: "78%",
    landUse: "Agricultural + Urban",
    urbanPressure: "Moderate",
    climateRisk: "Moderate",
    evidenceCount: 31,
  },
];

function LandMap() {
  const [activeGeoNode, setActiveGeoNode] = useState(
    geoEvidenceNodes[0]
  );

  return (
    <div className="stable-gis-shell">

      <div className="gis-demo-map">

        <div className="gis-grid-lines"></div>

        <div className="state-outline">
          <span>MAHARASHTRA</span>
        </div>

        {geoEvidenceNodes.map((geoNode) => (
          <button
            key={geoNode.nodeId}
            className={
              activeGeoNode.nodeId === geoNode.nodeId
                ? "geo-node active-node"
                : "geo-node"
            }
            style={{
              top: geoNode.top,
              left: geoNode.left,
            }}
            onClick={() => setActiveGeoNode(geoNode)}
            title={geoNode.district}
          >
            <span></span>
            {geoNode.district}
          </button>
        ))}

        <div className="gis-layer-panel">
          <strong>Active Layers</strong>
          <span>✓ Land Use</span>
          <span>✓ Urban Pressure</span>
          <span>✓ Climate Risk</span>
        </div>

      </div>

      <div className="district-intelligence">

        <div className="district-title-row">
          <div>
            <span>SELECTED DISTRICT</span>
            <h3>{activeGeoNode.district}</h3>
          </div>

          <span className="gis-live-tag">
            Evidence Linked
          </span>
        </div>

        <div className="district-data-grid">

          <div>
            <span>Land Profile</span>
            <strong>{activeGeoNode.landUse}</strong>
          </div>

          <div>
            <span>Urban Pressure</span>
            <strong>{activeGeoNode.urbanPressure}</strong>
          </div>

          <div>
            <span>Climate Risk</span>
            <strong>{activeGeoNode.climateRisk}</strong>
          </div>

          <div>
            <span>Evidence Records</span>
            <strong>{activeGeoNode.evidenceCount}</strong>
          </div>

        </div>

        <p className="gis-prototype-label">
          Prototype geospatial intelligence view using illustrative
          district indicators.
        </p>

      </div>

    </div>
  );
}

export default LandMap;
