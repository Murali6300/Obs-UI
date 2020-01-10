import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LmsComponent } from './lms.component';
import { LeavesummaryComponent } from './leavesummary/leavesummary.component';
import { ApplyleaveComponent } from './applyleave/applyleave.component';
import { ReviewComponent } from './review/review.component';

const routes: Routes = [{
  path: '', component: LmsComponent, children: [
    { path: '', redirectTo: 'leavesummary', pathMatch: 'full' },
    { path: 'leavesummary', component: LeavesummaryComponent},
    { path: 'applyleave', component: ApplyleaveComponent},
    { path: 'review', component: ReviewComponent},
  ]
},
{ path: 'lmsmasters', loadChildren: () => import('./lmsmasters/lmsmasters.module').then(m =>m.LmsmastersModule ) }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LmsRoutingModule { }
