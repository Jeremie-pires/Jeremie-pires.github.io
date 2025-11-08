import React, { useState, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Text, Box, Plane } from '@react-three/drei';
import * as THREE from 'three';

interface ModalContent {
  title: string;
  description: string;
  items?: string[];
}

interface InteractiveObjectProps {
  position: [number, number, number];
  color: string;
  label: string;
  onClick: () => void;
  size?: [number, number, number];
}

const InteractiveObject: React.FC<InteractiveObjectProps> = ({ 
  position, 
  color, 
  label, 
  onClick,
  size = [1, 1, 1]
}) => {
  const [hovered, setHovered] = useState(false);
  const meshRef = useRef<THREE.Mesh>(null);

  return (
    <group position={position}>
      <Box
        ref={meshRef}
        args={size}
        onClick={onClick}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <meshStandardMaterial 
          color={hovered ? '#ffff00' : color}
          emissive={hovered ? '#444400' : '#000000'}
        />
      </Box>
      <Text
        position={[0, size[1] / 2 + 0.5, 0]}
        fontSize={0.3}
        color="white"
        anchorX="center"
        anchorY="middle"
      >
        {label}
      </Text>
    </group>
  );
};

const Room: React.FC<{ onObjectClick: (content: ModalContent) => void }> = ({ onObjectClick }) => {
  return (
    <>
      {/* Lumières */}
      <ambientLight intensity={0.5} />
      <pointLight position={[0, 3, 0]} intensity={1} />
      <directionalLight position={[5, 5, 5]} intensity={0.5} />

      {/* Sol */}
      <Plane 
        args={[10, 10]} 
        rotation={[-Math.PI / 2, 0, 0]} 
        position={[0, 0, 0]}
      >
        <meshStandardMaterial color="#8B7355" />
      </Plane>

      {/* Murs */}
      <Plane args={[10, 5]} position={[0, 2.5, -5]}>
        <meshStandardMaterial color="#E8E8E8" />
      </Plane>
      <Plane args={[10, 5]} rotation={[0, Math.PI / 2, 0]} position={[-5, 2.5, 0]}>
        <meshStandardMaterial color="#E8E8E8" />
      </Plane>
      <Plane args={[10, 5]} rotation={[0, -Math.PI / 2, 0]} position={[5, 2.5, 0]}>
        <meshStandardMaterial color="#E8E8E8" />
      </Plane>

      {/* Plafond */}
      <Plane 
        args={[10, 10]} 
        rotation={[Math.PI / 2, 0, 0]} 
        position={[0, 5, 0]}
      >
        <meshStandardMaterial color="#F5F5F5" />
      </Plane>

      {/* Bureau avec ordinateur */}
      <Box args={[2, 0.1, 1]} position={[-3, 0.7, -3]}>
        <meshStandardMaterial color="#8B4513" />
      </Box>
      <InteractiveObject
        position={[-3, 1.3, -3]}
        color="#2C3E50"
        label="💻 Projets"
        size={[0.8, 0.6, 0.05]}
        onClick={() => onObjectClick({
          title: "Mes Projets",
          description: "Voici mes principaux projets de développement",
          items: [
            "Application e-commerce en Angular",
            "API REST avec Node.js",
            "Dashboard analytics en React",
            "Application mobile React Native"
          ]
        })}
      />

      {/* Bibliothèque */}
      <Box args={[1.5, 2, 0.3]} position={[3, 1, -4]}>
        <meshStandardMaterial color="#654321" />
      </Box>
      <InteractiveObject
        position={[3, 2.3, -3.7]}
        color="#E74C3C"
        label="📚 Compétences"
        size={[0.3, 0.4, 0.2]}
        onClick={() => onObjectClick({
          title: "Mes Compétences",
          description: "Technologies que je maîtrise",
          items: [
            "Frontend: React, Angular, TypeScript",
            "Backend: Node.js, Express",
            "3D: Three.js, WebGL",
            "Outils: Git, Docker, Vite"
          ]
        })}
      />

      {/* Lit */}
      <Box args={[2, 0.4, 1.5]} position={[2.5, 0.2, 3]}>
        <meshStandardMaterial color="#4A90E2" />
      </Box>

      {/* Téléphone/Contact */}
      <InteractiveObject
        position={[-3.5, 0.8, -2.5]}
        color="#34495E"
        label="📱 Contact"
        size={[0.15, 0.3, 0.02]}
        onClick={() => onObjectClick({
          title: "Me Contacter",
          description: "N'hésite pas à me contacter !",
          items: [
            "📧 Email: ton.email@example.com",
            "💼 LinkedIn: /ton-profil",
            "🐙 GitHub: /ton-username",
            "🌐 Portfolio: ton-site.com"
          ]
        })}
      />

      {/* Poster au mur */}
      <InteractiveObject
        position={[-2, 3, -4.9]}
        color="#9B59B6"
        label="🎯 À propos"
        size={[1, 1.2, 0.05]}
        onClick={() => onObjectClick({
          title: "À Propos de Moi",
          description: "Étudiant passionné en informatique, spécialisé en développement web et 3D. J'aime créer des expériences utilisateur innovantes et repousser les limites du web.",
        })}
      />
    </>
  );
};

