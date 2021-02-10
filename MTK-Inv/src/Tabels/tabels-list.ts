export class TabelsList {

}
export class LookupCatagory {
    id: string;
    name: string;
    picture: string;
    remark: string;
}
export class Lookup {
    id: string;
    name: string;
    type: string;
    value: string;
    remark: string;
}
export class Items {
    id: string;
    name: string;
    AmaricName: string;
    discrption: string;
    CatagoryId: string;
    type: string;
    price: number;
    Quantity: Number;
    picture: string;
    storeid: string;
    brand: string;
    remark: string;
}
export class LoginUser {
    id: number;
    username: string;
    password: string;
    Active: Boolean;
}
export class Customer {
    id: string;
    fullname: string;
    phonenumber: number;
    location: string;
    balance: number;
    address: string;
}
export class Supplier {
    id: string;
    balance: string;
    location: string;
    country: string;
    agreement: string;
    commission: number;
}

export class ItemCategory {
    id: string
    categoryName: string
    description: string
    parentcategory: string
    picture: string
}
export class Vendors {
    id: string;
    vendorName: string;
    contact: string;
    address: string;
    phonenumber: number;
    email: string;
    website: string;
    balance: string;
}
export class Purchase {
    OrderID: number;//purchaseId
    VendorId: number;//string
    purchaseNumber: string
    venderName: string
    date: string
    totalAmount: number
    type: string
    DeletedOrderItemIDs: string;
}
export class LineItem {
    LineItemID: number;
    OrderID: number;//purchaseId
    vocherId: string
    ItemID: number;//string
    ItemName: string;
    Quantity: number;
    taxAmount: number;
    Price: number;
    subTotal: number;
}
export class saleOrder {
    id: string
    saleOrderNumber: string
    customerName: string
    date: string
    location: string
}
export class Vocher {
    vocherId: string
    subTotal: number
    taxAmount: number
    grandTotal: number
    date: string
    vocherTypeId: string//(lookup)
    vendor: string
    userId: string
    PaymentStatus:string
}
export class balance {
    id: string
    itemId: number//string
    beginingAmount: number
    currentAmount: number
    storeId: string
}
export class vocherTransation {
    id: string
    ItemID: string
    vocherId: string
    fromStoreId: string
    toStoreId: string
    amount: number
}
export class AddItems {
    ItemName: string;
    Quantity: number;
    Price: number;
    Total: number;
}
export class VoucherSetting {
    voucherTypeId: string;
    attribute: string;
    value: string;
    remark: string;
}
export class IdSetting {
    id: string
    voucherTypeId: string
    prefix: string
    length: number
    suffix: string
    currentId: string
}
export class SelectedVocher {
    id: string
    name: string
}
// export class  Payment{
//     calcBalance(updateBalance:number):number{
//         return updateBalance;  
//     }
// }


    //filter 
