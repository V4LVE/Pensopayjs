import { UUID } from "crypto";
import fetch from "node-fetch";

export class SettlementClient {
  private apiKey: string;
  private baseUrl = "https://api.pensopay.com/v2";

  constructor(apiKey: string) {
    this.apiKey = apiKey;
  }

  async getAllSettlements(): Promise<any> {
    const response = await fetch(`${this.baseUrl}/settlements`, {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${this.apiKey}`,
        "Content-Type": "application/json"
      }
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`PensoPay API error: ${response.status} ${JSON.stringify(errorData)}`);
    }

    return response.json();
  }

  async getSettlementTransactions(settlementId: string): Promise<any> {
    const response = await fetch(`${this.baseUrl}/settlements/${settlementId}/transactions`, {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${this.apiKey}`,
        "Content-Type": "application/json"
      }
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`PensoPay API error: ${response.status} ${JSON.stringify(errorData)}`);
    }

    return response.json();
  }

  async getSettlement(settlementId: string): Promise<any> {
    const response = await fetch(`${this.baseUrl}/settlements/${settlementId}`, {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${this.apiKey}`,
        "Content-Type": "application/json"
      }
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`PensoPay API error: ${response.status} ${JSON.stringify(errorData)}`);
    }

    return response.json();
  }
}