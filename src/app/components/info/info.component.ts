import { Component, Input } from '@angular/core';
import { Info } from '../../models/info.model';

@Component({
  selector: 'app-info',
  standalone: false,

  templateUrl: './info.component.html',
  styleUrl: './info.component.scss',
})
export class InfoComponent {
  @Input() item!: Info;
}
