import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemcustomcomponentComponent } from './itemcustomcomponent.component';

describe('ItemcustomcomponentComponent', () => {
  let component: ItemcustomcomponentComponent;
  let fixture: ComponentFixture<ItemcustomcomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemcustomcomponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemcustomcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
