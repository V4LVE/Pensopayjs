import { Basket } from "./Basket";
import { Address } from "../Address";
import { Shipping } from "../Shipping";

export interface Order {
    basket: Basket[];
    billing_address: Address;
    shipping: Shipping;
    shipping_address: Address;
}