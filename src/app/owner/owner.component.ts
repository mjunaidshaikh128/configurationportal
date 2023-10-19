import { Component, OnInit } from '@angular/core';
import { OwnerService } from './owner.service';
import { LocalDataSource } from 'ng2-smart-table';
import { SmartTableData } from '../@core/data/smart-table';

@Component({
  selector: 'ngx-owner',
  templateUrl: './owner.component.html',
  styleUrls: ['./owner.component.scss']
})
export class OwnerComponent implements OnInit {

  constructor(private ownerService: OwnerService) {
    this.ownerService.getAllOwners().subscribe(data => this.source.load(data))
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
      columns: {
        name: {
          title: 'Name',
          type: 'string',
        },
        about: {
          title: 'About',
          type: 'string',
          // width: '500px'
          // hide: true
        },

        verifiedProfile: {
          title: 'Verified Profile',
          type: 'boolean',
          editor: {
            type: 'checkbox'
          }
        },
        rating: {
          title: 'Rating',
          type: 'string',
        },
        languagesSpoken: {
          title: 'LanguagesSpoken',
          type: 'string',
        },
        responseTime: {
          title: 'ResponseTime',
          type: 'string',
        },
        responseRate: {
          title: 'ResponseRate',
          type: 'string',
        },
        contactEmail: {
          title: 'ContactEmail',
          type: 'string',
        },
        

      },
      mode: 'inline',
    };

    source: LocalDataSource = new LocalDataSource();

    async onDeleteConfirm(event) {
      const {id, ...rest} = event.data
      if (window.confirm('Are you sure you want to delete?')) {
        await this.ownerService.deleteOwner(id).subscribe(res => console.log(res))
        event.confirm.resolve();
      } else {
        event.confirm.reject();
      }

    }

    async onCreateConfirm(event: any) {
      await this.ownerService.createOwner(event.newData).subscribe(res => console.log(res))
      // console.log(event.newData);
      event.confirm.resolve();

    }

    onEditConfirm(event: any) {
      const {id, ...rest} = event.data
      const {newId, ...updatedData} = event.newData
      // const jsonData = JSON.stringify(updatedData);
      this.ownerService.editOwner(updatedData, id).subscribe(res => console.log(res))
      event.confirm.resolve();

    }

}
