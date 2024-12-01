import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

type Grade = 'A'|'B'|'F';


@Component({
  selector: 'app-control-flow',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './control-flow.component.html',
  styleUrl: './control-flow.component.css'
})
export default class ControlFlowComponent {

  public showContent        = signal(false);
  public grade              = signal<Grade>('A');
  public frameworks         = signal(['Angular', 'React', 'Laravel', 'Symfony', 'Vue']);

  public allGrades: Grade[] = ['A','B','F'];
  public classBadges = 'flex justify-center rounded-md px-2 py-2 text-xs font-medium ring-1 ring-inset';


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
