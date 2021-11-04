import { Component} from "@angular/core";
import { UserProfileInfo } from "./user-profile.model";
import { UserProfileService} from "../body/user-profile.service"
import { DatabaseService } from "./database.service";

@Component({
    selector: 'edit-user-profile',
    templateUrl: 'edit-user-profile.component.html'

})
export class EditUserInfoComponent {
    constructor(private userProfileService: UserProfileService, private dbService:DatabaseService){
        dbService.showData();
    }

    onUpdateProfileInfo(info: UserProfileInfo){
        this.userProfileService.modifyUserInfo(info).subscribe(info => {
            console.log("Updated info");
        })
    }
}