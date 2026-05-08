import React, { useState, useMemo } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Label } from 'recharts';
import { Calculator, DollarSign, Percent, Calendar, RefreshCcw, Info } from 'lucide-react';
import { cn } from "@/src/lib/utils";

export default function CompoundInterestCalculator() {
  const [initial, setInitial] = useState(10000);
  const [monthly, setMonthly] = useState(500);
  const [rate, setRate] = useState(8);
  const [years, setYears] = useState(10);

  const data = useMemo(() => {
    const months = years * 12;
    const monthlyRate = rate / 100 / 12;
    let balance = initial;
    let totalInvested = initial;
    const result = [];

    for (let i = 0; i <= years; i++) {
      // Annual snapshot
      result.push({
        year: i,
        balance: Math.round(balance),
        invested: Math.round(totalInvested),
        wealthGain: Math.round(balance - totalInvested)
      });
      
      // Calculate for next year
      for (let m = 0; m < 12; m++) {
        balance = (balance + monthly) * (1 + monthlyRate);
        totalInvested += monthly;
      }
    }
    return result;
  }, [initial, monthly, rate, years]);

  const finalBalance = data[data.length - 1].balance;
  const totalContributions = data[data.length - 1].invested;
  const wealthGain = finalBalance - totalContributions;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Inputs */}
      <div className="lg:col-span-1 space-y-6">
        <div className="card-finance">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-amber-100 p-2 rounded-lg text-amber-600">
              <Calculator size={20} />
            </div>
            <h3 className="font-display font-bold text-slate-800 tracking-tight">Investment Settings</h3>
          </div>

          <div className="space-y-5">
            <div className="group">
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 flex justify-between">
                Initial Investment
                <span className="text-slate-800 font-display">${initial.toLocaleString()}</span>
              </label>
              <div className="relative">
                <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                <input 
                  type="number" 
                  value={initial}
                  onChange={(e) => setInitial(Number(e.target.value))}
                  className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary focus:outline-none transition-all"
                />
              </div>
            </div>

            <div className="group">
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 flex justify-between">
                Monthly Contribution
                <span className="text-slate-800 font-display">${monthly.toLocaleString()}</span>
              </label>
              <div className="relative">
                <RefreshCcw className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                <input 
                  type="number" 
                  value={monthly}
                  onChange={(e) => setMonthly(Number(e.target.value))}
                  className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary focus:outline-none transition-all"
                />
              </div>
            </div>

            <div className="group">
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 flex justify-between">
                Annual Interest Rate (%)
                <span className="text-slate-800 font-display">{rate}%</span>
              </label>
              <div className="relative">
                <Percent className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                <input 
                  type="number" 
                  value={rate}
                  onChange={(e) => setRate(Number(e.target.value))}
                  className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary focus:outline-none transition-all"
                />
              </div>
            </div>

            <div className="group">
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 flex justify-between">
                Investment Duration (Years)
                <span className="text-slate-800 font-display">{years}y</span>
              </label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                <input 
                  type="number" 
                  value={years}
                  onChange={(e) => setYears(Number(e.target.value))}
                  className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary focus:outline-none transition-all"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="card-finance bg-primary border-none text-white">
          <div className="space-y-4">
            <div>
              <p className="text-primary-light font-bold text-xs uppercase tracking-widest mb-1">Final Balance</p>
              <h2 className="text-3xl font-display font-black tracking-tight">${finalBalance.toLocaleString()}</h2>
            </div>
            <div className="h-px bg-primary-light/20 w-full" />
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-primary-light font-bold text-[10px] uppercase tracking-widest mb-1">Total Invested</p>
                <p className="text-lg font-bold font-display">${totalContributions.toLocaleString()}</p>
              </div>
              <div>
                <p className="text-primary-light font-bold text-[10px] uppercase tracking-widest mb-1">Wealth Gain</p>
                <p className="text-lg font-bold font-display text-accent">${wealthGain.toLocaleString()}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Chart */}
      <div className="lg:col-span-2 flex flex-col gap-6">
        <div className="card-finance flex-grow min-h-[400px]">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="font-display font-bold text-slate-800 text-lg tracking-tight">Growth Projection</h3>
              <p className="text-slate-500 text-xs mt-1">Visualization of your wealth building journey</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1.5 text-xs font-bold text-slate-500">
                <span className="w-3 h-3 rounded-sm bg-slate-200" /> Invested
              </div>
              <div className="flex items-center gap-1.5 text-xs font-bold text-primary">
                <span className="w-3 h-3 rounded-sm bg-primary" /> Total Value
              </div>
            </div>
          </div>

          <div className="h-[350px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="colorBalance" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#064e3b" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="#064e3b" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis 
                  dataKey="year" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fontSize: 12, fontWeight: 500, fill: '#64748b' }}
                />
                <YAxis 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fontSize: 12, fontWeight: 500, fill: '#64748b' }}
                  tickFormatter={(val) => `$${(val / 1000).toFixed(0)}k`}
                />
                <Tooltip 
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                  formatter={(value: any) => [`$${value.toLocaleString()}`, '']}
                />
                <Area 
                  type="monotone" 
                  dataKey="invested" 
                  stroke="#cbd5e1" 
                  fill="#f1f5f9" 
                  strokeWidth={2}
                  name="Invested"
                />
                <Area 
                  type="monotone" 
                  dataKey="balance" 
                  stroke="#064e3b" 
                  fillOpacity={1} 
                  fill="url(#colorBalance)" 
                  strokeWidth={3}
                  name="Total Balance"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
          
          <div className="mt-8 flex items-start gap-3 p-4 bg-slate-50 rounded-xl border border-dashed border-slate-200">
            <Info size={16} className="text-primary mt-0.5 shrink-0" />
            <p className="text-xs text-slate-500 leading-relaxed italic">
              Compounding is the "eighth wonder of the world." By reinvesting your returns, your wealth grows exponentially. In this scenario, your interest ({wealthGain.toLocaleString()}) represents {Math.round((wealthGain/finalBalance)*100)}% of your final portfolio.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
