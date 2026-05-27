import { Component, input } from '@angular/core';

@Component({
  selector: 'app-new-equipment',
  imports: [],
  templateUrl: './new-equipment.html',
  styleUrl: './new-equipment.css',
})
export class NewEquipment {

  isModal = input<boolean>(true);

  

}