import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentModal } from './component-modal';

describe('ComponentModal', () => {
  let component: ComponentModal;
  let fixture: ComponentFixture<ComponentModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentModal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentModal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
