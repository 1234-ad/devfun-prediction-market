'use client';

import { useState, useEffect } from 'react';
import { Connection, PublicKey } from '@solana/web3.js';

interface Market {
  id: string;
  title: string;
  category: 'sports' | 'crypto' | 'world' | 'memes';
  description: string;
  odds: { yes: number; no: number };
  volume: number;
  endTime: string;
  status: 'active' | 'ended';
}

const SAMPLE_MARKETS: Market[] = [
  {
    id: '1',
    title: 'Bitcoin hits $100k by end of 2024',
    category: 'crypto',
    description: 'Will Bitcoin reach $100,000 USD by December 31, 2024?',
    odds: { yes: 1.8, no: 2.1 },
    volume: 15420,
    endTime: '2024-12-31',
    status: 'active'
  },
  {
    id: '2', 
    title: 'Chiefs win Super Bowl 2025',
    category: 'sports',
    description: 'Will Kansas City Chiefs win Super Bowl LIX?',
    odds: { yes: 2.5, no: 1.6 },
    volume: 8930,
    endTime: '2025-02-09',
    status: 'active'
  },
  {
    id: '3',
    title: 'DOGE reaches $1 this year',
    category: 'memes',
    description: 'Will Dogecoin hit $1.00 USD in 2024?',
    odds: { yes: 4.2, no: 1.3 },
    volume: 23100,
    endTime: '2024-12-31',
    status: 'active'
  }
];

export default function PredictionMarket() {
  const [markets, setMarkets] = useState<Market[]>(SAMPLE_MARKETS);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [connected, setConnected] = useState(false);

  const categories = [
    { id: 'all', name: 'All Markets', icon: '🎯' },
    { id: 'sports', name: 'Sports', icon: '🏈' },
    { id: 'crypto', name: 'Crypto', icon: '📈' },
    { id: 'world', name: 'World Events', icon: '🌍' },
    { id: 'memes', name: 'Memes', icon: '🐸' }
  ];

  const filteredMarkets = selectedCategory === 'all' 
    ? markets 
    : markets.filter(m => m.category === selectedCategory);

  const connectWallet = () => {
    setConnected(true);
  };

  const placeBet = (marketId: string, side: 'yes' | 'no', amount: number) => {
    if (!connected) {
      alert('Please connect your wallet first!');
      return;
    }
    alert(`Bet placed: ${amount} SOL on ${side.toUpperCase()} for market ${marketId}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      {/* Header */}
      <header className="border-b border-white/10 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="text-3xl">🎯</div>
            <h1 className="text-2xl font-bold text-white">DevFun Predictions</h1>
          </div>
          <button
            onClick={connectWallet}
            className={`px-6 py-2 rounded-lg font-semibold transition-all ${
              connected 
                ? 'bg-green-600 text-white' 
                : 'bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700'
            }`}
          >
            {connected ? '✅ Connected' : 'Connect Wallet'}
          </button>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-white mb-4">
            Predict. Bet. Win. 📈
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            The most addictive on-chain prediction market on Solana
          </p>
          <div className="flex justify-center space-x-8 text-center">
            <div>
              <div className="text-3xl font-bold text-green-400">$47.2K</div>
              <div className="text-gray-400">Total Volume</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-400">1,247</div>
              <div className="text-gray-400">Active Bets</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-400">89%</div>
              <div className="text-gray-400">Win Rate</div>
            </div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all ${
                selectedCategory === cat.id
                  ? 'bg-white text-purple-900'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              {cat.icon} {cat.name}
            </button>
          ))}
        </div>

        {/* Markets Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMarkets.map(market => (
            <div key={market.id} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="flex justify-between items-start mb-4">
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-white mb-2">{market.title}</h3>
                  <p className="text-gray-300 text-sm">{market.description}</p>
                </div>
                <span className="text-2xl">
                  {market.category === 'sports' && '🏈'}
                  {market.category === 'crypto' && '📈'}
                  {market.category === 'world' && '🌍'}
                  {market.category === 'memes' && '🐸'}
                </span>
              </div>

              <div className="mb-4">
                <div className="flex justify-between text-sm text-gray-400 mb-2">
                  <span>Volume: ${market.volume.toLocaleString()}</span>
                  <span>Ends: {market.endTime}</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => placeBet(market.id, 'yes', 10)}
                  className="bg-green-600 hover:bg-green-700 text-white py-3 px-4 rounded-lg font-semibold transition-all"
                >
                  YES {market.odds.yes}x
                </button>
                <button
                  onClick={() => placeBet(market.id, 'no', 10)}
                  className="bg-red-600 hover:bg-red-700 text-white py-3 px-4 rounded-lg font-semibold transition-all"
                >
                  NO {market.odds.no}x
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <footer className="text-center mt-16 py-8 border-t border-white/10">
          <p className="text-gray-400">
            Built with ❤️ for the dev.fun Prediction Market Challenge
          </p>
          <p className="text-gray-500 text-sm mt-2">
            Powered by Solana • pump.fun • dev.fun
          </p>
        </footer>
      </div>
    </div>
  );
}