import { Note } from "../notes/note.interface";

/**
 * @export
 * @interface Workspace
 * @description Workspace interface
 */
export interface Workspace {
    id: number;
    created_by: number;
    created_date: number;
    description: string;
    modified_by:  number;
    modified_date: string;
    name: string;
    notes?: Note[]
}