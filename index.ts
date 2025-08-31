import { Account } from "./account";

export class PensoPayClient {
  accountClient: Account;

  constructor(apiKey: string) {
    this.accountClient = new Account(apiKey);
    // later: this.payment = new Payment(apiKey);
    // later: this.subscription = new Subscription(apiKey);
  }
}