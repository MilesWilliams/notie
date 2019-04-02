import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Space } from 'src/app/core/models/workspace.model';
import { Store } from '@ngrx/store';
import { WorkSpacesState } from '../../store/reducers';
import { CreateNewWorkspace } from '../../store';

@Component({
  selector: 'notie-add-workspace',
  templateUrl: './add-workspace.component.html',
  styleUrls: ['./add-workspace.component.scss']
})
export class AddWorkspaceComponent implements OnInit {
  public workspaceForm: FormGroup;
  private newWorkspace: Space = new Space();

  constructor(private fb: FormBuilder, private _store: Store<WorkSpacesState>) { }

  ngOnInit() {
    this.workspaceForm = this.fb.group({
      name: this.fb.control('UNTITLED', Validators.compose([Validators.required, Validators.maxLength(32)])),
      description: this.fb.control('Enter a description here', Validators.required)
    });
  }

  public onSubmit() {
    this.newWorkspace.Name = this.workspaceForm.get('name').value;
    this.newWorkspace.Description = this.workspaceForm.get('description').value;

    this._store.dispatch(new CreateNewWorkspace(this.newWorkspace.Values));
  }
}