const App: React.FC = () => {
  const [modalContent, setModalContent] = useState<ModalContent | null>(null);

  return (
    <div style={{ width: '100vw', height: '100vh', background: '#1a1a2e' }}>
      <Canvas
        camera={{ position: [0, 2, 8], fov: 60 }}
        shadows
      >
        <Room onObjectClick={setModalContent} />
        <OrbitControls 
          enablePan={true}
          enableZoom={true}
          enableRotate={true}
          maxPolarAngle={Math.PI / 2}
          minDistance={3}
          maxDistance={15}
        />
      </Canvas>

      {/* Instructions */}
      <div style={{
        position: 'absolute',
        top: '20px',
        left: '20px',
        color: 'white',
        background: 'rgba(0,0,0,0.7)',
        padding: '15px',
        borderRadius: '8px',
        fontFamily: 'Arial, sans-serif',
        fontSize: '14px'
      }}>
        <h3 style={{ margin: '0 0 10px 0' }}>🎮 Navigation</h3>
        <p style={{ margin: '5px 0' }}>🖱️ Clic gauche + glisser : Rotation</p>
        <p style={{ margin: '5px 0' }}>🖱️ Clic droit + glisser : Déplacement</p>
        <p style={{ margin: '5px 0' }}>🔄 Molette : Zoom</p>
        <p style={{ margin: '5px 0' }}>👆 Clic sur objets : Voir détails</p>
      </div>

      {/* Modal */}
      {modalContent && (
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          background: 'white',
          padding: '30px',
          borderRadius: '15px',
          boxShadow: '0 10px 40px rgba(0,0,0,0.3)',
          maxWidth: '500px',
          width: '90%',
          maxHeight: '80vh',
          overflow: 'auto',
          zIndex: 1000
        }}>
          <h2 style={{ marginTop: 0, color: '#2C3E50' }}>{modalContent.title}</h2>
          <p style={{ color: '#555', lineHeight: '1.6' }}>{modalContent.description}</p>
          
          {modalContent.items && (
            <ul style={{ color: '#555', lineHeight: '1.8' }}>
              {modalContent.items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          )}

          <button
            onClick={() => setModalContent(null)}
            style={{
              marginTop: '20px',
              padding: '10px 20px',
              background: '#3498db',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              fontSize: '16px',
              fontWeight: 'bold'
            }}
          >
            Fermer
          </button>
        </div>
      )}

      {/* Overlay pour fermer modal */}
      {modalContent && (
        <div
          onClick={() => setModalContent(null)}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0,0,0,0.5)',
            zIndex: 999
          }}
        />
      )}
    </div>
  );
};

export default App;