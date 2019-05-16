import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViasualizarComponent } from './viasualizar.component';

describe('ViasualizarComponent', () => {
  let component: ViasualizarComponent;
  let fixture: ComponentFixture<ViasualizarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViasualizarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViasualizarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
