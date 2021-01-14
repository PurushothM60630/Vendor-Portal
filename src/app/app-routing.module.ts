import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VendorloginComponent } from './vendorlogin/vendorlogin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProfileupdateComponent } from './profileupdate/profileupdate.component';
import { QuotationComponent } from './quotation/quotation.component';
import { PurchaseorderComponent } from './purchaseorder/purchaseorder.component';
import { GoodsreceiptComponent } from './goodsreceipt/goodsreceipt.component';
import { VinvoiceComponent } from './vinvoice/vinvoice.component';
import { VcreditmemoComponent } from './vcreditmemo/vcreditmemo.component';
import { PaymentoverduesComponent } from './paymentoverdues/paymentoverdues.component';

const routes: Routes = [
  {path:'vendorhome', component:VendorloginComponent},
  {path:'navbar',
   component:NavbarComponent,
   children:[
    { path:'Profileupdate', 
    component:ProfileupdateComponent
    },
    { path:'Dashboard', 
      component:DashboardComponent
    },
    { path:'Quotation', 
      component:QuotationComponent
    },
    { path:'Purchaseorder', 
      component:PurchaseorderComponent
    },
    { path:'Goodsreceipt', 
      component:GoodsreceiptComponent
    },
    { path:'vcreditmemo', 
      component:VcreditmemoComponent
    },
    { path:'vinvoice', 
      component:VinvoiceComponent
    },
    { path:'paymentoverdues', 
      component:PaymentoverduesComponent
    },
  ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
