import { SharedListPage } from './app.po';

describe('shared-list App', () => {
  let page: SharedListPage;

  beforeEach(() => {
    page = new SharedListPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
