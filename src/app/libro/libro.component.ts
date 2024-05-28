import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-libro',
  templateUrl: 'libro.component.html',
  styleUrl: 'libro.component.css'
})

export class LibroComponent {
  @Input() tituloLibro: string = "";

  @Output() libroClicked = new EventEmitter();




  onClicked(){
    this.libroClicked.emit();
  }

}