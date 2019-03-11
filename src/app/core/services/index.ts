import { AuthService } from './authentication/auth.service';
import { DynamicTitleService } from './dynamic-title/dynamic-title.service';
import { WortkspaceService } from './workspace/workspace.service';
import { NotesService } from './notes/notes.service';

/**
 * @description Add all your services to the array to keep things neat and tidy.
 */
export const services: any[] = [AuthService, DynamicTitleService, WortkspaceService, NotesService];

export { AuthService } from './authentication/auth.service';
export { DynamicTitleService } from './dynamic-title/dynamic-title.service';
export { WortkspaceService } from './workspace/workspace.service';
export { NotesService } from './notes/notes.service';