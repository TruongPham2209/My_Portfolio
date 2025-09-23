import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../../components/header/header.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';

@Component({
    selector: 'app-web',
    imports: [RouterOutlet, CommonModule, HeaderComponent, NavbarComponent],
    templateUrl: './web.component.html',
    styleUrl: './web.component.scss',
})
export class WebComponent {}
