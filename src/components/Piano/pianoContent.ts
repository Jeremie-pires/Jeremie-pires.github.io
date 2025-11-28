import type { ModalContent } from '../../types/content.types';
import pianoIcon from '../../assets/images/piano/piano.png';
import motherboardIcon from '../../assets/images/piano/motherboard.png';
import twitchIcon from '../../assets/images/piano/twitch.png';
import videogameIcon from '../../assets/images/piano/videogame.png';

export const pianoContent: ModalContent = {
  title: "Mes Passions",
  description: "Voici mes passions au quotidien :",
  items: [
    {
      text: "La musique, j'écoute beaucoup de musique et je fais de la production assistée par ordinateur sur Fl Studio",
      icon: pianoIcon
    },
    {
      text: "L'informatique évidemment, je m'intéresse beaucoup au hardware",
      icon: motherboardIcon
    },
    {
      text: "Je joue beaucoyp aux jeux vidéo, surtout les jeux solos et histoire",
      icon: videogameIcon
    },
    {
      text: "Je fais des lives sur Twitch pour patager ma passion des jeux",
      icon: twitchIcon
    }
  ]
};