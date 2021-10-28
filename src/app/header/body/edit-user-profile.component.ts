import { Component} from "@angular/core";
import { UserProfileInfo } from "./user-profile.model";
import { UserProfileService} from "../body/user-profile.service"

@Component({
    selector: 'edit-user-profile',
    templateUrl: 'edit-user-profile.component.html'

})
export class EditUserInfoComponent {
    constructor(private userProfileService: UserProfileService){

    }

    onUpdateProfileInfo(info: UserProfileInfo){
        this.userProfileService.modifyUserInfo(info).subscribe(info => {
            console.log("Updated info");
        })
    }
}