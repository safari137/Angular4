import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  post = {
    title: "Title",
    isFavorite: true
  };

  onFavoriteChange(isFavorite) {
    console.log("Favorite has changed : " + isFavorite)
  }
}
