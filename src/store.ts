import { Observable, BehaviorSubject } from 'rxjs';
import { distinctUntilChanged, pluck } from 'rxjs/operators';

import { User } from './app/auth/shared/services/auth/auth.service';

export interface State {
    user: User
}

const state_variable: State = {
    user: undefined
};

export class Store {
    private behaviorSubject = new BehaviorSubject<State>(state_variable);
    private store = this.behaviorSubject
        .asObservable()
        .pipe(distinctUntilChanged());

    get value() {
        return this.behaviorSubject.value;
      }
    
      select<T>(name: string): Observable<T> {
        return this.store
            .pipe(pluck(name));
      }
    
      set(name: string, state: any) {
        this.behaviorSubject.next({ ...this.value, [name]: state });
      }
}