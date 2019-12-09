import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroSearchedComponent } from './hero-searched.component';

describe('HeroSearchedComponent', () => {
  let component: HeroSearchedComponent;
  let fixture: ComponentFixture<HeroSearchedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroSearchedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroSearchedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
