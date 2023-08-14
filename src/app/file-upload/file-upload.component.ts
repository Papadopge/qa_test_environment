import { Component } from '@angular/core';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent {
  selectedFile: File | undefined;
  uploadStatus: string | undefined;

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  uploadFile() {
    if (this.selectedFile) {
      // Simulating a file upload (replace this with your actual upload logic)
      setTimeout(() => {
        this.uploadStatus = 'File uploaded successfully.';
      }, 1000);
    } else {
      this.uploadStatus = 'No file selected';
    }
  }
}
