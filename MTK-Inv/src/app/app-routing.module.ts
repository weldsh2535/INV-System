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
  //generate report 
  {
    path: 'product-price-list',
    loadChildren: () => import('./report/Sale/product-price-list/product-price-list.module').then( m => m.ProductPriceListPageModule)
  },
  {
    path: 'product-sale',
    loadChildren: () => import('./report/Sale/product-sale/product-sale.module').then( m => m.ProductSalePageModule)
  },
  {
    path: 'sale-order-profit',
    loadChildren: () => import('./report/Sale/sale-order-profit/sale-order-profit.module').then( m => m.SaleOrderProfitPageModule)
  },
  {
    path: 'sale-order-summary',
    loadChildren: () => import('./report/Sale/sale-order-summary/sale-order-summary.module').then( m => m.SaleOrderSummaryPageModule)
  },
  {
    path: 'sale-order-by-sales',
    loadChildren: () => import('./report/Sale/sale-order-by-sales/sale-order-by-sales.module').then( m => m.SaleOrderBySalesPageModule)
  },
  {
    path: 'customer',
    loadChildren: () => import('./report/Sale/customers/customer.module').then( m => m.CustomerPageModule)
  },
  {
    path: 'operations',
    loadChildren: () => import('./report/Sale/operations/operations.module').then( m => m.OperationsPageModule)
  },
  {
    path: 'sale-taxes',
    loadChildren: () => import('./report/Sale/sale-taxes/sale-taxes.module').then( m => m.SaleTaxesPageModule)
  },
  {
    path: 'orders',
    loadChildren: () => import('./report/Purchases/orders/orders.module').then( m => m.OrdersPageModule)
  },
  {
    path: 'vendors',
    loadChildren: () => import('./report/Purchases/vendors/vendors.module').then( m => m.VendorsPageModule)
  },
  {
    path: 'purchase-order-status',
    loadChildren: () => import('./report/Purchases/purchase-order-status/purchase-order-status.module').then( m => m.PurchaseOrderStatusPageModule)
  },
  {
    path: 'purchasing-tax',
    loadChildren: () => import('./report/Purchases/purchasing-tax/purchasing-tax.module').then( m => m.PurchasingTaxPageModule)
  },
  {
    path: 'inventory',
    loadChildren: () => import('./report/Stock-Level/inventory/inventory.module').then( m => m.InventoryPageModule)
  },
  {
    path: 'historical-inventory',
    loadChildren: () => import('./report/Stock-Level/historical-inventory/historical-inventory.module').then( m => m.HistoricalInventoryPageModule)
  },
  {
    path: 'inventory-aging',
    loadChildren: () => import('./report/Stock-Level/inventory-aging/inventory-aging.module').then( m => m.InventoryAgingPageModule)
  },
  {
    path: 'customer-payments',
    loadChildren: () => import('./report/Inventory-Payment/customer-payments/customer-payments.module').then( m => m.CustomerPaymentsPageModule)
  },
  {
    path: 'vendor-payment-details',
    loadChildren: () => import('./report/Inventory-Payment/vendor-payment-details/vendor-payment-details.module').then( m => m.VendorPaymentDetailsPageModule)
  },
  {
    path: 'taxes',
    loadChildren: () => import('./report/Inventory-Payment/taxes/taxes.module').then( m => m.TaxesPageModule)
  },
  {
    path: 'sales-order-profit',
    loadChildren: () => import('./report/Inventory-Payment/sales-order-profit/sales-order-profit.module').then( m => m.SalesOrderProfitPageModule)
  },
  {
    path: 'inventory-movement-log',
    loadChildren: () => import('./report/Audit/inventory-movement-log/inventory-movement-log.module').then( m => m.InventoryMovementLogPageModule)
  },
  {
    path: 'product-cost',
    loadChildren: () => import('./report/Audit/product-cost/product-cost.module').then( m => m.ProductCostPageModule)
  },
  {
    path: 'stock-transfer',
    loadChildren: () => import('./report/Audit/stock-transfer/stock-transfer.module').then( m => m.StockTransferPageModule)
  },
  {
    path: 'count-sheet',
    loadChildren: () => import('./report/Audit/count-sheet/count-sheet.module').then( m => m.CountSheetPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
