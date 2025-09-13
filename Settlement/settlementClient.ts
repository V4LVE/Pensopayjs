import { UUID } from "crypto";
import fetch from "node-fetch";
import { Settlement } from "../Models/Settlements/Settlement";

export class SettlementClient {
  private apiKey: string;
  private baseUrl = "https://api.pensopay.com/v2";

  constructor(apiKey: string) {
    this.apiKey = apiKey;
  }

  async getAllSettlements(): Promise<Settlement[]> {
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

    const data = await response.json();
    return data as Settlement[];
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

  async getSettlement(settlementId: string): Promise<Settlement> {
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

    const data = await response.json();
    return data as Settlement;
  }
}