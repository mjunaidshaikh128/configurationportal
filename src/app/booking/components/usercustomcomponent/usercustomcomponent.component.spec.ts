import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsercustomcomponentComponent } from './usercustomcomponent.component';

describe('UsercustomcomponentComponent', () => {
  let component: UsercustomcomponentComponent;
  let fixture: ComponentFixture<UsercustomcomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsercustomcomponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsercustomcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
