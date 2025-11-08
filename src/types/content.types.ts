// Types pour le contenu des éléments interactifs
export interface ModalContent {
  title: string;
  description: string;
  items?: string[];
  links?: Link[];
}

export interface Link {
  label: string;
  url: string;
  icon?: string;
}

// Props pour les modèles 3D interactifs
export interface InteractiveElementProps {
  position: [number, number, number];
  onContentDisplay: (content: ModalContent) => void;
}

// Props pour les composants de base
export interface BaseElementProps {
  position?: [number, number, number];
  rotation?: [number, number, number];
  scale?: [number, number, number];
}