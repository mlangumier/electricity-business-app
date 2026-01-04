import { Component, inject } from '@angular/core';
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
    this.authService.checkIsEmailAvailable("matt@test.com").subscribe(res => console.log(`Email available: ${ res }`))
  }

  testRegister() {
    this.authService.register({
      email: "matt@test.com",
      firstName: "Matt",
      lastName: "Lang",
      //ERROR: have the backend return an error for 'dateOfBirth' field validations
      dateOfBirth: new Date("1991-01-01"),
      password: "password"
    }).subscribe(res => {
      console.log("--- Test Register:");
      console.log(res);
    });
  }

  testLogin() {
    this.authService.login({
      email: "matt@test.com",
      password: "password"
    }).subscribe(res => {
      console.log("--- Test Login:");
      console.log(res);
    });
  }

  testLogout() {
    this.authService.logout().subscribe(res => {
      console.log("--- Test Logout:");
      console.log(res);
    });
  }
}
