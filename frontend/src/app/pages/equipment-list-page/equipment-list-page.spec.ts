import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipmentListPage } from './equipment-list-page';

describe('EquipmentListPage', () => {
  let component: EquipmentListPage;
  let fixture: ComponentFixture<EquipmentListPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EquipmentListPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EquipmentListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
