import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-material',
  imports: [
    MatIconModule,
    MatButtonModule,
    MatCardModule
  ],
  templateUrl: './material.component.html',
  styleUrl: './material.component.css'
})
export default class MaterialComponent {

}
