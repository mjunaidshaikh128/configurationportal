import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { LocationService } from './location.service';


@Component({
  selector: 'ngx-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit {

  constructor(private locationService: LocationService) {
    this.locationService.getAllLocations().subscribe(data => this.source.load(data))
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
      address: {
        title: 'Address',
        type: 'string',
      },
      country: {
        title: 'Country',
        type: 'string',
        // width: '500px'
        // hide: true
      },
      city: {
        title: 'City',
        type: 'string',
      },


    },
    mode: 'inline',
  };

  source: LocalDataSource = new LocalDataSource();

  async onDeleteConfirm(event) {
    const {id, ...rest} = event.data
    if (window.confirm('Are you sure you want to delete?')) {
      await this.locationService.deleteLocation(id).subscribe(res => console.log(res))
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }

  }

  async onCreateConfirm(event: any) {
    await this.locationService.createLocation(event.newData).subscribe(res => console.log(res))
    // console.log(event.newData);
    event.confirm.resolve();

  }

  onEditConfirm(event: any) {
    const {id, ...rest} = event.data
    const {newId, ...updatedData} = event.newData
    // const jsonData = JSON.stringify(updatedData);
    this.locationService.editLocation(updatedData, id).subscribe(res => console.log(res))
    event.confirm.resolve();

  }


}
