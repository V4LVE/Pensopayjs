export interface CreateSubscriptionParams {
    reference: string; // Required
    amount: string; // Required
    currency: string; // Required
    description: string; // Required

    //optional Params
    callback_url?: string;
    success_url?: string;
    cancel_url?: string;
    testmode?: boolean;
}

export interface CreateSubscriptionPaymentParams {
    order_id: string; // Required


    //optional Params
    mandate_id?: number;
    amount?: number;
    currency?: number;
    autocapture?: boolean;
    text_on_statement?: string;
}

export interface CreateMandateParams {
    reference: string; // Required
    
    //optional Params
    success_url?: string;
    cancel_url?: string;
}