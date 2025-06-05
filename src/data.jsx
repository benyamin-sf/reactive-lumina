import { nanoid } from 'nanoid';
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaPinterest,
  FaTumblr,
} from 'react-icons/fa6';

// IMAGES AND ASSETS
import memberImg1 from './assets/member-1.webp';
import memberImg2 from './assets/member-2.webp';
import memberImg3 from './assets/member-3.webp';

export const headerNavigationLinks = [
  {
    id: nanoid(),
    title: 'home',
    url: '/',
  },
  {
    id: nanoid(),
    title: 'about',
    url: '/about',
  },
  {
    id: nanoid(),
    title: 'contact',
    url: '/contact',
  },
];

export const footerSocialLinks = [
  {
    id: nanoid(),
    title: 'Facebook',
    url: 'http://facebook.com/lumina-artworks',
    icon: <FaFacebook />,
  },
  {
    id: nanoid(),
    title: 'Twitter',
    url: 'https://x.com/lumina-arts',
    icon: <FaTwitter />,
  },
  {
    id: nanoid(),
    title: 'Instagram',
    url: 'http://instagram.com/lumina-artworks',
    icon: <FaInstagram />,
  },
  {
    id: nanoid(),
    title: 'Pinterest',
    url: 'http://pinterest.com/lumina-artworks',
    icon: <FaPinterest />,
  },
  {
    id: nanoid(),
    title: 'Tumblr',
    url: 'http://tumblr.com/lumina-arts2',
    icon: <FaTumblr />,
  },
];

export const services = [
  {
    id: nanoid(),
    title: 'Photography',
    description:
      'Pastry liquorice cotton candy carrot cake soufflé sweet roll cookie muffin marzipan. Chupa chups chocolate bar toffee cupcake chocolate cake pastry Marshmallow ice cream.',
  },
  {
    id: nanoid(),
    title: 'Web Design',
    description:
      'Bear claw gummi bears shortbread tart apple pie sweet. Chocolate cake chocolate bear claw cake muffin chupa chups liquorice chupa chups. Donut brownie gummi bears chocolate croissant.',
  },
  {
    id: nanoid(),
    title: 'Graphical Design',
    description:
      'Pudding donut marzipan bonbon cake muffin cheesecake. Carrot cake gummies jelly beans lemon drops sugar plum. Chocolate oat cake soufflé shortbread jelly beans fruitcake.',
  },
];

export const teamMembers = [
  {
    id: nanoid(),
    image: memberImg1,
    name: 'Kevin Samson',
    job: 'Founder',
  },
  {
    id: nanoid(),
    image: memberImg2,
    name: 'Rebecca Williams',
    job: 'Designer',
  },
  {
    id: nanoid(),
    image: memberImg3,
    name: 'Ben Markson',
    job: 'Developer/Designer',
  },
];
