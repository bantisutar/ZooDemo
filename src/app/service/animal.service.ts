import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs/Observable';
//import { Animals } from '../_models';
@Injectable({
  providedIn: 'root'
})
export class AnimalService {
config = environment.config;
  constructor(private http: HttpClient) { }

 getAll(){
        return this.http.get(this.config.apiUrl+'/api/animals');
    }
 getById(id: number) {
        return this.http.get(this.config.apiUrl+'/api/getbyId/' + id);
    }


    register(complaint: any) {
        //complaint.status = 1;
        //complaint.mode = 'Save';
        return this.http.post(this.config.apiUrl+'/api/SaveAnimals', complaint);
    }

    registerNew(animal: any) {
        animal.status = 1;
        //complaint.mode = 'Save';
        console.log("in service",animal);
        return this.http.post(this.config.apiUrl+'/api/SavenewAnimals', animal);
    }
     deleteRecord(data: any) {
        return this.http.post(this.config.apiUrl+'/api/deleteByid', data);
    }
}

