import { Component } from '@angular/core';
import { BookingService } from '../../services/booking.service';
import { ToastrService } from 'ngx-toastr';
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-delete-facility',
  templateUrl: './delete-facility.component.html',
  styleUrls: ['./delete-facility.component.scss']
})
export class DeleteFacilityComponent {
  facilityId: any;

  constructor(
    public ref: DynamicDialogRef,
    public config: DynamicDialogConfig,
    private facilityService: BookingService,  
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.facilityId = this.config.data;  
  }

  deleteItem() {
    if (this.facilityId) {
      this.facilityService.deleteFacility(this.facilityId).subscribe({
        next: (res) => {
          this.toastr.success('Facility deleted successfully!');
          this.ref.close(true);
        },
        error: (err) => {
          this.toastr.error('Failed to delete the facility');
          this.ref.close(false);
        }
      });
    }
  }
}
