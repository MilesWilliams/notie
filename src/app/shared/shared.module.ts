import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KlarityFormsModule } from './klarity-forms/klarity-forms.module';
import { UIElementsModule } from './ui-elements/ui-elements.module';

@NgModule({
	imports: [CommonModule, KlarityFormsModule, UIElementsModule],
	declarations: [],
	exports: [KlarityFormsModule, UIElementsModule],
})
export class SharedModule {}
