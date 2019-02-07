import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
//import { Animal } from '../_models';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { AnimalService } from '../service/animal.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/scan';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {
   show:boolean=false;
    animals:any;
    showNew:boolean=false;
    currentAnimal:any;
    newAnimal:any={};
    constructor( private animalService: AnimalService) {
       
    }

    ngOnInit() {
        this.loadAllComplaints();
    }

    private loadAllComplaints() {
        this.animalService.getAll().subscribe(response => { 
            this.animals = response; 
            console.log(this.animals)
        });
    }
	edit(x){
        this.currentAnimal = x;
         this.show =true;
          this.showNew =false;
    }
    showNewrecord(){
       this.showNew =true;
       this.show =false;
    }
    onSubmit(data){
        if(this.showNew == true){
            console.log("data in new",data);
             this.animalService.registerNew(data).subscribe((response) => { 
            this.loadAllComplaints();
            this.showNew =false;
            console.log("INSERTED NEW RECORDS....",response);
            //this.currentComplaint = "";
        });
        }else{
         //console.log(data);
        this.show =false;
         this.animalService.register(data).subscribe((response) => { 
            this.loadAllComplaints();
            console.log("UPDATED....",response);
        });
        }
        
    }
    delete(data){
      alert(JSON.stringify(data._id));
      this.animalService.deleteRecord(data).subscribe((response) => { 
            this.loadAllComplaints();
            console.log("UPDATED....",response);
        });
    }
}


