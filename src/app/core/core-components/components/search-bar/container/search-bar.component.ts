import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'notie-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public onTyping(e: KeyboardEvent) {
    const inputEl: HTMLInputElement = <HTMLInputElement>e.srcElement;
    console.log('onTyping: ', inputEl.value);
    
  }
}
