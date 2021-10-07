import { HttpClient, HttpClientModule } from "@angular/common/http";
import { Component, Injectable } from "@angular/core";
import { UserInfo } from "./user-info.model";

@Injectable()

@Component ({
    selector: 'discord-user-info',
    templateUrl: 'user-info.component.html'
})
export class UserInfoComponent {
    myInfo: UserInfo | undefined;
    constructor(private http: HttpClient){
    }

    ngOnInit(): void {
        console.log("initializing component");
        this.getUserInfo();
        console.log("Registering showUserInfo as subscriber");
        this.showUserInfo();
    }

    getUserInfo(){
        return this.http.get<UserInfo>('https://discord-app-ba936-default-rtdb.firebaseio.com/my-info.json')
    }

    showUserInfo(){
        this.getUserInfo().subscribe((data: UserInfo) =>{
            console.log(data)
            this.myInfo = data;
        })
    }
}