import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const BASE_URL = 'https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1';

export function useCurrencyRates(baseCurrency) {
  return useQuery({
    queryKey: ['currencies', baseCurrency],
    queryFn: async () => {
      const { data } = await axios.get(`${BASE_URL}/currencies/${baseCurrency.toLowerCase()}.json`);
      return data[baseCurrency.toLowerCase()];
    },
    refetchInterval: 60000, // Atualiza a cada 1 minuto
  });
} 