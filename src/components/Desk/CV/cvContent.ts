import type { ModalContent } from '../../../types/content.types';

export const cvContent: ModalContent = {
  title: "📄 Mon CV",
  description: "Téléchargez mon CV pour en savoir plus sur mon parcours",
  items: [
    "👨‍💻 Développeur Full Stack passionné",
    "🎓 Formation en informatique",
    "💼 Expériences en développement web et mobile",
    "🚀 Toujours à la recherche de nouveaux défis"
  ],
  links: [
    {
      label: "Télécharger mon CV (PDF)",
      url: "/cv.pdf",
      icon: "📥"
    }
  ]
};
