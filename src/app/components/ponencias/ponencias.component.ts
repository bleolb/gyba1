import { Component, OnInit } from '@angular/core';
import { Ponentes } from 'src/app/models/ponentes';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ponencias',
  templateUrl: './ponencias.component.html',
  styleUrls: ['./ponencias.component.scss']
})
export class PonenciasComponent implements OnInit {

  respuesta: any[];
  table_ponencias: any[];
  title: 'sweetalert'

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getData()
    this.table_ponencias = [
      {
        id: 'Id',
        nombres: 'Nombres',
        apellidos: 'Apellidos',
        email: 'Email',
        categoria: 'Categoria',
        tema: 'Tema',
        resumen: 'Resumen',
        institucion: 'Institución'
      }]
  }

  getData = () => {
    const tabla = 'ponentes';
    this.http.get<any>(environment.API_URL + `get?tabla=${tabla}`).subscribe(data => {
      this.respuesta = data.datos;
      console.log(this.respuesta);
    });
  }

  asistir(){
    Swal.fire({
      position: 'top-end',
      type: 'success',
      title: 'Asistencia Exitosa',
      showConfirmButton: false,
      timer: 1500
    })
  }


}
