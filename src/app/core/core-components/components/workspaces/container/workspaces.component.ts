import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Workspace } from 'src/app/core/interfaces/workspace/workspace.interface';
import { Store } from '@ngrx/store';
import { WorkSpacesState, getAllWorkspaces, getAllNotes } from '../store';
import { Note } from 'src/app/core/interfaces/notes/note.interface';

@Component({
  selector: 'notie-workspaces',
  templateUrl: './workspaces.component.html',
  styleUrls: ['./workspaces.component.scss']
})
export class WorkspacesComponent implements OnInit {
  private workspaces$: Observable<Workspace[]>;
  private notes$: Observable<Note[]>;
  
  constructor(private _store: Store<WorkSpacesState>) { 
    this.workspaces$ = this._store.select(getAllWorkspaces)
    this.notes$ = this._store.select(getAllNotes)
  }

  ngOnInit() {
  }

  public onNewWorkspace() {

  }

  public onDeleteWorkspace(id: number) {

  }

}
