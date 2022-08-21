import { SecurityToken } from './../Models/SecurityToken';
import { AuthenticationRequest } from './../Models/AuthenticationRequest';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationMSClientService {

  constructor() { }

  getAuthToken(authRequest : AuthenticationRequest){
  }

  getProjectDetails(securityToken : SecurityToken){
    let token : string = securityToken.jwt;
  }
}
