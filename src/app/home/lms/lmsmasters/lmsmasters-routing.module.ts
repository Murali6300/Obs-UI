import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HolidayComponent } from './holiday/holiday.component';


const routes: Routes = [{path:'holiday',component:HolidayComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LmsmastersRoutingModule { }
