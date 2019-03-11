import { RouterEffects } from './router.effects';
import { AuthEffects } from './auth.effects';
export const Effects: any[] = [RouterEffects, AuthEffects];

export * from './router.effects';
export * from './auth.effects';
