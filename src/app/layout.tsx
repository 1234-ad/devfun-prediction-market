import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'DevFun Prediction Market | Bet on Sports, Crypto & Events',
  description: 'The most addictive on-chain prediction market built on dev.fun. Bet on sports outcomes, token prices, and real-world events using pump.fun coins.',
  keywords: ['prediction market', 'betting', 'solana', 'dev.fun', 'pump.fun', 'crypto', 'sports'],
  authors: [{ name: 'eefbb' }],
  openGraph: {
    title: 'DevFun Prediction Market',
    description: 'Predict. Bet. Win. The ultimate on-chain prediction market.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}