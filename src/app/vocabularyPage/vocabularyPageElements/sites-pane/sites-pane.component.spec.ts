import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitesPaneComponent } from './sites-pane.component';

describe('SitesPaneComponent', () => {
  let component: SitesPaneComponent;
  let fixture: ComponentFixture<SitesPaneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SitesPaneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SitesPaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
