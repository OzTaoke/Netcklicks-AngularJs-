import { Component, Input } from '@angular/core';

interface TytleInterface {

}

@Component({
  selector: 'app-card',
  standalone: false,

  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() title: string = 'Марсианин 1';
}
