import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { AdsService } from '../../services/ads.service';
import { ToastrService } from 'ngx-toastr';
import { DeleteComponent } from 'src/app/shared/Components/delete/delete.component';



@Component({
  selector: 'app-ads-list',
  templateUrl: './ads-list.component.html',
  styleUrls: ['./ads-list.component.scss']
})
export class AdsListComponent implements OnInit {

  // declerations
  deleteDialogRef: any
  deleteAdsSubscription!: Subscription;



  constructor(
    public dialog: MatDialog,
    private _AdsService: AdsService,
    private _Toastr: ToastrService,

  ) { }


  ngOnInit(): void {

  }



  // delete ads 
  onDeleteAction(id: number): void {
    this.deleteDialogRef = this.dialog.open(DeleteComponent, {
      data: { id, name: 'Ads' },
      width: '45%',
    });

    this.deleteDialogRef.afterClosed().subscribe((result: { id: number }) => {
      this.deleteAds(result.id);
    });
  }

  deleteAds(id: number): void {
    this.deleteAdsSubscription = this._AdsService
      .deleteAd(id)
      .subscribe({
        next: () => {
          this._Toastr.success('Ads deleted successfully');

          // update adsList func

        },
        error: () => {
          this._Toastr.error('Something went wrong', 'Error');
        },
      });
  }




}
