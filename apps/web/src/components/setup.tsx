import { getBroker, providerAddress } from '../lib/broker';

async function setupAccount() {
  const broker = await getBroker();
  
  // Fund account
  await broker.ledger.addLedger(10);
  
  // Acknowledge provider
  await broker.inference.acknowledgeProviderSigner(providerAddress);
  
  console.log("Account setup complete!");
}

setupAccount();