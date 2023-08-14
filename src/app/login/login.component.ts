import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css', './signin.css', '../../dist/css/bootstrap.min.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  showAlert: boolean = false;
  constructor(private snackBar: MatSnackBar) { }

  onSignInClick() {
    // Show a snackbar message
    this.snackBar.open('Well done! You successfully signed in.', 'Dismiss', {
      duration: 10000, // Duration in milliseconds (10 seconds)
    });
  }
}
