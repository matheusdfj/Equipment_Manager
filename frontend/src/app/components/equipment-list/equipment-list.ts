import { Component, inject } from '@angular/core';
import { EquipmentListItem } from '../equipment-list-item/equipment-list-item';
import { FilterService } from '../../services/filter-service';
import { Equipment } from '../../types';

@Component({
  selector: 'app-equipment-list',
  imports: [EquipmentListItem],
  templateUrl: './equipment-list.html',
  styleUrl: './equipment-list.css',
})
export class EquipmentList {
  filter = inject(FilterService);
}