import { Component, EventEmitter, Input,Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CustomDirectiveDirective } from '../../directives/custom-directive.directive';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [FormsModule,CustomDirectiveDirective],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent {

  name='John Doe';
  age=25;
  btnDisabled=false;
@Output() childData=new EventEmitter<string>();
@Input({alias:"parent_data"}) parent_data:string="";


  btnClick( e:Event){
    console.log('Button clicked');
    const value=(e.target as HTMLInputElement).value;
    console.log('Button value:',value);
    
  }

  users=[ 
    {name:"Shivam", age:25},
    {name:"Ankur", age:60},
    {name:"Shraddha", age:24},
    {name:"Ap", age:50}
  ];

  sendDataToParent(){
    console.log('Data sent to parent:',this.name);
    this.childData.emit(this.name);
  }


}
