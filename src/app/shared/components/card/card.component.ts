import { PokemonService } from './../../../core/service/pokemon.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Products } from 'src/app/core/model/product';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit{
  productData: Products[] = [];
  imagemPath = '../../../../assets/img/images/';

  constructor(private pokemonService: PokemonService){
  }

  ngOnInit(): void {
    this.getData()
  }

  getData() {
    this.pokemonService.getData().subscribe((data: Products[]) => {
      this.productData = data;
    })
  }
}
