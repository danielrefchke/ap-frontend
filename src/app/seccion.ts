import { Elemento } from "./elemento";

export class Seccion {
    constructor(
        public id: number,
        public nombre: string,
        public className: string,
        public displayMode:string,
        public elementos:Elemento[]
        ) { }
}
