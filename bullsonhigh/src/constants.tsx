import { BlogPost } from './components/BlogCard';
import { Author } from './components/AuthorBio';
import { TableRow } from './components/InvestmentTable';

export const AUTHORS: Record<string, Author> = {
  'rohit-senior': {
    name: 'Rohit Sharma',
    role: 'Senior Investment Strategist',
    bio: 'With over 15 years of experience in institutional asset management, Rohit specializes in dividend growth strategies and long-term wealth preservation. He has previously held executive roles at leading global fintech firms.',
    avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=200&h=200',
    credentials: ['CFA Charterholder', 'MBA Finance', 'Ex-Goldman Analyst']
  }
};

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    slug: 'sp-500-investment-strategy-2026',
    title: 'The S&P 500 Strategy: Why Most Investors Fail to Beat the Index',
    excerpt: 'History shows that 90% of active fund managers underperform the broad market over 10 years. We break down the math behind index investing and how to optimize your portfolio for the next decade.',
    category: 'Investing',
    date: 'May 15, 2026',
    readTime: '8 min',
    authorId: 'rohit-senior',
    coverImage: 'https://images.unsplash.com/photo-1611974717482-48cdb0c00e12?auto=format&fit=crop&q=80&w=1200',
    content: `
# The S&P 500 Strategy: Why Indexing Wins

In the world of finance, the simplest strategies are often the most powerful. The S&P 500 represents the 500 largest publicly traded companies in the US, and it has been the gold standard for wealth creation for nearly a century.

## The Math of Underperformance

Why do smart people fail to beat a simple index? It comes down to three main factors:
1. **Fees:** High expense ratios eat away at compounding.
2. **Tax Inefficiency:** Constant trading triggers capital gains taxes.
3. **Emotional Decisions:** Buying high and selling low out of fear.

### 10-Year Return Comparison of Major Indices

| Index | 10Y Annualized Return | Cumulative Gain | Risk Profile |
|-------|-----------------------|-----------------|--------------|
| S&P 500 | 12.1% | 213% | Moderate |
| NASDAQ 100 | 18.5% | 445% | High |
| Dow Jones | 10.4% | 169% | Lower |

> **Pro Tip:** Don't check your portfolio daily. The market is a device for transferring money from the impatient to the patient.

## How to Get Started
Most investors should look toward low-cost ETFs like **VOO** (Vanguard S&P 500 ETF) or **SPY**. These funds allow you to own the entire US market with almost zero overhead.

---
*Financial Disclaimer: Indexing involves market risk.*
    `
  },
  {
    id: '2',
    slug: 'tax-strategy-for-dividend-investors',
    title: 'Qualified vs. Ordinary Dividends: Navigating the 2026 Tax Landscape',
    excerpt: 'Not all dividends are created equal. Understanding the difference between qualified and ordinary dividends can save you thousands in taxes every year. Here is your roadmap.',
    category: 'Tax Strategy',
    date: 'May 10, 2026',
    readTime: '12 min',
    authorId: 'rohit-senior',
    coverImage: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=1200',
    content: `
# Navigating Dividend Taxes

Dividends are the lifeblood of passive income, but the IRS wants their cut.

## Qualified Dividends
Qualified dividends are taxed at the long-term capital gains rate (0%, 15%, or 20%), which is significantly lower than your standard income tax bracket. 

### Requirements for "Qualified" Status:
- The dividend must be paid by a US corporation or a qualified foreign corporation.
- You must hold the stock for more than 60 days during the 121-day period surrounding the ex-dividend date.

## Tax Efficiency Table

| Income Bracket | Qualified Dividend Rate | Ordinary Income Rate |
|----------------|-------------------------|----------------------|
| $0 - $44,625 | 0% | 10-12% |
| $44,626 - $492,300 | 15% | 22-35% |
| $492,301+ | 20% | 37% |

Using a **Tax-Advantaged Account** (like a Roth IRA) can bypass these worries entirely, allowing your wealth to grow untaxed.
    `
  },
  {
    id: '3',
    slug: 'modern-budgeting-50-30-20-rule',
    title: 'Beyond the Spreadsheet: Why the 50/30/20 Rule Still Works in 2026',
    excerpt: 'Inflation has changed the costs of living, but the principles of sound budgeting remain the same. Discover how to adapt the legendary 50/30/20 rule to today\'s economy.',
    category: 'Budgeting',
    date: 'May 05, 2026',
    readTime: '6 min',
    authorId: 'rohit-senior',
    coverImage: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&q=80&w=1200',
    content: `
# The Modern 50/30/20 Budget

Budgeting isn't about restriction; it's about prioritization.

## The Pillars
- **50% Needs:** Housing, groceries, utilities, transportation.
- **30% Wants:** Dining out, subscriptions, travel, hobbies.
- **20% Savings/Debt:** Investing, emergency fund, high-interest debt repayment.

If your "Needs" exceed 50% due to rising rents, the first place to look is the "Wants" category. Avoid cutting your "Savings/Debt" allocation at all costs—that is the fuel for your future freedom.
    `
  }
];

export const MARKET_DATA: TableRow[] = [
  { name: 'US Total Market', ticker: 'VTI', targetPrice: '$310.00', upside: '12', rating: 'Strong Buy', category: 'Broad Market' },
  { name: 'S&P 500 ETF', ticker: 'VOO', targetPrice: '$560.00', upside: '11', rating: 'Buy', category: 'Index Fund' },
  { name: 'Nasdaq 100', ticker: 'QQQ', targetPrice: '$520.00', upside: '17', rating: 'Strong Buy', category: 'Tech Index' },
  { name: 'Divided Aristocrats', ticker: 'NOBL', targetPrice: '$110.00', upside: '8', rating: 'Accumulate', category: 'Income' },
  { name: 'Corporate Bonds', ticker: 'LQD', targetPrice: '$115.00', upside: '6', rating: 'Hold', category: 'Fixed Income' },
];
