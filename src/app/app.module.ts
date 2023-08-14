import { TodoListComponent } from './todo-list/todo-list.component';
import { ContactUsComponent } from './contact_us/contact_us.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router'; // Import RouterModule
import { AppRoutingModule } from './app-routing.module'; // Import your routing module
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { SettingsSimulatorComponent } from './settings-simulator/settings-simulator.component'; // Import FormsModule

@NgModule({
  declarations: [AppComponent, MainComponent, LoginComponent, ContactUsComponent, TodoListComponent, FileUploadComponent, SettingsSimulatorComponent], // Add LoginComponent to the declarations array
  imports: [MatSnackBarModule, BrowserModule, AppRoutingModule, RouterModule, BrowserAnimationsModule, FormsModule], // Add RouterModule here
  bootstrap: [AppComponent]
})
export class AppModule {

}
