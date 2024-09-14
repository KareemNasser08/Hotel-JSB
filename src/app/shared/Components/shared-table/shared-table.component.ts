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

  @Output() actionClick = new EventEmitter<{
    action: string;
    item: any;
  }>();
item: any;

  handleAction(action: string, item: any) {
    this.actionClick.emit({ action, item });
  }


  getNestedValue(obj: any, fieldKey: string): any {
    return fieldKey.split('.').reduce((o, i) => o[i], obj);
  }

}
