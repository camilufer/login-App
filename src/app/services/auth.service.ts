import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsuarioModel } from '../models/usuario.models';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url = 'https://identitytoolkit.googleapis.com/v1';
  private apikey = 'AIzaSyDK6F5_PdiJriRxj_SBgOzTmstAkXTDFVA';

  userToken: string = null;
  usrMail: string = null;

  // Crear nuevo usuario
  // https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]

  // Login
  // https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY]


  constructor( private http: HttpClient) {
    this.leerToken();
  }


  logout() {
    localStorage.removeItem('token');
  }

  login( usuario: UsuarioModel ) {

    const authData = {
      // ...usuario, // Asi añade el objeto usuario completo con sus atributos
      email: usuario.email,
      password: usuario.password,
      returnSecureToken: true
    };

    return this.http.post(
      this.url + '/accounts:signInWithPassword?key=' + this.apikey,
      authData
    ).pipe(
      map( response => {
        const usrMail = authData.email;
          console.log(usrMail,'entro en el map login');
          this.guardarToken(response['idToken']);     
          return response;   
      })
      
    );
  }

  nuevoUsuario( usuario: UsuarioModel ) {
    const authData = {
      // ...usuario, // Asi añade el objeto usuario completo con sus atributos
      email: usuario.email,
      password: usuario.password,
      returnSecureToken: true
    };

    return this.http.post(
      this.url + '/accounts:signUp?key=' + this.apikey,
      authData
    ).pipe(
      map( response => {
          console.log('entro en el map nuevoUsuario');
          this.guardarToken(response['idToken']);
          return response;
      })
    );
  }



  private guardarToken( idToken: string ) {
    this.userToken = idToken;
    localStorage.setItem('token', idToken);

    let hoy = new Date();
    hoy.setSeconds( 3600 ); // O tambien se puede obtener desde Firebase

    localStorage.setItem('expira', hoy.getTime().toString() );

  }




  leerToken() {
    if( localStorage.getItem('token')) {
      this.userToken = localStorage.getItem('token');
    } else {
      this.userToken = '';
    }

    return this.userToken;
  }


  estaAutenticado(): boolean {
    if( this.userToken.length > 2 ) {
        return false;
    }

    const expira = Number(localStorage.getItem('expira'));
    const expiraDate = new Date();
    expiraDate.setTime(expira);
    

    if(expiraDate > new Date()) {
      return true;
    } else {
      return false;
    }
  }

}
