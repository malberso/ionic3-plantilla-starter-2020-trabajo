// campeon-detalle.ts

import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';

@Component({
  selector: 'campeon-detalle',
  templateUrl: 'campeon-detalle.html',
  styleUrls: [ './campeon-detalle.scss' ]
})
export class CampeonDetallePage {

  nombreCampeon: string;

  constructor(public navCtrl: NavController, navParams: NavParams, public alertCtrl: AlertController) {
    this.nombreCampeon = navParams.get('nombre_campeon');
  }

  mostrarAlertBasico(){
    const alert = this.alertCtrl.create({
      title: 'Hola',
      subTitle: `Estás en la página del campeón ${this.nombreCampeon}`,
      buttons: ['OK']
    });
    alert.present();
  }

  mostrarAlertConInput() {
    const prompt = this.alertCtrl.create({
        title: 'Cambiar nombre',
        message: "Introduce un nuevo nombre para el campeón:",
        inputs: [
            {
                name: 'nombre',
                placeholder: 'Nombre'
            },
        ],
        buttons: [
            {
                text: 'Cancelar',
                handler: (data) => {
                    console.log('Click en cancelar');
                }
            },
            {
                text: 'Cambiar',
                handler: (data) => {
                    this.nombreCampeon = data.nombre;
                }
            }
        ]
    });
    prompt.present();
}


}

