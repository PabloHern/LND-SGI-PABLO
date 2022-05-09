import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';

const items = [
  {
    src: '/img/niñoscanariosvivaelgofio.jpg',
    altText: 'Slide 1',
  },
  {
    src: '/img/perrocanario.jpg',
    altText: 'Slide 2',
  },
  {
    src: '/img/señora.jpg',
    altText: 'Slide 3',
  }
];

const Example = () => <UncontrolledCarousel items={items} />;

export default Example;