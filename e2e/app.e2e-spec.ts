import { TjBettyPage } from './app.po';

describe('tj-betty App', function() {
  let page: TjBettyPage;

  beforeEach(() => {
    page = new TjBettyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
