import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputFieldComponent } from './components/input-field/input-field.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UIElementsModule } from '../ui-elements/ui-elements.module';

@NgModule({
	imports: [CommonModule, ReactiveFormsModule, UIElementsModule],
	declarations: [InputFieldComponent],
	exports: [InputFieldComponent, UIElementsModule],
})
export class KlarityFormsModule {}
