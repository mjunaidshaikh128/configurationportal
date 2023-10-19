import { NgModule } from "@angular/core";
import { RouterModule } from '@angular/router';
import { CommonModule } from "@angular/common";
import { ItemFormComponent } from "./components/item-form/item-form.component";
import {
  NbActionsModule,
  NbButtonModule,
  NbCardModule,
  NbCheckboxModule,
  NbDatepickerModule,
  NbIconModule,
  NbInputModule,
  NbLayoutModule,
  NbRadioModule,
  NbSelectModule,
  NbTreeGridModule,
  NbUserModule,
} from "@nebular/theme";

import { FormsModule as ngFormsModule, ReactiveFormsModule } from '@angular/forms';
import { ThemeModule } from "../@theme/theme.module";
import { HttpClientModule } from "@angular/common/http";
import { ItemTableComponent } from './components/item-table/item-table.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { TablesRoutingModule } from "../pages/tables/tables-routing.module";
import { ItemEditFormComponent } from './components/item-edit-form/item-edit-form.component';

@NgModule({
  declarations: [ItemFormComponent, ItemTableComponent, ItemEditFormComponent],
  imports: [
    ThemeModule,
    CommonModule,
    NbActionsModule,
    NbButtonModule,
    NbCardModule,
    NbCheckboxModule,
    NbDatepickerModule,
    NbIconModule,
    NbInputModule,
    NbRadioModule,
    NbSelectModule,
    NbUserModule,
    ngFormsModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule,
    Ng2SmartTableModule,
    NbTreeGridModule,
    NbLayoutModule,
    TablesRoutingModule
  ],
})
export class ItemModule {}
