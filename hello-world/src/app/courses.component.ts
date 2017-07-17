import { CoursesService } from './courses.service';
import { Component } from '@angular/core';

@Component({
    selector: 'courses',
    template: `
        <h2>{{ title }}</h2>
        <ul>
            <li *ngFor="let course of courses">{{ course }}</li>
        </ul>
        <button class="btn btn-primary"(click)="onSave($event)"  [style.backgroundColor]="isActive ? 'black' : 'red'" [class.active]="isActive">Save</button>
        <input #email (keyup.enter)="onKeyUp_EnterKey(email.value)" />
        <input [(ngModel)]="email2" (keyup.enter)="onKeyUp_EnterKey_OOP()" />
        <div>
            {{ text | summary:10 }}
        </div>
        `
})
export class CoursesComponent {
    private title: string = "List of courses";
    private courses: string[];
    private isActive: boolean = true;
    private email2: string = "test@test.com";
    private text: string = "Hello and hello and hello1";

    constructor(service: CoursesService) {
        this.courses = service.getCourses();
    }

    onSave($event) {
        console.log($event);
        $event.stopPropogation(); // stop bubbling
        this.isActive = !this.isActive;
    }

    onKeyUp_EnterKey(email) {
        console.log(email);
    }

    onKeyUp_EnterKey_OOP() {
        console.log(this.email2);
    }
}