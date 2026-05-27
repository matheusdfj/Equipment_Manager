import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardSorter } from './card-sorter';

describe('CardSorter', () => {
  let component: CardSorter;
  let fixture: ComponentFixture<CardSorter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardSorter]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardSorter);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
