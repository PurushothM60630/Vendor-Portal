import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VcreditmemoComponent } from './vcreditmemo.component';

describe('VcreditmemoComponent', () => {
  let component: VcreditmemoComponent;
  let fixture: ComponentFixture<VcreditmemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VcreditmemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VcreditmemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
