import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';

import { SmartTableData } from '../@core/data/smart-table';
import { CategoryService } from './category.service';
import { ImageRenderComponentComponent } from './image-render-component/image-render-component.component';
import { FileuploadComponent } from '../fileupload/fileupload.component';


@Component({
  selector: 'ngx-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

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
      // id: {
      //   title: 'ID',
      //   type: 'number',
      // },
      name: {
        title: 'Name',
        type: 'string',
      },
      description: {
        title: 'Description',
        type: 'string',
      },
      status: {
        title: 'Status',
        type: 'string',
      },
      // image: {
      //   title: 'Image',
      //   type: 'string',
      // }
      image: {
        title: 'Image',
        type: 'custom',
        editor: {
          type: 'custom',
          component: FileuploadComponent,
        },
        renderComponent: ImageRenderComponentComponent,
        
      }
    },
    mode: 'inline',
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(private service: SmartTableData, private categoryService: CategoryService) {
      this.categoryService.getAllCategories().subscribe(data => this.source.load(data))
  }
  

  onDeleteConfirm(event: any): void {
    const {id, ...rest} = event.data
    if (window.confirm('Are you sure you want to delete?')) {
      this.categoryService.deleteCategory(id).subscribe(res => console.log(res))
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

  async onCreateConfirm(event: any) {
    //console.log(event.newData);
    // const {id, ...rest} = event.newData
    // const jsonData = JSON.stringify(rest);

    const {name, description, status, image} = event.newData
    const formData = new FormData()
    formData.append('name', name)
    formData.append('description', description)
    formData.append('status', status)
    formData.append('image', image)
    // console.log(formData);
    await this.categoryService.createCategory(formData).subscribe(res => console.log(res))
    event.confirm.resolve();
  }

  onEditConfirm(event: any) {
    const {id, ...rest} = event.data
    const {newId, ...updatedData} = event.newData
    const jsonData = JSON.stringify(updatedData);
    this.categoryService.editCategory(jsonData, id).subscribe(res => console.log(res))
    event.confirm.resolve();
  }
}
