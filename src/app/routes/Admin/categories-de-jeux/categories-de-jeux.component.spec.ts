import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesDeJeuxComponent } from './categories-de-jeux.component';

describe('CategoriesDeJeuxComponent', () => {
  let component: CategoriesDeJeuxComponent;
  let fixture: ComponentFixture<CategoriesDeJeuxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoriesDeJeuxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoriesDeJeuxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
