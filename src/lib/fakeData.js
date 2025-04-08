
export const generateStats = () => ({
  users: Math.floor(1000 + Math.random() * 1000),
  sales: Math.floor(2000 + Math.random() * 3000),
  revenue: `$${(15000 + Math.random() * 5000).toFixed(2)}`,
  active: Math.floor(200 + Math.random() * 500),
});

export const generateChartData = () =>
  Array.from({ length: 12 }, (_, i) => ({
    month: `Month ${i + 1}`,
    users: Math.floor(500 + Math.random() * 1000),
    sales: Math.floor(1000 + Math.random() * 3000),
    revenue: Math.floor(10000 + Math.random() * 5000),
    engagement: Math.floor(50 + Math.random() * 50),
  }));

export const generatePieData = () => ([
  { name: 'Chrome', value: Math.floor(Math.random() * 40) + 20 },
  { name: 'Firefox', value: Math.floor(Math.random() * 20) + 10 },
  { name: 'Edge', value: Math.floor(Math.random() * 20) + 5 },
  { name: 'Safari', value: Math.floor(Math.random() * 15) + 5 },
]);

export const generateReports = (count = 100) =>
  Array.from({ length: count }, (_, i) => ({
    id: i + 1,
    name: `User ${i + 1}`,
    email: `user${i + 1}@example.com`,
    status: Math.random() > 0.5 ? 'Active' : 'Inactive',
    sales: Math.floor(Math.random() * 1000),
  }));
