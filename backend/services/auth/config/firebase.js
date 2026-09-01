import { cert, initializeApp } from "firebase-admin";
import fs from "fs";

const serviceAccountPath =
    process.env.FIREBASE_SERVICE_ACCOUNT_PATH ||
    new URL("../serviceAccountKey.json", import.meta.url);

const serviceAccount = JSON.parse(
    fs.readFileSync(serviceAccountPath, "utf8")
);

export const app = initializeApp({
    credential: cert(serviceAccount)
});