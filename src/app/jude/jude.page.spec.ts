import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JudePage } from './jude.page';

describe('JudePage', () => {
  let component: JudePage;
  let fixture: ComponentFixture<JudePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(JudePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
