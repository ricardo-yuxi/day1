import { SeedProjectPage } from './app.po';

describe('seed-project App', () => {
  let page: SeedProjectPage;

  beforeEach(() => {
    page = new SeedProjectPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
