import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipmentViewPage } from './equipment-view-page';

describe('EquipmentViewPage', () => {
  let component: EquipmentViewPage;
  let fixture: ComponentFixture<EquipmentViewPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EquipmentViewPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EquipmentViewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
