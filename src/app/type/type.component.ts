import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { TypeService } from './type.service';
import { CustomCategoryInputComponent } from './components/custom-category-input/custom-category-input.component';

@Component({
  selector: 'ngx-type',
  templateUrl: './type.component.html',
  styleUrls: ['./type.component.scss']
})
export class TypeComponent implements OnInit {

  constructor(private typeService: TypeService) {
    this.typeService.getAllTypes().subscribe(data => this.source.load(data))
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
      categoryid: {
        title: 'Category ID',
        type: 'string',
        editor: {
          type: 'custom',
          component: CustomCategoryInputComponent,
        }
      },


    },
    mode: 'inline',
  };

  source: LocalDataSource = new LocalDataSource();

  async onDeleteConfirm(event) {
    const {id, ...rest} = event.data
    if (window.confirm('Are you sure you want to delete?')) {
      await this.typeService.deleteType(id).subscribe(res => console.log(res))
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }

  }

  async onCreateConfirm(event: any) {
    await this.typeService.createType(event.newData).subscribe(res => console.log(res))
    event.confirm.resolve();
  }

  onEditConfirm(event: any) {
    const {id, ...rest} = event.data
    const {newId, ...updatedData} = event.newData
    // const jsonData = JSON.stringify(updatedData);
    this.typeService.editType(updatedData, id).subscribe(res => console.log(res))
    event.confirm.resolve();

  }

}
