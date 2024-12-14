import { Component } from '@angular/core';
import { FilmService } from '../../services/films.service';

@Component({
  selector: 'app-search',
  standalone: false,

  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {
  public searchString: string = '';

  constructor(private _filmsService: FilmService) {

  }

  public upDateValue(event: Event) {
    const target = event.target as HTMLInputElement;
    this.searchString = target.value;
  }
  public upDateSearch(event: Event) {
    this._filmsService.searchString = this.searchString;
  }
}
