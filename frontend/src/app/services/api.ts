import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Equipment } from '../components/equipment-list/equipment-list';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {

  private baseUrl = 'http://127.0.0.1:8000/api';

  constructor(private http: HttpClient){};

  // Equipment section

  createEquipment(eq: Equipment): Observable<Equipment>{

    return this.http.post<Equipment>(`${this.baseUrl}/equipment`, eq);

  }

  updateEquipment(id: string, eq: Equipment){

    this.http.put<Equipment>(`${this.baseUrl}/equipment/${eq}`, eq);

  }

  deleteEquipment(id: string){

    this.http.delete<Equipment>(`${this.baseUrl}/equipment/${id}`);

  }

  getEquipment(id:string){

    this.http.get<Equipment>(`${this.baseUrl}/equipment/${id}`);

  }

  // Observation section
  
}
