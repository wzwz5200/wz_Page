import React, { useState, useEffect } from 'react';
import { Hero } from './components/Hero';
import { SkillSet } from './components/SkillSet';
import { ChatTerminal } from './components/ChatTerminal';
import { Contact } from './components/Contact';
import { Moon, Sun } from 'lucide-react';

export default function App() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check local storage or system preference
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
      setIsDark(true);
    } else {
      document.documentElement.classList.remove('dark');
      setIsDark(false);
    }
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
      setIsDark(true);
    }
  };

  return (
    <main className="min-h-screen w-full bg-ind-bg dark:bg-zinc-950 bg-pattern text-ind-dark dark:text-zinc-100 font-sans overflow-x-hidden relative selection:bg-ind-dark selection:text-white dark:selection:bg-white dark:selection:text-black transition-colors duration-300">
      
      {/* Theme Toggle Button */}
      <button 
        onClick={toggleTheme}
        className="fixed top-6 right-6 z-50 p-3 rounded-full bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 shadow-md hover:scale-110 transition-all duration-300 text-zinc-800 dark:text-zinc-200"
        aria-label="Toggle Dark Mode"
      >
        {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
      </button>

      {/* Decorative ambient lights - Industrial Smoke/Fog */}
      <div className="fixed top-[-10%] right-[-5%] w-[600px] h-[600px] bg-gray-300/20 dark:bg-zinc-800/10 rounded-full blur-3xl -z-10 animate-float"></div>
      <div className="fixed bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-slate-300/20 dark:bg-zinc-900/20 rounded-full blur-3xl -z-10 animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="fixed top-[40%] left-[20%] w-[300px] h-[300px] bg-zinc-400/10 dark:bg-zinc-700/5 rounded-full blur-3xl -z-10 animate-pulse-slow"></div>
      
      <Hero />
      <SkillSet />
      <ChatTerminal />
      <Contact />
      
      <footer className="w-full py-8 text-center text-ind-light dark:text-zinc-500 font-mono text-xs border-t border-ind-border dark:border-zinc-800 bg-white/50 dark:bg-zinc-950/50 backdrop-blur-sm">
        <p>◼ wz | ENGINEERING | {new Date().getFullYear()} ◼</p>
      </footer>
    </main>
  );
}