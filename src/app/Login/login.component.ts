import { User } from '../Models/User';
import { ProjectDetails } from './../Models/ProjectDetails';
import { SecurityService } from './../Services/security.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private securityService : SecurityService,
    private router : Router,
    public projectDetails : ProjectDetails,
    public user : User
    ) { }

  public username : string = "";
  public password : string = "";
  public message : string = "";

  onLogIn(){
    this.securityService.healthCheck().subscribe(
      (data)=>{
      },
      (err)=>{
        this.securityService.resetAll();
        this.router.navigate(['error']);
      },
      ()=>{
        this.securityService.createSecuritytokenObservable(this.username, this.password).subscribe(
          data => {

              if(data.includes(".")){
                this.message = "";
                this.securityService.setLoginStatus(true);
                this.securityService.turnOnSpecialFlag();
                this.securityService.setSecurityToken(data);
              }
          },
          err => {
              this.message = "Give Proper Username and Password!!!";
          },
          () => {
              if(this.securityService.getLoginStatus()){
                this.securityService.validateToken(this.securityService.getSecurityToken()).subscribe(
                  (data) => {
                    this.projectDetails.Name = data.name;
                    this.projectDetails.ProjectName = data.projectName;
                    this.projectDetails.Valid = data.valid;
                  },
                  err =>{
    
                  },
                  ()=>{
                    localStorage.setItem("auditToken", this.securityService.getSecurityToken());
                    this.router.navigate(['checklist']);            
                  }
                );
              }
          }
        );
      }
    );
    
  }


  ngOnInit(): void {
    this.message = "";
    this.securityService.healthCheck().subscribe(
      (data)=>{
      },
      (err)=>{
        this.securityService.resetAll();
        this.router.navigate(['error']);
      },
      ()=>{
        this.securityService.checkAuthFromLocal('login', 'login');
      }
    );
  }

}
