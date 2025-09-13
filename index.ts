import { AccountClient } from "./Account/accountClient";
import { SettlementClient } from "./Settlement/settlementClient";
import { PaymentClient } from "./Payments/PaymentClient";
import { SubscriptionClient } from "./Subscription/SubscriptionClient";

export class PensoPayClient {
  accountClient: AccountClient;
  settlementClient: SettlementClient;
  paymentClient: PaymentClient;
  subscriptionClient: SubscriptionClient;

  constructor(apiKey: string) {
    this.accountClient = new AccountClient(apiKey);
    this.settlementClient = new SettlementClient(apiKey);
    this.paymentClient = new PaymentClient(apiKey);
    this.subscriptionClient = new SubscriptionClient(apiKey);
  }
}