import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AdDetailsService } from './services/ad-details.service';
import { IAds } from '../interfaces/landing';
import { FormGroup, FormControl } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

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
  visibleReviewDialog: boolean = false;
  allRoomComments: any[] = [];
  visibleCommentDialog: boolean = false;
  // --------------------------------------------
  constructor(

    private _AdDetailsService: AdDetailsService,
    private _ActivatedRoute: ActivatedRoute,
    private _Toastr: ToastrService,
    private _Router: Router,

  ) { }

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
    }
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


  DeleteComment(id: number) {
    this._AdDetailsService.onDeleteComment(id).subscribe({
      next: (resp) => {
        this._Toastr.success('Comment has been deleted successfully', 'success')
      },
      error: (err) => {
        this._Toastr.error(err.error.message, 'error')
      }
    })
  }

}
