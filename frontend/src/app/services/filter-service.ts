import { inject, Injectable, computed, signal } from '@angular/core';
import { EquipmentApiService } from './equipment-api';
import { toSignal } from '@angular/core/rxjs-interop';
import { Equipment, Obs } from '../types';

@Injectable({
  providedIn: 'root',
})
export class FilterService {
  api = inject(EquipmentApiService);
  searchString = signal<string>('');
  rawData = toSignal(this.api.getAllEquipments());
  obs = signal<Obs[]>([]);
  selectedEquipment = signal<Equipment>;

  data = computed(() => {

    return this.rawData()?.filter(f =>
      f.name.toLowerCase().includes(this.searchString().toLowerCase()) ||
      f.description.toLowerCase().includes(this.searchString().toLowerCase())
    )

  })
  
}