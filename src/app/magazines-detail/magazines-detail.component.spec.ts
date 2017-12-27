import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MagazinesDetailComponent } from './magazines-detail.component';

describe('MagazinesDetailComponent', () => {
  let component: MagazinesDetailComponent;
  let fixture: ComponentFixture<MagazinesDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MagazinesDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MagazinesDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
