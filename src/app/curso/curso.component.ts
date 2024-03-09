import { Component } from '@angular/core';

@Component({
  selector: 'app-curso',
  standalone: true,
  imports: [],
  templateUrl: './curso.component.html',
  styleUrl: './curso.component.css'
})
export class CursoComponent {
  nomePortal:string

  cursos:string [] = ['java','Ext js','angular']

  constructor(){
    this.nomePortal = 'http://loiane.training'
  }
}
