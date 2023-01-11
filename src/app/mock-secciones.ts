import { Seccion } from './seccion';
import { Elemento } from './elemento';

const lorem = ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste ad similique ratione dolores aliquid fugit asperiores possimus. Atque mollitia repudiandae velit. Amet aliquam error suscipit maxime ea similique voluptatum minima.Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste ad similique ratione dolores aliquid fugit asperiores possimus. Atque mollitia repudiandae velit. Amet aliquam error suscipit maxime ea similique voluptatum minima. `;

const elem1: Elemento[] = [
  new Elemento(1, 'Elemento1', 'algo', lorem, 'element-languaje', 'Es'),
  new Elemento(2, 'Elemento2', 'algo', lorem, 'element-languaje', 'Es'),
  new Elemento(
    3,
    'Elemento3',
    'algo',
    lorem,
    'element-img',
    'crypto-trading.png'
  ),
  new Elemento(4, 'Elemento4', 'algo', lorem, 'element-grap', '45'),
];

const elem2: Elemento[] = [
  new Elemento(5, 'Elemento1', 'algo', lorem, 'element-languaje', 'Es'),
  new Elemento(6, 'Elemento2', 'algo', lorem, 'element-languaje', 'Es'),
  new Elemento(
    7,
    'Elemento3',
    'algo',
    lorem,
    'element-img',
    'crypto-trading.png'
  ),
  new Elemento(8, 'Elemento4', 'algo', lorem, 'element-grap', '45'),
];

const elem3: Elemento[] = [
  new Elemento(9, 'Elemento1', 'algo', lorem, 'element-grap', '80'),
  new Elemento(10, 'Elemento2', 'algo', lorem, 'element-grap', '60'),
  new Elemento(11, 'Elemento3', 'algo', lorem, 'element-grap', '50'),
  new Elemento(12, 'Elemento4', 'algo', lorem, 'element-grap', '45'),
];

const elem4: Elemento[] = [
  new Elemento(13, 'Elemento1', 'algo', lorem, 'element-languaje', 'Es'),
  new Elemento(14, 'Elemento2', 'algo', lorem, 'element-languaje', 'Es'),
];

const elem5: Elemento[] = [
  new Elemento(17, 'Elemento1', 'algo', lorem, 'element-languaje', 'Es'),
  new Elemento(18, 'Elemento2', 'algo', lorem, 'element-languaje', 'Es'),
  new Elemento(
    19,
    'Elemento3',
    'algo',
    lorem,
    'element-img',
    'crypto-trading.png'
  ),
  new Elemento(20, 'Elemento4', 'algo', lorem, 'element-grap', '45'),
];

export const SECCIONES: Seccion[] = [
  new Seccion(1, 'Experiencia', 'experiencia', 'element-list', elem1),
  new Seccion(2, 'Formacion', 'formacion', 'element-list', elem2),
  new Seccion(3, 'Skills', 'skills', 'element-list-table', elem3),
  new Seccion(2, 'Idiomas', 'idiomas', 'element-list-table', elem4),
  new Seccion(2, 'Proyectos', 'proyectos', 'element-list', elem5),
];
