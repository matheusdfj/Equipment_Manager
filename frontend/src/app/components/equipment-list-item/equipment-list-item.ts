import { Component, input } from '@angular/core';
import { Equipment } from '../../types';

@Component({
  selector: 'app-equipment-list-item',
  imports: [],
  templateUrl: './equipment-list-item.html',
  styleUrl: './equipment-list-item.css',
})
export class EquipmentListItem {

  equipment = input.required<Equipment>()

}
