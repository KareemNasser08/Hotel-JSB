import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AdDetailsService } from './services/ad-details.service';
import { IAds } from '../interfaces/landing';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';
import { ErrorStateMatcher } from '@angular/material/core';
import { AuthService } from '../../auth/Services/auth.service';

@Component({
  selector: 'app-ad-details',
  templateUrl: './ad-details.component.html',
  styleUrls: ['./ad-details.component.scss']
})
export class AdDetailsComponent implements OnInit {

  // decleration

  adId: number | any = 0;
  adDetails: IAds | any;
  rangeDates: Date[] | any;
  value3: number = 0;
  sDate: any = '';
  eDate: any = '';
  roomPrice: any = '';
  roomid: number | any = '';
  allRoomReviews: any[] = [];
  someReviews: any[] = [];
  visibleReviewDialog: boolean = false;
  allRoomComments: any[] = [];
  SomeComments: any[] = [];
  visibleCommentDialog: boolean = false;
  translate: any;
  visible: boolean = false;




  // --------------------------------------------



  translateToEng() {
    this.translate.use('en');

  }
  translateToAr() {
    this.translate.use('ar');
  }





  // ----------------------------------------------


  constructor(

    private _AdDetailsService: AdDetailsService,
    private _ActivatedRoute: ActivatedRoute,
    private _Toastr: ToastrService,
    private _Router: Router,
    private _AuthService: AuthService,
    public _translate: TranslateService
  ) { _translate.setDefaultLang('en'); }

  ngOnInit(): void {


    this.adId = this._ActivatedRoute.snapshot.params['id'];
    this.getAdDetails();

  }

  // ----------------------------------
  // ad details

  getAdDetails() {

    let AdIdNum = this.adId;

    this._AdDetailsService.getAdDetails(AdIdNum).subscribe({
      next: (resp) => {

        this.adDetails = resp.data.ads;
        this.roomPrice = resp.data.ads.room.price;
        this.roomid = resp.data.ads.room._id;
        this.getSomeComments(this.roomid);
        this.getSomeReviews(this.roomid);
      },
      error: (err) => {


      }

    })

  }


  // getFacility() {
  //   this.adDetails?.room?.facilities.map((c: any) => {
  //     this._AdDetailsService.getAdFacility(c).subscribe({
  //       next: (resp) => {
  //         console.log(resp);

  //         this.facilityDetails = resp
  //       },
  //       error: (err) => {

  //       }
  //     })
  //   })
  // }






  // -----------------------------------------------
  // booking

  BookingForm: FormGroup = new FormGroup({
    date: new FormControl(null),

  })



  Booking(_BookingForm: FormGroup) {
    const rangeDates = this.BookingForm.get('date')?.value;

    if (rangeDates && rangeDates.length === 2) {
      const sDate = rangeDates[0];
      const eDate = rangeDates[1];

      const bookingData = {
        startDate: sDate,
        endDate: eDate,
        room: this.adId,
        totalPrice: this.roomPrice
      };

      if (localStorage.getItem('eToken')) {
        this._AdDetailsService.onContinueBooking(bookingData).subscribe({
          next: (resp) => {


            this._Toastr.success('you have booked a room successfully', 'success')

          },
          error: (err) => {

            this._Toastr.error(err.error.message, 'error')

          },
          complete: () => {
            this._Router.navigate(['/landing/booking'])
          }
        });
      } else {
        this.showDialog()
      }
    }
  }

  showDialog() {
    this.visible = true;
  }



  // ------------------------------

  matcher = new ErrorStateMatcher();
  // signInForm
  signInForm: FormGroup = new FormGroup({
    email: new FormControl(
      null,
      [Validators.required,
      Validators.email]),
    password: new FormControl(
      null,
      [Validators.required,
      Validators.pattern(/^[a-zA-Z0-9@_]{6,20}$/)])
  });

  // getters
  get email() {
    return this.signInForm.controls['email'];
  }
  get password() {
    return this.signInForm.controls['password'];
  }

  // signIn Func
  signIn(signInForm: FormGroup) {

    this._AuthService.onSignIn(signInForm.value).subscribe({

      next: (resp: any) => {

        let Btoken = resp.data.token;
        let eToken = Btoken.replace(/^Bearer\s+/, '');
        localStorage.setItem('eToken', eToken);
        this._AuthService.onGetUserData();
        this._Toastr.success('you have successfully logged in!', 'success');
        this.visible = false;
        window.location.reload()
      },
      error: (err: any) => {
        this._Toastr.error(err.message, 'error');
      },
      complete: () => {
        this._Router.navigate(['/landing']);

      }
    })
  }





  // ----------------------------
  // review 


  ratingForm: FormGroup = new FormGroup({
    ratings: new FormControl(null),
    reviews: new FormControl<string | null>(null),

  });



  rating(_ratingForm: FormGroup) {

    const ratingData = this.ratingForm.get('ratings')?.value;
    const reviewData = this.ratingForm.get('reviews')?.value

    const rateForm = {
      rating: ratingData,
      review: reviewData,
      roomId: this.roomid,
    }

    this._AdDetailsService.onRating(rateForm).subscribe({
      next: (resp) => {

        this._Toastr.success('your review has been added successfully', 'success');
        this.ratingForm.reset()
      },
      error: (err) => {

        this._Toastr.error(err.error.message, 'error')

      }
    })
  }



  getAllReviews(id: number) {
    this.visibleReviewDialog = true;
    this._AdDetailsService.ongetAllReviews(id).subscribe({
      next: (resp) => {

        console.log(resp);
        this.allRoomReviews = resp.data.roomReviews

        console.log(this.allRoomReviews);

      },
      error: (err) => {

        console.log(err);

      }
    })

  }

  getSomeReviews(id: number) {

    this._AdDetailsService.ongetAllReviews(id).subscribe({
      next: (resp) => {

        this.someReviews = resp.data.roomReviews


      },
      error: (err) => {

        console.log(err);

      }
    })

  }

  // --------------------------------------
  // comment


  commentForm: FormGroup = new FormGroup({

    mycomment: new FormControl(null)

  })


  commenting(_commentForm: FormGroup) {

    const commentie = this.commentForm.get('mycomment')?.value;


    const commentData = {

      comment: commentie,
      roomId: this.roomid,

    }


    this._AdDetailsService.onCommenting(commentData).subscribe({
      next: (resp) => {

        this._Toastr.success('your comment has been added successfully', 'success')
        this.commentForm.reset()
      },
      error: (err) => {
        console.log(err);
        this._Toastr.error(err.error.message, 'error');

      }
    })

  }


  getAllComments(id: number) {
    this.visibleCommentDialog = true;
    this._AdDetailsService.ongetAllComments(id).subscribe({
      next: (resp) => {

        console.log(resp);
        this.allRoomComments = resp.data.roomComments


        console.log(this.allRoomComments);

      },
      error: (err) => {

        console.log(err);

      }
    })

  }

  getSomeComments(id: number) {

    this._AdDetailsService.ongetAllComments(id).subscribe({
      next: (resp) => {

        this.SomeComments = resp.data.roomComments



      },
      error: (err) => {

        console.log(err);

      }
    })

  }


  DeleteComment(id: number) {
    this._AdDetailsService.onDeleteComment(id).subscribe({
      next: (resp) => {
        this._Toastr.success('Comment has been deleted successfully', 'success');
        this.getAdDetails();
        this.getAllComments(this.roomid)
      },
      error: (err) => {
        this._Toastr.error(err.error.message, 'error')
      }
    })
  }

}
