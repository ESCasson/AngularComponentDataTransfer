import { TestBed } from '@angular/core/testing';

import { SelectedArticleService } from './selected-article.service';

describe('SelectedArticleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SelectedArticleService = TestBed.get(SelectedArticleService);
    expect(service).toBeTruthy();
  });
});
