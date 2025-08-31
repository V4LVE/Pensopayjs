import fetch from "node-fetch";

export class Account {
  private apiKey: string;
  private baseUrl = "https://api.pensopay.com/v2";

  constructor(apiKey: string) {
    this.apiKey = apiKey;
  }

  async getAccount(): Promise<any> {
    const response = await fetch(`${this.baseUrl}/account`, {
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

  async getAccountMethods(): Promise<any> {
    const response = await fetch(`${this.baseUrl}/methods`, {
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