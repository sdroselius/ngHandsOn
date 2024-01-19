import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { Pokemon } from '../models/pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  url = 'http://api.skilldistillery.com:8080/poke/data/poke';

  constructor(
    private http: HttpClient
  ) { }

  index(): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>(this.url + '?sorted=true').pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError(
          () => new Error('PokemonService.index(): error retrieving pokemon: ' + err)
        );
      })
    );
  }

  create(pokemon: Pokemon): Observable<Pokemon> {
    delete pokemon.types;
    return this.http.post<Pokemon>(this.url, pokemon).pipe(
      catchError((err: any) => {
        console.error(err);
        return throwError(
          () => new Error('PokemonService.create(): Error creating pokemon: ' + err)
        );
      })
    );
  }

  update(pokemon: Pokemon): Observable<Pokemon> {
    // THIS FAILS WITH 500 INTERNAL SERVER ERROR
    console.log('PokemonService.update()');
    console.log(pokemon);
    const httpOptions = {
      headers: {
        'Content-type': 'application/json',
      },
    };
    return this.http
      .put<Pokemon>(`${this.url}/${pokemon.pokeId}`, pokemon, httpOptions)
      .pipe(
        catchError((err: any) => {
          console.error(err);
          return throwError(
            () => new Error('PokemonService.update(): Error updating pokemon: ' + err)
          );
        })
      );
  }

  destroy(id: number) {
    return this.http.delete<void>(`${this.url}/${id}`)
      .pipe(
        catchError((err: any) => {
          console.log(err);
          return throwError(
            () => new Error('PokemonService.create(): Error deleting pokemon: ' + err)
          );
        })
      );
  }
}
