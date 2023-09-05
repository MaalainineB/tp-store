import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <div fxLayout="column" fxLayoutAlign="center center">
      <span class="mat-display-2">Welcome to the STORE!</span> <br>
      <button mat-raised-button color="primary" routerLink="/manager">
        Login as a Manager</button>
    </div>
  `,
  styles: [`
    div[fxLayout] {margin-top: 32px; text-align: center;}
  `
  ],
})
export class HomeComponent {

}
