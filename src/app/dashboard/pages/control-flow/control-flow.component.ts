import { Component, signal } from '@angular/core';

type Grade = 'A'|'B'|'F';


@Component({
  selector: 'app-control-flow',
  standalone: true,
  imports: [],
  templateUrl: './control-flow.component.html',
  styleUrl: './control-flow.component.css'
})
export default class ControlFlowComponent {

  public showContent        = signal(false);
  public grade              = signal<Grade>('A');
  public allGrades: Grade[] = ['A','B','F'];


  public toggleContent() {
    this.showContent.update(value => !value);
  }

  public generateGrade() {
    const max = 3;
    const randomIndex = Math.floor(Math.random() * max);

    const newGrade = this.allGrades[ randomIndex ];

    this.grade.set( newGrade );
  }

}
