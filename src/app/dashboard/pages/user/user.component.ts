import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';


import { User } from '@interfaces/user-response.interface';
import { TitleComponent } from '@shared/title/title.component';
import { UsersService } from '@services/users.service';
import { switchMap } from 'rxjs';

@Component({
    selector: 'app-user',
    imports: [TitleComponent, CommonModule],
    templateUrl: './user.component.html',
    styleUrl: './user.component.css'
})
export default class UserComponent {

  private activatedRoute = inject(ActivatedRoute);
  private usersService = inject(UsersService);
  // public user = signal<User|undefined>(undefined);
  public user = toSignal(
    this.activatedRoute.params
      .pipe(
        switchMap(({ id }) => this.usersService.getUserById( id ))
      )
  );

  constructor() {
    this.activatedRoute.params
      .subscribe(value => {
        console.log('value',value);
      })
  }


}
