import React from 'react';
import { Calendar, User, Clock, ArrowRight, Tag } from 'lucide-react';
import { motion } from 'motion/react';

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  authorId: string;
  category: 'Investing' | 'Budgeting' | 'Tax Strategy';
  date: string;
  readTime: string;
  coverImage: string;
}

export default function BlogCard({ post }: { post: BlogPost }) {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="group card-finance flex flex-col h-full p-0 overflow-hidden"
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={post.coverImage} 
          alt={post.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
        />
        <div className="absolute top-4 left-4">
          <span className="bg-primary/90 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-lg">
            {post.category}
          </span>
        </div>
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center gap-4 text-[10px] font-bold text-slate-400 uppercase tracking-tighter mb-3">
          <div className="flex items-center gap-1.5">
            <Calendar size={12} className="text-primary" />
            {post.date}
          </div>
        </div>

        <h3 className="text-xl font-display font-black text-secondary group-hover:text-primary transition-colors leading-tight mb-3">
          <a href={`/blog/${post.slug}`}>
            {post.title}
          </a>
        </h3>

        <p className="text-slate-500 text-sm leading-relaxed mb-6 line-clamp-3">
          {post.excerpt}
        </p>

        <div className="mt-auto pt-4 border-t border-slate-50 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-slate-200" />
            <span className="text-[10px] font-bold text-slate-700 uppercase tracking-tighter">By Author</span>
          </div>
          <a 
            href={`/blog/${post.slug}`} 
            className="text-primary font-black text-xs uppercase tracking-widest flex items-center gap-1 group/link"
          >
            Read More
            <ArrowRight size={14} className="transition-transform group-hover/link:translate-x-1" />
          </a>
        </div>
      </div>
    </motion.div>
  );
}
