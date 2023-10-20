import { Component, OnInit } from '@angular/core';
import { BookingService } from './booking.service';
import { LocalDataSource } from 'ng2-smart-table';
import { ItemcustomcomponentComponent } from './components/itemcustomcomponent/itemcustomcomponent.component';
import { UsercustomcomponentComponent } from './components/usercustomcomponent/usercustomcomponent.component';
import { DateInputComponent } from './components/date-input/date-input.component';

@Component({
  selector: 'ngx-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {

  constructor(private bookingService: BookingService) {
    this.bookingService.getAllBookings().subscribe(data => this.source.load(data))
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
      checkInDate: {
        title: 'CheckIn Date',
        type: 'string',
        editor: {
          type: 'custom',
          component: DateInputComponent,
        },


      },
      checkOutDate: {
        title: 'CheckOut Date',
        type: 'string',
        editor: {
          type: 'custom',
          component: DateInputComponent,
        }

      },
      userId: {
        title: 'User Id',
        type: 'string',
        editor: {
          type: 'custom',
          component: UsercustomcomponentComponent,
        }

      },
      itemId: {
        title: 'Item Id',
        type: 'string',
        editor: {
          type: 'custom',
          component: ItemcustomcomponentComponent,
        }
      },
      total: {
        title: 'Total',
        type: 'string',
      },


    },
    mode: 'inline',
  };

  source: LocalDataSource = new LocalDataSource();

  async onDeleteConfirm(event) {
    const {id, ...rest} = event.data
    if (window.confirm('Are you sure you want to delete?')) {
      await this.bookingService.deleteBooking(id).subscribe(res => console.log(res))
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }

  }

  async onCreateConfirm(event: any) {
    await this.bookingService.createBooking(event.newData).subscribe(res => console.log(res))
    // console.log(event.newData);
    event.confirm.resolve();

  }

  onEditConfirm(event: any) {
    const {id, ...rest} = event.data
    const {newId, ...updatedData} = event.newData
    // const jsonData = JSON.stringify(updatedData);
    this.bookingService.editBooking(updatedData, id).subscribe(res => console.log(res))
    event.confirm.resolve();

  }

}
