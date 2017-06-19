import { ThecawPage } from './app.po';

describe('thecaw App', () => {
  let page: ThecawPage;

  beforeEach(() => {
    page = new ThecawPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
