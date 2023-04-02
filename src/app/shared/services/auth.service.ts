import { Injectable, NgZone } from '@angular/core';
import * as auth from 'firebase/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    public afs: AngularFirestore,
    public afAuth: AngularFireAuth,
    public router: Router,
    public ngZone: NgZone
  ) {
    this.afAuth.authState.subscribe((user) => {
      if (user) {
        console.log('User state: ', user)
      } else {
        console.log('Needs to remove from localstorage');
      }
    })
  }

  // needs to build the login with email and password????

  get isLoggedUSer(): any {
    // get the user form localstorage and serve
    return {}
  }

  async googleAuth() {
    return await this.authLogin(new auth.GoogleAuthProvider());
  }


  async facebookAuth() {
    return await this.authLogin(new auth.FacebookAuthProvider());
  }

  async loginWithTwitter() {
    return this.authLogin(new auth.TwitterAuthProvider());
  }

  private async authLogin(provider: any) {
    return await this.afAuth
      .signInWithPopup(provider);
  }

}
