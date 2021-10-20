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

    GenImpactTitle: string="Genshin Impact Official"
    GenImpactDescription: string="Welcome to Teyvat Traveler! THis is the place to discuss with others about your favorite game: Genshin Impact!"

    ValorantTitle: string="VALORANT"
    ValDescription: string="The VALORANT Discord server, in collaboration with Riot Games. We offer the latest news and various chats."

    MinecraftTitle: string="MINECRAFT"
    MinecraftDescription="The official Minecraft Discord!"

    FortniteTitle: string="Official Fortnite"
    FortniteDescription: string="The Official Fortnite Discord Server! JOin to follow news channels, LFG, and chat."


}