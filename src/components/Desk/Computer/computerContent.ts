import type { ModalContent } from '../../../types/content.types';
import githubIcon from '../../../assets/images/desk/computer/github.png';
import instaIcon from '../../../assets/images/desk/computer/insta.png';
import ethreumIcon from '../../../assets/images/desk/computer/ethereum.png';
import portfolioIcon from '../../../assets/images/desk/computer/portfolio.png';

export const computerContent: ModalContent = {
  title: "Mes Projets",
  description: "Voici des projets que j'ai pu réaliser durant mes études ou sur mon temps personnel",
  items: [
    {
      text: "Projet BOT Instagram (Python) : \nDéveloppement d'un bot d'envoi de message automatique sur Instagram pour du démarchage/publicité",
      icon: instaIcon
    },
    {
      text: "Projet d'application décentralisée sur Ethereum (React, Solidity) : \nCréation d'une DApp pour gérer une supply chain avec des contrats intelligents",
      icon: ethreumIcon
    },
    {
      text: "Portfolio personnel (React, TypeScript) : \nDéveloppement de mon portfolio en ligne pour présenter mes compétences et mes projets",
      icon: portfolioIcon
    }
  ],
  links: [
    {
      label: "Voir mes projets sur GitHub",
      url: "https://github.com/jeremie-pires",
      icon: githubIcon
    }
  ]
};