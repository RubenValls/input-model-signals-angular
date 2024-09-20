import { Component, effect, signal } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { HijoComponent } from './components/child.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HijoComponent],
  template: `
    <button (click)="reset()">Reset</button>
    <hr/>
    <app-hijo [(data)]="mensajeModificadoHijo" [boton]="mensajeBotonSinModificar()"></app-hijo>
  `,
})
export class App {
  // Signal creada en el padre
  mensajeModificadoHijo = signal('Hola desde el padre');
  mensajeBotonSinModificar = signal('Modifica el padre desde el hijo');

  constructor() {
    // Efecto que escucha cambios en la signal del hijo
    effect(() => {
      console.log('Mensaje del hijo:', this.mensajeModificadoHijo());
    });
  }

  public reset(): void {
    this.mensajeModificadoHijo.set('Hola desde el padre');
  }
}

bootstrapApplication(App);
