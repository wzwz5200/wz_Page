import React from 'react';
import { USER_INFO } from '../constants';
import { Sparkles, MessageSquareCode } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative w-full py-24 flex flex-col items-center justify-center text-center px-4 overflow-hidden">
      
      <div className="relative group animate-float mb-8">
        <div className="absolute -inset-1 bg-zinc-200 dark:bg-zinc-700 rounded-full blur opacity-40 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
        <div className="relative px-6 py-2 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-sm rounded-full leading-none flex items-center shadow-sm border border-zinc-300 dark:border-zinc-700 transition-colors duration-300">
          <div className="w-2 h-2 bg-zinc-800 dark:bg-zinc-200 rounded-full mr-2 animate-pulse"></div>
          <span className="text-zinc-600 dark:text-zinc-300 font-mono font-bold tracking-widest uppercase text-xs">System Active</span>
        </div>
      </div>

      <div className="relative mb-8 z-10">
        <h1 className="text-7xl md:text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-zinc-900 via-zinc-700 to-zinc-500 dark:from-white dark:via-zinc-300 dark:to-zinc-500 drop-shadow-sm pb-2 transition-all duration-300">
          {USER_INFO.name}
        </h1>
        {/* Decorative elements - Geometric */}
        <div className="absolute top-0 right-[-20px] text-zinc-300 dark:text-zinc-700 animate-spin-slow transition-colors duration-300">
             <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
        </div>
      </div>

      <div className="glass-panel px-8 py-8 rounded-sm max-w-2xl mx-auto shadow-sm transform transition hover:scale-[1.01] duration-500 mb-10 border-l-4 border-l-zinc-800 dark:border-l-zinc-200">
        <h2 className="text-2xl md:text-3xl text-ind-dark dark:text-zinc-100 font-bold mb-4 tracking-tight transition-colors duration-300">
          {USER_INFO.title}
        </h2>
        <div className="w-20 h-1 bg-zinc-300 dark:bg-zinc-600 mx-auto mb-6 transition-colors duration-300"></div>
        <p className="text-ind-gray dark:text-zinc-400 text-lg md:text-xl font-medium leading-relaxed font-sans transition-colors duration-300">
          {USER_INFO.about}
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-5 z-10">
        <a href="#chat-bot" className="relative inline-flex items-center justify-center px-8 py-3.5 overflow-hidden font-bold text-white dark:text-black transition-all duration-300 bg-zinc-900 dark:bg-zinc-100 rounded-lg group hover:bg-zinc-800 dark:hover:bg-white hover:shadow-lg hover:-translate-y-1">
          <MessageSquareCode className="mr-2 w-5 h-5" />
          <span className="relative">Initialize Terminal</span>
        </a>
        <a href="#contact" className="relative inline-flex items-center justify-center px-8 py-3.5 overflow-hidden font-bold text-zinc-800 dark:text-zinc-200 transition-all duration-300 bg-white dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-700 rounded-lg hover:bg-zinc-50 dark:hover:bg-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-600 hover:shadow-md hover:-translate-y-1">
          <span className="relative">Access Protocols</span>
        </a>
      </div>
    </section>
  );
};