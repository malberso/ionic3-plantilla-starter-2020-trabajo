import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CampeonesService } from '../../app/campeones.service';
import { CampeonDetallePage } from '../campeon-detalle/campeon-detalle';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  styleUrls: ['./home.scss']
})

export class HomePage {
  miNombre: string = 'Akali';
  mostrarDescripcion: boolean = false;
  listaCampeones = ['Akali', 'Draven', 'Ezreal', 'Anivia', 'Teemo'];
  campeon: any = {
   nombre: 'Akali',
    descripcion: 'Akali es un campeón...'
  }

  constructor(public navCtrl: NavController, public campeonesSvc:CampeonesService) {

  }

  cambiarNombre(nombre:String){
    this.campeon.nombre = nombre;
  }

  irAPaginaCampeonDetalle () {
    this.navCtrl.push( CampeonDetallePage )
  }

  irAPaginaCampeonDetalleConParametroNombre( nombreCampeon: string ) {
    this.navCtrl.push( CampeonDetallePage, { 'nombre_campeon': nombreCampeon } );
  }

  hacerPaginaCameponDetalleRaiz() {
    this.navCtrl.setRoot( CampeonDetallePage );
  }

}










