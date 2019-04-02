import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Workspace } from 'src/app/core/interfaces/workspace/workspace.interface';
import { Store } from '@ngrx/store';
import { getAllWorkspaces, getAllNotes, CreateNewWorkspaceSuccess, CreateNewWorkspace } from '../store';
import { Note } from 'src/app/core/interfaces/notes/note.interface';
import { WorkSpacesState } from '../store/reducers';

@Component({
  selector: 'notie-workspaces',
  templateUrl: './workspaces.component.html',
  styleUrls: ['./workspaces.component.scss']
})
export class WorkspacesComponent implements OnInit {
  private workspaces$: Observable<Workspace[]>;
  private notes$: Observable<Note[]>;
  private newWorkspace: Workspace = {
    created_by: 1,
    created_date: new Date().toISOString(),
    description: 'Enter a description here',
    modified_by:  1,
    modified_date: new Date().toISOString(),
    name: 'untitled'.toUpperCase()
  };
  
  constructor(private _store: Store<WorkSpacesState>) { 
    this.workspaces$ = this._store.select(getAllWorkspaces)
    this.notes$ = this._store.select(getAllNotes)
  }

  ngOnInit() {
  }

  public addWorkspace() {
    this._store.dispatch(new CreateNewWorkspace(this.newWorkspace));
  }

  public onNewWorkspace() {

  }

  public onDeleteWorkspace(id: number) {

  }

}
