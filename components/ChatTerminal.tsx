import React, { useState, useRef, useEffect } from 'react';
import { streamChatResponse } from '../services/geminiService';
import { ChatMessage } from '../types';
import { Send, Bot, User, Activity } from 'lucide-react';

export const ChatTerminal: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'init',
      role: 'model',
      text: "System Ready. ◻\nAwaiting input regarding Reverse Engineering or System Architecture."
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      text: input
    };

    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    const modelMsgId = (Date.now() + 1).toString();
    setMessages(prev => [...prev, {
      id: modelMsgId,
      role: 'model',
      text: '',
      isStreaming: true
    }]);

    const history = messages.map(m => ({
      role: m.role === 'user' ? 'user' : 'model',
      parts: [{ text: m.text }]
    }));

    let accumulatedText = '';

    await streamChatResponse(
      history,
      userMsg.text,
      (chunk) => {
        accumulatedText += chunk;
        setMessages(prev => prev.map(msg => 
          msg.id === modelMsgId 
            ? { ...msg, text: accumulatedText }
            : msg
        ));
      }
    );

    setMessages(prev => prev.map(msg => 
      msg.id === modelMsgId 
        ? { ...msg, isStreaming: false }
        : msg
    ));
    setIsLoading(false);
    setTimeout(() => inputRef.current?.focus(), 100);
  };

  return (
    <section className="w-full max-w-4xl mx-auto py-12 px-4" id="chat-bot">
      <div className="flex items-center justify-center gap-3 mb-8">
        <Activity className="w-6 h-6 text-zinc-800 dark:text-zinc-200" />
        <h3 className="font-bold text-2xl text-ind-dark dark:text-zinc-100 tracking-tight font-mono transition-colors duration-300">TERMINAL_LINK</h3>
      </div>

      <div className="bg-white dark:bg-zinc-900 rounded-sm shadow-lg overflow-hidden flex flex-col h-[600px] border border-zinc-300 dark:border-zinc-700 transition-colors duration-300">
        {/* Header */}
        <div className="bg-zinc-900 dark:bg-black p-4 flex items-center justify-between text-white shadow-sm z-10 border-b border-zinc-800">
          <div className="flex items-center gap-3">
            <div className="bg-zinc-800 p-2 rounded-sm border border-zinc-700">
                <Bot className="w-5 h-5 text-zinc-300" />
            </div>
            <div>
                <p className="font-bold text-sm tracking-wide font-mono">MAIN_FRAME_V1</p>
                <p className="text-[10px] text-zinc-400 font-mono tracking-wider">STATUS: CONNECTED</p>
            </div>
          </div>
          <div className="flex gap-1.5">
             <div className="w-2 h-2 bg-zinc-500 rounded-full"></div>
             <div className="w-2 h-2 bg-zinc-500 rounded-full"></div>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-zinc-50 dark:bg-zinc-950 transition-colors duration-300">
          {messages.map((msg) => (
            <div 
              key={msg.id} 
              className={`flex gap-4 ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}
            >
              <div className={`w-9 h-9 rounded-sm flex items-center justify-center flex-shrink-0 border ${msg.role === 'user' ? 'bg-zinc-800 dark:bg-zinc-700 border-zinc-900 dark:border-zinc-600' : 'bg-white dark:bg-zinc-900 border-zinc-300 dark:border-zinc-700'}`}>
                {msg.role === 'user' ? <User className="w-5 h-5 text-white" /> : <Bot className="w-5 h-5 text-zinc-700 dark:text-zinc-400" />}
              </div>
              
              <div 
                className={`max-w-[80%] px-5 py-3.5 rounded-sm text-sm leading-relaxed font-mono transition-colors duration-300 ${
                  msg.role === 'user' 
                    ? 'bg-zinc-800 dark:bg-zinc-700 text-white shadow-sm' 
                    : 'bg-white dark:bg-zinc-900 text-zinc-800 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700 shadow-sm'
                }`}
              >
                <p className="whitespace-pre-wrap">{msg.text}</p>
                {msg.isStreaming && (
                  <span className="inline-block ml-2 text-zinc-800 dark:text-zinc-200 animate-pulse">_</span>
                )}
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <form onSubmit={handleSend} className="p-4 bg-white dark:bg-zinc-900 border-t border-zinc-200 dark:border-zinc-700 flex gap-3 items-center transition-colors duration-300">
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="> Enter command..."
            className="flex-1 bg-zinc-50 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-100 rounded-sm px-5 py-3 focus:outline-none focus:ring-1 focus:ring-zinc-400 dark:focus:ring-zinc-600 transition-all font-mono text-sm placeholder-zinc-400 dark:placeholder-zinc-500 border border-zinc-300 dark:border-zinc-700"
            disabled={isLoading}
            autoComplete="off"
          />
          <button 
            type="submit" 
            disabled={isLoading || !input.trim()}
            className="bg-zinc-900 dark:bg-zinc-100 hover:bg-zinc-700 dark:hover:bg-zinc-300 text-white dark:text-zinc-900 p-3.5 rounded-sm shadow-sm transition-all disabled:opacity-50 disabled:shadow-none active:scale-95"
          >
            <Send className="w-4 h-4" />
          </button>
        </form>
      </div>
    </section>
  );
};