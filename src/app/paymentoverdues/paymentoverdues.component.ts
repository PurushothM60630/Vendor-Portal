import { Component, OnInit } from '@angular/core';
import { VendorserviceService, paymentods } from '../vendorservice.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-paymentoverdues',
  templateUrl: './paymentoverdues.component.html',
  styleUrls: ['./paymentoverdues.component.css']
})
export class PaymentoverduesComponent implements OnInit {
  paymentods: paymentods[] = [];
  showModal : boolean =false ;
  constructor(private _vendorservice: VendorserviceService, private router: Router) { }
  public logininfo = localStorage.getItem('venid');
  ngOnInit(): void {
    const vendorid = {
      username: this.logininfo
    }
    this._vendorservice.getpaymentodsdata(vendorid)
      .subscribe(data => {
        console.log('success', data);
        this.paymentods = data;
        //console.log(+data[0].MATNR);
        console.log(localStorage.getItem('venid'));
        //console.log(this.logininfo);
      }
      );
  }
 


}
