import { Workspace } from "../interfaces/workspace/workspace.interface";
import { Note } from "../interfaces/notes/note.interface";

export class Space implements Workspace {
    public id: number;
    public created_by: number;
    public created_date: string;
    public description: string;
    public modified_by:  number;
    public modified_date: string;
    public name: string;
    public notes?: Note[];

    constructor() {}

    get ID(): number {
        return this.id;
    };

    set ID(nVal: number) {
        this.id = nVal;
    };

    get CreatedBy(): number {
        return this.created_by;
    };

    set CreatedBy(nVal: number) {
        this.created_by = nVal;
    };

    get CreatedDate(): string {
        return this.created_date;
    };

    set CreatedDate(nVal: string) {
        this.created_date = nVal;
    };

    get Description(): string {
        return this.description;
    };

    set Description(nVal: string) {
        this.description = nVal;
    };

    get ModifiedBy(): number {
        return this.modified_by;
    };

    set ModifiedBy(nVal: number) {
        this.modified_by = nVal;
    };

    get ModifiedDate(): string {
        return this.modified_date;
    };

    set ModifiedDate(nVal: string) {
        this.modified_date = nVal;
    };

    get Name(): string {
        return this.name;
    };

    set Name(nVal: string) {
        this.name = nVal;
    };

    set InsertNotes(notes: Note[]) {
        this.notes = notes;
    }


    get Values(): Workspace {
        return {
            created_by: this.CreatedBy,
            created_date: this.CreatedDate,
            description: this.Description,
            modified_by: this.ModifiedBy,
            modified_date: this.ModifiedDate,
            name: this.Name
        };
    }
}