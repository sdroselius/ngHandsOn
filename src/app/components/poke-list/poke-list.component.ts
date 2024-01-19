import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { Pokemon } from '../../models/pokemon';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { PokeTypePipe } from '../../pipes/poke-type.pipe';

@Component({
  selector: 'app-poke-list',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    PokeTypePipe
  ],
  templateUrl: './poke-list.component.html',
  styleUrl: './poke-list.component.css'
})
export class PokeListComponent implements OnInit {

  pokemons: Pokemon[] = [];
  selected: Pokemon | null = null;
  newPokemon: Pokemon = new Pokemon();
  editPokemon: Pokemon | null = null;
  selectedType: string = 'all';
  types = [
    'all',
    'grass',
    'poison',
    'fire',
    'flying',
    'water',
    'bug',
    'normal',
    'electric',
    'ground',
    'fairy',
    'fighting',
    'psychic',
    'rock',
    'steel',
    'ice',
    'ghost',
    'dragon'
  ];
  constructor(
    private pokemonService: PokemonService
  ) {}

  ngOnInit(): void {
    this.loadPokemon();
  }

  loadPokemon() {
    this.pokemonService.index().subscribe({
      next: (pokeList) => {
        this.pokemons = pokeList;
      },
      error: (oops) => {
        console.error('PokeListComponent.loadPokemon: error getting pokedex');
        console.error(oops);
      }
  });
  }

  setEditPokemon(poke: Pokemon) {
    this.editPokemon = Object.assign({}, poke);
  }

  addPokemon(form: NgForm) {
    const pokemon: Pokemon = form.value;
    console.log('PokeListComponent.addPokemon():');
    console.log(pokemon);
    if (!form.valid) {
      console.error('PokeListComponent.addPokemon(): invalid form');
      console.error(form);
      return;
    }
    this.pokemonService.create(pokemon).subscribe({
      next: (data:Pokemon) => {
        this.loadPokemon();
        this.selected = null;
      },
      error: (err:any) => {
        console.error('PokeListComponent.addPokemon(): Error adding pokemon');
        console.error(pokemon);
        console.error(err);
      }
  });
  }

  updatePokemon(pokemon: Pokemon) {
    console.log('Updating pokemon:');
    console.log(pokemon);
    let updatingPoke = new Pokemon();
    updatingPoke.pokeId = pokemon.pokeId;
    updatingPoke.name = pokemon.name;
    updatingPoke.height = pokemon.height;
    updatingPoke.weight = pokemon.weight;
    updatingPoke.img = pokemon.img;
    updatingPoke.description = pokemon.description;
    delete updatingPoke.types;
    this.pokemonService.update(updatingPoke).subscribe({
      next: (good: Pokemon) => {
        const poke: Pokemon = good;
        this.selected = poke;
        this.editPokemon = null;
      },
      error: (bad: any) => {
        console.error('PokeListComponent.updatePokemon(): Error updating pokemon');
        console.error(bad);
      }
  });
  }

  deletePokemon(id: number) {
    this.pokemonService.destroy(id).subscribe({
      next: (good: void)  => {
        console.log('Pokemon deleted: ' + id);
        this.loadPokemon();
        this.selected = null;
      },
      error: (bad:any) => {
        console.error('PokeListComponent.destroy(): Error deleting pokemon ID ' + id);
        console.error(bad);
      }
  } );
  }
}
