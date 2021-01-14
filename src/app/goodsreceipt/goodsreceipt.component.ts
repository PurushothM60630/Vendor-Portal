import { Component, OnInit } from '@angular/core';
import { VendorserviceService, gr } from '../vendorservice.service';
import { Router } from '@angular/router';
import { MatDialog,MatDialogConfig } from '@angular/material/dialog';
import { GrdialogComponent } from '../grdialog/grdialog.component';
@Component({
  selector: 'app-goodsreceipt',
  templateUrl: './goodsreceipt.component.html',
  styleUrls: ['./goodsreceipt.component.css']
})
export class GoodsreceiptComponent implements OnInit {
  gr: gr[] = [];
  res;
  ebelnvalue;
  vgr;
  constructor(private _vendorservice: VendorserviceService, private router: Router,public dialog:MatDialog) { }
  public logininfo = localStorage.getItem('venid');
  ngOnInit(): void {
    const vendorid = {
      username: this.logininfo
    }
    this._vendorservice.getgrdata(vendorid)
      .subscribe(data => {
        console.log('success', data);
        this.gr = data;
        //console.log(+data[0].MATNR);
        console.log(localStorage.getItem('venid'));
        //console.log(this.logininfo);
      }
      );
  }
  opendialog(EBELN){
    
    this.ebelnvalue = EBELN;
    //alert(this.ebelnvalue);
    this.res = this.gr.filter(it => new RegExp(EBELN).test(it.EBELN));
    //alert(JSON.stringify(this.res));
    sessionStorage.setItem("vgr",JSON.stringify(this.res));
    this.dialog.open(GrdialogComponent);
  }
 

}
