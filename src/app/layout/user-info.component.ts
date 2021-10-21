import { Component, Injectable } from "@angular/core";
import { UserInfo } from "./user-info.model";
import { UserInfoService } from "./user-info.service";

@Component ({
    selector: 'discord-user-info',
    templateUrl: 'user-info.component.html'
})
export class UserInfoComponent {
    myInfo: UserInfo | undefined;
    constructor(private userInfoService: UserInfoService){
    }

    ngOnInit(): void {
        
        console.log("Registering showUserInfo as subscriber");
        this.showUserInfo();
    }

    

    showUserInfo(){
        this.userInfoService.getUserInfo().subscribe((data: UserInfo) =>{
            console.log(data)
            this.myInfo = data;
        })
    }
}