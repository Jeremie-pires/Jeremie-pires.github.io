import { useRef, useMemo } from "react";
import * as THREE from "three";
import { useGLTF } from "@react-three/drei";

// URL du modele 3D stocké sur GitHub release
const GITHUB_RELEASE_URL =
  "https://github.com/Jeremie-pires/Jeremie-pires.github.io/releases/download/v1.0.0/chambre.glb";
const MODEL_URL = `https://corsproxy.io/?${encodeURIComponent(
  GITHUB_RELEASE_URL
)}`;

// Fonction helper pour configurer les matériaux selon leur type
function configureMaterial(mat: THREE.MeshStandardMaterial): void {
  const matName = mat.name.toLowerCase();

  if (
    matName.includes("metal") ||
    matName.includes("steel") ||
    matName.includes("aluminum")
  ) {
    // Métaux
    mat.roughness = 0.4;
    mat.metalness = 0.8;
  } else if (matName.includes("wood") || matName.includes("plywood")) {
    // Bois
    mat.roughness = 0.8;
    mat.metalness = 0;
  } else if (matName.includes("glass") || matName.includes("tela")) {
    // Verre/écrans
    mat.roughness = 0.1;
    mat.metalness = 0;
  } else if (
    matName.includes("fabric") ||
    matName.includes("chair") ||
    matName.includes("pillow")
  ) {
    // Tissus - très mat pour éviter l'aspect plastique
    mat.roughness = 1;
    mat.metalness = 0;
  } else {
    // Défaut - mat pour éviter l'aspect plastique
    mat.roughness = 0.85;
    mat.metalness = 0;
  }

  // Réduire les reflets environnement
  mat.envMapIntensity = 0.2;
  mat.needsUpdate = true;
}

interface RoomModelProps {
  readonly [key: string]: unknown;
}

export function RoomModel(props: Readonly<RoomModelProps>) {
  const groupRef = useRef<THREE.Group>(null);

  // Charger le modele 3D
  const { scene } = useGLTF(MODEL_URL);

  // Cloner la scene pour eviter les problemes de reference
  const clonedScene = useMemo(() => {
    const clone = scene.clone(true);

    // Parcourir tous les objets et ajuster les matériaux
    clone.traverse((child) => {
      if (!(child instanceof THREE.Mesh)) return;

      // Désactiver les ombres pour les performances
      child.castShadow = false;
      child.receiveShadow = false;

      // Ajuster les matériaux
      if (!child.material) return;

      const materials = Array.isArray(child.material)
        ? child.material
        : [child.material];

      for (const mat of materials) {
        if (mat instanceof THREE.MeshStandardMaterial) {
          configureMaterial(mat);
        }
      }
    });

    return clone;
  }, [scene]);

  return (
    <group ref={groupRef} {...props}>
      <primitive object={clonedScene} /> {/* NOSONAR - object is valid for @react-three/fiber primitive */}
    </group>
  );
}

useGLTF.preload(MODEL_URL);
