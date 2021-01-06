/** Este projeto foi baseado em um projeto de
Loiane Groner (https://loiane.training/curso/angular)
em seu curso de Angular.
*/
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-exibe-nota',
  templateUrl: './exibe-nota.component.html',
  styleUrls: ['./exibe-nota.component.css']
})
export class ExibeNotaComponent implements OnInit {
  @Input() nota: number;

  constructor() { }

  ngOnInit() {
  }
}
