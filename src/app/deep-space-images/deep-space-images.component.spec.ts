import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeepSpaceImagesComponent } from './deep-space-images.component';

describe('DeepSpaceImagesComponent', () => {
  let component: DeepSpaceImagesComponent;
  let fixture: ComponentFixture<DeepSpaceImagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeepSpaceImagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeepSpaceImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
