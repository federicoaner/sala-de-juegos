import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RuedaFortunaComponent } from './rueda-fortuna.component';

describe('RuedaFortunaComponent', () => {
  let component: RuedaFortunaComponent;
  let fixture: ComponentFixture<RuedaFortunaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RuedaFortunaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RuedaFortunaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
