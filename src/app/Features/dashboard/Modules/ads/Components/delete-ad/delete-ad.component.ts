import { Component, inject, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { AdsService } from '../../services/ads.service';

@Component({
  selector: 'app-delete-ad',
  templateUrl: './delete-ad.component.html',
  styleUrls: ['./delete-ad.component.scss']
})
export class DeleteAdComponent implements OnInit{
  adId: any;

  constructor(
    public ref: DynamicDialogRef,
    public config: DynamicDialogConfig,
    private adsService: AdsService,  // Inject AdsService
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.adId = this.config.data;  // Get the ad ID passed from the parent component
  }

  deleteItem() {
    if (this.adId) {
      this.adsService.deleteAd(this.adId).subscribe({
        next: (res) => {
          this.toastr.success('Ad deleted successfully!');
          this.ref.close(true);  // Close the dialog and send a success flag
        },
        error: (err) => {
          this.toastr.error('Failed to delete the ad');
          this.ref.close(false);  // Close the dialog and send a failure flag
        }
      });
    }
  }
}
