import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { PsaService } from '../services/psa.service';
import { RmgService } from '../services/rmg.service';
import { HrmsService } from '../services/hrms.service';
import { Router } from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-rmg',
  templateUrl: './rmg.component.html',
  styleUrls: ['./rmg.component.scss']
})
export class RmgComponent implements OnInit {

  eid: string;
  loggedUserName: string;
  empbasicin: any;
  empbasicinfo: any;
 
  constructor(private fb: FormBuilder, private psaService: PsaService,private rmgService:RmgService ,private hrms: HrmsService, private route:Router,private _location:Location) { }

  ngOnInit() {
    this.eid = localStorage.getItem('UserName');
    this.loggedUserName = localStorage.getItem('UserName');
  
   

  }
  ngOnDestroy(): any {
    
  }

  backClicked(){
    this._location.back();
  }
  navigateTo(){
    this.route.navigate(['dashboard']);
  }
}
