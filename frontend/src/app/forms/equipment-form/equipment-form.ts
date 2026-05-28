import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../services/api';
import { Equipment } from '../../components/equipment-list/equipment-list';

@Component({
  selector: 'app-equipment-form',
  imports: [],
  templateUrl: './equipment-form.html',
  styleUrl: './equipment-form.css',
})
export class EquipmentForm {
  fb = inject(FormBuilder);
  api = inject(ApiService);

  form = this.fb.nonNullable.group({
    name: ['',Validators.required],
    description: ['', Validators.required],
    type: ['', Validators.required],
    price: [0, Validators.required],
    quantity: [0, Validators.required],
    id: ['', Validators.required]
  });

  updateData(){

    if(this.form.valid){

      this.api.updateEquipment("id", this.form.getRawValue());

    }
    
  }

  createData(){

    if(this.form.valid){

      this.api.createEquipment(this.form.getRawValue());

    }

  }

  deleteData(){

    this.api.deleteEquipment("id");

  }




}