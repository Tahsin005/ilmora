import React, { useState, useEffect } from 'react';
import {
  Coins,
  DollarSign,
  Calculator,
  Info,
  CheckCircle2,
  AlertCircle,
} from 'lucide-react';
import { getZakatNisab, type NisabData } from '../services/islamicApiService';
import { getCurrenciesList } from '../services/currencyService';
import { GlassSelect, type GlassSelectOption } from '../components/common/GlassSelect';

const SUPPORTED_CURRENCIES = [
  'usd', 'bdt', 'eur', 'gbp', 'sar', 'aed', 'inr', 'pkr', 'cad', 'aud',
  'try', 'myr', 'idr', 'kwd', 'qar', 'bhd', 'omr', 'jpy',
];

export const ZakatPage: React.FC = () => {
  const [selectedCurrency, setSelectedCurrency] = useState('usd');
  const [nisabData, setNisabData] = useState<NisabData | null>(null);
  const [loading, setLoading] = useState(true);

  const currenciesMap = getCurrenciesList();
  const currencyOptions: GlassSelectOption[] = SUPPORTED_CURRENCIES.map((c) => ({
    value: c,
    label: c.toUpperCase(),
    sublabel: currenciesMap[c] || c.toUpperCase(),
  }));

  // Asset inputs
  const [cash, setCash] = useState<string>('');
  const [goldGrams, setGoldGrams] = useState<string>('');
  const [silverGrams, setSilverGrams] = useState<string>('');
  const [investments, setInvestments] = useState<string>('');
  const [businessAssets, setBusinessAssets] = useState<string>('');
  const [debts, setDebts] = useState<string>('');

  useEffect(() => {
    let ignore = false;
    getZakatNisab(selectedCurrency).then((res) => {
      if (!ignore) {
        setNisabData(res);
        setLoading(false);
      }
    });
    return () => {
      ignore = true;
    };
  }, [selectedCurrency]);

  const goldThreshold = nisabData?.data?.nisab_thresholds?.gold;
  const silverThreshold = nisabData?.data?.nisab_thresholds?.silver;

  // Calculation logic
  const goldVal = (Number(goldGrams) || 0) * (goldThreshold?.unit_price || 0);
  const silverVal = (Number(silverGrams) || 0) * (silverThreshold?.unit_price || 0);
  const totalAssets =
    (Number(cash) || 0) +
    goldVal +
    silverVal +
    (Number(investments) || 0) +
    (Number(businessAssets) || 0);

  const totalLiabilities = Number(debts) || 0;
  const netZakatableWealth = Math.max(0, totalAssets - totalLiabilities);

  // Using silver nisab (standard recommendation by majority of classical scholars for maximum benefit to the poor)
  const nisabThresholdAmount = silverThreshold?.nisab_amount || 0;
  const isZakatObligatory = netZakatableWealth >= nisabThresholdAmount;
  const zakatPayable = isZakatObligatory ? netZakatableWealth * 0.025 : 0;

  return (
    <div className="space-y-8 max-w-4xl mx-auto">

      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
        <div>
          <div className="font-display text-[11px] font-medium  tracking-[0.15em] text-muted-foreground mb-2">
            ISLAMIC PHILANTHROPY & WEALTH PURIFICATION
          </div>
          <h1 className="font-display text-[clamp(32px,5vw,56px)] font-bold tracking-tighter leading-tight mb-3">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/50">
              Zakat & Nisab{" "}
            </span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[hsl(var(--accent-3))] to-[hsl(var(--accent-3)/0.4)]">
              Calculator
            </span>
          </h1>
          <p className="font-body text-[14px] md:text-[15px] leading-[1.7] text-foreground/60 max-w-xl">
            Calculate your 2.5% annual Zakat liability against live gold and silver Nisab thresholds across global currencies.
          </p>
        </div>


        <GlassSelect
          value={selectedCurrency}
          onChange={setSelectedCurrency}
          options={currencyOptions}
          icon={<DollarSign className="w-4 h-4" />}
          size="md"
          menuClassName="w-64"
        />
      </div>

      {loading ? (
        <div className="py-24 text-center font-display text-muted-foreground animate-pulse">Loading live Nisab thresholds...</div>
      ) : (
        <div className="space-y-8">

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

            <div className="glass-card glass-hover glass-shimmer p-6 space-y-2 border border-[hsl(var(--accent-2)/0.3)] bg-[hsl(var(--accent-2)/0.03)] hover:border-[hsl(var(--accent-2)/0.6)] hover:shadow-[0_0_30px_hsl(var(--accent-2)/0.25)]">
              <div className="flex items-center justify-between">
                <span className="font-display text-xs font-bold text-[hsl(var(--accent-2))]  tracking-widest block">
                  Gold Nisab (87.48 grams)
                </span>
                <Coins className="w-4 h-4 text-[hsl(var(--accent-2))]" />
              </div>
              <span className="text-3xl font-mono font-black text-foreground block">
                {selectedCurrency.toUpperCase()} {goldThreshold?.nisab_amount?.toLocaleString(undefined, { maximumFractionDigits: 2 })}
              </span>
              <span className="font-body text-xs text-muted-foreground block">
                Rate: {selectedCurrency.toUpperCase()} {goldThreshold?.unit_price?.toFixed(2)} / gram
              </span>
            </div>


            <div className="glass-card glass-hover glass-shimmer p-6 space-y-2 border border-white/10 hover:border-primary/50 hover:shadow-[0_0_30px_hsl(var(--primary)/0.25)]">
              <div className="flex items-center justify-between">
                <span className="font-display text-xs font-bold text-muted-foreground  tracking-widest block">
                  Silver Nisab (612.36 grams)
                </span>
                <span className="font-display text-[10px] bg-primary/20 text-primary px-2.5 py-0.5 rounded-full font-bold border border-primary/30">
                  Standard Benchmark
                </span>
              </div>
              <span className="text-3xl font-mono font-black text-foreground block">
                {selectedCurrency.toUpperCase()} {silverThreshold?.nisab_amount?.toLocaleString(undefined, { maximumFractionDigits: 2 })}
              </span>
              <span className="font-body text-xs text-muted-foreground block">
                Rate: {selectedCurrency.toUpperCase()} {silverThreshold?.unit_price?.toFixed(2)} / gram
              </span>
            </div>
          </div>


          <div className="glass-panel p-6 md:p-8 space-y-6 border border-white/10">
            <h3 className="font-display font-bold text-lg text-foreground flex items-center gap-2.5">
              <Calculator className="w-5 h-5 text-primary" /> Enter Your Zakatable Assets
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

              <div className="space-y-2">
                <label className="font-display text-xs font-semibold text-foreground/80">
                  Cash on Hand & Bank Accounts
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 font-display text-xs font-bold text-muted-foreground ">
                    {selectedCurrency}
                  </span>
                  <input
                    type="number"
                    min="0"
                    placeholder="0.00"
                    value={cash}
                    onChange={(e) => setCash(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-xl pl-16 pr-4 py-3 font-mono text-sm text-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all shadow-inner"
                  />
                </div>
              </div>


              <div className="space-y-2">
                <label className="font-display text-xs font-semibold text-foreground/80">
                  Gold Weight Owned (Grams)
                </label>
                <div className="relative">
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 font-display text-xs text-muted-foreground font-mono">
                    grams
                  </span>
                  <input
                    type="number"
                    min="0"
                    placeholder="0.00"
                    value={goldGrams}
                    onChange={(e) => setGoldGrams(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 font-mono text-sm text-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all shadow-inner"
                  />
                </div>
                {goldVal > 0 && (
                  <span className="text-[11px] text-[hsl(var(--accent-2))] block font-mono font-medium">
                    Est. Value: {selectedCurrency.toUpperCase()} {goldVal.toFixed(2)}
                  </span>
                )}
              </div>


              <div className="space-y-2">
                <label className="font-display text-xs font-semibold text-foreground/80">
                  Silver Weight Owned (Grams)
                </label>
                <div className="relative">
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 font-display text-xs text-muted-foreground font-mono">
                    grams
                  </span>
                  <input
                    type="number"
                    min="0"
                    placeholder="0.00"
                    value={silverGrams}
                    onChange={(e) => setSilverGrams(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 font-mono text-sm text-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all shadow-inner"
                  />
                </div>
                {silverVal > 0 && (
                  <span className="text-[11px] text-muted-foreground block font-mono font-medium">
                    Est. Value: {selectedCurrency.toUpperCase()} {silverVal.toFixed(2)}
                  </span>
                )}
              </div>


              <div className="space-y-2">
                <label className="font-display text-xs font-semibold text-foreground/80">
                  Stocks, Shares & Mutual Funds
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 font-display text-xs font-bold text-muted-foreground ">
                    {selectedCurrency}
                  </span>
                  <input
                    type="number"
                    min="0"
                    placeholder="0.00"
                    value={investments}
                    onChange={(e) => setInvestments(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-xl pl-16 pr-4 py-3 font-mono text-sm text-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all shadow-inner"
                  />
                </div>
              </div>


              <div className="space-y-2">
                <label className="font-display text-xs font-semibold text-foreground/80">
                  Business Inventory for Sale
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 font-display text-xs font-bold text-muted-foreground ">
                    {selectedCurrency}
                  </span>
                  <input
                    type="number"
                    min="0"
                    placeholder="0.00"
                    value={businessAssets}
                    onChange={(e) => setBusinessAssets(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-xl pl-16 pr-4 py-3 font-mono text-sm text-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all shadow-inner"
                  />
                </div>
              </div>


              <div className="space-y-2">
                <label className="font-display text-xs font-semibold text-destructive">
                  Short-Term Debts & Due Bills (Deducted)
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 font-display text-xs font-bold text-destructive/70 ">
                    {selectedCurrency}
                  </span>
                  <input
                    type="number"
                    min="0"
                    placeholder="0.00"
                    value={debts}
                    onChange={(e) => setDebts(e.target.value)}
                    className="w-full bg-destructive/5 border border-destructive/20 rounded-xl pl-16 pr-4 py-3 font-mono text-sm text-foreground focus:outline-none focus:border-destructive/60 transition-all shadow-inner"
                  />
                </div>
              </div>
            </div>
          </div>


          <div className="glass-card p-6 md:p-8 space-y-6 border border-white/10 rounded-3xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pb-6 border-b border-white/10">
              <div>
                <span className="font-display text-xs text-muted-foreground font-semibold block  tracking-wider">Total Zakatable Wealth:</span>
                <span className="text-2xl font-mono font-bold text-foreground block mt-1">
                  {selectedCurrency.toUpperCase()} {netZakatableWealth.toLocaleString(undefined, { maximumFractionDigits: 2 })}
                </span>
              </div>
              <div>
                <span className="font-display text-xs text-muted-foreground font-semibold block  tracking-wider">Silver Nisab Benchmark:</span>
                <span className="text-2xl font-mono font-bold text-foreground/80 block mt-1">
                  {selectedCurrency.toUpperCase()} {nisabThresholdAmount.toLocaleString(undefined, { maximumFractionDigits: 2 })}
                </span>
              </div>
            </div>


            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              <div className="space-y-1.5">
                {isZakatObligatory ? (
                  <div className="flex items-center gap-2 text-primary font-display font-bold text-base">
                    <CheckCircle2 className="w-5 h-5 shrink-0" /> Your wealth exceeds the Nisab threshold. Zakat is obligatory.
                  </div>
                ) : (
                  <div className="flex items-center gap-2 text-muted-foreground font-display font-medium text-base">
                    <AlertCircle className="w-5 h-5 shrink-0" /> Your wealth is below Nisab. No Zakat is due this year.
                  </div>
                )}
                <span className="font-body text-xs text-muted-foreground block">
                  Calculation based on the standard 2.5% rate on lunar yearly holdings.
                </span>
              </div>

              <div className="glass-panel p-5 rounded-2xl text-center min-w-[220px] border border-primary/30 shadow-xl shadow-primary/10">
                <span className="font-display text-xs font-bold text-primary  tracking-widest block">
                  Total Zakat Due (2.5%)
                </span>
                <span className="text-3xl font-mono font-black text-foreground mt-1.5 block">
                  {selectedCurrency.toUpperCase()} {zakatPayable.toLocaleString(undefined, { maximumFractionDigits: 2 })}
                </span>
              </div>
            </div>

            <div className="text-xs font-body text-muted-foreground pt-4 border-t border-white/10 flex items-start gap-2">
              <Info className="w-4 h-4 shrink-0 text-primary mt-0.5" />
              <span>
                Personal items (primary residence, private transportation, clothing, everyday personal tools and equipment) are fully exempt from Zakat.
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ZakatPage;
