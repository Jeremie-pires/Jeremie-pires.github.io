import type { ModalContent } from '../../types/content.types';
import packagewebIcon from '../../assets/images/bookshelf/packageweb.png';
import reactIcon from '../../assets/images/bookshelf/react.png';
import javaIcon from '../../assets/images/bookshelf/java.png';
import pythonIcon from '../../assets/images/bookshelf/python.png';
import databaseIcon from '../../assets/images/bookshelf/db.png';

export const bookshelfContent: ModalContent = {
  title: "Mes Compétences techniques",
  description: "Voici les technos que je maitrise et avec lesquelles j'ai travaillé :",
  items: [
    {
      text: "HTML 5, CSS 3, JavaScript ES6+, TypeScript",
      icon: packagewebIcon
    },
    {
      text: "Frameworks : Node.js, Angular, React",
      icon: reactIcon
    },
    {
      text: "Java Springboot et Swing",
      icon: javaIcon
    },
    
    {
      text: "Python",
      icon: pythonIcon
    },
    {
      text: "Bases de données : MySQL, MongoDB, Firebase",
      icon: databaseIcon
    }
  ]
};