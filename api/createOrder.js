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
    MerchantID: "MS148427498",
    RespondType: "String",
    TimeStamp: "1837289826",
    Version: "2.2",
    MerchantOrderNo: "Line_Google_Drive_Bot_123",
    Amt: 499,
    ItemDesc: "Line Google Drive機器人專業版",
    NotifyURL: "https://webhook.site/d4db5ad1-2278-466a-9d66-78585c0dbadb",
  };
  const queryString = new URLSearchParams(params).toString();
  const hashKey = "zqr70wkJiJyXrpjoL1XWAgVDlNNIKnBs"
  const hashIv = "C43Ge3BYGxLl7qmP"
  const edata = encryptAES256CBC(queryString, hashKey, hashIv);
  const hashs = `HashKey=${hashKey}&${edata}&HashIV=${hashIv}`
  const hash = sha256Hash(hashs).toUpperCase()
  return Response.json({
    "Version": "2.2",
    "MerchantID": "MS148427498",
    "TradeInfo": edata,   
    "TradeSha": hash
  });
}
