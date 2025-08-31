import { PensoPayClient } from "../..";

const client = new PensoPayClient("72fe380571341fe45d6cf5ac54d1f31540e097ec6fb8974c84fd3ecc38b08e14");

(async () => {
  const settlement = await client.settlementClient.getSettlement("5c7e8d21-b68f-51d7-a9a0-cc9deb3d7861");
  console.log(settlement);
})();