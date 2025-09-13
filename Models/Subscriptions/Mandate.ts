export interface Mandate {
    refrence: string;
    methods: string[];
    success_url: string;
    cancel_url: string;
    variables: object;
    id: number;
    state: string;
    subscription_id: number;
    created_at: string;
    updated_at: string;
    link: string;
}