import { Component } from '@angular/core';
import { Heroe, HeroesService } from '../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css'
})
export class HeroesComponent {

  heroes:Heroe[]=[];
  DATO: any;
    
  constructor(private _HeroesService:HeroesService, private router:Router, private route:ActivatedRoute  ){
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.DATO = params['DATO'] || '';
      this.VisualizarHeroes();
    });
  }

  private VisualizarHeroes() {
    this.heroes = this.DATO === "" ?  // Si 'DATO está vacío, se llama a 'getHeroes()'.
    this._HeroesService.getHeroes() : 
    this._HeroesService.buscarHeroes(this.DATO);
  }
  

  

  verHeroe(idx:number){
    this.router.navigate(['/heroe',idx])
    console.log(idx)
  }
  
}
