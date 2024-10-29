import { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { AVAILABLE_CURRENCIES } from '../config/currencies';
import { useCurrencyRates } from '../hooks/useCurrencyRates';
import { FiDollarSign, FiRefreshCw, FiTrendingUp } from 'react-icons/fi';
import { BsCurrencyExchange } from 'react-icons/bs';
import { RiExchangeDollarLine } from 'react-icons/ri';

const formatCurrencyValue = (value, currency) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'decimal',
    minimumFractionDigits: 2,
    maximumFractionDigits: 6,
    notation: value > 999999 ? 'compact' : 'standard'
  }).format(value);
};

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="p-3 rounded-lg" style={{ 
        background: 'var(--secondary-background-color)',
        border: '1px solid var(--border-color)'
      }}>
        <p style={{ color: 'var(--primary-text-color)' }}>
          {`${label} - ${payload[0].payload.name}`}
        </p>
        <p className="font-bold" style={{ color: 'var(--accent-color)' }}>
          {formatCurrencyValue(payload[0].value)}
        </p>
      </div>
    );
  }
  return null;
};

export function Dashboard() {
  const [baseCurrency, setBaseCurrency] = useState('USD');
  const { data, isLoading, error } = useCurrencyRates(baseCurrency);

  if (isLoading) return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-primary text-xl">
        <div className="flex items-center gap-3">
          <FiRefreshCw className="animate-spin h-5 w-5" />
          Carregando dados...
        </div>
      </div>
    </div>
  );

  const chartData = Object.entries(data || {})
    .filter(([currency]) => Object.keys(AVAILABLE_CURRENCIES).includes(currency.toUpperCase()))
    .map(([currency, value]) => ({
      currency: currency.toUpperCase(),
      name: AVAILABLE_CURRENCIES[currency.toUpperCase()],
      value,
    }));

  return (
    <div className="gradient-bg p-4 sm:p-6 rounded-xl animate-in">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-8 mb-6 sm:mb-8">
        <div className="relative w-full sm:w-auto">
          <div className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none">
            <BsCurrencyExchange className="h-5 w-5" style={{ color: 'var(--accent-color)' }} />
          </div>
          <select 
            value={baseCurrency}
            onChange={(e) => setBaseCurrency(e.target.value)}
            className="w-full sm:w-auto appearance-none border rounded-lg py-2 pl-10 pr-10 focus:outline-none focus:ring-2"
            style={{
              background: 'var(--background-color)',
              color: 'var(--primary-text-color)',
              borderColor: 'var(--border-color)',
            }}
          >
            {Object.entries(AVAILABLE_CURRENCIES).map(([code, name]) => (
              <option key={code} value={code}>
                {code} - {name}
              </option>
            ))}
          </select>
        </div>

        <div className="text-sm flex items-center gap-2" style={{ color: 'var(--secondary-text-color)' }}>
          <FiRefreshCw className="h-4 w-4" />
          Última atualização: {new Date().toLocaleTimeString()}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
        {chartData.map((item) => (
          <div key={item.currency} className="dashboard-card p-4 card-transition">
            <div className="flex justify-between items-start">
              <div className="flex items-start gap-3">
                <RiExchangeDollarLine className="h-6 w-6 mt-1" style={{ color: 'var(--accent-color)' }} />
                <div>
                  <div className="text-sm font-medium" style={{ color: 'var(--secondary-text-color)' }}>
                    {item.name}
                  </div>
                  <div className="text-xl sm:text-2xl font-semibold mt-1" style={{ color: 'var(--primary-text-color)' }}>
                    {formatCurrencyValue(item.value)}
                  </div>
                </div>
              </div>
              <div className="text-xs font-medium px-2 py-1 rounded-full flex items-center gap-1" 
                   style={{ 
                     background: 'var(--accent-color)',
                     color: 'var(--background-color)'
                   }}>
                <FiTrendingUp className="h-3 w-3" />
                {item.currency}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="dashboard-card p-4 sm:p-6 overflow-x-auto">
        <div className="min-w-[320px]">
          <ResponsiveContainer width="100%" height={350}>
            <LineChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border-color)" opacity={0.2} />
              <XAxis 
                dataKey="currency" 
                stroke="var(--secondary-text-color)"
                tick={{ fontSize: 12 }}
              />
              <YAxis 
                stroke="var(--secondary-text-color)"
                tickFormatter={(value) => formatCurrencyValue(value)}
                tick={{ fontSize: 12 }}
              />
              <Tooltip content={<CustomTooltip />} />
              <Line 
                type="monotone" 
                dataKey="value" 
                stroke="var(--accent-color)"
                strokeWidth={2}
                dot={{ fill: "var(--accent-color)", stroke: "var(--accent-color)", strokeWidth: 2 }}
                activeDot={{ r: 6, fill: "var(--accent-color)", stroke: "var(--background-color)", strokeWidth: 2 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
} 