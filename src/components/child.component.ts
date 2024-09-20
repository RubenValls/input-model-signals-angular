import { Component, input, model } from '@angular/core';

// Componente hijo
@Component({
  selector: 'app-hijo',
  template: `
  <button (click)="modificarPadre()">{{boton()}}</button>
  <p>Mensaje desde el padre: {{data()}}</p>
  `,
  standalone: true,
})
export class HijoComponent {
  // Recibimos una signal como input desde el padre
  data = model.required<string>();
  boton = input.required<string>();

  modificarPadre() {
    // Actualizamos la signal recibida desde el padre
    this.data.set('Mensaje actualizado desde el hijo');
  }
}
