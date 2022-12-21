import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Entreprise } from '../../module/entreprise';
import { ActivatedRoute} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ServiceEntrepriseService {

  private baseUrl= "http://localhost:8083/Entreprise/e"

  ent:Entreprise = new Entreprise();

  constructor(private httpClient: HttpClient) { }

  getEntreprisesList(): Observable<Entreprise[]>{
    return this.httpClient.get<Entreprise[]>(`${this.baseUrl}`);
  }

  //addEntreprise( formValue: {idEntreprise:string ,nomEntreprise:string, localisation:string, emailEntreprise:string, recruiting:boolean, dateDebutAlternance:Date, dateFinAlternance:Date,}): Observable<Object>{
    // const ent : Entreprise={
    //   ...formValue
    
    // };
    addEntreprise(ent:Entreprise){
    //this.addEntreprise(ent);
    return this.httpClient.post<Entreprise>(`${this.baseUrl}`, ent);
  }  

  getEntrepriseById( id:number): Observable<Entreprise>{
    return this.httpClient.get<Entreprise>(`${this.baseUrl}/${id}`); //id=path var
  }

  // activatedRoute = new ActivatedRoute();
  // id = this.activatedRoute.snapshot.params['id']

  updateEntreprise(id: number, e:Entreprise): Observable<Object>{
    return this.httpClient.put(`${this.baseUrl}/${id}`, e);
  }

  deleteEntreprise(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseUrl}/${id}`);
  }

  // checkRecruitingDate(id: number): Observable<Object>{
  //   return this.httpClient.get(`${this.baseUrl}/checkRecruitingDate/${id}`);
  // }
}
