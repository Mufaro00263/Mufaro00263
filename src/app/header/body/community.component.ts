import { Component, Input } from "@angular/core";
import { Community } from "./community.model";
import { mock_communities } from "./mock-community";

@Component ({
    selector: 'community',
    templateUrl: 'community.component.html',
    styleUrls: ['community.component.css']
})
export class CommunityComponent {
    
    communities:Community[] = [];

    constructor(){
        for (var community of mock_communities){
        this.communities.push(new Community(community));
        }
    }

}