import { Injectable } from '@angular/core';

@Injectable()
export class CampeonesService {

  private campeonesFavoritos: string[];

  constructor() { 
    this.campeonesFavoritos = [];
  }

  obtenerCampeonesFavoritos() {
    return this.campeonesFavoritos;
  }

  anyadirCampeonFavorito( campeon: string ) {
    this.campeonesFavoritos.push(campeon);
  }

  obtenerUltimoCampeonFavorito() {
    return this.campeonesFavoritos.length > 0 ? this.campeonesFavoritos[this.campeonesFavoritos.length - 1] : '';
  }


}