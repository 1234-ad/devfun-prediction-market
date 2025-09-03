import { Connection, PublicKey, clusterApiUrl } from '@solana/web3.js';

// Solana configuration
export const SOLANA_NETWORK = 'mainnet-beta';
export const RPC_ENDPOINT = process.env.NEXT_PUBLIC_SOLANA_RPC || clusterApiUrl(SOLANA_NETWORK);

// Create connection
export const connection = new Connection(RPC_ENDPOINT, 'confirmed');

// Dev.fun and pump.fun integration constants
export const DEVFUN_PROGRAM_ID = new PublicKey('DevFun1111111111111111111111111111111111111');
export const PUMPFUN_PROGRAM_ID = new PublicKey('PumpFun1111111111111111111111111111111111111');

// Market types
export interface PredictionMarket {
  id: string;
  title: string;
  description: string;
  category: 'sports' | 'crypto' | 'world' | 'memes';
  odds: {
    yes: number;
    no: number;
  };
  volume: number;
  endTime: string;
  status: 'active' | 'ended' | 'settled';
  creator: PublicKey;
  totalYesBets: number;
  totalNoBets: number;
}

// Betting functions
export const placeBet = async (
  marketId: string,
  side: 'yes' | 'no',
  amount: number,
  walletPublicKey: PublicKey
) => {
  try {
    // This would integrate with dev.fun's smart contracts
    console.log(`Placing bet: ${amount} SOL on ${side} for market ${marketId}`);
    console.log(`Wallet: ${walletPublicKey.toString()}`);
    
    // Mock transaction for demo
    return {
      success: true,
      signature: 'mock_signature_' + Date.now(),
      message: `Successfully bet ${amount} SOL on ${side.toUpperCase()}`
    };
  } catch (error) {
    console.error('Bet placement failed:', error);
    return {
      success: false,
      error: 'Failed to place bet'
    };
  }
};

// Get market data
export const getMarketData = async (marketId: string): Promise<PredictionMarket | null> => {
  try {
    // This would fetch from dev.fun's API or on-chain data
    console.log(`Fetching market data for: ${marketId}`);
    return null; // Mock for now
  } catch (error) {
    console.error('Failed to fetch market data:', error);
    return null;
  }
};

// Utility functions
export const formatSOL = (amount: number): string => {
  return `${amount.toFixed(4)} SOL`;
};

export const calculatePotentialWinnings = (betAmount: number, odds: number): number => {
  return betAmount * odds;
};