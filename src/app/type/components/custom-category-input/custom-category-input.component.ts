import { Component, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DefaultEditor } from 'ng2-smart-table';
import { CategoryService } from '../../../category/category.service';

@Component({
  selector: 'ngx-custom-category-input',
  templateUrl: './custom-category-input.component.html',
  styleUrls: ['./custom-category-input.component.scss']
})
export class CustomCategoryInputComponent extends DefaultEditor  {
  @Input() cell: any;
  categories: any

  constructor(private http: HttpClient, private categoryService: CategoryService) {
    super()
    this.categoryService.getAllCategories().subscribe(res => this.categories = res)
  }

  onSelectChange(event: any) {
    this.cell.newValue = event.target.value;
  }

}

