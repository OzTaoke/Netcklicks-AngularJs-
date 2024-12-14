import { Component } from '@angular/core';
import { Film } from '../../models/film.model';
import { FILMS } from '../../constans/films.constans';
import { FilmService } from '../../services/films.service';

@Component({
  selector: 'app-catalog-page',
  standalone: false,

  templateUrl: './catalog-page.component.html',
  styleUrl: './catalog-page.component.scss'
})
export class CatalogPageComponent {

  constructor(
    private _filmsService: FilmService

  ) { }

  public get films(): Film[] {
    return this._filmsService.filteredFilms;
  }
}
