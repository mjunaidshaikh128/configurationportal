import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { DefaultEditor } from 'ng2-smart-table';
import { ItemService } from '../../../item/item.service';

@Component({
  selector: 'ngx-itemcustomcomponent',
  templateUrl: './itemcustomcomponent.component.html',
  styleUrls: ['./itemcustomcomponent.component.scss']
})
export class ItemcustomcomponentComponent extends DefaultEditor  {
  @Input() cell: any;
  items: any

  constructor(private http: HttpClient, private itemService: ItemService) {
    super()
    this.itemService.getAllItems().subscribe(res => this.items = res)
  }

  onSelectChange(event: any) {
    this.cell.newValue = event.target.value;
  }

}