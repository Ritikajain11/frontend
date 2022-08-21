import { ServerErrorComponent } from './server-error/server-error.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChecklistComponent } from './CheckList/checklist.component';
import { SeverityComponent } from './Severity/severity.component';
import { BackToLoginComponent } from './back-to-login/back-to-login.component';
import { LoginComponent } from './Login/login.component';

const routes: Routes = [
  {path : "", component : LoginComponent},
  {path:"severity",component:SeverityComponent},
  {path : "login", component : LoginComponent},
  {path : "checklist", component : ChecklistComponent},
  {path : "backToLogin", component : BackToLoginComponent},
  {path : "error", component : ServerErrorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
