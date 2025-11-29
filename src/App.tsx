import { useState, useEffect, useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import type { OrbitControls as OrbitControlsImpl } from 'three-stdlib';
import * as THREE from 'three';
import type { ModalContent } from './types/content.types';
import Modal from './components/UI/Modal';
import Instructions from './components/UI/Instructions';
import { RoomModel } from './components/Room/Room';
import { InteractiveHotspots } from './components/UI/InteractiveHotspots';

// Limites de la chambre
const ROOM_BOUNDS = {
  minX: 0.3,
  maxX: 2.5,
  minY: 0.5,
  maxY: 2.0,
  minZ: -5.5,
  maxZ: -0.5
};

// Zones de collision (meubles solides)

const COLLISION_ZONES = [
  // Lit
  { minX: 0, maxX: 1.6, minZ: -1.8, maxZ: 0, name: 'lit' },
  // Bureau
  { minX: 0.0, maxX: 0.9, minZ: -4.3, maxZ: -2.47, name: 'bureau' },
  // Étagère
  { minX: 2.47, maxX: 2.9, minZ: -4.3, maxZ: -3.2, name: 'etagere' },
  // Placard
  { minX: 1.6, maxX: 2.8, minZ: -0.5, maxZ: 0, name: 'placard' },
  // Piano
  { minX: 0.93, maxX: 1.81, minZ: -4.3, maxZ: -3.88, name: 'piano' }
];

// Fonction pour vérifier si une position est dans une zone de collision
function isInCollisionZone(x: number, z: number, margin: number = 0.2): boolean {
  for (const zone of COLLISION_ZONES) {
    if (x >= zone.minX - margin && x <= zone.maxX + margin &&
        z >= zone.minZ - margin && z <= zone.maxZ + margin) {
      return true;
    }
  }
  return false;
}

// Vitesse de déplacement
const MOVE_SPEED = 0.02;

// Composant pour les contrôles ZQSD avec ref aux OrbitControls
function KeyboardControls({ controlsRef }: { controlsRef: React.RefObject<OrbitControlsImpl | null> }) {
  const { camera } = useThree();
  const keys = useRef<{ [key: string]: boolean }>({});
  
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      keys.current[e.key.toLowerCase()] = true;
    };
    const handleKeyUp = (e: KeyboardEvent) => {
      keys.current[e.key.toLowerCase()] = false;
    };
    
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, []);
  
  useFrame(() => {
    // Obtenir la direction de la caméra projetée sur le plan horizontal (XZ)
    const direction = new THREE.Vector3();
    camera.getWorldDirection(direction);
    // Ignorer complètement Y pour un déplacement parfaitement horizontal
    direction.y = 0;
    direction.normalize();
    
    // Vecteur perpendiculaire pour le déplacement latéral (strafe)
    const right = new THREE.Vector3();
    right.crossVectors(new THREE.Vector3(0, 1, 0), direction).normalize();
    
    // Déplacement horizontal uniquement
    let moveX = 0;
    let moveZ = 0;
    
    // Z = avancer, S = reculer
    if (keys.current['z']) {
      moveX += direction.x * MOVE_SPEED;
      moveZ += direction.z * MOVE_SPEED;
    }
    if (keys.current['s']) {
      moveX -= direction.x * MOVE_SPEED;
      moveZ -= direction.z * MOVE_SPEED;
    }
    // Q = strafe gauche, D = strafe droite
    if (keys.current['q']) {
      moveX += right.x * MOVE_SPEED;
      moveZ += right.z * MOVE_SPEED;
    }
    if (keys.current['d']) {
      moveX -= right.x * MOVE_SPEED;
      moveZ -= right.z * MOVE_SPEED;
    }
    
    // Appliquer le mouvement (sans changer Y)
    if (moveX !== 0 || moveZ !== 0) {
      // Calculer la nouvelle position
      let newX = THREE.MathUtils.clamp(camera.position.x + moveX, ROOM_BOUNDS.minX, ROOM_BOUNDS.maxX);
      let newZ = THREE.MathUtils.clamp(camera.position.z + moveZ, ROOM_BOUNDS.minZ, ROOM_BOUNDS.maxZ);
      
      // Vérifier les collisions
      // Essayer d'abord le mouvement complet
      if (!isInCollisionZone(newX, newZ)) {
        // Pas de collision, on peut bouger
      } else {
        // Collision détectée, essayer de glisser le long des obstacles
        // Essayer seulement X
        if (!isInCollisionZone(newX, camera.position.z)) {
          newZ = camera.position.z;
        }
        // Essayer seulement Z
        else if (!isInCollisionZone(camera.position.x, newZ)) {
          newX = camera.position.x;
        }
        // Bloqué des deux côtés
        else {
          newX = camera.position.x;
          newZ = camera.position.z;
        }
      }
      
      const actualMoveX = newX - camera.position.x;
      const actualMoveZ = newZ - camera.position.z;
      
      camera.position.x = newX;
      camera.position.z = newZ;
      
      // Déplacer aussi le target des OrbitControls pour garder la même direction de regard
      if (controlsRef.current) {
        controlsRef.current.target.x += actualMoveX;
        controlsRef.current.target.z += actualMoveZ;
      }
    }
  });
  
  return null;
}

const App: React.FC = () => {
  const [modalContent, setModalContent] = useState<ModalContent | null>(null);
  const controlsRef = useRef<OrbitControlsImpl>(null);

  return (
    <div style={{ width: '100vw', height: '100vh', background: '#1a1a2e' }}>
      {/* Scène 3D */}
      <Canvas
        camera={{ 
          position: [1.5, 1.6, -1], // Position dans la chambre, à hauteur des yeux
          fov: 70 // Champ de vision plus large pour voir plus de la pièce
        }}
        gl={{ 
          toneMapping: THREE.ACESFilmicToneMapping,
          toneMappingExposure: 1.0,
          antialias: true
        }}
        flat
      >
        {/* Lumière ambiante */}
        <ambientLight intensity={0.5} />
        
        {/* Plafonnier principal */}
        <pointLight 
          position={[1.2, 2.8, -3]}
          intensity={10}
          color="#ffffff"
          decay={2}
          distance={10}
        />
        
        {/* Lumière de remplissage */}
        <directionalLight 
          position={[2, 2, -1]} 
          intensity={0.3} 
          color="#ffffff"
        />

        {/* Modèle 3D de la chambre */}
        <RoomModel />

        {/* Points d'intérêt cliquables (cachés quand modale ouverte) */}
        <InteractiveHotspots onInteract={setModalContent} isVisible={!modalContent} />

        {/* Contrôles clavier ZQSD pour se déplacer */}
        <KeyboardControls controlsRef={controlsRef} />

        {/* Contrôles de caméra - rotation souris uniquement */}
        <OrbitControls 
          ref={controlsRef}
          enablePan={false} // Désactivé car on utilise ZQSD
          enableZoom={false} // Désactivé pour simuler une personne
          enableRotate={true}
          enableDamping={false} // Désactiver l'inertie/delay
          target={[1.9, 1.5, -2.4]} // Point de focus au centre de la chambre
          minDistance={0.1}
          maxDistance={0.1}
          maxPolarAngle={Math.PI * 0.85} // Regarder vers le bas
          minPolarAngle={Math.PI * 0.15} // Regarder vers le haut
          rotateSpeed={0.4} // Sensibilité réduite pour la rotation
        />
      </Canvas>

      {/* UI */}
      <Instructions />
      <Modal content={modalContent} onClose={() => setModalContent(null)} />
    </div>
  );
};

export default App;