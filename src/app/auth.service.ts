import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root',
})

export class AuthService {
  api = '';

  token;

  user:User

  processStatus:boolean

  constructor() {
    this.processStatus=true;
  }

  login(user:string,password:string){
    // login hasta que este disponible el servicio backend
    this.user = null;
    this.processStatus=false;    
    if (user == "admin" && password == '12345678') {
      this.user = new User(1,user,"token");
      localStorage.setItem('user', JSON.stringify(this.user));
      this.processStatus=true;
    }
  }

  logout(){
    localStorage.removeItem('user');
    this.user = null;
  }

  get status():boolean{
    return this.processStatus;
  }

  isLogged():boolean{
    if (this.user) {
      return true;
    }else{
      let usr = localStorage.getItem('user');
      if (usr) {
        let t = JSON.parse(usr);
        this.user = new User(t.id,t.nombre,t.token);
        
        return true;
      }
    }
    return false;
  }

}
