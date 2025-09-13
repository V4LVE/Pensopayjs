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