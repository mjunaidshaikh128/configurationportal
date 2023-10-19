import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryComponent } from './category.component';
import { NbCardModule, NbIconModule, NbInputModule, NbLayoutModule, NbTreeGridModule } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { RouterModule } from '@angular/router';

import { ThemeModule } from "../../app/@theme/theme.module";
import { TablesRoutingModule, routedComponents } from '../pages/tables/tables-routing.module';
import { FsIconComponent } from '../pages/tables/tree-grid/tree-grid.component';
import { ImageRenderComponentComponent } from './image-render-component/image-render-component.component';
import { FileuploadComponent } from '../fileupload/fileupload.component';



@NgModule({
  declarations: [
    CategoryComponent,
    ImageRenderComponentComponent,
    FileuploadComponent
    //  FsIconComponent,
    //  ...routedComponents,
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
  ],
  exports: [
    FileuploadComponent
  ]
})
export class CategoryModule { }
