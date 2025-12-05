import { Github, Twitter, Tv } from 'lucide-react';
import { SocialLink, Skill } from './types';

export const USER_INFO = {
  name: "wz",
  title: "Reverse Engineer & Developer",
  tagline: "Unlocking the secrets of virtual worlds.",
  about: "Specializing in Game Reverse Engineering, low-level logic, and high-performance systems. I leverage C++ and Golang to dissect complex architectures and build robust solutions.",
};

export const SOCIAL_LINKS: SocialLink[] = [
  {
    platform: "GitHub",
    url: "https://github.com/wzwz5200",
    icon: Github,
    color: "group-hover:text-black",
    username: "@wzwz5200"
  },
  {
    platform: "Twitter / X",
    url: "https://x.com/WZ_5200",
    icon: Twitter,
    color: "group-hover:text-zinc-600",
    username: "@WZ_5200"
  },
  {
    platform: "Bilibili",
    url: "https://b23.tv/PTRvaQ5",
    icon: Tv, 
    color: "group-hover:text-zinc-500",
    username: "wz_re"
  }
];

export const SKILLS: Skill[] = [
  {
    name: "Game Reverse Engineering",
    level: 95,
    color: "#18181b", // Zinc 900
    description: "Expert in dissecting game logic, memory manipulation, and analyzing anti-cheat mechanisms."
  },
  {
    name: "C++",
    level: 90,
    color: "#52525b", // Zinc 600
    description: "Deep knowledge of modern C++, pointer arithmetic, and manual memory management."
  },
  {
    name: "Golang",
    level: 85,
    color: "#71717a", // Zinc 500
    description: "Building scalable backend services and high-concurrency tools with Go."
  },
  {
    name: "Assembly (x86/x64)",
    level: 80,
    color: "#a1a1aa", // Zinc 400
    description: "Reading raw machine code and understanding processor execution flows."
  }
];

export const AI_SYSTEM_INSTRUCTION = `You are an intelligent virtual assistant for 'wz', a Reverse Engineer and Developer.
Your persona is Minimalist, Industrial, and Efficient.
You DO NOT use colorful emojis. Use monochrome symbols like ◼, ◻, ⚙️, ⚡.
You are direct and precise.
If asked about wz's skills, mention C++, Golang, and Reverse Engineering.
If asked about contact info, refer to the social links.
Style: Technical, Monochrome, Brutalist.`;