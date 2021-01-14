import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { VendorserviceService } from '../vendorservice.service';
import { Router } from '@angular/router'; 
@Component({
  selector: 'app-vendorlogin',
  templateUrl: './vendorlogin.component.html',
  styleUrls: ['./vendorlogin.component.css']
})
export class VendorloginComponent implements OnInit {
  public username: string;
  public password: string;
  public loading : boolean;
  hide = true;
  constructor(private _loginservice:VendorserviceService,private router: Router) { }
  public logindetails=[];
  ngOnInit(): void {
  }
  onSubmit(form:NgForm):void{
    
    this.loading = true;
    const loginPayload = {
      username: form.value["username"],
      password: form.value["password"]
    }
    this._loginservice.postlogindata(loginPayload)
    .subscribe( data => {
        console.log('success',data["Status"]);
        if( data["Status"] == 1 ){
          this.router.navigate(['navbar']);
          localStorage.setItem('venid',this.username);
          console.log(localStorage.getItem('venid'));
        }
        else {
          alert("Invalid Username or Password");
          this.loading = false;
        }
      }
    );
  }
}
