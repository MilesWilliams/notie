import { Type } from './middleware/action-checker.middleware';
import * as fromFormatting from './formating';
import { Pipes } from './pipes';
import * as fromAnimations from './animations';
import * as fromHtml from './html';
import * as fromForms from './forms';
import { BrowserDetect } from './browser/detect-browser';
import * as fromHelpers from './helpers';

export const Utils = {
	Animations: { ...fromAnimations },
	Browser: BrowserDetect,
	Format: { ...fromFormatting },
	Forms: fromForms,
	Helpers: { ...fromHelpers },
	Html: { ...fromHtml },
	Pipes: { ...Pipes },
	Type,
};
