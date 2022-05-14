import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JuegoAudioperceptivaComponent } from './juego-audioperceptiva.component';

describe('JuegoAudioperceptivaComponent', () => {
  let component: JuegoAudioperceptivaComponent;
  let fixture: ComponentFixture<JuegoAudioperceptivaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JuegoAudioperceptivaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JuegoAudioperceptivaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
