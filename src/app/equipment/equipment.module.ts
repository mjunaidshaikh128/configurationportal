import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EquipmentComponent } from './equipment.component';
import { RouterModule } from '@angular/router';
import { NbCardModule, NbIconModule, NbInputModule, NbTreeGridModule, NbLayoutModule } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ThemeModule } from '../@theme/theme.module';
import { TablesRoutingModule } from '../pages/tables/tables-routing.module';



@NgModule({
  declarations: [
    EquipmentComponent
  ],
  imports: [
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
export class EquipmentModule { }
