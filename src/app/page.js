
'use client';
import { useState } from 'react';
import {
  generateStats,
  generateChartData,
  generatePieData
} from '@/lib/fakeData';
import { StatCard } from '@/components/StatCard';
import {
  LineChart, Line,
  BarChart, Bar,
  AreaChart, Area,
  PieChart, Pie, Cell,
  XAxis, YAxis,
  CartesianGrid, Tooltip, ResponsiveContainer, Legend
} from 'recharts';

const COLORS = ['#0d6efd', '#198754', '#ffc107', '#dc3545'];

export default function DashboardPage() {
  const [stats, setStats] = useState(generateStats());
  const [chartData, setChartData] = useState(generateChartData());
  const [pieData, setPieData] = useState(generatePieData());

  return (
    <div className="container py-4">
      <div className="row g-4">
        {Object.entries(stats).map(([key, value]) => (
          <div key={key} className="col-6 col-md-3">
            <StatCard title={key} value={value} />
          </div>
        ))}

        <div className="col-12">
          <div className="card text-bg-dark">
            <div className="card-body">
              <h5 className="card-title mb-4">Monthly Trends (Line)</h5>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#444" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="users" stroke="#0d6efd" />
                  <Line type="monotone" dataKey="sales" stroke="#198754" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card text-bg-dark">
            <div className="card-body">
              <h5 className="card-title mb-4">Revenue (Bar)</h5>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#444" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="revenue" fill="#ffc107" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card text-bg-dark">
            <div className="card-body">
              <h5 className="card-title mb-4">Engagement (Area)</h5>
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={chartData}>
                  <defs>
                    <linearGradient id="colorEngagement" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#dc3545" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="#dc3545" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="month" />
                  <YAxis />
                  <CartesianGrid strokeDasharray="3 3" stroke="#444" />
                  <Tooltip />
                  <Area type="monotone" dataKey="engagement" stroke="#dc3545" fillOpacity={1} fill="url(#colorEngagement)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card text-bg-dark">
            <div className="card-body text-center">
              <h5 className="card-title mb-4">Browser Share (Pie)</h5>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={pieData}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    fill="#8884d8"
                    label
                  >
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        <div className="col-12 text-center">
          <button
            onClick={() => {
              setStats(generateStats());
              setChartData(generateChartData());
              setPieData(generatePieData());
            }}
            className="btn btn-primary mt-4"
          >
            Refresh Data
          </button>
        </div>
      </div>
    </div>
  );
}
