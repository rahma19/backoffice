import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { DataService } from '../data.service';

@Component({
  selector: 'app-liste-unite',
  templateUrl: './liste-unite.component.html',
  styleUrls: ['./liste-unite.component.css']
})
export class ListeUniteComponent implements OnInit {
  title = 'test2';
  cars: any[];
  unitedestage: any[]=[];

    constructor(private dataService: DataService,private http:HttpClient) { }

    ngOnInit() {
      this.dataService.getAllUsers().subscribe(data=>{
        console.log(data['data']);
         for(let i=0;i<data['data'].length;i++)
         {
           if(data['data'][i].role=='US')
           this.unitedestage.push(data['data'][i]);
         }
    console.log(this.unitedestage);
       });
      }

      onChangeStatus(e, unite) {
        console.log(unite);
        unite.enabled = !unite.enabled;
        if (unite.enabled == false)  { unite.status = 'inactif'; unite.enabled=false; }
        else if (unite.enabled == true) { unite.status = 'actif';unite.enabled=true;}
       this.http.patch(environment.api+"users" +`/${unite._id}`, unite).subscribe(data=>{
      console.log("success"+unite.enabled);    
        },
          (error) =>{
        console.log("error");
      });
      }

}

