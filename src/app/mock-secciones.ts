import { Seccion } from "./seccion";
import { Elemento } from "./elemento";

const elem:Elemento[]=[
    new Elemento(1,"Elemento1","element-languaje","algo","lorem ipsun y va mas"),
    new Elemento(2,"Elemento2","element-languaje","algo","lorem ipsun y va mas"),
    new Elemento(3,"Elemento3","element-languaje","algo","lorem ipsun y va mas"),
    new Elemento(4,"Elemento3","element-languaje","algo","lorem ipsun y va mas")

];

export const SECCIONES:Seccion[] = [
    new Seccion(1,"Experiencia","experiencia","element-list",elem),
    new Seccion(2,"Formacion","formacion","element-list",elem),
    new Seccion(3,"Skills","skills","element-list-table",elem)
  ]
