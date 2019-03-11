import { UIElementsModule } from './ui-elements.module';

describe('UIElementsModule', () => {
  let uIElementsModule: UIElementsModule;

  beforeEach(() => {
    uIElementsModule = new UIElementsModule();
  });

  it('should create an instance', () => {
    expect(uIElementsModule).toBeTruthy();
  });
});
