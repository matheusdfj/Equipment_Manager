import { Injectable, Type, signal } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class ModalService {
  
  component = signal<Type<unknown> | null>(null);
  form = signal<Type<unknown> | null>(null);

  openModal(_component: Type<unknown>, _form: Type<unknown>){

    this.component.set(_component);
    this.form.set(_form);

  }

  closeModal(){

    this.component.set(null);

  }

}
