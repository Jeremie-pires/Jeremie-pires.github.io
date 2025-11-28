import type { ModalContent } from '../../../types/content.types';
import downloadIcon from '../../../assets/images/desk/cv/download.png';

export const cvContent: ModalContent = {
  title: "Qui je suis ?",
  description: "Voici un petit résumé pour mieux me connaître :",
  items: [
    {
      text: "Je suis Jérémie PIRES, un étudiant en 3ème année à Sup de Vinci Nantes, et je souhaite travailler dans le développement \nDès mon plus jeune âge je suis me intéressé par comprendre le fonctionnnement d'un site ou d'une appli, j'ai toujours cherché à comprendre comment toutes les choses sur mon ordinateur pouvaient fonctionner c'est donc pour ça que je me suis orienté vers le domaine de l'informatique et aujourd'hui plus spécifiquement du développement \nJ'ai donc fait un bac STI2D avec une option informatique pour découvrir les bases, puis je suis aller chez Sup de Vinci pour acquérir de nouvelles compétences techniques et professionnelles",
    }
  ],
  links: [
    {
      label: "Télécharger mon CV (PDF)",
      url: "/files/CV Alternance Jérémie PIRES.pdf",
      icon: downloadIcon,
      download: "CV-Jeremie-PIRES.pdf"
    }
  ]
};