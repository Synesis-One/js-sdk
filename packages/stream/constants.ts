import { PublicKey } from "@solana/web3.js";

import { Cluster, LocalCluster } from "./types";

export const TX_FINALITY_CONFIRMED = "confirmed";

export const STREAM_STRUCT_OFFSET_SENDER = 49;
export const STREAM_STRUCT_OFFSET_RECIPIENT = 113;

export const PROGRAM_ID = {
  [Cluster.Devnet]: "HqDGZjaVRXJ9MGRQEw7qDc2rAr6iH1n1kAQdCZaCMfMZ",
  [Cluster.Mainnet]: "strmRqUCoQUgGUan5YhzUZa6KqdzwX5L6FpUxfmKg5m",
  [Cluster.Testnet]: "HqDGZjaVRXJ9MGRQEw7qDc2rAr6iH1n1kAQdCZaCMfMZ",
  [LocalCluster.Local]: "HqDGZjaVRXJ9MGRQEw7qDc2rAr6iH1n1kAQdCZaCMfMZ",
};

export const STREAMFLOW_TREASURY_PUBLIC_KEY = new PublicKey(
  "5SEpbdjFK5FxwTvfsGMXVQTD2v4M2c5tyRTxhdsPkgDw"
);

export const WITHDRAWOR_PUBLIC_KEY = new PublicKey(
  "wdrwhnCv4pzW8beKsbPa4S2UDZrXenjg16KJdKSpb5u"
);
