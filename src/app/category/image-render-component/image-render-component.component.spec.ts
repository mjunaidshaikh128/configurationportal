import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageRenderComponentComponent } from './image-render-component.component';

describe('ImageRenderComponentComponent', () => {
  let component: ImageRenderComponentComponent;
  let fixture: ComponentFixture<ImageRenderComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImageRenderComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageRenderComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
