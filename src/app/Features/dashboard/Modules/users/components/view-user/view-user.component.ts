import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.scss']
})
export class ViewUserComponent implements OnInit {


  // declerations
  userDetails: any;
  userId: number = 0;


  constructor(

    private _UsersService: UsersService,
    private _Toastr: ToastrService,
    private _ActivatedRoute: ActivatedRoute,

  ) {

    this.userId = this._ActivatedRoute.snapshot.params['id'];

    if (this.userId) {

      this.viewUser(this.userId);

    }


  }


  ngOnInit(): void {



  }


  viewUser(id: number) {

    this._UsersService.onViewUser(id).subscribe({

      next: (resp) => {

        console.log(resp);

        this.userDetails = resp.data;

        console.log(this.userDetails);


      },
      error: (err) => {

      }
    })
  }

}