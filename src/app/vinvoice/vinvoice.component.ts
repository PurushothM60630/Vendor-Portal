import { Component, OnInit } from '@angular/core';
import { VendorserviceService, vinvoice } from '../vendorservice.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { InvdialogComponent } from '../invdialog/invdialog.component';
@Component({
  selector: 'app-vinvoice',
  templateUrl: './vinvoice.component.html',
  styleUrls: ['./vinvoice.component.css']
})
export class VinvoiceComponent implements OnInit {

  vinvoice: vinvoice[] = [];
  res;
  belnrvalue;
  vinv;
  showModal : boolean =false ;
  constructor(private _vendorservice: VendorserviceService, private router: Router,public dialog:MatDialog) { }
  public logininfo = localStorage.getItem('venid');
  ngOnInit(): void {
    const vendorid = {
      username: this.logininfo
    }
    this._vendorservice.getinvoicedata(vendorid)
      .subscribe(data => {
        console.log('success', data);
        this.vinvoice = data;
        //console.log(+data[0].MATNR);
        console.log(localStorage.getItem('venid'));
        //console.log(this.logininfo);
      }
      );
  }
  opendialog(BELNR){
    
    this.belnrvalue = BELNR;
    //alert(this.ebelnvalue);
    this.res = this.vinvoice.filter(it => new RegExp(BELNR).test(it.BELNR));
    //alert(JSON.stringify(this.res));
    sessionStorage.setItem("vinv",JSON.stringify(this.res));
    this.dialog.open(InvdialogComponent);
  }
}
