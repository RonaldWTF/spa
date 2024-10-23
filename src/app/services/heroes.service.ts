import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  constructor() {
    console.log("Service listo para usar..!")

  }

  private heroes:Heroe[]=[
    {
      nombre: "Rubius",
      bio: "Rubius es uno de los creadores más influyentes de habla hispana, conocido por su humor, reacciones y contenido de videojuegos. Ha logrado crear una comunidad enorme gracias a su personalidad y contenido variado.",
      img: "assets/img/rubius.jpg",
      aparicion: "2006-12-19",
      plataforma: "YouTube"
    },
    {
      nombre: "AuronPlay",
      bio: "AuronPlay es famoso por su estilo sarcástico y ácido. Inicialmente conocido por sus videos de críticas y bromas telefónicas, ha evolucionado hacia el streaming, convirtiéndose en una de las figuras más importantes en el mundo del gaming en español.",
      img: "assets/img/auronplay.jpg",
      aparicion: "2008-02-23",
      plataforma: "YouTube"
    },
    {
      nombre: "Vegetta777",
      bio: "Vegetta777 es un youtuber especializado en videojuegos, sobre todo en Minecraft, GTA V y otros títulos populares. Sus narrativas creativas en el juego lo han llevado a convertirse en uno de los creadores más reconocidos del mundo hispanohablante.",
      img: "assets/img/vegetta777.jpg",
      aparicion: "2008-03-02",
      plataforma: "YouTube"
    },
    {
      nombre: "JuegaGerman",
      bio: "JuegaGerman es conocido por su contenido humorístico y sus videos de videojuegos. Ha sido uno de los creadores más populares de habla hispana durante años, acumulando millones de seguidores gracias a su carisma y estilo único.",
      img: "assets/img/juegageman.jpg",
      aparicion: "2013-06-02",
      plataforma: "YouTube"
    },
    {
      nombre: "Missasinfonia",
      bio: "Missasinfonia es un creador de contenido conocido por sus ediciones rápidas y humor absurdo. Su estilo único y sus montajes lo han hecho destacar en la plataforma, atrayendo a un público masivo.",
      img: "assets/img/missasinfonia.jpg",
      aparicion: "2014-04-17",
      plataforma: "YouTube"
    },
    {
      nombre: "Ninja",
      bio: "Ninja es un streamer y youtuber internacionalmente reconocido por su contenido de videojuegos, especialmente por sus partidas de Fortnite. Ha sido pionero en el mundo del streaming, logrando contratos exclusivos con diferentes plataformas.",
      img: "assets/img/ninja.jpg",
      aparicion: "2011-12-15",
      plataforma: "YouTube/Twitch"
    }
  ];

  buscarHeroes(termino: string): Heroe[] {
    termino = termino.trim().toLowerCase();
    if (!termino) {
      return [];    // Si no hay dato después de limpiar, retorna un arreglo vacío.
    }
    const resultados: Heroe[] = [];    // Crear un arreglo vacío para almacenar los héroes que coincidan con el dato.
    for (let heroe of this.heroes) {    // Iterar sobre el arreglo de héroes.
      if (heroe.nombre.toLowerCase().includes(termino)) {     // Comprobar si el nombre del héroe incluye el término de búsqueda.
        resultados.push(heroe);        // Si coincide, añadir al arreglo de resultados.
      }
    }
    // Retornar el arreglo de resultados.
    return resultados;
  }

  getHeroes(){
    return this.heroes;
  }

  getHeroe(idx: number){
    return this.heroes[idx];
  }
}

export interface Heroe{
  nombre:String;
  bio:String;
  img:String;
  aparicion:String;
  plataforma:String;
}