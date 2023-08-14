import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToLoginPage() {
    this.router.navigate(['/login']);
  }

  goToContactUsPage() {
    this.router.navigate(['/contact_us']);
  }

  goToDoListPage() {
    this.router.navigate(['/todo_list']);
  }

  goToFileUploadPage() {
    this.router.navigate(['/file_upload']);
  }

  goToSettingsSimulatorPage() {
    this.router.navigate(['/settings_simulator']);
  }
}
