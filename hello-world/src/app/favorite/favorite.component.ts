import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html'
})
export class FavoriteComponent {
  private isSelected:boolean = false;

  private onClick() {
    this.isSelected = !this.isSelected;
  }
}
