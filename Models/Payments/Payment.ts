import { Order } from "./Order";
import { PaymentDetails } from "./PaymentDetails";

export interface Payment {
    account_id: number;
    amount: number;
    autocapture: boolean;
    callback_url: string;
    cancel_url: string;
    success_url: string;
    captured: boolean;
    type: string;
    currency: string;
    facilitator: string;
    acquirer: string;
    id: number;
    link: string;
    link_uuid: string;
    methods: string[];
    remote_ip: string;
    locale: string;
    order: Order;
    order_id: string;
    refrence: string;
    refunded: number;
    state: string;
    testmode: boolean;
    text_on_statement: string;
    updated_at: string;
    created_at: string;
    expires_at: string;
    mandate_id?: number;
    subscription_id?: number;
    version: number;
    payment_details: PaymentDetails;
}