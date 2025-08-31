import { Account } from "./Account/account";
import { Settlement } from "./Settlement/settlement";

export class PensoPayClient {
  accountClient: Account;
  settlementClient: Settlement;

  constructor(apiKey: string) {
    this.accountClient = new Account(apiKey);
    this.settlementClient = new Settlement(apiKey);
  }
}