import { HttpErrorResponse } from "@angular/common/http";
import { Component, inject } from '@angular/core';
import { IUserAuth } from "../../auth.models";
import { AuthService } from "../../services/auth-service";

@Component({
  selector: 'app-register',
  imports: [],
  templateUrl: './register.html',
  styles: ``
})
export class Register {
  private readonly authService = inject(AuthService);

  submitForm() {
    this.authService.checkIsEmailAvailable("henry@test.com").subscribe({
      next: () => {
        // Remove input & form errors if present
        console.log("Email available");
      },
      error: (err: HttpErrorResponse) => {
        // Add error to input & form validation
        console.log(err);
      }
    })
  }

  testRegister() {
    this.authService.register({
      email: "henry@test.com",
      firstName: "Henry",
      lastName: "Kobyla",
      //ERROR: have the backend return an error for 'dateOfBirth' field validations if -18yo
      dateOfBirth: new Date("1991-01-01"),
      password: "henry@password"
    }).subscribe({
      next: () => console.log("Registered!"),
      error: (err: HttpErrorResponse) => {
        console.log(err);
      }
    });
  }

  testLogin() {
    this.authService.login({
      email: "henry@test.com",
      password: "henry@password"
    }).subscribe({
      next: (res: IUserAuth) => {
        console.log(res);
      },
      error: (err: HttpErrorResponse) => {
        console.log(err);
      }
    });
  }

  testLogout() {
    this.authService.logout().subscribe({
      next: () => {
        console.log("Logged out");
      },
      error: (err: HttpErrorResponse) => {
        console.log(err);
      }
    });
  }
}
