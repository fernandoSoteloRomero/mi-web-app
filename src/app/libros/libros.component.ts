import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-libros',
  templateUrl: 'libros.component.html'
})

export class LibrosComponent {
  constructor() { }
  libros = ['matematica', 'fisica', 'anatomia', 'educacion'];

  eliminarLibro(libro:string){
    console.log(libro);
    this.libros = this.libros.filter(lb => lb !==libro)



  }
}