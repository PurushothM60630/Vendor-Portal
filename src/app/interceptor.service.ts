import { Injectable } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { VendorserviceService } from './vendorservice.service';
import {  finalize } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {
 
  constructor(public _loginservice : VendorserviceService) { }
  intercept(req: import("@angular/common/http").HttpRequest<any>, next: import("@angular/common/http").HttpHandler): import("rxjs").Observable<import("@angular/common/http").HttpEvent<any>> {
   this._loginservice.isLoading.next(true);
   return next.handle(req).pipe(
     finalize(
       ()=> {
         this._loginservice.isLoading.next(false);
       }
     )
   );
  }
}
