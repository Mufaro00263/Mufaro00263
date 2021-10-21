import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { CommunityInfo } from "./community-info.model";

@Injectable({providedIn:'root'})
export class CommunityInfoService{
private baseUrl: string = 'https://discord-app-ba936-default-rtdb.firebaseio.com/Communities/';
private InfoEndpoint: string = 'GTA-V.json';
    constructor(private http: HttpClient) {

    }

    getUserInfo(){
        console.log(this.baseUrl + this.InfoEndpoint);
        return this.http.get<CommunityInfo>(this.baseUrl+this.InfoEndpoint);
    }
}