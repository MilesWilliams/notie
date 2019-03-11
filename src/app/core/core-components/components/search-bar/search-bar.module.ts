import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBarComponent } from './container/search-bar.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SearchBarComponent],
  exports: [SearchBarComponent],
})
export class SearchBarModule { }
