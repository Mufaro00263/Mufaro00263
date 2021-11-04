import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "@angular/fire/compat/database"
import { Observable } from "rxjs";
import { UserProfileInfo } from "./user-profile.model";

@Injectable({
    providedIn: 'root'
})
export class DatabaseService{
    items: Observable<UserProfileInfo []>
    constructor(private db:AngularFireDatabase) {
        console.log("Setting up Firebase communication");
        this.items = this.db.list<UserProfileInfo>('my-info').valueChanges();

    }

    public showData() {
        this.items.subscribe((data: UserProfileInfo []) => {
            console.log("Data received");
            for (let item of data) {
                console.log(item);
            }
        })
    }
}