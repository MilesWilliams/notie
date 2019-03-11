import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotieBtnComponent } from './components/notie-btn/notie-btn.component';

@NgModule({
	imports: [CommonModule],
	declarations: [NotieBtnComponent],
	exports: [NotieBtnComponent],
})
export class UIElementsModule {}
