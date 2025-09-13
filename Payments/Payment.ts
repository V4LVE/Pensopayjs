import { CreatePaymentParams } from "./Params/PaymentParams";
import fetch from "node-fetch";

export class Payment {
    private apiKey: string;
    private baseUrl = 'https://api.pensopay.com/v2';

    constructor(apiKey: string) {
        this.apiKey = apiKey;
    }

    async createPayment(params: CreatePaymentParams): Promise<any> {

        // Validate required parameters
        if (!params.amount || !params.currency || !params.order_id) {
            throw new Error("Missing required parameters: amount, currency, and order_id are required.");
        }

            // validate locale length if provided
        if (params.locale && params.locale.length !== 5) {
            throw new Error("Locale must be 5 characters (e.g., en-US)");
        }

        const response = await fetch(`${this.baseUrl}/payments`, {
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

        return response.json();
    }

    

}
