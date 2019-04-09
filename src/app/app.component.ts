import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import {FormsModule} from '@angular/forms';
import { NgForOf } from '@angular/common';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

  
  })

export class AppComponent implements OnInit {

  showError1 = false;
  showError2=false;
  ngOnInit(): void {
    this.mindate.setDate(this.now.getDate()- 2 );
  this.maxdate.setDate(this.now.getDate() + 5);
  this.date.valueChanges.subscribe
  ( value => {
    
    if(value != null && (value.getTime()>this.maxdate.getTime()  )) 
    {
      this.showError2 = true;
      this.showError1 = false;
    }
     if(value != null && (value.getTime()<this.mindate.getTime())){
      this.showError1 = true;
      this.showError2 = false;
    }
    if(value==null){
      this.showError1 = false;
      this.showError2 = false;
    }
    if( (value != null && value.getTime()>this.mindate.getTime()) && (value.getTime()<this.maxdate.getTime()) ){
      this.showError1 = false;
      this.showError2 = false;
    }
      
  })
    
    
  
  }
  title = 'timedate';

  products: any[] ;
  data=[];
 

 
  apiUrl='https://ca.platform.simplifii.xyz/api/v1/static/assignment8';
  now= new Date();
  mindate = new Date();
  maxdate = new Date();

  date = new FormControl('',[Validators.required])


  constructor(private http: HttpClient) { 
  this.GetData();
}

  GetData(){
    this.http.get<any[]>(this.apiUrl)
      .subscribe((res:any)=> {
        this.products = res.response.data;
      
         console.log(res)
      });
      }
  post(apiUri,value)
   {
     const date1 = this.date.value;
     
     this.http.post<any[]>(apiUri,date1).subscribe(
     data=>{console.log(data);},
    
     error=>
     {
      console.log("Error",error);
   }
 );

}

}






