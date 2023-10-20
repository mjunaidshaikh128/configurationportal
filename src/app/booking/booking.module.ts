import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingComponent } from './booking.component';
import { RouterModule } from '@angular/router';
import { NbCardModule, NbIconModule, NbInputModule, NbTreeGridModule, NbLayoutModule } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ThemeModule } from '../@theme/theme.module';
import { TablesRoutingModule } from '../pages/tables/tables-routing.module';
import { UsercustomcomponentComponent } from './components/usercustomcomponent/usercustomcomponent.component';
import { ItemcustomcomponentComponent } from './components/itemcustomcomponent/itemcustomcomponent.component';
import { DateInputComponent } from './components/date-input/date-input.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    BookingComponent,
    UsercustomcomponentComponent,
    ItemcustomcomponentComponent,
    DateInputComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    NbCardModule,
    NbIconModule,
    NbInputModule,
    NbTreeGridModule,
    Ng2SmartTableModule,
    ThemeModule,
    RouterModule,
    TablesRoutingModule,
    NbLayoutModule
  ]
})
export class BookingModule {}
