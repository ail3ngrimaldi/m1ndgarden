'use client';

import { useState } from 'react';

export default function Chatbot() {
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!message.trim()) return;
    
    setLoading(true);
    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message }),
      });
      
      const data = await res.json();
      
      if (data.error) {
        setResponse('Error: ' + data.error);
      } else {
        setResponse(data.answer);
      }
    } catch (error) {
      console.error('Error:', error);
      setResponse('Error getting response');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4">
      <h1>AI Chatbot</h1>
      
      <div className="my-4">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message..."
          className="border p-2 w-full"
          onKeyPress={(e) => e.key === 'Enter' && handleSend()}
        />
        <button 
          onClick={handleSend}
          disabled={loading}
          className="mt-2 bg-blue-500 text-white px-4 py-2 rounded"
        >
          {loading ? 'Sending...' : 'Send'}
        </button>
      </div>

      {response && (
        <div className="mt-4 p-4 bg-gray-100 rounded">
          <strong>AI Response:</strong>
          <p>{response}</p>
        </div>
      )}
    </div>
  );
}
