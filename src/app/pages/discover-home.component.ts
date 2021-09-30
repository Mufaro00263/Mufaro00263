import { Component, OnInit } from "@angular/core";
import { Community } from "../header/body/community.model";
import { mock_communities } from "../header/body/mock-community";

@Component ({
    selector: 'discover-home-page',
    templateUrl: 'discover-home.component.html'
})
export class DiscoverHomePageComponent {

    communities : Community [] = [];

    ngOnInIt(): void {
        for (var comm of mock_communities){
            this.communities.push(new Community(comm))
        }
    }


}