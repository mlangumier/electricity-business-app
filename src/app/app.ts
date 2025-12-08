import { DATE_PIPE_DEFAULT_OPTIONS } from "@angular/common";
import { Component, LOCALE_ID, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from "./core/layout/footer/footer";
import { Header } from "./core/layout/header/header";

@Component({
  selector: 'app-root',
  imports: [ RouterOutlet, Header, Footer ],
  templateUrl: './app.html',
  styleUrl: './app.css',
  providers: [ { provide: LOCALE_ID, useValue: "fr" }, {
    provide: DATE_PIPE_DEFAULT_OPTIONS,
    useValue: { dateFormat: "dd-MM-YYYY" }
  } ]
})
export class App {
  protected readonly title = signal('Electricity Business');
}
