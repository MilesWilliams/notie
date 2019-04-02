import { RouterEffects } from './router.effects';
import { AuthEffects } from './auth.effects';
import { SearchEffects } from './search.effects';

export const Effects: any[] = [RouterEffects, AuthEffects, SearchEffects];

export * from './router.effects';
export * from './auth.effects';
export * from './search.effects';
