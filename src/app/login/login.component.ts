import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { environment } from 'src/environments/environment';
import { DataService } from '../data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[MessageService]
})
export class LoginComponent implements OnInit {
  email?:any="";
  password?:any="";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  }
  id:any;
  user:any;
  constructor(private messageService:MessageService,private dataService:DataService,private router:Router,private http:HttpClient) { }

  ngOnInit(): void {
  }
  Submit(form) {
    let addedData = JSON.stringify(form.value);
    console.log ("addedData", addedData);
return this.http.post(environment.api+"auth/login", addedData,this.httpOptions).subscribe((res:any) => {
     this.id=res.user;
     console.log(this.id);
     this.router.navigate(['/listeUnite']);
      })}}