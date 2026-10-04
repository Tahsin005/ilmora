import currenciesData from '../data-source/extracted_data/currency_api/currencies.json';
import currencyIndex from '../data-source/extracted_data/currency_api/index.json';

const ratesModules = import.meta.glob('../data-source/extracted_data/currency_api/rates/*.json');

export interface CurrencyMap {
  [code: string]: string;
}

export interface RatesData {
  date: string;
  [base: string]: Record<string, number> | string;
}

export const getCurrenciesList = (): CurrencyMap => {
  return currenciesData as CurrencyMap;
};

export const getAvailableBaseCurrencies = (): string[] => {
  return (currencyIndex.base_rates_available || []) as string[];
};

export const getRatesForBase = async (base: string = 'usd'): Promise<Record<string, number>> => {
  const b = base.toLowerCase();
  const path = `../data-source/extracted_data/currency_api/rates/${b}.json`;
  const loader = ratesModules[path];
  if (!loader) return {};
  const mod = (await loader()) as { default: Record<string, unknown> };
  const data = mod.default;
  if (data && typeof data[b] === 'object' && data[b] !== null) {
    return data[b] as Record<string, number>;
  }
  return {};
};
