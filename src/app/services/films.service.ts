import { Injectable } from '@angular/core';
import { Film } from '../models/film.model';
import { FILMS } from '../constans/films.constans';

@Injectable({
  providedIn: 'root'
})
export class FilmService {

  private _films: Film[] = FILMS;

  private _searchString: string = '';

  constructor() { }

  public get filteredFilms(): Film[] {
    return this._films.filter((item) => item.title.includes(this._searchString))
  }

  public get getFullFilms(): Film[] {
    return this._films;
  }

  public get searchString(): string {
    return this._searchString;
  }

  public set searchString(value: string) {
    this._searchString = value;
  }
}
