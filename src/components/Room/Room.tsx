/*
  Composant Room - Charge le modele 3D de la chambre
  Utilise le modele original pour preserver tous les materiaux
*/

import { useRef, useMemo } from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'

// URL du modele 3D depuis GitHub Release via proxy CORS
const MODEL_URL = 'https://github.com/Jeremie-pires/Jeremie-pires.github.io/releases/download/v1.0.0/chambre.glb'

interface RoomModelProps {
  [key: string]: unknown;
}

export function RoomModel(props: RoomModelProps) {
  const groupRef = useRef<THREE.Group>(null)
  
  // Charger le modele depuis GitHub Releases
  const { scene } = useGLTF(MODEL_URL)
  
  // Cloner la scene pour eviter les problemes de reference
  const clonedScene = useMemo(() => {
    const clone = scene.clone(true)
    
    // Parcourir tous les objets et ajuster les matériaux
    clone.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        // Désactiver les ombres pour les performances
        child.castShadow = false
        child.receiveShadow = false
        
        // Ajuster les matériaux
        if (child.material) {
          const materials = Array.isArray(child.material) ? child.material : [child.material]
          
          materials.forEach((mat) => {
            if (mat instanceof THREE.MeshStandardMaterial) {
              const matName = mat.name.toLowerCase()
              
              if (matName.includes('metal') || matName.includes('steel') || matName.includes('aluminum')) {
                // Métaux
                mat.roughness = 0.4
                mat.metalness = 0.8
              } else if (matName.includes('wood') || matName.includes('plywood')) {
                // Bois
                mat.roughness = 0.8
                mat.metalness = 0.0
              } else if (matName.includes('glass') || matName.includes('tela')) {
                // Verre/écrans
                mat.roughness = 0.1
                mat.metalness = 0.0
              } else if (matName.includes('fabric') || matName.includes('chair') || matName.includes('pillow')) {
                // Tissus - très mat pour éviter l'aspect plastique
                mat.roughness = 1.0
                mat.metalness = 0.0
              } else {
                // Défaut - mat pour éviter l'aspect plastique
                mat.roughness = 0.85
                mat.metalness = 0.0
              }
              
              // Réduire les reflets environnement
              mat.envMapIntensity = 0.2
              mat.needsUpdate = true
            }
          })
        }
      }
    })
    
    return clone
  }, [scene])

  return (
    <group ref={groupRef} {...props} dispose={null}>
      <primitive object={clonedScene} />
    </group>
  )
}

useGLTF.preload(MODEL_URL)
