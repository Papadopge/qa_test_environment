import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import { ContactUsComponent } from './contact_us/contact_us.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { SettingsSimulatorComponent } from './settings-simulator/settings-simulator.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'login', component: LoginComponent },
  { path: 'contact_us', component: ContactUsComponent },
  { path: 'todo_list', component: TodoListComponent },
  { path: 'file_upload', component: FileUploadComponent },
  { path: 'settings_simulator', component: SettingsSimulatorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
