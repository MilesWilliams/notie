import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotieBtnComponent } from './components/notie-btn/notie-btn.component';
import { CardComponent } from './components/card/card.component';

@NgModule({
	imports: [CommonModule],
	declarations: [NotieBtnComponent, CardComponent],
	exports: [NotieBtnComponent, CardComponent],
})
export class UIElementsModule {}
