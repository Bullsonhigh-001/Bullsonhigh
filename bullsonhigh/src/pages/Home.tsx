import React from 'react';
import Layout from '@/src/components/Layout';
import { ArrowRight, TrendingUp, ShieldCheck, Wallet, ChevronRight, Play } from 'lucide-react';
import { motion } from 'motion/react';
import InvestmentTable from '@/src/components/InvestmentTable';
import BlogCard from '@/src/components/BlogCard';
import { BLOG_POSTS, MARKET_DATA } from '@/src/constants';

export default function Home() {
  const featuredPosts = BLOG_POSTS.slice(0, 3);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-12 pb-24 lg:pt-20 lg:pb-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl lg:text-[4rem] font-black text-[#1e293b] leading-[1] mb-6 tracking-[-0.05em]">
                Master Your Money & <br />
                Build Generational Wealth<span className="text-[#f59e0b]">.</span>
              </h1>
              <p className="text-[#64748b] text-lg lg:text-xl leading-relaxed mb-10 max-w-lg">
                Strategic investment insights and financial tools designed for the modern long-term investor. Data-driven, objective, and transparent.
              </p>
              
              <div className="flex flex-wrap gap-8 mb-12">
                <div className="pl-4 py-2 border-l-4 border-[#f59e0b] bg-white shadow-sm">
                  <div className="text-3xl font-bold text-[#1e293b] leading-none">$1.2M+</div>
                  <div className="text-xs font-black text-slate-400 uppercase tracking-widest mt-1">Assets Analyzed</div>
                </div>
                <div className="pl-4 py-2 border-l-4 border-[#064e3b] bg-white shadow-sm">
                  <div className="text-3xl font-bold text-[#1e293b] leading-none">10k+</div>
                  <div className="text-xs font-black text-slate-400 uppercase tracking-widest mt-1">Active Readers</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a href="/tools" className="btn-primary">
                  Get Started Now
                </a>
                <a href="/blog" className="btn-secondary">
                  Explore Research Lab
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative p-1 bg-white border border-[#e2e8f0] rounded-[2rem] shadow-2xl overflow-hidden"
            >
              <div className="bg-white rounded-[1.8rem] overflow-hidden">
                <div className="p-6 border-b border-slate-100 bg-slate-50/50">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-display font-black text-secondary text-lg uppercase tracking-widest">AUM Strategy Yields</h3>
                    <div className="flex gap-1">
                      <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      <span className="text-sm font-bold text-slate-400">Snapshot: May 2026</span>
                    </div>
                  </div>
                  <div className="flex items-end gap-2">
                    <span className="text-6xl font-black text-[#1e293b] tracking-tighter">+18.6%</span>
                    <span className="text-sm font-bold text-emerald-600 mb-2">Target Annualized</span>
                  </div>
                </div>
                <InvestmentTable data={MARKET_DATA.slice(0, 5)} title="Analyst Conviction List" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-24 border-y border-[#e2e8f0]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="section-card-title">
            <TrendingUp size={12} className="text-primary" />
            Strategic Pillars of Wealth
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                title: 'Investing', 
                desc: 'Equity research, portfolio construction, and index-beating methodologies.',
                icon: '📈'
              },
              { 
                title: 'Budgeting', 
                desc: 'Optimize your burn rate and maximize your investable surplus every month.',
                icon: '💰'
              },
              { 
                title: 'Tax Strategy', 
                desc: 'Keep more of what you earn through intelligent tax-loss harvesting.',
                icon: '⚖️'
              }
            ].map((cat, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -6 }}
                className="card-finance group cursor-pointer bg-white border border-[#e2e8f0]"
              >
                <div className="text-3xl mb-6">{cat.icon}</div>
                <h3 className="text-2xl font-bold text-secondary mb-3">{cat.title}</h3>
                <p className="text-slate-500 text-base leading-relaxed mb-6">
                  {cat.desc}
                </p>
                <div className="text-primary font-bold text-xs uppercase tracking-widest flex items-center gap-1 group-hover:gap-2 transition-all">
                  Browse Research <ChevronRight size={14} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Blog Feed */}
      <section className="py-24 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
            <div>
              <div className="section-card-title">
                <ShieldCheck size={12} className="text-primary" />
                Latest Research
              </div>
              <h2 className="text-3xl font-black text-secondary tracking-tight">
                From the Alpha Lab
              </h2>
            </div>
            <a href="/blog" className="btn-secondary">
              View All Insights
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-primary overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 border-4 border-white rounded-full -mr-48 -mt-48" />
          <div className="absolute bottom-0 left-0 w-64 h-64 border-4 border-white rounded-full -ml-32 -mb-32" />
        </div>
        
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl lg:text-5xl font-display font-black text-white tracking-tight mb-8">
            The best time to start was yesterday. <br />
            The second best time is <span className="text-accent underline decoration-4 underline-offset-8">now.</span>
          </h2>
          <p className="text-primary-light text-lg mb-10 opacity-90 font-medium">
            Join thousands of individual investors who are taking control of their financial destiny.
          </p>
          <a href="/tools" className="bg-white text-primary px-8 py-4 rounded-xl font-black uppercase tracking-widest shadow-xl hover:bg-slate-50 transition-colors inline-block text-sm">
            Launch Wealth Calculator
          </a>
        </div>
      </section>
    </Layout>
  );
}
