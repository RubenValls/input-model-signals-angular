import { Component, signal } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { HijoComponent } from './components/child.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HijoComponent],
  template: `
    <button (click)="reset()">Reset</button>
    <hr/>
    <app-hijo [(data)]="mensajeModificadoHijo" [boton]="mensajeBotonSinModificar()" (dataChange)="handlerDataChange()"></app-hijo>
  `,
})
export class App {
  // Signal creada en el padre
  mensajeModificadoHijo = signal('Hola desde el padre');
  mensajeBotonSinModificar = signal('Modifica el padre desde el hijo');

  public handlerDataChange(): void {
    this.mensajeBotonSinModificar.set(
      'Ya has modificado el valor desde el hijo'
    );
  }

  public reset(): void {
    this.mensajeBotonSinModificar.set('Modifica el padre desde el hijo');
    this.mensajeModificadoHijo.set('Hola desde el padre');
  }
}

bootstrapApplication(App);
