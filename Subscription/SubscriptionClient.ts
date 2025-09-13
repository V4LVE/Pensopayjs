import fetch from "node-fetch";
import { CreateSubscriptionParams, CreateSubscriptionPaymentParams, CreateMandateParams } from "./Params/SubscriptionParams";
import { Subscription } from "../Models/Subscriptions/Subscription";
import { Mandate } from "../Models/Subscriptions/Mandate";
import { SubscriptionPayment } from "../Models/Subscriptions/SubscriptionPayment";

export class SubscriptionClient {
    private apiKey: string;
    private baseUrl = "https://api.pensopay.com/v2";

    constructor(apiKey: string) {
        this.apiKey = apiKey;
    }

    //#region Get Requests
    async getAllSubscriptions(per_page: number, page: number): Promise<Subscription[]> {
        const response = await fetch(`${this.baseUrl}/subscriptions?per_page=${per_page}&page=${page}`, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${this.apiKey}`
            }
        });

        if (!response.ok) {
            throw new Error(`Error fetching subscriptions: ${response.statusText}`);
        }

        const data = await response.json();
        return data as Subscription[];
    }

    async getSubscription(subscriptionId: string): Promise<Subscription> {
        const response = await fetch(`${this.baseUrl}/subscriptions/${subscriptionId}`, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${this.apiKey}`
            }
        });

        if (!response.ok) {
            throw new Error(`Error fetching subscription: ${response.statusText}`);
        }

        const data = await response.json();
        return data as Subscription;
    }

    async getAllMandates(subscriptionId: string, per_page: number, page: number): Promise<Mandate[]> {
        const response = await fetch(`${this.baseUrl}/subscriptions/${subscriptionId}/mandates?per_page=${per_page}&page=${page}`, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${this.apiKey}`
            }
        });

        if (!response.ok) {
            throw new Error(`Error fetching mandates: ${response.statusText}`);
        }

        const data = await response.json();
        return data as Mandate[];
    }

    async getMandate(subscriptionId: number, mandateId: number): Promise<Mandate> {
        const response = await fetch(`${this.baseUrl}/subscriptions/${subscriptionId}/mandates/${mandateId}`, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${this.apiKey}`
            }
        });

        if (!response.ok) {
            throw new Error(`Error fetching mandate: ${response.statusText}`);
        }

        const data = await response.json();
        return data as Mandate;
    }
    

    //#endregion

    //#region Create Requests
    
    async createSubscription(params: CreateSubscriptionParams): Promise<Subscription> {

        // Validate required parameters
        const requiredParams = ["reference", "amount", "currency", "description"];
        for (const param of requiredParams) {
            if (!params[param as keyof CreateSubscriptionParams]) {
                throw new Error(`Missing required parameter: ${param}`);
            }
        }

        const response = await fetch(`${this.baseUrl}/subscriptions`, {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${this.apiKey}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(params)
        });

        if (!response.ok) {
        const errorData = await response.json();
        throw new Error(`PensoPay API error: ${response.status} ${JSON.stringify(errorData)}`);
        }

        const data = await response.json();
        return data as Subscription;
    }

    async createSubscriptionPayment(subscriptionId: number, params: CreateSubscriptionPaymentParams): Promise<SubscriptionPayment> {

        // Validate required parameters
        const requiredParams = ["order_id"];
        for (const param of requiredParams) {
            if (!params[param as keyof CreateSubscriptionPaymentParams]) {
                throw new Error(`Missing required parameter: ${param}`);
            }
        }

        const response = await fetch(`${this.baseUrl}/subscriptions/${subscriptionId}/payments`, {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${this.apiKey}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(params)
        });

        if (!response.ok) {
        const errorData = await response.json();
        throw new Error(`PensoPay API error: ${response.status} ${JSON.stringify(errorData)}`);
        }

        const data = await response.json();
        return data as SubscriptionPayment;
    }

    async createMandate(subscriptionId: number, params: CreateMandateParams): Promise<Mandate> {

        // Validate required parameters
        const requiredParams = ["reference"];
        for (const param of requiredParams) {
            if (!params[param as keyof CreateMandateParams]) {
                throw new Error(`Missing required parameter: ${param}`);
            }
        }

        const response = await fetch(`${this.baseUrl}/subscriptions/${subscriptionId}/mandates`, {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${this.apiKey}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(params)
        });

        if (!response.ok) {
        const errorData = await response.json();
        throw new Error(`PensoPay API error: ${response.status} ${JSON.stringify(errorData)}`);
        }

        const data = await response.json();
        return data as Mandate;
    }

    //#endregion

    //#region Post Actions

    async cancelSubscription(subscriptionId: number): Promise<Subscription> {
        const response = await fetch(`${this.baseUrl}/subscriptions/${subscriptionId}/cancel`, {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${this.apiKey}`,
                "Content-Type": "application/json"
            }
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(`PensoPay API error: ${response.status} ${JSON.stringify(errorData)}`);
        }

        const data = await response.json()
        return data as Subscription;
    }

    async revokeMandate(subscriptionId: number, mandateId: number): Promise<Mandate> {
        const response = await fetch(`${this.baseUrl}/subscriptions/${subscriptionId}/mandates/${mandateId}/revoke`, {
            method: "POST",
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
        return data as Mandate;
    }

    //#endregion
}