import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import { Router } from '@angular/router';

declare var $: any;
@Component({
  selector: 'app-psa',
  templateUrl: './psa.component.html',
  styleUrls: ['./psa.component.scss']
})



export class PsaComponent implements OnInit {


  backClicked() {
    this._location.back();
    
    
  }



  constructor(private _location: Location, private route:Router) { 
    
  }
  navigateTo(){
    this.route.navigate(['home/hrms/dashboard']);
  }
  
  ngOnInit() {

    $( '#topheader .navbar-nav li a' ).on( 'click', function () {
      $( '#topheader .navbar-nav' ).find( 'li.active' ).removeClass( 'active' );
      $( this ).parent( 'li' ).addClass( 'active' );
    });
  }

}
