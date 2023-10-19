import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TypeComponent } from './type.component';
import { CustomCategoryInputComponent } from './components/custom-category-input/custom-category-input.component';
import { RouterModule } from '@angular/router';
import { NbCardModule, NbIconModule, NbInputModule, NbTreeGridModule, NbLayoutModule, NbSelectModule } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ThemeModule } from '../@theme/theme.module';
import { TablesRoutingModule } from '../pages/tables/tables-routing.module';



@NgModule({
  declarations: [
    TypeComponent,
    CustomCategoryInputComponent
  ],
  imports: [
    CommonModule,
    NbSelectModule,
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
export class TypeModule { }
