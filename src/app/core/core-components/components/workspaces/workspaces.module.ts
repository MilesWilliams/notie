import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkspacesComponent } from './container/workspaces.component';
import { WorkspaceComponent } from './components/workspace/workspace.component';
import { NoteComponent } from './components/note/note.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { Effects, WorkSpacesStateReducer } from './store';
import { NoSpacesComponent } from './components/no-spaces/no-spaces.component';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('workspaces', WorkSpacesStateReducer),
		EffectsModule.forRoot(Effects),
  ],
  declarations: [WorkspacesComponent, WorkspaceComponent, NoteComponent, NoSpacesComponent],
  exports: [WorkspacesComponent]
})
export class WorkspacesModule { }
