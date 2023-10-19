import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomCategoryInputComponent } from './custom-category-input.component';

describe('CustomCategoryInputComponent', () => {
  let component: CustomCategoryInputComponent;
  let fixture: ComponentFixture<CustomCategoryInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomCategoryInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomCategoryInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
