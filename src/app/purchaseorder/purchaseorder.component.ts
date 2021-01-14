import { Component, OnInit } from '@angular/core';
import { VendorserviceService,po } from '../vendorservice.service';
import { Router } from '@angular/router';
import { MatDialog,MatDialogConfig } from '@angular/material/dialog';
import { from } from 'rxjs';
import { DialogComponent } from '../dialog/dialog.component';
@Component({
  selector: 'app-purchaseorder',
  templateUrl: './purchaseorder.component.html',
  styleUrls: ['./purchaseorder.component.css']
})
export class PurchaseorderComponent implements OnInit {
  po: po[] = [];
  res;
  ebelnvalue;
  vpo;
  constructor(private _vendorservice: VendorserviceService, private router: Router,public dialog:MatDialog) { }

  public logininfo = localStorage.getItem('venid');
  ngOnInit(): void {
    const vendorid = {
      username: this.logininfo
    }
    this._vendorservice.getpodata(vendorid)
      .subscribe(data => {
        console.log('success', data);
        this.po = data;
        //console.log(+data[0].MATNR);
        console.log(localStorage.getItem('venid'));
        //console.log(this.logininfo);
        
      }
      );
  }
  opendialog(EBELN){
    
    this.ebelnvalue = EBELN;
    //alert(this.ebelnvalue);
    this.res = this.po.filter(it => new RegExp(EBELN).test(it.EBELN));
    //alert(JSON.stringify(this.res));
    sessionStorage.setItem("vpo",JSON.stringify(this.res));
    this.dialog.open(DialogComponent);
  }
  
  }
