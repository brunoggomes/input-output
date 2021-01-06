/** Este projeto foi baseado em um projeto de 
Loiane Groner (https://loiane.training/curso/angular)
em seu curso de Angular.
*/
import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-insere-nota',
  templateUrl: './insere-nota.component.html',
  styleUrls: ['./insere-nota.component.css']
})
export class InsereNotaComponent implements OnInit {
  nota: number;
  @Output() notaAlterada: EventEmitter<number>;

  constructor() {
    this.nota = 50;
    this.notaAlterada = new EventEmitter();
  }

  ngOnInit() {
  }


  /** Aumenta a nota de acordo com certo o incremento 'inc' */
  aumentar(inc: number): void {
    if (inc >= 0 && this.nota + inc <= 100) {
      this.nota += inc;
      this.notaAlterada.emit(this.nota);
    }
  }

  /** Diminui a nota de acordo com o decremento 'dec' */
  diminuir(dec: number): void {
    if (dec >= 0 && this.nota - dec >= 0) {
      this.nota -= dec;
      this.notaAlterada.emit(this.nota);
    }
  }
}
