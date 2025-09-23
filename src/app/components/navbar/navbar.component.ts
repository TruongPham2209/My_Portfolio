import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { personalInfo } from '../../models/portfolio.data';
import { PersonalInfo } from '../../models/portfolio.model';

@Component({
    selector: 'app-navbar',
    imports: [CommonModule],
    templateUrl: './navbar.component.html',
    styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
    profileData: PersonalInfo = personalInfo;

    openLink(link: string): void {
        window.open(link, '_blank');
    }
}
