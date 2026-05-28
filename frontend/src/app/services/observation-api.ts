import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Obs } from '../types';

@Injectable({
  providedIn: 'root',
})
export class ObservationApi {

  private baseUrl = 'http://127.0.0.1:8000/api';

  apiUrl = this.baseUrl + '/observation'

  constructor(private http: HttpClient){};

  getObservations = (equipmentId: string) => this.http.get<Obs[]>(`${this.apiUrl}?equipment=string`);

  createObservation = (observation: Obs) : Observable<Obs> => this.http.post<Obs>(`${this.baseUrl}/observation`, observation);
  
}
