import { Component, Input } from "@angular/core";
import { UserProfileInfo } from "./user-profile.model";
import { UserProfileService } from "./user-profile.service";

@Component({
    selector: 'user-profile',
    templateUrl: "user-profile.component.html"
})
export class UserProfileComponent{
  
    Profile: UserProfileInfo | undefined;
    constructor(private userProfileService: UserProfileService){
    }

    ngOnInit(): void {
        
        console.log("Showing user profile info");
        this.showUserInfo();
    }

    showUserInfo(){
        this.userProfileService.getUserInfo().subscribe((data: UserProfileInfo) =>{
            console.log(data)
            this.Profile = data;
        })
    }

}