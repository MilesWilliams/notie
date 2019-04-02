import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { ISearchState } from 'src/app/core/store/reducers/search.reducer';
import { hasQuery, HasQuery, SearchWorkspaces } from 'src/app/core/store';
import { Subscription } from 'rxjs';

@Component({
  selector: 'notie-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit, OnDestroy {
  private hasQuery: Boolean = false;
  private hasQuerySubscription: Subscription;

  constructor(private _store: Store<ISearchState>) {
    this.hasQuerySubscription = this._store.select(hasQuery).subscribe({
      next: res => this.hasQuery = res
    });
  }

  ngOnInit() {
  }

  public onTyping(e: KeyboardEvent) {
    const inputEl: HTMLInputElement = <HTMLInputElement>e.srcElement;
    const query: string = inputEl.value;

    if (query.length === 0 || !this.hasQuery) return this._store.dispatch(new HasQuery); 

    this._store.dispatch(new SearchWorkspaces(query));
  }

  ngOnDestroy() {
    this.hasQuerySubscription.unsubscribe();
  }
}
