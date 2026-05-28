import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EquipmentApiService } from '../../services/equipment-api';
import { Equipment } from '../../types';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-equipment-form',
  imports: [ReactiveFormsModule],
  templateUrl: './equipment-form.html',
  styleUrl: './equipment-form.css',
})

export class EquipmentForm {
  fb = inject(FormBuilder);
  api = inject(EquipmentApiService);

  form = this.fb.nonNullable.group({
    name: ['',Validators.required],
    description: ['', Validators.required],
    type: ['', Validators.required],
    price: [0, Validators.required],
    quantity: [0, Validators.required],
    id: ['', Validators.required]
  });

  updateData = () => this.api.updateEquipment("id", this.form.getRawValue()).subscribe();

  createData = () => this.api.createEquipment(this.form.getRawValue()).subscribe();

  deleteData = () => this.api.deleteEquipment("id").subscribe();

}