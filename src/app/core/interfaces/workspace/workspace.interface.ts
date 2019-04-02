import { Note } from "../notes/note.interface";

/**
 * @export
 * @interface Workspace
 * @description Workspace interface
 */
export interface Workspace {
    _id?: string;
    created_by: number;
    created_date: string;
    description: string;
    modified_by:  number;
    modified_date: string;
    name: string;
    notes?: Note[]
}