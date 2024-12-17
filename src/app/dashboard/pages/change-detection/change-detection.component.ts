import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-change-detection',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [CommonModule, TitleComponent],
    templateUrl: './change-detection.component.html',
    styleUrl: './change-detection.component.css'
})
export default class ChangeDetectionComponent {


  public frameworkAsSignal = signal({
    name: 'Angular',
    release: 2020
  });

  public frameworkAsProperty = {
    name: 'Angular',
    release: 2022
  }

  constructor() {
    setTimeout(() => {
        console.log('change!!');

        // this.frameworkAsProperty.name = 'React';

        this.frameworkAsSignal.update(value => {
          value.name = 'React';
          return {...value};
        })
    }, 2000);
  }

}
