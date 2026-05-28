import { Component, inject } from '@angular/core';
import { CardSorter } from '../../components/card-sorter/card-sorter';
import { ComponentModal } from '../../components/component-modal/component-modal';
import { CurrentFilterList } from '../../components/current-filter-list/current-filter-list';
import { EquipmentList } from '../../components/equipment-list/equipment-list';
import { EquipmentListItem } from '../../components/equipment-list-item/equipment-list-item';
import { FormFrame } from '../../components/form-frame/form-frame';
import { EquipmentForm } from '../../forms/equipment-form/equipment-form';

import { ModalService } from '../../services/modal';

@Component({
  selector: 'app-equipment-list-page',
  imports: [CardSorter, CurrentFilterList, EquipmentList, ComponentModal],
  templateUrl: './equipment-list-page.html',
  styleUrl: './equipment-list-page.css',
})
export class EquipmentListPage {
  modal = inject(ModalService);

  newEquipment(){

    this.modal.openModal(FormFrame, EquipmentForm);

  }

  openFilter(){

    this.modal.openModal(FormFrame, FormFrame);
    
  }

}