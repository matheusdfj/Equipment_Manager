import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Equipment } from '../types';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EquipmentApiService {

  private baseUrl = 'http://127.0.0.1:8000/api';

  constructor(private http: HttpClient){};

  // Equipment section

  createEquipment = (eq: Equipment): Observable<Equipment> => this.http.post<Equipment>(`${this.baseUrl}/equipment`, eq);

  updateEquipment = (id: string, eq: Equipment) : Observable<Equipment> => this.http.put<Equipment>(`${this.baseUrl}/equipment/${eq}`, eq);

  deleteEquipment = (id: string) : Observable<Equipment> => this.http.delete<Equipment>(`${this.baseUrl}/equipment/${id}`);

  getEquipment = (id:string) : Observable<Equipment> => this.http.get<Equipment>(`${this.baseUrl}/equipment/${id}`);

  getAllEquipments = () : Observable<Equipment[]> => this.http.get<Equipment[]>(`${this.baseUrl}/equipment`);
  
  // Observation section

}
