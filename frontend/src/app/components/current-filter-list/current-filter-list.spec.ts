import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentFilterList } from './current-filter-list';

describe('CurrentFilterList', () => {
  let component: CurrentFilterList;
  let fixture: ComponentFixture<CurrentFilterList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CurrentFilterList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurrentFilterList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
