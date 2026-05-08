import React from 'react';
import { TrendingUp, TrendingDown, Info } from 'lucide-react';
import { cn } from "@/src/lib/utils";

export interface TableRow {
  name: string;
  ticker: string;
  targetPrice: string;
  upside: string;
  rating: 'Strong Buy' | 'Buy' | 'Accumulate' | 'Hold' | 'Neutral';
  category: string;
}

interface InvestmentTableProps {
  title?: string;
  data: TableRow[];
}

export default function InvestmentTable({ title = "Strategic Research", data }: InvestmentTableProps) {
  return (
    <div className="w-full overflow-hidden card-finance p-0 border-none shadow-none">
      {title && (
        <div className="px-6 py-4 border-b border-slate-100 bg-white flex items-center justify-between">
          <h3 className="font-display font-bold text-slate-800 flex items-center gap-2 text-lg">
            {title}
            <Info size={18} className="text-slate-400 cursor-help" />
          </h3>
          <span className="text-sm font-black text-primary bg-primary/10 px-3 py-1 rounded-md uppercase tracking-wider">
            Research Snapshot
          </span>
        </div>
      )}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50/50">
              <th className="px-6 py-4 text-sm font-black text-slate-400 uppercase tracking-widest">Asset</th>
              <th className="px-6 py-4 text-sm font-black text-slate-400 uppercase tracking-widest">Target</th>
              <th className="px-6 py-4 text-sm font-black text-slate-400 uppercase tracking-widest">Potential</th>
              <th className="px-6 py-4 text-sm font-black text-slate-400 uppercase tracking-widest">Rating</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {data.map((row, idx) => (
              <tr key={idx} className="hover:bg-slate-50/50 transition-colors cursor-pointer group">
                <td className="px-6 py-6">
                  <div className="flex flex-col">
                    <span className="font-bold text-slate-800 text-lg leading-tight">{row.name}</span>
                    <span className="text-xs font-mono text-slate-400 uppercase tracking-widest">{row.ticker}</span>
                  </div>
                </td>
                <td className="px-6 py-6 font-mono font-bold text-base text-slate-700">{row.targetPrice}</td>
                <td className="px-6 py-6">
                  <div className="text-emerald-600 font-black text-lg">
                    +{row.upside}%
                  </div>
                </td>
                <td className="px-6 py-6">
                  <span className={cn(
                    "inline-flex items-center px-3 py-1 rounded text-sm font-black uppercase tracking-tighter",
                    row.rating.includes('Buy') ? "bg-emerald-100 text-emerald-700" : "bg-slate-100 text-slate-600"
                  )}>
                    {row.rating}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
