import { KlarityFormsModule } from './klarity-forms.module';

describe('KlarityFormsModule', () => {
  let klarityFormsModule: KlarityFormsModule;

  beforeEach(() => {
    klarityFormsModule = new KlarityFormsModule();
  });

  it('should create an instance', () => {
    expect(klarityFormsModule).toBeTruthy();
  });
});
