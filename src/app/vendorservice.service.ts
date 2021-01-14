import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

export interface logindata {

  username: string,
  password: string
}
export interface userform {

  Name: string,
  VendorID: string,
  Address: string,
  City: String,
  State: string,
  Country: string,
  Pincode: string,
  Phonenumber: string,
  Fax: string
}
export interface quotation {
  BUKRS: string,
  EBELN: string,
  BSART: string,
  BSTYP: string,
  AEDAT: string,
  ERNAM: string,
  EKORG: string,
  EKGRP: string,
  LIFNR: string,
  BEDAT: string,
  ANGDT: string,
  KDATE: string,
  ANGNR: string,
  TELF1: string,
  KUNNR: string,
  MATNR: string,
  TXZ01: string,
  MENGE: string,
  MEINS: string,
  NETPR: string,
  NETWR: string,
  WAERS: string,
  EBELP: string,
  BUTXT: string,
}
export interface po {
  EBELN: string,
  BSTYP: string,
  BSART: string,
  KDATE: string,
  WAERS: string,
  EKORG: string,
  STATU: string,
  AEDAT: string,
  ERNAM: string,
  LIFNR: string,
  ANGDT: string,
  EBELP: string,
  TXZ01: string,
  MATNR: string,
  MATKL: string,
  WERKS: string,
  LGORT: string,
  BEDNR: string,
  MENGE: string,
  MEINS: string,
  ELIKZ: string,
  PSTYP: string,
  NTGEW: string,
  GEWEI: string,
  NETPR: string,
  NETWR: string,
  BRTWR: string,
  BUTXT: string,
  ORT01: string,
  LAND1: string,
}
export interface gr {
    MBLNR: string,
    MJAHR: string,
    BLDAT: string,
    BUDAT: string,
    CPUDT: string,
    CPUTM: string,
    ZEILE: string,
    BWART: string,
    LIFNR: string,
    MATNR: string,
    MAKTX: string,
    WERKS: string,
    WAERS: string,
    LGORT: string,
    DMBTR: string,
    MENGE: string,
    MEINS: string,
    ERFMG: string,
    ERFME: string,
    BPMNG: string,
    BPRME: string,
    EBELN: string,
    STATUS: string,
    SGTXT: string,
    BUKRS: string,
    BUTXT: string,
}
export interface cm {
  BELNR: string,
  GJAHR: string,
  BLART: string,
  BLDAT: string,
  VGART: string,
  LIFNR: string,
  XRECH: string,
  RMWWR: string,
  BUZEI: string,
  EBELN: string,
  EBELP: string,
  MATNR: string,
  BUKRS: string,
  WERKS: string,
  WRBTR: string,
  MWSKZ: string,
  MENGE: string,
  MEINS: string,
  BUTXT: string,
  ORT01: string,
  LAND1: string,
  MAKTX: string
}
export interface vinvoice {
  LIFNR: string,
  BUKRS: string,
  GJAHR: string,
  BUZEI: string,
  BELNR: string,
  BUDAT: string,
  WAERS: string,
  BLART: string,
  SHKZG: string,
  ADMBTR: string,
  MWSTS: string,
  SAKNR: string,
  BDMBTR: string,
  PSWSL: string,
  MATNR: string,
  MAKTX: string,
  WERKS: string,
  MENGE: string,
  MEINS: string,
  BUTXT: string,
  ORT01: string,
  LAND1: string,
  DMBTR: string,
}
export interface paymentods {
    LIFNR: string,
    BUDAT: string,
    DMBTR: string,
    MWSTS: string,
    EBELN: string,
    ZFBDT: string,
    ZTERM: string,
    ZBD1T: string,
}
@Injectable({
  providedIn: 'root'
})
export class VendorserviceService {
  public isLoading:BehaviorSubject<boolean> = new BehaviorSubject <boolean>(false);
  private url: string = "http://localhost:8080/";
  constructor(private http: HttpClient) { }
  postlogindata(loginPayload): Observable<logindata[]> {
    return this.http.post<logindata[]>('http://localhost:8080/' + 'vendorlogin', loginPayload);
  }
  getuserformdata(vendorid): Observable<userform[]> {
    return this.http.post<userform[]>('http://localhost:8080/' + 'vendorprofile', vendorid);
  }
  getprofileupdate(profileupdatePayload): Observable<userform[]> {
    return this.http.post<userform[]>('http://localhost:8080/' + 'vendorprofileupdate', profileupdatePayload);
  }
  getquotationdata(vendorid): Observable<quotation[]> {
    console.log(vendorid);
    return this.http.post<quotation[]>('http://localhost:8080/' + 'quotation', vendorid);
  }
  getpodata(vendorid): Observable<po[]> {
    console.log(vendorid);
    return this.http.post<po[]>('http://localhost:8080/' + 'purchaseorder', vendorid);
  }
  getgrdata(vendorid): Observable<gr[]> {
    console.log(vendorid);
    return this.http.post<gr[]>('http://localhost:8080/' + 'goodsreceipt', vendorid);
  }
  getcmdata(vendorid): Observable<cm[]> {
    console.log(vendorid);
    return this.http.post<cm[]>('http://localhost:8080/' + 'vcreditmemo', vendorid);
  }
  getinvoicedata(vendorid): Observable<vinvoice[]> {
    console.log(vendorid);
    return this.http.post<vinvoice[]>('http://localhost:8080/' + 'vinvoice', vendorid);
  }
  getpaymentodsdata(vendorid): Observable<paymentods[]> {
    console.log(vendorid);
    return this.http.post<paymentods[]>('http://localhost:8080/' + 'paymentoverdues', vendorid);
  }
}
