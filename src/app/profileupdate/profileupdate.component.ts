import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,FormArray,FormBuilder } from '@angular/forms';
import { VendorserviceService } from '../vendorservice.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';
@Component({
  selector: 'app-profileupdate',
  templateUrl: './profileupdate.component.html',
  styleUrls: ['./profileupdate.component.css']
})
export class ProfileupdateComponent implements OnInit {
  disabledbutton : boolean = true ;
  userform:FormGroup;
  public userdetails=[];
  constructor(private _loginservice:VendorserviceService) { 
    this.userform = new FormGroup({
      "Name" : new FormControl(),
      "VendorID" : new FormControl(),
      "Address" : new FormControl(),
      "City" : new FormControl(),
      "State" : new FormControl(),
      "Country" : new FormControl(),
      "Pincode" : new FormControl(),
      "Phonenumber" : new FormControl(),
      "Fax" : new FormControl(),
    })
  }
  public logininfo = localStorage.getItem('venid');
  ngOnInit(): void {
    this.userform.disable();
    const vendorid = {
      username: this.logininfo
    }
        this._loginservice.getuserformdata(vendorid)
    .subscribe(data =>{
      this.userdetails = data;
      console.log(data);
      console.log(data["Name"]);
      this.userform.controls['Name'].setValue(data["Name"]),
      this.userform.controls['VendorID'].setValue(data["VendorID"]),
      this.userform.controls['Address'].setValue(data["Address"]),
      this.userform.controls['City'].setValue(data["City"]),
      this.userform.controls['State'].setValue(data["State"]),
      this.userform.controls['Country'].setValue(data["Country"]),
      this.userform.controls['Pincode'].setValue(data["Pincode"]),
      this.userform.controls['Phonenumber'].setValue(data["Phonenumber"]),
      this.userform.controls['Fax'].setValue(data["Fax"])
    }  );
  }
  enableformgroup(){
    this.userform.enable();
  }
  disableformgroup(){
     this.userform.disable();
     const profileupdatePayload = {
      name: this.userform.controls['Name'].value,
      vendorid : this.userform.controls['VendorID'].value,
      address : this.userform.controls['Address'].value,
      city : this.userform.controls['City'].value,
      state : this.userform.controls['State'].value,
      country : this.userform.controls['Country'].value,
      pincode : this.userform.controls['Pincode'].value,
      contact : this.userform.controls['Phonenumber'].value,
      fax : this.userform.controls['Fax'].value,

  }
  this._loginservice.getprofileupdate(profileupdatePayload)
    .subscribe( data => {
       this.userdetails = data;
       console.log(data);
      this.userform.controls['Name'].setValue(data["Name"]),
      this.userform.controls['VendorID'].setValue(data["VendorID"]),
      this.userform.controls['Address'].setValue(data["Address"]),
      this.userform.controls['City'].setValue(data["City"]),
      this.userform.controls['State'].setValue(data["State"]),
      this.userform.controls['Country'].setValue(data["Country"]),
      this.userform.controls['Pincode'].setValue(data["Pincode"]),
      this.userform.controls['Phonenumber'].setValue(data["Phonenumber"]),
      this.userform.controls['Fax'].setValue(data["Fax"]) 
    } 
      ); 
      
      Swal.fire('Profile Updated!');
      //alert("Updated to sap database!");
}
}