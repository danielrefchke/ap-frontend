import { Model } from './model';

export class Collection<T> extends Array<T> {
  model : any;

  constructor(T,url:string="") {
    super();
    this.model = T;
  }
  
  public parse(elems:any[]): void {
    let self = this;
    elems.forEach((elem) => {
      const modelInstance = new self.model(elem);
      modelInstance.loaded();
      this.push(modelInstance);
    });
  }

}
