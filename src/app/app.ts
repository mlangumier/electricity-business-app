import { DATE_PIPE_DEFAULT_OPTIONS } from "@angular/common";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { Component, LOCALE_ID, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { apiInterceptor } from "./features/auth/interceptors/api-interceptor";
import { Footer } from "./layout/footer/footer";
import { Header } from "./layout/header/header";

@Component({
  selector: 'app-root',
  imports: [ RouterOutlet, Header, Footer, Header ],
  templateUrl: './app.html',
  styles: ``,
  providers: [ { provide: LOCALE_ID, useValue: "fr" }, { //TODO: adapt after adding i18n
    provide: DATE_PIPE_DEFAULT_OPTIONS,
    useValue: { dateFormat: "dd-MM-YYYY" }
  } ]
})
export class App {
  protected readonly title = signal('Electricity Business');
}
