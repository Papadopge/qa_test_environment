import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-contact_us',
  templateUrl: './contact_us.component.html',
  styleUrls: ['./contact_us.component.css', './contactus.css', '../../dist/css/bootstrap.min.css']
})
export class ContactUsComponent {
  firstName: string = '';
  lastName: string = '';
  email: string = '';
  password: string = '';
  showAlert: boolean = false;
  constructor(private snackBar: MatSnackBar) { }

  onSubmitClick() {
    // Show a snackbar message
    this.snackBar.open('Well done! You successfully submitted on Contact Us Page.', 'Dismiss', {
      duration: 10000, // Duration in milliseconds (10 seconds)
    });
  }
}

