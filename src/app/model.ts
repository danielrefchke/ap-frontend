export class Model {
  prev:{}
  attr:{}
  idAttr:string

  constructor(attr:{},idAttr:string){
    this.attr = attr;
    this.prev = {}
    this.idAttr = idAttr;
  }

  toJson() {}

  revert() {
    for (const entry in this.prev) {
        
    }
  }

  confirm() {
    this.prev = {}
  }

  setValue(field:string,value:any){
    //console.log(field);
    this.change(field);
    this.attr[field]= value;
    //console.log(this.attr[field]);
    
  }

  getValue(field:string){
      
    return this.attr[field];
  }

  change(field:string){
    
    this.prev[field]=this.attr[field];
    //console.log(this.prev[field]);
    
  }
}
