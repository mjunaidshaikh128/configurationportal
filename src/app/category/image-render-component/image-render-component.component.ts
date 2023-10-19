import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ngx-image-render-component',
  templateUrl: './image-render-component.component.html',
  styleUrls: ['./image-render-component.component.scss']
})
export class ImageRenderComponentComponent implements OnInit {
  @Input() rowData: any;

  constructor() { }

  ngOnInit(): void {
  }

}
