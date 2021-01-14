import { Component, OnInit } from '@angular/core';
import { VendorserviceService, quotation } from '../vendorservice.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { QuodialogComponent } from '../quodialog/quodialog.component';
@Component({
  selector: 'app-quotation',
  templateUrl: './quotation.component.html',
  styleUrls: ['./quotation.component.css']
})
export class QuotationComponent implements OnInit {
  num:number = 0;
  quotation: quotation[] = [];
  res;
  ebelnvalue;
  vquo;
  showModal : boolean =false ;
  constructor(private _vendorservice: VendorserviceService, private router: Router,public dialog:MatDialog) { }
  public logininfo = localStorage.getItem('venid');
  ngOnInit(): void {
    const vendorid = {
      username: this.logininfo
    }
    this._vendorservice.getquotationdata(vendorid)
      .subscribe(data => {
        console.log('success', data);
        this.quotation = data;
        console.log(+data[0].MATNR);
        console.log(localStorage.getItem('venid'));
        //console.log(this.logininfo);
      }
      );
  }
  opendialog(EBELN){
    
    this.ebelnvalue = EBELN;
    //alert(this.ebelnvalue);
    this.res = this.quotation.filter(it => new RegExp(EBELN).test(it.EBELN));
    //alert(JSON.stringify(this.res));
    sessionStorage.setItem("vquo",JSON.stringify(this.res));
    this.dialog.open(QuodialogComponent);
  }
}


 