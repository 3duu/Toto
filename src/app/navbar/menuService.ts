import { ObjectUtils } from './../utils';
import { NavbarComponent } from './navbar.component';
import { Injectable } from '@angular/core';

@Injectable()
export class MenuService {
    
    private _menu : NavbarComponent;

    get menu(): NavbarComponent {
        return this._menu;
    }

    set menu(value : NavbarComponent) {
        this._menu = this.handleMenu(value);
    }

    private handleMenu(value : NavbarComponent) : NavbarComponent{
        return ObjectUtils.isEmpty(this._menu) ? value : this._menu;
    }
}