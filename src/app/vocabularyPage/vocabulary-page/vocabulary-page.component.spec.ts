import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VocabularyPageComponent } from './vocabulary-page.component';

describe('VocabularyPageComponent', () => {
  let component: VocabularyPageComponent;
  let fixture: ComponentFixture<VocabularyPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VocabularyPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VocabularyPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
