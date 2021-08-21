import { AuthGuard } from './auth-guard/auth.guard';
import { SundaySchoolComponent } from './sunday-school/sunday-school.component';
import { AddNewGroupMinistryComponent } from './groups-ministries/add-new-group-ministry/add-new-group-ministry.component';
import { GroupsMinistriesComponent } from './groups-ministries/groups-ministries.component';
import { AddMemberComponent } from './members/add-member/add-member.component';
import { MembersComponent } from './members/members.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
  {path: 'members', component: MembersComponent},
  {path: 'members/add-member', component: AddMemberComponent},
  {path: 'groups-ministries', component: GroupsMinistriesComponent},
  {path: 'groups-ministries-add', component: AddNewGroupMinistryComponent},
  {path: 'sunday-school', component: SundaySchoolComponent},
  { path: '**', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
