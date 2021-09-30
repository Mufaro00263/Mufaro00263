import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'discover-layout-main',
    templateUrl: "discover-layout.component.html"
})
export class DiscoverLayoutComponent implements OnInit{

    constructor() {}

    ngOnInit(): void{
        
    }

    GenImpactTitle: string="Genshin Impact Official"
    GenImpactDescription: string="Welcome to Teyvat Traveler! THis is the place to discuss with others about your favorite game: Genshin Impact!"

}