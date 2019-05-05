import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectrifyAestheticsComponent } from './electrify-aesthetics.component';

describe('ElectrifyAestheticsComponent', () => {
  let component: ElectrifyAestheticsComponent;
  let fixture: ComponentFixture<ElectrifyAestheticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElectrifyAestheticsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElectrifyAestheticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
