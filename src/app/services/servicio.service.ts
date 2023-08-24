import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {
  Api='http://127.0.0.1:8000/api/';
  constructor( private http:HttpClient) { }

  Create(data:any){ 
    return this.http.post<any>(this.Api+'Data',data);
  }

  Destroy(id:any){ 
    return this.http.delete(`${this.Api}Data/${id}`);
  }

  Index(){ 
    return this.http.get(this.Api+'Data');
  }

 
  Update(data: any, id: any): Observable<any> {
    return this.http.put<any>(`${this.Api}Data/${id}`, data);
  }
  
  Show(id: any): Observable<any> {
    return this.http.get<any>(`${this.Api}Data/${id}`);
  }
}

