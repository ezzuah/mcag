import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupsMinistriesComponent } from './groups-ministries.component';

describe('GroupsMinistriesComponent', () => {
  let component: GroupsMinistriesComponent;
  let fixture: ComponentFixture<GroupsMinistriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupsMinistriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupsMinistriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
