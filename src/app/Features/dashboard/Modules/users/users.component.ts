import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {

  constructor(private _Router: Router,){
    
  }

  gorooms(){
    this._Router.navigate(['/dashboard/Rooms/add-edit-room']);
  }
  
}
