import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TablesComponent } from './tables.component';
import { SmartTableComponent } from './smart-table/smart-table.component';
import { TreeGridComponent } from './tree-grid/tree-grid.component';
import { CategoryComponent } from '../../category/category.component';
import { ItemTableComponent } from '../../item/components/item-table/item-table.component';
import { OwnerComponent } from '../../owner/owner.component';
import { LocationComponent } from '../../location/location.component';
import { EquipmentComponent } from '../../equipment/equipment.component';
import { CserviceComponent } from '../../cservice/cservice.component';
import { TypeComponent } from '../../type/type.component';
import { BookingComponent } from '../../booking/booking.component';

const routes: Routes = [{
  path: '',
  component: TablesComponent,
  children: [
    {
      path: 'smart-table',
      component: CategoryComponent,
    },
    {
      path: 'tree-grid',
      component: TreeGridComponent,
    },
    {
      path: 'item-table',
      component: ItemTableComponent,
    },
    {
      path: 'owner-table',
      component: OwnerComponent,
    },
    {
      path: 'location-table',
      component: LocationComponent,
    },
    {
      path: 'equipment-table',
      component: EquipmentComponent,
    },
    {
      path: 'service-table',
      component: CserviceComponent,
    },
    {
      path: 'type-table',
      component: TypeComponent,
    },
    {
      path: 'booking-table',
      component: BookingComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TablesRoutingModule { }

export const routedComponents = [
  TablesComponent,
  SmartTableComponent,
  TreeGridComponent,

];
