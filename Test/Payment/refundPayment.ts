import { PensoPayClient } from "../..";

const client = new PensoPayClient("72fe380571341fe45d6cf5ac54d1f31540e097ec6fb8974c84fd3ecc38b08e14");

(async () => {
  const payment = await client.paymentClient.refundPayment(27717095, 500);
  console.log(payment);
})();