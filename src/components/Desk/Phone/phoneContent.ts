import type { ModalContent } from '../../../types/content.types';
import linkedinIcon from '../../../assets/images/desk/phone/linkedin.png';
import githubIcon from '../../../assets/images/desk/phone/github.png';
import mailIcon from '../../../assets/images/desk/phone/mail.png';
import phoneIcon from '../../../assets/images/desk/phone/phone.png';

export const phoneContent: ModalContent = {
  title: "Me Contacter",
  description: "Voici mes informations pour me contacter, pour une opportunité professionnelle ou un projet.",
  items: [
    {
      icon: mailIcon,
      text: "Email : piresjeremie.mailpro@gmail.com"
    },
    {
      icon: phoneIcon,
      text: "Mon téléphone : +33 7 66 33 82 72"
    }
  ],
  links: [
    {
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/jeremiepires/",
      icon: linkedinIcon
    },
    {
      label: "GitHub",
      url: "https://github.com/Jeremie-pires",
      icon: githubIcon
    }
  ]
};