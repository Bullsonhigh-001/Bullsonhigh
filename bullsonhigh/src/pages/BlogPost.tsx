import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import Layout from '@/src/components/Layout';
import AuthorBio from '@/src/components/AuthorBio';
import { BLOG_POSTS, AUTHORS } from '@/src/constants';
import { Calendar, Clock, ChevronLeft, Share2, Printer, Twitter, Linkedin, Copy, Check } from 'lucide-react';
import { motion, useScroll, useSpring } from 'motion/react';

export default function BlogPostPage({ slug }: { slug: string }) {
  const post = BLOG_POSTS.find(p => p.slug === slug);
  const author = post ? AUTHORS[post.authorId] : null;

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [copied, setCopied] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!post || !author) {
    return (
      <Layout title="Post Not Found">
        <div className="max-w-7xl mx-auto px-4 py-32 text-center">
          <h1 className="text-4xl font-display font-black text-secondary">Post Not Found</h1>
          <p className="mt-4 text-slate-500 mb-8">The strategy you are looking for has been moved or archived.</p>
          <a href="/blog" className="btn-primary">Back to Blog</a>
        </div>
      </Layout>
    );
  }

  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Layout title={post.title} description={post.excerpt}>
      {/* Reading Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-primary z-[60] origin-left"
        style={{ scaleX }}
      />

      <article className="pb-24">
        {/* Header */}
        <div className="bg-slate-50 border-b border-slate-200 py-16 lg:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <a href="/blog" className="inline-flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-widest mb-10 group">
              <ChevronLeft size={16} className="transition-transform group-hover:-translate-x-1" />
              Back to Research Lab
            </a>
            
            <div className="flex items-center gap-2 mb-6">
              <span className="bg-primary text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-lg">
                {post.category}
              </span>
              <div className="h-px w-8 bg-slate-200" />
              <div className="flex items-center gap-4 text-[10px] font-bold text-slate-400 uppercase tracking-tighter">
                <div className="flex items-center gap-1.5"><Calendar size={12} /> {post.date}</div>
              </div>
            </div>

            <h1 className="text-4xl lg:text-6xl font-display font-black text-secondary tracking-tight leading-[1.1] mb-8">
              {post.title}
            </h1>

            <p className="text-xl text-slate-600 leading-relaxed font-medium">
              {post.excerpt}
            </p>
          </div>
        </div>

        {/* Hero Image */}
        <div className="max-w-6xl mx-auto px-4 -mt-12 mb-16">
          <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-video relative">
            <img src={post.coverImage} alt={post.title} className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Content Area */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            {/* Sidebar / Tools */}
            <aside className="hidden lg:block lg:col-span-3 space-y-8">
              <div className="sticky top-32 space-y-8">
                <div>
                  <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-wider mb-4">Share Strategy</h4>
                  <div className="flex flex-col gap-3">
                    <button className="flex items-center gap-3 text-sm font-bold text-slate-600 hover:text-primary transition-colors p-2 rounded-lg hover:bg-slate-50 border border-transparent hover:border-slate-100">
                      <Twitter size={18} /> Twitter
                    </button>
                    <button className="flex items-center gap-3 text-sm font-bold text-slate-600 hover:text-primary transition-colors p-2 rounded-lg hover:bg-slate-50 border border-transparent hover:border-slate-100">
                      <Linkedin size={18} /> LinkedIn
                    </button>
                    <button 
                      onClick={copyLink}
                      className="flex items-center gap-3 text-sm font-bold text-slate-600 hover:text-primary transition-colors p-2 rounded-lg hover:bg-slate-50 border border-transparent hover:border-slate-100"
                    >
                      {copied ? <Check size={18} className="text-emerald-500" /> : <Copy size={18} />}
                      {copied ? 'Link Copied' : 'Copy Link'}
                    </button>
                  </div>
                </div>

                <div className="p-6 bg-primary rounded-2xl text-white">
                  <h4 className="font-display font-bold text-lg mb-2">Build Your Plan</h4>
                  <p className="text-xs text-primary-light mb-6">Use our Professional Compound Interest Calculator to see these strategies in action.</p>
                  <a href="/tools" className="block w-full bg-white text-primary text-center py-3 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-slate-50 transition-colors">
                    Launch Calculator
                  </a>
                </div>
              </div>
            </aside>

            {/* Main Content */}
            <div className="lg:col-span-6">
              <div className="markdown-body prose prose-slate prose-lg lg:prose-xl prose-headings:font-display prose-headings:font-black prose-headings:text-secondary prose-a:text-primary prose-strong:text-secondary prose-blockquote:border-primary prose-blockquote:bg-slate-50 prose-blockquote:rounded-xl prose-blockquote:py-1 prose-img:rounded-3xl shadow-none border-none max-w-none">
                <ReactMarkdown
                  components={{
                    table: ({node, ...props}) => (
                      <div className="overflow-x-auto my-8 card-finance p-0">
                        <table {...props} className="w-full text-left text-sm" />
                      </div>
                    ),
                    thead: ({node, ...props}) => <thead {...props} className="bg-slate-50 border-b border-slate-200" />,
                    th: ({node, ...props}) => <th {...props} className="px-6 py-4 font-bold text-secondary uppercase tracking-tight" />,
                    td: ({node, ...props}) => <td {...props} className="px-6 py-4 border-b border-slate-100" />,
                    h1: ({node, ...props}) => <h1 {...props} className="text-3xl font-display font-black text-secondary mt-12 mb-6" />,
                    h2: ({node, ...props}) => <h2 {...props} className="text-2xl font-display font-black text-secondary mt-10 mb-5" />,
                    blockquote: ({node, ...props}) => (
                      <blockquote {...props} className="border-l-4 border-primary bg-primary/5 p-6 italic rounded-r-2xl not-italic" />
                    )
                  }}
                >
                  {post.content}
                </ReactMarkdown>
              </div>

              {/* Author Section */}
              <AuthorBio author={author} />

              <div className="border-t border-slate-200 pt-12 mt-12">
                <div className="flex items-center gap-2 mb-6 text-slate-400 font-bold text-[10px] uppercase tracking-widest">
                  <Printer size={14} /> Recommended Reading
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  {BLOG_POSTS.filter(p => p.id !== post.id).slice(0, 2).map(p => (
                    <a key={p.id} href={`/blog/${p.slug}`} className="group block">
                      <div className="aspect-[16/9] rounded-2xl overflow-hidden mb-4 border border-slate-200 shadow-sm">
                        <img src={p.coverImage} alt={p.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-105 group-hover:scale-100" />
                      </div>
                      <h4 className="font-display font-bold text-secondary group-hover:text-primary transition-colors leading-snug">
                        {p.title}
                      </h4>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Empty right column for balance or ads/social */}
            <div className="hidden lg:block lg:col-span-3" />
          </div>
        </div>
      </article>
    </Layout>
  );
}
