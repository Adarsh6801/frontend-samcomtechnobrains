import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserSheduleComponent } from './component/user-shedule/user-shedule.component';

const routes: Routes = [
  {path:"user/all-shedule",component:UserSheduleComponent,children:[
    
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
