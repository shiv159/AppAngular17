import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserProfileComponent } from './comps/user-profile/user-profile.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,UserProfileComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  parent_data = 'Parent data dynamically passed to child component';
  child_data = '';
  getChildData(data: string) {
    console.log('Data received from child:', data);
    this.child_data = data; 
  }
}
