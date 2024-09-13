import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { TableColumn } from './interface/table-column';

@Component({
  selector: 'app-shared-table',
  templateUrl: './shared-table.component.html',
  styleUrls: ['./shared-table.component.scss']
})
export class SharedTableComponent {

  @Input() columnList: TableColumn[] = [];
  @Input() dataArray: any[] = [];

}
