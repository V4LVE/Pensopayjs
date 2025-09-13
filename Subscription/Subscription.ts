import fetch from "node-fetch";

export class Subscription {
    private apiKey: string;
    private baseUrl = "https://api.pensopay.com/v2";

    constructor(apiKey: string) {
        this.apiKey = apiKey;
    }

    //#region Get Requests
    async getAllSubscriptions(per_page: number, page: number): Promise<any> {
        const response = await fetch(`${this.baseUrl}/subscriptions?per_page=${per_page}&page=${page}`, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${this.apiKey}`
            }
        });

        if (!response.ok) {
            throw new Error(`Error fetching subscriptions: ${response.statusText}`);
        }

        return response.json();
    }

    async getSubscription(subscriptionId: string): Promise<any> {
        const response = await fetch(`${this.baseUrl}/subscriptions/${subscriptionId}`, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${this.apiKey}`
            }
        });

        if (!response.ok) {
            throw new Error(`Error fetching subscription: ${response.statusText}`);
        }

        return response.json();
    }

    async getAllMandates(subscriptionId: string, per_page: number, page: number): Promise<any> {
        const response = await fetch(`${this.baseUrl}/subscriptions/${subscriptionId}/mandates?per_page=${per_page}&page=${page}`, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${this.apiKey}`
            }
        });

        if (!response.ok) {
            throw new Error(`Error fetching mandates: ${response.statusText}`);
        }

        return response.json();
    }

    async getMandate(subscriptionId: number, mandateId: number): Promise<any> {
        const response = await fetch(`${this.baseUrl}/subscriptions/${subscriptionId}/mandates/${mandateId}`, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${this.apiKey}`
            }
        });

        if (!response.ok) {
            throw new Error(`Error fetching mandate: ${response.statusText}`);
        }

        return response.json();
    }
    

    //#endregion

    //#region Create Requests

    //#endregion

    //#region Post Actions

    //#endregion
}