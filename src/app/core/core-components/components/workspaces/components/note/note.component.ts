import { Component, OnInit, Input } from '@angular/core';
import { Note } from 'src/app/core/interfaces/notes/note.interface';

@Component({
  selector: 'notie-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {
  @Input() note: Note;
  constructor() { }

  ngOnInit() {
  }

}
