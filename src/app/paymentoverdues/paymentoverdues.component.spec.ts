import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentoverduesComponent } from './paymentoverdues.component';

describe('PaymentoverduesComponent', () => {
  let component: PaymentoverduesComponent;
  let fixture: ComponentFixture<PaymentoverduesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentoverduesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentoverduesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
