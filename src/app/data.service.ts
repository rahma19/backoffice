import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  }
id:any;
user:any;
  constructor(private http: HttpClient,private router:Router) {}

  getAllUsers(): Observable<any[]> {
    return this.http.get<any[]>(environment.api+"users");
}

getCurrentUser(f:any){
  let addedData = JSON.stringify(f.value);
         console.log ("addedData", addedData);
    return this.http.post(environment.api+"auth/login", addedData,this.httpOptions).subscribe((res:any) => {
          localStorage.setItem("token",res.token)
          this.id=res.user;
          console.log(this.id);
          this.verify(this.id);
          
         },
           error => {
             //this.messageService.add({severity:'error', summary: ' Message', detail:'Erreur'});
           })
       ;}

       verify(id){
        this.http.get(environment.api+"users" +`/${id}`) .subscribe((res)=>{
          this.user=res['data'];
          this.router.navigate(['/listeUnite']);
          console.log(this.user);
        }) 
       }
}
