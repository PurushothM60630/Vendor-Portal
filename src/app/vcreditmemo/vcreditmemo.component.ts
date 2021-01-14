import { Component, OnInit } from '@angular/core';
import { VendorserviceService, cm } from '../vendorservice.service';
import { Router } from '@angular/router';
import { VcmdialogComponent } from '../vcmdialog/vcmdialog.component';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-vcreditmemo',
  templateUrl: './vcreditmemo.component.html',
  styleUrls: ['./vcreditmemo.component.css']
})
export class VcreditmemoComponent implements OnInit {
  cm: cm[] = [];
  res;
  ebelnvalue;
  vquo;
  constructor(private _vendorservice: VendorserviceService, private router: Router,public dialog:MatDialog) { }
  public logininfo = localStorage.getItem('venid');
  ngOnInit(): void {
    const vendorid = {
      username: this.logininfo
    }
    this._vendorservice.getcmdata(vendorid)
      .subscribe(data => {
        console.log('success', data);
        this.cm = data;
        //console.log(+data[0].MATNR);
        console.log(localStorage.getItem('venid'));
        //console.log(this.logininfo);
      }
      );
  }
  opendialog(EBELN){
    
    this.ebelnvalue = EBELN;
    //alert(this.ebelnvalue);
    this.res = this.cm.filter(it => new RegExp(EBELN).test(it.EBELN));
    //alert(JSON.stringify(this.res));
    sessionStorage.setItem("vcm",JSON.stringify(this.res));
    this.dialog.open(VcmdialogComponent);
  }
  
}
