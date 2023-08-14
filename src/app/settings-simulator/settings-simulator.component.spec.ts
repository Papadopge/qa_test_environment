import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsSimulatorComponent } from './settings-simulator.component';

describe('SettingsSimulatorComponent', () => {
  let component: SettingsSimulatorComponent;
  let fixture: ComponentFixture<SettingsSimulatorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SettingsSimulatorComponent]
    });
    fixture = TestBed.createComponent(SettingsSimulatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
