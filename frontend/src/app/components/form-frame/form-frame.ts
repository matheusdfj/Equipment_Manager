import { Component, inject } from '@angular/core';
import { ModalService } from '../../services/modal';
import { NgComponentOutlet } from '@angular/common';

@Component({
  selector: 'app-form-frame',
  imports: [NgComponentOutlet],
  templateUrl: './form-frame.html',
  styleUrl: './form-frame.css',
})
export class FormFrame {
  modal = inject(ModalService);
}
