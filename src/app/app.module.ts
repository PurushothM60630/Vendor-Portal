import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule,NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDialogModule } from '@angular/material/dialog';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CarouselModule, WavesModule } from 'angular-bootstrap-md';
import { MatProgressBarModule } from '@angular/material/progress-bar';
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
import { InterceptorService } from './interceptor.service';
import { DialogComponent } from './dialog/dialog.component';
import { GrdialogComponent } from './grdialog/grdialog.component';
import { QuodialogComponent } from './quodialog/quodialog.component';
import { InvdialogComponent } from './invdialog/invdialog.component';
import { VcmdialogComponent } from './vcmdialog/vcmdialog.component';
@NgModule({
  declarations: [
    AppComponent,
    VendorloginComponent,
    DashboardComponent,
    NavbarComponent,
    ProfileupdateComponent,
    QuotationComponent,
    PurchaseorderComponent,
    GoodsreceiptComponent,
    VinvoiceComponent,
    VcreditmemoComponent,
    PaymentoverduesComponent,
    DialogComponent,
    GrdialogComponent,
    QuodialogComponent,
    InvdialogComponent,
    VcmdialogComponent
  ],
  entryComponents :[DialogComponent,
    GrdialogComponent,
    QuodialogComponent,
    InvdialogComponent,
    VcmdialogComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    BrowserAnimationsModule,NoopAnimationsModule,
    FormsModule, ReactiveFormsModule,
    FlexLayoutModule,MatFormFieldModule,
    MatInputModule,MatButtonModule,
    MatCardModule,MatMenuModule,
    MatToolbarModule,MatIconModule,
    MatSidenavModule,MatListModule,
    MatTabsModule,HttpClientModule,
    CarouselModule, WavesModule,
    MatProgressBarModule,
    MatDialogModule,
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS,useClass:InterceptorService,multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
