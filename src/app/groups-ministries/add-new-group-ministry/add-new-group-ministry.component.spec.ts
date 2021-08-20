import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewGroupMinistryComponent } from './add-new-group-ministry.component';

describe('AddNewGroupMinistryComponent', () => {
  let component: AddNewGroupMinistryComponent;
  let fixture: ComponentFixture<AddNewGroupMinistryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNewGroupMinistryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewGroupMinistryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
