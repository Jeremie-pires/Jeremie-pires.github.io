import React, { useState, useRef } from 'react';
import { Box, Text } from '@react-three/drei';
import * as THREE from 'three';
import type { InteractiveElementProps } from '../../../types/content.types';
import { computerContent } from './computerContent';

const ComputerModel: React.FC<InteractiveElementProps> = ({ position, onContentDisplay }) => {
  const [hovered, setHovered] = useState(false);
  const meshRef = useRef<THREE.Mesh>(null);

  const handleClick = () => {
    onContentDisplay(computerContent);
  };

  return (
    <group position={position}>
      {/* Écran */}
      <Box
        ref={meshRef}
        args={[0.8, 0.6, 0.05]}
        position={[0, 0, 0]}
        onClick={handleClick}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <meshStandardMaterial 
          color={hovered ? '#3498db' : '#2C3E50'}
          emissive={hovered ? '#1a5490' : '#000000'}
        />
      </Box>

      {/* Label */}
      <Text
        position={[0, 0.5, 0]}
        fontSize={0.2}
        color="white"
        anchorX="center"
        anchorY="middle"
      >
        💻 Projets
      </Text>
    </group>
  );
};

export default ComputerModel;