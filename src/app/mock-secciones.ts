import { Seccion } from "./seccion";
import { Elemento } from "./elemento";

const lorem = ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste ad similique ratione dolores aliquid fugit asperiores possimus. Atque mollitia repudiandae velit. Amet aliquam error suscipit maxime ea similique voluptatum minima.Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste ad similique ratione dolores aliquid fugit asperiores possimus. Atque mollitia repudiandae velit. Amet aliquam error suscipit maxime ea similique voluptatum minima. `


const elem: Elemento[] = [
  new Elemento(1, 'Elemento1', 'algo', lorem, 'element-languaje', 'Es'),
  new Elemento(2, 'Elemento2', 'algo', lorem, 'element-languaje', 'Es'),
  new Elemento(3, 'Elemento3', 'algo', lorem, 'element-img', 'crypto-trading.png'),
  new Elemento(4, 'Elemento3', 'algo', lorem, 'element-grap', '45'),
];

export const SECCIONES:Seccion[] = [
    new Seccion(1,"Experiencia","experiencia","element-list",elem),
    new Seccion(2,"Formacion","formacion","element-list",elem),
    new Seccion(3,"Skills","skills","element-list-table",elem),
    new Seccion(2,"Idiomas","idiomas","element-list-table",elem),
    new Seccion(2,"Proyectos","proyectos","element-list",elem)
  ]
