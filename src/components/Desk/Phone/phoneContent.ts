import type { ModalContent } from '../../../types/content.types';

export const phoneContent: ModalContent = {
  title: "📱 Me Contacter",
  description: "N'hésite pas à me contacter pour discuter de projets ou d'opportunités !",
  items: [
    "📧 Email : ton.email@example.com",
    "📍 Localisation : Nantes, France"
  ],
  links: [
    {
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/jeremiepires/",
      icon: "💼"
    },
    {
      label: "GitHub",
      url: "https://github.com/Jeremie-pires",
      icon: "🐙"
    },
    {
      label: "Portfolio",
      url: "https://jeremie-pires.github.io/",
      icon: "🌐"
    }
  ]
};