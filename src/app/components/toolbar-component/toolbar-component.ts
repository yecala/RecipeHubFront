import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-toolbar-component',
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, RouterLink],
  templateUrl: './toolbar-component.html',
  styleUrl: './toolbar-component.scss'
})
export class ToolbarComponent {

}
