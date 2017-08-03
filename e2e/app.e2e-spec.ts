import { HillelAppPage } from './app.po';

describe('hillel-app App', () => {
  let page: HillelAppPage;

  beforeEach(() => {
    page = new HillelAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
