import { Component } from '@angular/core';
import { HeavyLoadersSlowComponent } from '@shared/heavy-loaders-slow/heavy-loaders-slow.component';
import { TitleComponent } from '@shared/title/title.component';

@Component({
    selector: 'app-defer-views',
    imports: [HeavyLoadersSlowComponent, TitleComponent],
    templateUrl: './defer-views.component.html',
    styleUrl: './defer-views.component.css'
})
export default class DeferViewsComponent {

}
