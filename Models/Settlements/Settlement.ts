import { Period } from "./Period";
import { Summary } from "./Summary";
import { Fees } from "./Fees";
import { Payout } from "./Payout";

export interface Settlement {
    id: number;
    currency: string;
    settled: boolean;
    period: Period;
    summary: Summary;
    fees: Fees;
    payout: Payout;
}