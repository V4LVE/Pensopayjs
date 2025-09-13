import { Account } from "./Account/account";
import { Settlement } from "./Settlement/settlement";
import { Payment } from "./Payments/Payment";

export class PensoPayClient {
  accountClient: Account;
  settlementClient: Settlement;
  paymentClient: Payment;

  constructor(apiKey: string) {
    this.accountClient = new Account(apiKey);
    this.settlementClient = new Settlement(apiKey);
    this.paymentClient = new Payment(apiKey);
  }
}