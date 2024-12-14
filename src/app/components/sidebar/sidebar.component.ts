import { Component } from '@angular/core';
import { Info } from '../../models/info.model';
import { INFO } from '../../constans/info.constans';

@Component({
  selector: 'app-sidebar',
  standalone: false,

  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  public info: Info[] = INFO;
}
