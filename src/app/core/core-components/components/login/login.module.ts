import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './container/login.component';
import { LoginFormComponent } from './elements/login-form/login-form.component';
import { KlarityFormsModule } from '../../../../shared/klarity-forms/klarity-forms.module';

@NgModule({
	imports: [CommonModule, KlarityFormsModule],
	declarations: [LoginComponent, LoginFormComponent],
	exports: [LoginComponent],
})
export class LoginModule {}
