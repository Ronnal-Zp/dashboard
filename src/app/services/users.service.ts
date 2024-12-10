import { computed, inject, Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User, UserResponse, UsersResponse } from '@interfaces/user-response.interface';
import { delay, map } from 'rxjs';

interface State {
  users: User[];
  loading: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  #state = signal<State>({
    users: [],
    loading: true
  });

  public users = computed(() => this.#state().users);
  public loading = computed(() => this.#state().loading);

  #httpClient = inject(HttpClient);

  constructor() {
    console.log('constructor');
    this.#httpClient.get<UsersResponse>('https://reqres.in/api/users')
      .pipe( delay(1500) )
      .subscribe(response => {
        this.#state.set({
          users: response.data,
          // users: [],
          loading: false
        })
      })
  }

  getUserById(id: string) {
    return this.#httpClient.get<UserResponse>(`https://reqres.in/api/users/${id}`)
      .pipe(
        delay(1500),
        map(resp => resp.data)
      )
  }

}
