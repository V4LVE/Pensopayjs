export interface PaymentDetails {
    "3d_secure_type": string;
    acquirer: string;
    bin: string;
    brand: string;
    country: string;
    customer_country: string;
    customer_ip: string;
    exp_month: string;
    exp_year: string;
    is_3d_secure: boolean;
    last4: string;
    method: string;
    segment: string;
}
