import React from "react";
import navIcon from "../../assets/images/UI/nav.png";
import pointIcon from "../../assets/images/UI/point.png";
import mouseIcon from "../../assets/images/UI/mouse.png";
import keyboardIcon from "../../assets/images/UI/keyboard.png";


const Instructions: React.FC = () => {
  return (
    <div
      style={{
        position: "fixed",
        top: "20px",
        left: "20px",
        color: "white",
        background: "rgba(47, 141, 170, 0.95)",
        padding: "20px",
        borderRadius: "12px",
        fontFamily: "system-ui, -apple-system, sans-serif",
        fontSize: "14px",
        maxWidth: "280px",
        boxShadow: "0 8px 32px rgba(0, 0, 0, 0.4)",
        backdropFilter: "blur(10px)",
        border: "1px solid rgba(255, 255, 255, 0.1)",
        zIndex: 100,
      }}
    >
      <h3
        style={{
          margin: "0 0 15px 0",
          fontSize: "18px",
          fontWeight: "bold",
          color: "#2C3E50",
          display: "flex",
          alignItems: "center",
          gap: "8px",
        }}
      >
        <img
          src={navIcon}
          alt="Navigation"
          style={{ width: "20px", height: "20px" }}
        />
        <span>Navigation</span>
      </h3>

      <div style={{ lineHeight: "1.8" }}>
        <p
          style={{
            margin: "8px 0",
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <span
            style={{ fontSize: "20px", minWidth: "24px", textAlign: "center" }}
          >
            <img
              src={keyboardIcon}
              alt="Clavier"
              style={{ width: "20px", height: "20px" }}
            />
          </span>
          <span>
            <strong>ZQSD</strong> : Se déplacer
          </span>
        </p>
        <p
          style={{
            margin: "8px 0",
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <span
            style={{ fontSize: "20px", minWidth: "24px", textAlign: "center" }}
          >
            <img
              src={mouseIcon}
              alt="Souris"
              style={{ width: "20px", height: "20px" }}
            />
          </span>
          <span>
            <strong>Clic gauche + glisser</strong> : Regarder autour
          </span>
        </p>
        <p
          style={{
            margin: "8px 0",
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <img
            src={pointIcon}
            alt="Clic"
            style={{ width: "20px", height: "20px", minWidth: "24px" }}
          />
          <span>
            <strong>Clic sur objets</strong> : Voir détails
          </span>
        </p>
      </div>
    </div>
  );
};

export default Instructions;
