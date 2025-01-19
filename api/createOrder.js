import crypto from "crypto";

function encryptAES256CBC (plaintext, key, iv) {
  if (key.length !== 32) {
    throw new Error("Key must be 32 bytes for AES-256.");
  }
  if (iv.length !== 16) {
    throw new Error("IV must be 16 bytes for AES-CBC.");
  }

  const cipher = crypto.createCipheriv("aes-256-cbc", key, iv);

  let encrypted = cipher.update(plaintext, "utf8", "hex");
  encrypted += cipher.final("hex");

  return encrypted;
};

function sha256Hash(message) {
  const hash = crypto.createHash("sha256");
  hash.update(message);
  return hash.digest("hex");
}

export function GET(request) {
  const params = {
    MerchantID: "MS127874575",
    RespondType: "String",
    TimeStamp: "1695795410",
    Version: "2.0",
    MerchantOrderNo: "Vanespl_ec_1695795410",
    Amt: 30,
    ItemDesc: "test",
    NotifyURL: "https://webhook.site/d4db5ad1-2278-466a-9d66-78585c0dbadb",
  };
  const queryString = new URLSearchParams(params).toString();
  const hashKey = "Fs5cX1TGqYM2PpdbE14a9H83YQSQF5jn"
  const hashIv = "C6AcmfqJILwgnhIP"
  const edata = encryptAES256CBC(queryString, hashKey, hashIv);
  const hashs = `HashKey=${hashKey}&${edata}&HashIV=${hashIv}`
  const hash = sha256Hash(hashs).toUpperCase()
  return Response.json({
    "TradeInfo": edata,   
    "TradeSha": hash
  });
}
