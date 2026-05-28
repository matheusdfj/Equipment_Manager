import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Equipment } from '../types';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EquipmentApiService {

  private apiUrl = 'http://127.0.0.1:8000/api/equipment';

  constructor(private http: HttpClient){};

  createEquipment = (eq: Equipment): Observable<Equipment> => this.http.post<Equipment>(`${this.apiUrl}`, eq);

  updateEquipment = (id: string, eq: Equipment) : Observable<Equipment> => this.http.put<Equipment>(`${this.apiUrl}/${eq}`, eq);

  deleteEquipment = (id: string) : Observable<Equipment> => this.http.delete<Equipment>(`${this.apiUrl}/${id}`);

  getEquipment = (id:string) : Observable<Equipment> => this.http.get<Equipment>(`${this.apiUrl}/${id}`);

  getAllEquipments = () : Observable<Equipment[]> => this.http.get<Equipment[]>(`${this.apiUrl}`);

}
