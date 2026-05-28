import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormFrame } from './form-frame';

describe('FormFrame', () => {
  let component: FormFrame;
  let fixture: ComponentFixture<FormFrame>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormFrame]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormFrame);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
