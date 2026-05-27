import { Component, inject } from '@angular/core';
import { CardSorter } from '../../components/card-sorter/card-sorter';
import { ComponentModal } from '../../components/component-modal/component-modal';
import { CurrentFilterList } from '../../components/current-filter-list/current-filter-list';
import { EquipmentList } from '../../components/equipment-list/equipment-list';
import { EquipmentListItem } from '../../components/equipment-list-item/equipment-list-item';
import { FilterModal } from '../../components/filter-modal/filter-modal';

import { ModalService } from '../../services/modal';
import { NewEquipment } from '../../components/new-equipment/new-equipment';

@Component({
  selector: 'app-equipment-list-page',
  imports: [CardSorter, CurrentFilterList, EquipmentList, ComponentModal],
  templateUrl: './equipment-list-page.html',
  styleUrl: './equipment-list-page.css',
})
export class EquipmentListPage {
  modal = inject(ModalService);

  newEquipment(){

    this.modal.openModal(NewEquipment);

  }

  openFilter(){

    this.modal.openModal(FilterModal);
    
  }

}
