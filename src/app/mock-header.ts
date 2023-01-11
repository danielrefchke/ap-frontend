import { Header } from "./header";

const lorem =
  '<div>usuario: admin pass: 123465678</div><div>algunas imagenes para probar:</div><div>fondo: zachary-pearson-NrecNaxqvDs-unsplash.jpg</div><div>personal: espejo.jpg</div><div>Features:</div><ul><li>edicion, borrado y drag&amp;drop para los elementos de una seccion, <br></li><li>se puede editar los links de redes sociales (y borrar)<br></li><li>se pueden editar las secciones (y borrar)<br></li><li>Editor de texto enriquecido <br></li></ul>';


export const HEADERDATA = new Header(
    1,
    "Daniel Refchke",
    "full stack developer jr",
    lorem,
    "erica-magugliani-olSh3t6DGSk-unsplash.jpg",     //imgback
    "20180612_005858.jpg",    //imgpersona
    "Erica Magugliani desde Unsplash.com"     //imgcred
    )