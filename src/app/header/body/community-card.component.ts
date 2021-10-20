import { Component, Input } from "@angular/core";

@Component ({
    selector: 'community-card',
    templateUrl: 'community-card.component.html'
})
export class CommunityCardComponent {
    @Input()
    title!: string;
    @Input()
    description!: string;
    @Input()
    imagePath!: string;
}