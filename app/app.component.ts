
import { Component } from '@angular/core';
export class Horse {
  id: number;
  name: string;
}
@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <h2>{{horse.name}} details!</h2>
    <div><label>id: </label>{{horse.id}}</div>
    <div>
      <label>name: </label>
      <input [(ngModel)]="horse.name" placeholder="name">
    </div>
    `
})
export class AppComponent {
  title = 'Tour of Horses';
  horse: Horse = {
    id: 1,
    name: 'Windstorm'
  };
}

