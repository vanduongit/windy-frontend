import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MagazinesCreateComponent } from './magazines-create.component';

describe('MagazinesCreateComponent', () => {
  let component: MagazinesCreateComponent;
  let fixture: ComponentFixture<MagazinesCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MagazinesCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MagazinesCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
