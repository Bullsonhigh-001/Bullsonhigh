import React from 'react';
import Layout from '@/src/components/Layout';
import CompoundInterestCalculator from '@/src/components/CompoundInterestCalculator';
import { Calculator, ShieldCheck, Sparkles, TrendingUp } from 'lucide-react';
import { motion } from 'motion/react';

export default function Tools() {
  return (
    <Layout title="Wealth Building Tools" description="Professional grade financial calculators for compound interest and investment planning.">
      <div className="bg-slate-50 border-b border-slate-200 overflow-hidden relative">
        {/* Background Accents */}
        <div className="absolute top-0 right-0 p-8 opacity-5">
           <Calculator size={300} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-100 border border-amber-200 rounded-full text-amber-700 font-bold text-sm uppercase tracking-widest mb-6">
              <Sparkles size={16} />
              Professional Suite
            </div>
            <h1 className="text-4xl lg:text-5xl font-display font-black text-secondary tracking-tight mb-6">
              Institutional-Grade <br />Financial Calculators
            </h1>
            <p className="text-slate-600 text-lg leading-relaxed">
              Visualize your financial future. Our calculators use precise compounding logic and provide you with a detailed roadmap to achieve your wealth goals.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-4">
            <div className="bg-primary p-3 rounded-2xl text-white shadow-lg shadow-primary/20">
              <TrendingUp size={24} />
            </div>
            <div>
              <h2 className="text-3xl font-display font-black text-secondary tracking-tight">Compound Interest Calculator</h2>
              <p className="text-slate-500 text-base">Visualize the power of time and consistent contribution.</p>
            </div>
          </div>
          
          <CompoundInterestCalculator />
        </div>

        <hr className="border-slate-100 my-24" />

        {/* Coming Soon Section */}
        <div className="text-center">
          <h3 className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em] mb-12">More Tools Coming Soon</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 opacity-40 grayscale pointer-events-none">
            {[
              { title: 'Tax Loss Harvester', icon: <ShieldCheck /> },
              { title: 'Home Affordability', icon: <Calculator /> },
              { title: 'Portfolio Optimizer', icon: <TrendingUp /> },
            ].map((tool, i) => (
              <div key={i} className="card-finance p-8 border-dashed flex flex-col items-center">
                <div className="bg-slate-100 p-4 rounded-2xl mb-4">
                  {tool.icon}
                </div>
                <h4 className="font-display font-bold text-slate-700">{tool.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Safety Section */}
      <section className="bg-slate-50 py-24 mt-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 text-slate-400 font-bold text-sm uppercase tracking-widest mb-6">
            <ShieldCheck size={18} className="text-emerald-500" />
            Privacy First Calculation
          </div>
          <h2 className="text-3xl font-display font-black text-secondary mb-4">Your Data Stays With You</h2>
          <p className="text-slate-500 leading-relaxed italic text-base">
            BullsOnHigh tools are processed entirely in your browser. We do not store or transmit your financial inputs to any server. Your wealth plan is private and secured by your own hardware. 
          </p>
        </div>
      </section>
    </Layout>
  );
}
