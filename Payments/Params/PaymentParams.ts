export interface CreatePaymentParams {
    amount: number; // Required
    currency: string; // Required
    order_id: string; // Required

    //optional Params
    autocapture?: boolean;
    callback_url?: string;
    cancel_url?: string;
    success_url?: string;
    branding_id?: string;
    locale?: string;             // must be 5 chars (e.g., "en-US")
    testmode?: boolean;
    branding_uuid?: string;
}

export interface GetPaymentParams {
    order_id?: string;
    per_page?: number;  // default 15, max 250
    page?: number;      // default 1
    currency?: string;
    date_from?: string; // ISO 8601 format or datetime string
    date_to?: string;   // ISO 8601 format or datetime string
    updated_after?: string; 
    updated_before?: string;
}