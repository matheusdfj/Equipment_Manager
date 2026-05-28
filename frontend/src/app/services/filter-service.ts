import { inject, Injectable, computed, signal } from '@angular/core';
import { EquipmentApiService } from './equipment-api';
import { toSignal } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root',
})
export class FilterService {
  api = inject(EquipmentApiService);
  searchString = signal<string>('');
  data = toSignal(this.api.getAllEquipments());

  filter_data = computed(() => {

    return this.data()?.filter(f =>
      f.name.toLowerCase().includes(this.searchString().toLowerCase()) ||
      f.description.toLowerCase().includes(this.searchString().toLowerCase())
    )

  })
  
}