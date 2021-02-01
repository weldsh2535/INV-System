import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  },
  {
    path: 'catagory',
    loadChildren: () => import('./catagory/catagory.module').then(m => m.CatagoryPageModule)
  },
  {
    path: 'lookup',
    loadChildren: () => import('./lookup/lookup.module').then(m => m.LookupPageModule)
  },
  {
    path: 'items',
    loadChildren: () => import('./items/items.module').then(m => m.ItemsPageModule)
  },
  {
    path: 'login-user',
    loadChildren: () => import('./login-user/login-user.module').then(m => m.LoginUserPageModule)
  },
  {
    path: 'customer',
    loadChildren: () => import('./customer/customer.module').then(m => m.CustomerPageModule)
  },
  {
    path: 'supplier',
    loadChildren: () => import('./supplier/supplier.module').then(m => m.SupplierPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'item-category',
    loadChildren: () => import('./item-category/item-category.module').then(m => m.ItemCategoryPageModule)
  },
  {
    path: 'password-reset',
    loadChildren: () => import('./password-reset/password-reset.module').then(m => m.PasswordResetPageModule)
  },
  {
    path: 'sign-up',
    loadChildren: () => import('./sign-up/sign-up.module').then(m => m.SignUpPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'vendors',
    loadChildren: () => import('./vendors/vendors.module').then(m => m.VendorsPageModule)
  },
  {
    path: 'purchase',
    loadChildren: () => import('./purchase/purchase.module').then(m => m.PurchasePageModule)
  },
  {
    path: 'sale-order',
    loadChildren: () => import('./sale-order/sale-order.module').then(m => m.SaleOrderPageModule)
  },
  {
    path: 'vocher',
    loadChildren: () => import('./vocher/vocher.module').then(m => m.VocherPageModule)
  },
  {
    path: 'line-items',
    loadChildren: () => import('./line-items/line-items.module').then(m => m.LineItemsPageModule)
  },
  {
    path: 'orders-view',
    loadChildren: () => import('./orders-view/orders-view.module').then(m => m.OrdersViewPageModule)
  },
  {
    path: 'id-setting',
    loadChildren: () => import('./id-setting/id-setting.module').then(m => m.IdSettingPageModule)
  },
  {
    path: 'filter',
    loadChildren: () => import('./filter/filter.module').then(m => m.FilterPageModule)
  },
  {
    path: 'recieve-payment',
    loadChildren: () => import('./recieve-payment/recieve-payment.module').then( m => m.RecievePaymentPageModule)
  },
  {
    path: 'pay-supplier',
    loadChildren: () => import('./pay-supplier/pay-supplier.module').then( m => m.PaySupplierPageModule)
  },
  {
    path: 'payment-details',
    loadChildren: () => import('./payment-details/payment-details.module').then( m => m.PaymentDetailsPageModule)
  },
  {
    path: 'vendor-modal',
    loadChildren: () => import('./vendors/vendor-modal/vendor-modal.module').then( m => m.VendorModalPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
