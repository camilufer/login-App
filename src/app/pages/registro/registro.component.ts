import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

import { UsuarioModel } from 'src/app/models/usuario.models';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  usuario: UsuarioModel;
  recordarme: boolean = false;

  constructor( private auth: AuthService,
              private router: Router ) { }

  ngOnInit() {
    this.usuario = new UsuarioModel();

    // this.usuario.email = 'jonathan@vamonos.cl';
  }



  onSubmit( form: NgForm ) {

    if( form.invalid ) { // Si el formulario es invalido
      return;
    }


    Swal.fire({
      allowOutsideClick: false,
      icon: 'info',
      text: 'Espere por favor...'
    });

    Swal.showLoading();



    // console.log('formulario enviado');
    // console.log(this.usuario);
    // console.log(form);

    this.auth.nuevoUsuario( this.usuario ).subscribe(
      (respuesta) => {

        console.log(respuesta);
        Swal.close();

        if( this.recordarme ) {
          localStorage.setItem('email', this.usuario.email);
        }

        this.router.navigateByUrl('/home');

      }, (err) => {

        console.log(err);
        console.log(err.error.error.message);

        Swal.fire({
          allowOutsideClick: false,
          icon: 'error',
          title: 'Error al Registrarse',
          //text: 'Espere por favor...',
          text: err.error.error.message
        });

      }
    );
  }


}
