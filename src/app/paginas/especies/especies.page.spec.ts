import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EspeciesPage } from './especies.page';

describe('EspeciesPage', () => {
  let component: EspeciesPage;
  let fixture: ComponentFixture<EspeciesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EspeciesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
