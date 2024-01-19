import { Pipe, PipeTransform } from "@angular/core";
import { Pokemon } from "../models/pokemon";

@Pipe({
  name: "pokeType",
  standalone: true,
})
export class PokeTypePipe implements PipeTransform {
  transform(pokemons: Pokemon[], pokeType: string): Pokemon[] {
    if (pokeType === "all") {
      return pokemons;
    }

    // let filtered: Pokemon[] = [];
    // for (const poke of pokemons) {
    //   if (poke.types) {
    //     for (const type of poke.types) {
    //       if (type.name === pokeType) {
    //         filtered.push(poke);
    //         break;
    //       }
    //     }
    //   }
    // }

    let filtered = pokemons.filter(
      (pokemon) => { return pokemon.types?.some( (type) => {return type.name.toLowerCase() === pokeType.toLowerCase()}) }
    );
    return filtered;
  }
}
