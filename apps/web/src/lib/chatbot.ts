import { getBroker, providerAddress } from './broker';

export async function chat(userMessage: string) {
  const broker = await getBroker();
  
  const { endpoint, model } = await broker.inference.getServiceMetadata(providerAddress);
  
  const messages = [{ role: "user", content: userMessage }];
  const headers = await broker.inference.getRequestHeaders(
    providerAddress, 
    JSON.stringify(messages)
  );
  
  const response = await fetch(`${endpoint}/chat/completions`, {
    method: "POST",
    headers: { "Content-Type": "application/json", ...headers },
    body: JSON.stringify({ messages, model }),
  });
  
  const data = await response.json();
  return data.choices[0].message.content;
}