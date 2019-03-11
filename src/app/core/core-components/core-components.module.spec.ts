import { CoreComponentsModule } from './core-components.module';

describe('CoreComponentsModule', () => {
  let coreComponentsModule: CoreComponentsModule;

  beforeEach(() => {
    coreComponentsModule = new CoreComponentsModule();
  });

  it('should create an instance', () => {
    expect(coreComponentsModule).toBeTruthy();
  });
});
