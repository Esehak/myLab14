import { MyLab14Page } from './app.po';

describe('my-lab14 App', function() {
  let page: MyLab14Page;

  beforeEach(() => {
    page = new MyLab14Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
