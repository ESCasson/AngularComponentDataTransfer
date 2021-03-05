import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HighlightedArticleComponent } from './highlighted-article.component';

describe('HighlightedArticleComponent', () => {
  let component: HighlightedArticleComponent;
  let fixture: ComponentFixture<HighlightedArticleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HighlightedArticleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HighlightedArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
