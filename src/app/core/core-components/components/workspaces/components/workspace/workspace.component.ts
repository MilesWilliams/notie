import { Component, Input, OnChanges, SimpleChanges, AfterContentChecked } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

import { WorkSpacesState } from '../../store/reducers';
import { DeleteWorkspace, CreateNewNote } from '../../store';
import { Workspace } from 'src/app/core/interfaces/workspace/workspace.interface';
import { Note } from 'src/app/core/interfaces/notes/note.interface';

@Component({
  selector: 'notie-workspace',
  templateUrl: './workspace.component.html',
  styleUrls: ['./workspace.component.scss']
})
export class WorkspaceComponent implements OnChanges, AfterContentChecked {
  @Input() space: Workspace;
  public workspaceForm: FormGroup;
  
  public isEdited: boolean = false;
  public isHovering: boolean = false;

  constructor(private fb: FormBuilder, private _store: Store<WorkSpacesState>) {  }

  ngOnChanges(changes: SimpleChanges) {
      if (changes.space && changes.space.currentValue !== changes.space.previousValue) {
        const currentValue = <Workspace>changes.space.currentValue;
        
        this.workspaceForm = this.fb.group({
          name: this.fb.control(currentValue.name, Validators.compose([Validators.required, Validators.maxLength(32)])),
          description: this.fb.control(currentValue.description, Validators.required)
        });
      }
  }

  ngAfterContentChecked() {
    this.isEdited = this.workspaceForm.dirty;
  }

  public deleteWorkspace() {
    return this._store.dispatch(new DeleteWorkspace(this.space._id));
  }

  public addNote() {
    const newNote: Note = {
      content: '',
      created_by: 1,
      created_date: new Date().toISOString(),
      icon: '',
      modified_by: 1,
      modified_date: new Date().toISOString(),
      title: 'Untitle'
    };
    this._store.dispatch(new CreateNewNote({note: newNote, space_id: this.space._id}));
  }

  public saveChanges() {

  }
}
