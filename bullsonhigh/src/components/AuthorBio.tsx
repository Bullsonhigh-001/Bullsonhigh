import React from 'react';
import { ShieldCheck, Award, Linkedin, Twitter } from 'lucide-react';

export interface Author {
  name: string;
  role: string;
  bio: string;
  avatar: string;
  credentials: string[];
}

export default function AuthorBio({ author }: { author: Author }) {
  return (
    <div className="bg-slate-50 border border-slate-100 rounded-2xl p-8 my-12 flex flex-col md:flex-row gap-8 items-center md:items-start text-center md:text-left relative overflow-hidden group">
      <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
        <ShieldCheck size={120} />
      </div>
      
      <div className="shrink-0 relative">
        <div className="w-24 h-24 rounded-2xl overflow-hidden shadow-xl ring-4 ring-white">
          <img src={author.avatar} alt={author.name} className="w-full h-full object-cover" />
        </div>
        <div className="absolute -bottom-2 -right-2 bg-primary text-white p-1.5 rounded-lg shadow-lg">
          <Award size={16} />
        </div>
      </div>

      <div className="flex-grow space-y-4">
        <div>
          <h4 className="text-xl font-display font-black text-secondary tracking-tight">{author.name}</h4>
          <p className="text-primary font-bold text-xs uppercase tracking-widest">{author.role}</p>
        </div>
        
        <p className="text-slate-600 text-sm leading-relaxed max-w-2xl">
          {author.bio}
        </p>

        <div className="flex flex-wrap justify-center md:justify-start gap-2">
          {author.credentials.map((cred, idx) => (
            <span key={idx} className="bg-white border border-slate-200 px-3 py-1 rounded-full text-[10px] font-bold text-slate-500 uppercase tracking-tighter shadow-sm">
              {cred}
            </span>
          ))}
        </div>

        <div className="flex justify-center md:justify-start gap-4 pt-2">
          <a href="#" className="text-slate-400 hover:text-primary transition-colors">
            <Linkedin size={18} />
          </a>
          <a href="#" className="text-slate-400 hover:text-primary transition-colors">
            <Twitter size={18} />
          </a>
        </div>
      </div>
    </div>
  );
}
