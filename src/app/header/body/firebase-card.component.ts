import { Component, Input } from "@angular/core";
import { CommunityInfo } from "./community-info.model";
import { CommunityInfoService } from "./community-info.service";

@Component ({
    selector: 'firebase-card',
    templateUrl: 'firebase-card.component.html',
})
export class FirebaseCardComponent {
    @Input()
    imagePath!: string;
    
    Info: CommunityInfo | undefined;
    constructor(private userInfoService: CommunityInfoService){
    }

    ngOnInit(): void {
        
        console.log("Registering CommunityInfo");
        this.showUserInfo();
    }

    

    showUserInfo(){
        this.userInfoService.getUserInfo().subscribe((data: CommunityInfo) =>{
            console.log(data)
            this.Info = data;
        })
    }

}
