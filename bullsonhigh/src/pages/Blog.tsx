import React, { useState } from 'react';
import Layout from '@/src/components/Layout';
import { Search, Filter, TrendingUp, Wallet, ShieldCheck } from 'lucide-react';
import BlogCard from '@/src/components/BlogCard';
import { BLOG_POSTS } from '@/src/constants';

type Category = 'All' | 'Investing' | 'Budgeting' | 'Tax Strategy';

export default function Blog() {
  const [activeTab, setActiveTab] = useState<Category>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPosts = BLOG_POSTS.filter(post => {
    const matchesCategory = activeTab === 'All' || post.category === activeTab;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const categories: { name: Category; icon?: React.ReactNode }[] = [
    { name: 'All' },
    { name: 'Investing', icon: <TrendingUp size={14} /> },
    { name: 'Budgeting', icon: <Wallet size={14} /> },
    { name: 'Tax Strategy', icon: <ShieldCheck size={14} /> },
  ];

  return (
    <Layout title="Financial Blog" description="Latest investing insights and personal finance research from BullsOnHigh.">
      <div className="bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-display font-black text-secondary tracking-tight mb-6">
              The Research Lab
            </h1>
            <p className="text-slate-600 text-lg leading-relaxed">
              In-depth analysis, market strategies, and actionable financial blueprints. Our mission is to provide you with the data you need to grow your net worth.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Filters & Search */}
        <div className="flex flex-col lg:flex-row gap-6 mb-12 items-center justify-between">
          <div className="flex items-center gap-2 p-1 bg-slate-100 rounded-xl w-full lg:w-auto overflow-x-auto no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat.name}
                onClick={() => setActiveTab(cat.name)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-bold transition-all whitespace-nowrap ${
                  activeTab === cat.name 
                    ? "bg-white shadow-sm text-primary" 
                    : "text-slate-500 hover:text-slate-700"
                }`}
              >
                {cat.icon}
                {cat.name}
              </button>
            ))}
          </div>

          <div className="relative w-full lg:w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input 
              type="text" 
              placeholder="Search research..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary focus:outline-none transition-all text-sm font-medium"
            />
          </div>
        </div>

        {/* Results */}
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 px-4 card-finance border-dashed">
            <div className="bg-slate-100 w-16 h-16 rounded-2xl mx-auto flex items-center justify-center text-slate-400 mb-4">
              <Search size={32} />
            </div>
            <h3 className="text-xl font-display font-bold text-secondary mb-2">No research found</h3>
            <p className="text-slate-500">We couldn't find any posts matching your criteria. Try a different search term or category.</p>
            <button 
              onClick={() => {setActiveTab('All'); setSearchQuery('');}}
              className="btn-primary mt-6 px-6 py-2"
            >
              Clear All Filters
            </button>
          </div>
        )}
      </div>

      {/* Newsletter Bottom */}
      <section className="bg-slate-50 py-24 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="bg-white card-finance p-10 lg:p-16 border-2 border-primary/10">
            <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-8 text-primary">
              <TrendingUp size={32} />
            </div>
            <h2 className="text-3xl font-display font-black text-secondary tracking-tight mb-4">
              Join the Top 1%
            </h2>
            <p className="text-slate-500 mb-10 text-lg">
              Get our exclusive monthly market summary and tax optimization tips before everyone else.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="wealth@example.com" 
                className="flex-grow px-6 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary focus:outline-none"
              />
              <button className="btn-primary">
                Subscribe
              </button>
            </form>
            <p className="text-slate-400 text-[10px] mt-6 font-bold uppercase tracking-widest">
              Zero Spam. Just high-density Alpha.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
