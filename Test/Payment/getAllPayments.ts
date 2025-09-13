import { PensoPayClient } from "../..";

const client = new PensoPayClient("72fe380571341fe45d6cf5ac54d1f31540e097ec6fb8974c84fd3ecc38b08e14");

(async () => {
    try {
        const payments = await client.paymentClient.getAllPayments({
            order_id: "order-123",
        });
        console.log("✅ All payments retrieved:", payments);

    } catch (error) {
        console.error("Error retrieving payments:", error);
    }
})();