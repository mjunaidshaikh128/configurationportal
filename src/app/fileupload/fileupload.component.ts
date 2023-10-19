import { Component, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DefaultEditor } from 'ng2-smart-table';

@Component({
  selector: 'ngx-fileupload',
  templateUrl: './fileupload.component.html',
  styleUrls: ['./fileupload.component.scss']
})
export class FileuploadComponent extends DefaultEditor {
  @Input() cell: any;

  constructor(private http: HttpClient) {
    super()
  }

  onFileSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      // You can handle the file here, e.g., save it, display it, or perform any other actions.
      this.cell.newValue = file;

      // this.http.post('your-upload-api-endpoint', formData).subscribe(
      //   (response) => {
      //      Handle the server response, e.g., update your ng2-smart-table data
      //   },
      //   (error) => {
      //      Handle the error
      //   }
      // );
    }
  }
}
