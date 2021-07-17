import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import Swal  from 'sweetalert2';
import { Router } from '@angular/router';

import { UsuarioModel } from 'src/app/models/usuario.models';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: UsuarioModel;
  recordarme: boolean = false;

  constructor( private auth: AuthService,
              private router: Router ) { }

  ngOnInit() {
    this.usuario = new UsuarioModel();

    if( localStorage.getItem('email') ) {
      this.usuario.email = localStorage.getItem('email');
      this.recordarme = true;
    }
  }


  login( form: NgForm ) {
    if( form.invalid ) {
      return;
    }


    Swal.fire({
      allowOutsideClick: false,
      icon: 'info',
      text: 'Espere por favor...'
    });

    Swal.showLoading();


    // console.log(form);
    // console.log(this.usuario);

    this.auth.login( this.usuario ).subscribe(
      (response) => {

        console.log(response);
        Swal.close();

        if( this.recordarme ) {
          localStorage.setItem('email', this.usuario.email);
        }

        this.router.navigateByUrl('/home');

      },
      (err) => {

        console.log( err.error.error.message );
        Swal.fire({
          allowOutsideClick: false,
          icon: 'error',
          title: 'Error al autenthicar',
          //text: 'Espere por favor...',
          text: err.error.error.message
        });

      }
    );

  }

}
