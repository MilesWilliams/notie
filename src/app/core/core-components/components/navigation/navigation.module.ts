import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './container/nav-bar.component';
import { NavItemComponent } from './components/nav-item/nav-item.component';
import { SearchBarModule } from '../search-bar/search-bar.module';

@NgModule({
	imports: [CommonModule, SearchBarModule],
	declarations: [NavBarComponent, NavItemComponent],
	exports: [NavBarComponent],
})
export class NavigationModule {}
