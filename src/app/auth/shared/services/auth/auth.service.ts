import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

import { tap } from 'rxjs/operators';

import { Store } from '../../../../../store';

//user interface to keep information when user log in and log out.
export interface User {
    email: string,
    uid: string,
    authenticated: boolean
}

@Injectable()
export class AuthService {
 
    //each time the state is modified a next value is emitted, then if there is user the store is set otherwise is marked with null value
    auth$ = this.af.authState            
        .pipe(            
            tap((next: firebase.User) => {
            
                console.log(next);
                if (!next)
                {
                    this.store.set('user', null); 
                    return;    
                }

                const user: User = {
                    email: next.email,
                    uid: next.uid,
                    authenticated: true
                }
                this.store.set('user', user);            
            })
        )
        

    constructor(
        private af: AngularFireAuth,
        private store: Store
    ) {}

    loginUser(email: string, password: string): Promise<firebase.auth.UserCredential> {
        
        return this.af.auth
            .signInWithEmailAndPassword(email, password);
    }

    registerUser(email: string, password: string): Promise<firebase.auth.UserCredential> {
        return this.af.auth.createUserWithEmailAndPassword(email, password);
    }

    logoutUser() {
        this.af.auth.signOut();
    }

}