import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent { 

  constructor(private router:Router){}

/**
 * Método para enviar una búsqueda de héroes.
 * @param event Evento del formulario que invoca el método.
 * @param termino El término de búsqueda ingresado por el usuario.
 */
enviarDato(event: Event, termino: string) {
  event.preventDefault();
  // Verifica si el término de búsqueda es demasiado corto.
  if (termino.length < 0) {
    console.error('El término de búsqueda debe tener al menos 3 caracteres.');
    return;
  }
  // Registra el término de búsqueda para análisis futuro.
  console.log(`Registrando término de búsqueda: ${termino}`);
  // Navega a la ruta '/heroes', pasando el término de búsqueda como parámetro de consulta.
  this.router.navigate(['/heroes'], { queryParams: { DATO: termino } });
}


}
