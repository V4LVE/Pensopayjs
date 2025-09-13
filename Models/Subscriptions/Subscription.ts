export interface Subscription {
    amount: number;
    currency: string;
    description: string;
    callback_url: string;
    success_url: string;
    cancel_url: string;
    mandate_id: number;
    methods: string[];
    variables: object;
    id: number;
    state: string;
    link: string;
    created_at: string;
    updated_at: string;
    reference: string;
}