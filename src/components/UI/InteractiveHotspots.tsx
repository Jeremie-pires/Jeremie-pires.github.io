import { Html } from "@react-three/drei";
import { useState } from "react";
import type { ModalContent } from "../../types/content.types";

// Import des contenus
import { computerContent } from "../Desk/Computer/computerContent";
import { phoneContent } from "../Desk/Phone/phoneContent";
import { pianoContent } from "../Piano/pianoContent";
import { bookshelfContent } from "../Bookshelf/bookshelfContent";
import { schoolbagContent } from "../Schoolbag/schoolbagContent";
import { cvContent } from "../Desk/CV/cvContent";

// Import des icones
import computerIcon from "../../assets/images/icons/computer.png";
import phoneIcon from "../../assets/images/icons/phone.png";
import pianoIconImg from "../../assets/images/icons/piano.png";
import bookshelfIcon from "../../assets/images/icons/books.png";
import schoolbagIcon from "../../assets/images/icons/backpack.png";
import cvIcon from "../../assets/images/icons/cv.png";

interface Hotspot {
  id: string;
  position: [number, number, number];
  icon: string;
  isImage?: boolean;
  label: string;
  content: ModalContent;
}

// Définition des points d'intérêt avec leurs positions dans la scène
const HOTSPOTS: Hotspot[] = [
  {
    id: "computer",
    position: [0.35, 1.2, -3.1],
    icon: computerIcon,
    isImage: true,
    label: "Projets",
    content: computerContent,
  },
  {
    id: "phone",
    position: [0.7, 0.9, -2.4],
    icon: phoneIcon,
    isImage: true,
    label: "Contact",
    content: phoneContent,
  },
  {
    id: "piano",
    position: [1.4, 0.9, -4.1],
    icon: pianoIconImg,
    isImage: true,
    label: "Passions",
    content: pianoContent,
  },
  {
    id: "bookshelf",
    position: [2.6, 1.4, -3.8],
    icon: bookshelfIcon,
    isImage: true,
    label: "Compétences",
    content: bookshelfContent,
  },
  {
    id: "schoolbag",
    position: [1.1, 0.3, -2],
    icon: schoolbagIcon,
    isImage: true,
    label: "Parcours",
    content: schoolbagContent,
  },
  {
    id: "cv",
    position: [0.4, 0.9, -2.7],
    icon: cvIcon,
    isImage: true,
    label: "CV",
    content: cvContent,
  },
];

interface HotspotMarkerProps {
  readonly hotspot: Hotspot;
  readonly onInteract: (content: ModalContent) => void;
}

function HotspotMarker({ hotspot, onInteract }: Readonly<HotspotMarkerProps>) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <group position={hotspot.position}> {/* NOSONAR - position is valid for @react-three/fiber group */}
      <Html
        center
        distanceFactor={3}
        style={{
          pointerEvents: "auto",
          cursor: "pointer",
        }}
      >
        <button
          onClick={() => onInteract(hotspot.content)}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              onInteract(hotspot.content);
            }
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onFocus={() => setIsHovered(true)}
          onBlur={() => setIsHovered(false)}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "4px",
            transition: "transform 0.2s ease",
            transform: isHovered ? "scale(1.2)" : "scale(1)",
            background: "none",
            border: "none",
            padding: 0,
            cursor: "pointer",
          }}
        >
          {/* Icône principale */}
          <div
            style={{
              width: "48px",
              height: "48px",
              borderRadius: "50%",
              backgroundColor: isHovered
                ? "rgba(99, 102, 241, 0.95)"
                : "rgba(82, 82, 105, 0.85)",
              border: "2px solid rgba(255, 255, 255, 0.8)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "24px",
              boxShadow: isHovered
                ? "0 0 20px rgba(99, 102, 241, 0.6), 0 4px 12px rgba(0,0,0,0.4)"
                : "0 4px 12px rgba(0,0,0,0.3)",
              animation: "pulse 2s ease-in-out infinite",
              overflow: "hidden",
            }}
          >
            {hotspot.isImage ? (
              <img
                src={hotspot.icon}
                alt={hotspot.label}
                style={{
                  width: "60%",
                  height: "60%",
                  objectFit: "contain",
                }}
              />
            ) : (
              hotspot.icon
            )}
          </div>

          {/* Label au survol */}
          {isHovered && (
            <div
              style={{
                backgroundColor: "rgba(38, 38, 151, 0.95)",
                color: "white",
                padding: "4px 12px",
                borderRadius: "12px",
                fontSize: "12px",
                fontWeight: "500",
                whiteSpace: "nowrap",
                boxShadow: "0 2px 8px rgba(0,0,0,0.3)",
              }}
            >
              {hotspot.label}
            </div>
          )}
        </button>
      </Html>
      {/* Style pour l'animation */}
      <Html>
        <style>{`
          @keyframes pulse {
            0%, 100% { 
              box-shadow: 0 0 0 0 rgba(99, 102, 241, 0.4);
            }
            50% { 
              box-shadow: 0 0 0 8px rgba(99, 102, 241, 0);
            }
          }
        `}</style>
      </Html>
    </group>
  );
}

interface InteractiveHotspotsProps {
  readonly onInteract: (content: ModalContent) => void;
  readonly isVisible?: boolean;
}

export function InteractiveHotspots({
  onInteract,
  isVisible = true,
}: Readonly<InteractiveHotspotsProps>) {
  if (!isVisible) return null;

  return (
    <group>
      {HOTSPOTS.map((hotspot) => (
        <HotspotMarker
          key={hotspot.id}
          hotspot={hotspot}
          onInteract={onInteract}
        />
      ))}
    </group>
  );
}
