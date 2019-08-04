import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { Asistentes } from 'src/app/models/asistentes';
import Swal from 'sweetalert2'


@Component({
  selector: 'app-form-asistente',
  templateUrl: './form-asistente.component.html',
  styleUrls: ['./form-asistente.component.scss']
})
export class FormAsistenteComponent implements OnInit {

  data: any
  tabla: string
  asistente: Asistentes
  title: 'sweetalert'

  constructor(private http: HttpClient, private router:Router) { }

  ngOnInit() {

    this.asistente = {
      nombres: '',
      apellidos: '',
      email: ''
    };

    this.tabla = 'participantes';
  }

  postData = () => {
    this.data = {
      tabla: this.tabla,
      datos: this.asistente
    };
    this.http.post(environment.API_URL + 'post', this.data).subscribe(resultado => {
      console.log(resultado);
      Swal.fire({
        position: 'top-end',
        type: 'success',
        title: 'Registro Exitoso',
        showConfirmButton: false,
        timer: 1500
      })
      this.router.navigate(['ponencias'])
    })
  }
}
