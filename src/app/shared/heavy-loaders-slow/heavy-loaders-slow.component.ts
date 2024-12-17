import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-heavy-loaders-slow',
    imports: [CommonModule],
    templateUrl: './heavy-loaders-slow.component.html',
    styleUrl: './heavy-loaders-slow.component.css'
})
export class HeavyLoadersSlowComponent {

  @Input({required: true})
  cssClass: string = '';

  constructor() {
    const date = Date.now();

    while (Date.now() - date < 3000) { }

    console.log('Ready!!');
  }

}
