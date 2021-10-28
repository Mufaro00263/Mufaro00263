import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { UserProfileInfo } from "./user-profile.model";

@Injectable({providedIn:'root'})
export class UserProfileService{
private baseUrl: string = 'https://discord-app-ba936-default-rtdb.firebaseio.com/';
private ProfileEndpoint: string = 'UserProfile.json';
    constructor(private http: HttpClient) {

    }

    getUserInfo(){
        console.log(this.baseUrl + this.ProfileEndpoint);
        return this.http.get<UserProfileInfo>(this.baseUrl+this.ProfileEndpoint);
    }

    modifyUserInfo(info:UserProfileInfo){
        return this.http.put(this.baseUrl+this.ProfileEndpoint,info);
    }
}