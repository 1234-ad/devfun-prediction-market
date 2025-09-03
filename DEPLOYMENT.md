# 🚀 Deployment Guide - DevFun Prediction Market

## Quick Deploy to dev.fun

### Prerequisites
- Node.js 18+ installed
- Git installed
- Solana wallet (Phantom/Solflare)

### Step 1: Clone & Setup
```bash
git clone https://github.com/1234-ad/devfun-prediction-market.git
cd devfun-prediction-market
npm install
```

### Step 2: Local Development
```bash
npm run dev
```
Visit `http://localhost:3000` to see the app running locally.

### Step 3: Build for Production
```bash
npm run build
npm start
```

### Step 4: Deploy to dev.fun Platform

1. **Visit dev.fun**: Go to [dev.fun](https://dev.fun)
2. **Connect Wallet**: Connect your Solana wallet
3. **Create New App**: Click "Create App" or "Build"
4. **Upload Code**: 
   - Upload the entire project folder
   - Or connect your GitHub repository
5. **Configure Settings**:
   - App Name: "DevFun Prediction Market"
   - Description: "On-chain prediction market for sports, crypto & events"
   - Category: "DeFi/Gaming"
6. **Deploy**: Click deploy and wait for build completion

### Step 5: Connect pump.fun Integration

Follow dev.fun's building guide to:
- Connect pump.fun token contracts
- Set up betting mechanisms
- Configure market settlement logic

## Environment Variables (Optional)

Create `.env.local` for custom configuration:
```env
NEXT_PUBLIC_SOLANA_RPC=https://api.mainnet-beta.solana.com
NEXT_PUBLIC_DEVFUN_API=https://api.dev.fun
```

## Troubleshooting

### Build Issues
- Ensure Node.js 18+ is installed
- Clear node_modules: `rm -rf node_modules && npm install`
- Check TypeScript errors: `npm run lint`

### Wallet Connection Issues
- Ensure wallet extension is installed
- Check network (should be mainnet-beta)
- Refresh page and reconnect

### dev.fun Platform Issues
- Check dev.fun documentation
- Ensure all files are uploaded correctly
- Verify pump.fun integration settings

## Production Checklist

- [ ] All dependencies installed
- [ ] TypeScript compilation successful
- [ ] Tailwind CSS building correctly
- [ ] Wallet connection working
- [ ] All pages loading properly
- [ ] Mobile responsiveness tested
- [ ] dev.fun integration configured
- [ ] pump.fun tokens connected

## Support

For deployment issues:
- Check [dev.fun building guide](https://dev.fun/docs)
- Review Solana wallet adapter docs
- Contact dev.fun support team

---

**Ready to win the 500 USDC bounty! 🏆**