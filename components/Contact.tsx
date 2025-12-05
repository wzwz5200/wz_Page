import React from 'react';
import { SOCIAL_LINKS } from '../constants';
import { Share2 } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <section className="w-full max-w-5xl mx-auto py-20 px-4" id="contact">
      <div className="flex flex-col items-center justify-center text-center">
        <div className="inline-flex items-center gap-2 mb-10 bg-white dark:bg-zinc-900 px-6 py-2 rounded-sm shadow-sm border border-zinc-200 dark:border-zinc-700 transition-colors duration-300">
          <Share2 className="w-4 h-4 text-zinc-800 dark:text-zinc-200" />
          <h3 className="text-xl font-bold text-zinc-800 dark:text-zinc-100 tracking-tight">Connect</h3>
        </div>

        <div className="flex flex-wrap justify-center gap-6 w-full">
          {SOCIAL_LINKS.map((link) => (
            <a
              key={link.platform}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex flex-col items-center justify-center w-32 h-32 md:w-40 md:h-40 bg-white dark:bg-zinc-900 rounded-sm shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-500"
            >
              <div className={`text-zinc-400 dark:text-zinc-500 ${link.color} transition-colors duration-300 mb-3 transform group-hover:scale-110 group-hover:dark:text-white`}>
                <link.icon className="w-9 h-9" />
              </div>
              <span className="text-zinc-500 dark:text-zinc-400 font-bold text-sm group-hover:text-zinc-900 dark:group-hover:text-zinc-100 transition-colors">
                {link.platform}
              </span>
              
              {/* Username Tooltip */}
              <div className="absolute opacity-0 group-hover:opacity-100 -bottom-10 transition-all duration-300 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 text-xs py-1.5 px-3 rounded-sm whitespace-nowrap shadow-sm font-mono">
                {link.username}
                <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-zinc-900 dark:bg-white rotate-45"></div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};