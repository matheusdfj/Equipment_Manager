import { Injectable, Type, signal } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class ModalService {
  
  component = signal<Type<unknown> | null>(null);

  openModal(_component: Type<unknown>){

    this.component.set(_component);

  }

  closeModal(){

    this.component.set(null);

  }

}
