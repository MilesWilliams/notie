import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkspacesComponent } from './container/workspaces.component';
import { WorkspaceComponent } from './components/workspace/workspace.component';
import { NoteComponent } from './components/note/note.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { Effects } from './store';
import { NoSpacesComponent } from './components/no-spaces/no-spaces.component';
import { WorkSpacesStateReducer } from './store/reducers';
import { Guards } from './guards';
import { AddWorkspaceComponent } from './components/add-workspace/add-workspace.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UIElementsModule } from 'src/app/shared/ui-elements/ui-elements.module';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('workspaces', WorkSpacesStateReducer),
    EffectsModule.forRoot(Effects),
    FormsModule,
    ReactiveFormsModule,
    UIElementsModule
  ],
  declarations: [WorkspacesComponent, WorkspaceComponent, NoteComponent, NoSpacesComponent, AddWorkspaceComponent],
  exports: [WorkspacesComponent],
  providers: [...Guards]
})
export class WorkspacesModule { }
