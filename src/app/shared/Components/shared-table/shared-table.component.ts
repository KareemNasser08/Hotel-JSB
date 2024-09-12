import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-shared-table',
  templateUrl: './shared-table.component.html',
  styleUrls: ['./shared-table.component.scss']
})
export class SharedTableComponent {

  @Input() headingArray:any[]=[];
  @Input() dataArray:any[]=[];


  // headingArray = [{headerTitle:'Room Number', headerKey:'roomNumber'}]
  // dataArray    = [{id: 455, roomNumber: 987}]
}
