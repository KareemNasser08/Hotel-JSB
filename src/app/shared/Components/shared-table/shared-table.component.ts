import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { TableColumn } from './interface/table-column';
import { MenuItem } from 'primeng/api';

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
// قائمة الإجراءات
  getActionsForRow(rowData: any): MenuItem[] {
    return [
      { label: 'Edit', icon: 'pi pi-pencil', command: () => this.handleAction('edit', rowData) },
      { label: 'Delete', icon: 'pi pi-trash', command: () => this.handleAction('delete', rowData) },
      { label: 'View', icon: 'pi pi-eye', command: () => this.handleAction('view', rowData) }
    ];
  }

  getNestedValue(obj: any, fieldKey: string): any {
    return fieldKey.split('.').reduce((o, i) => o[i], obj);
  }
  onMainButtonClick(rowData: any) {
    console.log('Main button clicked for:', rowData);
  }
}
