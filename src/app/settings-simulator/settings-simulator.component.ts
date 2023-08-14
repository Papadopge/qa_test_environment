import { Component } from '@angular/core';

interface Setting {
  name: string;
  isEnabled: boolean;
}

@Component({
  selector: 'app-settings-simulator',
  templateUrl: './settings-simulator.component.html',
  styleUrls: ['./settings-simulator.component.css']
})
export class SettingsSimulatorComponent {
  settings: Setting[] = [
    { name: 'Setting 1', isEnabled: false },
    { name: 'Setting 2', isEnabled: false },
    { name: 'Setting 3', isEnabled: false },
    // Add more settings here
  ];

  toggleSetting(setting: Setting) {
    setting.isEnabled = !setting.isEnabled;
  }
}
