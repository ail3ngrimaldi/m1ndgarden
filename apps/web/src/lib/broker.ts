import { ethers } from "ethers";
import { createZGComputeNetworkBroker } from "@0glabs/0g-serving-broker";

let brokerInstance: any = null;

export async function getBroker() {
  if (brokerInstance) return brokerInstance;
  
  const RPC_URL = "https://evmrpc-testnet.0g.ai";
  const provider = new ethers.JsonRpcProvider(RPC_URL);
  const wallet = new ethers.Wallet(process.env.PRIVATE_KEY!, provider);
  
  brokerInstance = await createZGComputeNetworkBroker(wallet);
  return brokerInstance;
}

export const providerAddress = "0xf07240Efa67755B5311bc75784a061eDB47165Dd";