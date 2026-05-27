import { Component, inject } from '@angular/core';
import { ModalService } from '../../services/modal';
import { NgComponentOutlet } from '@angular/common';

@Component({
  selector: 'app-component-modal',
  imports: [NgComponentOutlet],
  templateUrl: './component-modal.html',
  styleUrl: './component-modal.css',
})
export class ComponentModal {
  modal = inject(ModalService);

  close(){

    this.modal.closeModal();

  }

}