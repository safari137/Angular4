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

  courses = [
    {id: 1, name: 'course1'},
    {id: 2, name: 'course2'},
    {id: 3, name: 'course3'}
  ]

  onFavoriteChange(isFavorite) {
    console.log("Favorite has changed : " + isFavorite)
  }

  onAdd() {
    let nextId = this.getNextCourseId();

    this.courses.push({
      id: nextId,
      name: 'course' + nextId
    });
  }

  onRemove(id:number) {
    var index = this.courses.findIndex(function(item) {
      return item.id === id;
    });

    if (index >=0) {
      this.courses.splice(index, 1);
    }    
  }

  private getNextCourseId():number {
    if (this.courses.length === 0)
      return 1;
    
    var lastCourse = this.courses[this.courses.length -1];

    return lastCourse.id + 1;
  }

  trackCourse(index, course) {
    return course ? course.id : undefined;
  }
}
