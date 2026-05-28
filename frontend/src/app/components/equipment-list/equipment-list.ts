import { Component } from '@angular/core';
import { EquipmentListItem } from '../equipment-list-item/equipment-list-item';

export interface Equipment{
  name:string,
  type:string,
  id:string,
  description:string,
  quantity:number,
  price:number
}

@Component({
  selector: 'app-equipment-list',
  imports: [EquipmentListItem],
  templateUrl: './equipment-list.html',
  styleUrl: './equipment-list.css',
})
export class EquipmentList {

  equipments: Equipment[] = [
    
    {
      "name": "Notebook Dell Inspiron",
      "type": "Eletrônico",
      "id": "NTB001",
      "description": "Notebook com 16GB RAM e SSD 512GB",
      "quantity": 5,
      "price": 4500.00
    },
    {
      "name": "Mouse Logitech MX Master 3",
      "type": "Acessório",
      "id": "MSE002",
      "description": "Mouse sem fio ergonômico de alta precisão",
      "quantity": 10,
      "price": 350.00
    },
    {
      "name": "Teclado Mecânico Redragon",
      "type": "Acessório",
      "id": "TCL003",
      "description": "Teclado mecânico RGB switch blue",
      "quantity": 7,
      "price": 280.00
    }

  ]

}