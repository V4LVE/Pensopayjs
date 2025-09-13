import { PensoPayClient } from "../..";

const client = new PensoPayClient("72fe380571341fe45d6cf5ac54d1f31540e097ec6fb8974c84fd3ecc38b08e14");

(async () => {
    try {
        const newPayment = await client.paymentClient.createPayment({
            amount: 1000,
            currency: "DKK",
            order_id: "order-123",
            autocapture: true,
            testmode: true,
        });
        console.log("✅ Payment created:", newPayment);

    } catch (error) {
        console.error("Error creating payment:", error);
    }
})();