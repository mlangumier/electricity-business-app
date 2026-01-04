import { HttpClient } from "@angular/common/http";
import { afterNextRender, computed, inject, Injectable, signal } from '@angular/core';
import { Observable, tap } from "rxjs";
import { environment } from "../../../../environments/environment";
import { ILoginCredentials, IRegisterData, IUser, IUserAuth } from "../auth.models";

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly http = inject(HttpClient);
  private readonly _currentUser = signal<IUser | null>(null);
  currentUser = this._currentUser.asReadonly();
  isLoggedIn = computed(() => this.currentUser !== null);

  // On page refresh, check local info without sending a request
  constructor() {
    afterNextRender({
      write: () => {
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
          this._currentUser.set(JSON.parse(storedUser));
        }
      },
    })
  }

  checkIsEmailAvailable(email: string): Observable<boolean> {
    return this.http.post<boolean>(`${ environment.apiUrl }/email-available`, { email });
  }

  register(payload: IRegisterData): Observable<string> {
    return this.http.post<string>(`${ environment.apiUrl }/register`, payload);
  }

  //TODO: VerifyAccount

  //ERROR: HttpEntityMethodProcessor  : Using 'application/json', given [application/json, text/plain, */*] and supported [application/json, application/*+json, application/yaml]
  login(payload: ILoginCredentials) {
    return this.http.post<IUserAuth>(`${ environment.apiUrl }/auth/login`, payload, { withCredentials: true }).pipe(tap(response => {
      localStorage.setItem("token", response.accessToken);
      localStorage.setItem("user", JSON.stringify(response.user));
      this._currentUser.set(response.user);
    }))
  }

  //TODO: RefreshToken

  logout(): Observable<void> {
    return this.http.post<void>(`${ environment.apiUrl }/auth/logout`, { withCredentials: true }).pipe(tap(response => {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      this._currentUser.set(null);
    }))
  }

  //TODO: forgotPassword

  //TODO: changePassword
}
