import { Account } from "./Account/account";
import { Settlement } from "./Settlement/settlement";
import { Payment } from "./Payments/Payment";
import { Subscription } from "./Subscription/Subscription";

export class PensoPayClient {
  accountClient: Account;
  settlementClient: Settlement;
  paymentClient: Payment;
  subscriptionClient: Subscription;

  constructor(apiKey: string) {
    this.accountClient = new Account(apiKey);
    this.settlementClient = new Settlement(apiKey);
    this.paymentClient = new Payment(apiKey);
    this.subscriptionClient = new Subscription(apiKey);
  }
}