import { Component, Input, OnInit } from '@angular/core';
import { DefaultEditor } from 'ng2-smart-table';
import { ItemService } from '../../../item/item.service';
import { UserService } from '../../../user/user.service';

@Component({
  selector: 'ngx-usercustomcomponent',
  templateUrl: './usercustomcomponent.component.html',
  styleUrls: ['./usercustomcomponent.component.scss']
})
export class UsercustomcomponentComponent extends DefaultEditor  {
  @Input() cell: any;
  users: any

  constructor(private userService: UserService) {
    super()
    this.userService.getAllUsers().subscribe(res => this.users = res)
  }

  onSelectChange(event: any) {
    this.cell.newValue = event.target.value;
  }

}