import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { EquipmentService } from './equipment.service';

@Component({
  selector: 'ngx-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.scss']
})
export class EquipmentComponent implements OnInit {

  constructor(private equipmentService: EquipmentService) {
    this.equipmentService.getAllEquipements().subscribe(data => this.source.load(data))
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
      iconClass: {
        title: 'iconClass',
        type: 'string',
      },


    },
    mode: 'inline',
  };

  source: LocalDataSource = new LocalDataSource();

  async onDeleteConfirm(event) {
    const {id, ...rest} = event.data
    if (window.confirm('Are you sure you want to delete?')) {
      await this.equipmentService.deleteEquipement(id).subscribe(res => console.log(res))
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }

  }

  onCreateConfirm(event: any) {
    this.equipmentService.createEquipement(event.newData).subscribe(res => console.log(res))
    event.confirm.resolve();

  }

  onEditConfirm(event: any) {
    // const {id, ...rest} = event.data
    const {id, ...updatedData} = event.newData
    // const jsonData = JSON.stringify(updatedData);
    this.equipmentService.editEquipement(updatedData, id).subscribe(res => console.log(res))
    event.confirm.resolve();

  }

}
