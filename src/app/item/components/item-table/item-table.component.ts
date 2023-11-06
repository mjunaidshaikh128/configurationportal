import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';

import { SmartTableData } from '../../../@core/data/smart-table';
import { ItemService } from '../../item.service';
import { Router } from '@angular/router';
import { NbToastrService } from '@nebular/theme';


@Component({
  selector: 'ngx-item-table',
  templateUrl: './item-table.component.html',
  styleUrls: ['./item-table.component.scss']
})
export class ItemTableComponent implements OnInit {

  constructor(private itemService: ItemService, private router: Router, private toastrService: NbToastrService) {
    this.itemService.getAllItems().subscribe(data => this.source.load(data))

   }

  ngOnInit(): void {
  }

  settings = {
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      confirmCreate: true
      
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      confirmSave: true
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    pager: {
      display: true,
      perPage: 5
    },
    columns: {
      name: {
        title: 'Name',
        type: 'string',
      },
      // description: {
      //   title: 'Description',
      //   type: 'string',
      // },
      model: {
        title: 'Model',
        type: 'string',
      },
      year: {
        title: 'Year',
        type: 'string',
      },
      manufacturer: {
        title: 'Manufacturer',
        type: 'string',
      },
    },
    mode: 'external',
  };

  source: LocalDataSource = new LocalDataSource();

  

  onCreate() {
    // this.showToast()
    // setTimeout(() => this.router.navigateByUrl("/pages/forms/itemform"),3000)
    this.router.navigateByUrl("/pages/forms/itemform")

  }

  onEdit(event: any) {
    // console.log(event.data);
    this.router.navigateByUrl(`/pages/forms/edititemform/${event.data.id}`)

  }

  showToast() {
    this.toastrService.success(
      'This is a success toast message',
      'Success',
      { duration: 3000 }
    );
  }
}
