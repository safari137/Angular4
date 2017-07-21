import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html'
})
export class FavoriteComponent {
  @Input() isFavorite:boolean;  
  @Output() change = new EventEmitter();

  private onClick() {
    this.isFavorite = !this.isFavorite;
    this.change.emit(this.isFavorite);
  }
}
