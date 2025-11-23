import { NextRequest, NextResponse } from 'next/server';
import { getBroker, providerAddress } from '@/lib/broker';

export async function POST(request: NextRequest) {
  try {
    const { message } = await request.json();
    
    const broker = await getBroker();
    const { endpoint, model } = await broker.inference.getServiceMetadata(providerAddress);
    
    const messages = [{ role: "user", content: message }];
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
    const answer = data.choices[0].message.content;
    
    return NextResponse.json({ answer });
  } catch (error) {
    console.error('Chat error:', error);
    return NextResponse.json({ error: 'Failed to get response' }, { status: 500 });
  }
}