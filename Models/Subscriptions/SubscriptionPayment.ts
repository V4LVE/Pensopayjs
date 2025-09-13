import { Payment } from "../Payments/Payment";

export interface SubscriptionPayment extends Payment {
    mandate_id: number;
}