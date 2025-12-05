import React from 'react';
import { SKILLS } from '../constants';
import { Cpu, Terminal } from 'lucide-react';

export const SkillSet: React.FC = () => {
  return (
    <section className="w-full max-w-6xl mx-auto py-20 px-6">
      <div className="text-center mb-16">
        <div className="inline-flex items-center justify-center p-3 bg-white dark:bg-zinc-900 rounded-lg shadow-sm mb-4 border border-zinc-200 dark:border-zinc-700 transition-colors duration-300">
          <Cpu className="text-zinc-800 dark:text-zinc-200 w-8 h-8" />
        </div>
        <h3 className="text-3xl md:text-4xl font-bold text-ind-dark dark:text-zinc-100 tracking-tight transition-colors duration-300">Technical Stack</h3>
        <p className="text-ind-gray dark:text-zinc-400 mt-2 font-mono text-sm uppercase tracking-wide transition-colors duration-300">Proficiency Assessment</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {SKILLS.map((skill, index) => (
          <div 
            key={skill.name} 
            className="group relative bg-white dark:bg-zinc-900 rounded-sm p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-600 hover:-translate-y-1"
          >
            <div className="flex justify-between items-center mb-5">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-sm flex items-center justify-center text-white font-bold text-xl transition-transform" style={{ backgroundColor: skill.color }}>
                  <Terminal className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold text-zinc-800 dark:text-zinc-200 transition-colors duration-300">
                  {skill.name}
                </h4>
              </div>
              <span className="font-mono font-bold text-lg text-zinc-600 dark:text-zinc-400">{skill.level}%</span>
            </div>

            <div className="w-full h-2 bg-zinc-100 dark:bg-zinc-800 rounded-none mb-4 overflow-hidden border border-zinc-200 dark:border-zinc-700 transition-colors duration-300">
              <div 
                className="h-full rounded-none relative transition-all duration-1000 ease-out"
                style={{ 
                  width: `${skill.level}%`,
                  backgroundColor: skill.color
                }}
              >
              </div>
            </div>

            <p className="text-zinc-500 dark:text-zinc-400 text-sm font-medium leading-relaxed transition-colors duration-300">
              {skill.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};