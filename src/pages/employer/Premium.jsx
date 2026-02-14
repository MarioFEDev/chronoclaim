import LayoutShell from '../../components/LayoutShell';
import MetricCard from '../../components/MetricCard';
import { Card } from '../../components/ui/card';
import { Progress } from '../../components/ui/progress';
import { Button } from '../../components/ui/button';
import { DollarSign, TrendingUp, Download, Calendar } from 'lucide-react';
import { premiumAdjustments, metrics } from '../../lib/mockData';

export default function Premium() {
  const handleExport = () => {
    // Simulate CSV export
    const csvContent = premiumAdjustments.map(p => 
      `${p.date},${p.activeGuards},${p.premium},${p.adjustment}`
    ).join('\n');
    const blob = new Blob([`Date,Active Guards,Premium,Adjustment\n${csvContent}`], 
      { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'premium-history.csv';
    a.click();
  };

  return (
    <LayoutShell 
      role="employer" 
      title="Premium Overview"
      subtitle="Pay-As-You-Guard™ pricing and coverage management"
    >
      <div className="space-y-6">
        {/* Top Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <MetricCard
            title="Today's Premium"
            value={metrics.employer.dailyPremium}
            icon={DollarSign}
            status="info"
          />
          <MetricCard
            title="Active Guards"
            value={metrics.employer.totalActiveGuards}
            delta={`₦2,000 per guard/day`}
            icon={TrendingUp}
            status="neutral"
          />
          <MetricCard
            title="Coverage Rate"
            value={`${metrics.employer.coverageRate}%`}
            delta="Above industry avg"
            deltaType="positive"
            icon={TrendingUp}
            status="safe"
          />
        </div>

        {/* Pay-As-You-Guard Calculator */}
        <Card className="p-6 rounded-2xl shadow-sm border border-slate-200">
          <h3 className="text-lg font-semibold text-slate-900 mb-4">
            Pay-As-You-Guard™ Calculator
          </h3>
          <div className="space-y-4">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-slate-700">
                  Daily Coverage (147 / 150 guards)
                </span>
                <span className="text-sm font-bold text-cyan-600">
                  {metrics.employer.coverageRate}%
                </span>
              </div>
              <div className="relative">
                <Progress value={metrics.employer.coverageRate} className="h-3" />
                <div 
                  className="absolute top-0 left-0 h-3 bg-cyan-600 rounded-full"
                  style={{ width: `${metrics.employer.coverageRate}%` }}
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-6">
              <div className="bg-slate-50 p-4 rounded-lg">
                <p className="text-xs text-slate-500 mb-1">Base Rate (Per Guard)</p>
                <p className="text-2xl font-bold text-slate-900">₦2,000</p>
                <p className="text-xs text-slate-600 mt-1">per day</p>
              </div>
              <div className="bg-emerald-50 p-4 rounded-lg">
                <p className="text-xs text-slate-500 mb-1">Total Daily Cost</p>
                <p className="text-2xl font-bold text-emerald-600">{metrics.employer.dailyPremium}</p>
                <p className="text-xs text-slate-600 mt-1">147 guards × ₦2,000</p>
              </div>
            </div>

            <div className="bg-cyan-50 border border-cyan-200 p-4 rounded-lg mt-4">
              <p className="text-sm text-cyan-900">
                <strong>Dynamic Pricing:</strong> Your premium adjusts automatically based on 
                active deployments tracked via biometric check-ins. Only pay for guards actively 
                on duty. NSCDC compliance verified.
              </p>
            </div>
          </div>
        </Card>

        {/* Coverage Adjustments Log */}
        <Card className="p-6 rounded-2xl shadow-sm border border-slate-200">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-slate-900">
              Coverage Adjustments Log
            </h3>
            <Button 
              onClick={handleExport}
              variant="outline" 
              className="text-cyan-600 border-cyan-200 hover:bg-cyan-50"
            >
              <Download className="w-4 h-4 mr-2" />
              Export CSV
            </Button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-slate-50 border-b border-slate-200">
                <tr>
                  <th className="text-left px-4 py-3 text-sm font-semibold text-slate-700">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      Date
                    </div>
                  </th>
                  <th className="text-left px-4 py-3 text-sm font-semibold text-slate-700">Active Guards</th>
                  <th className="text-left px-4 py-3 text-sm font-semibold text-slate-700">Premium</th>
                  <th className="text-left px-4 py-3 text-sm font-semibold text-slate-700">Adjustment</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {premiumAdjustments.map((adjustment, index) => (
                  <tr key={index} className="hover:bg-slate-50 transition-colors">
                    <td className="px-4 py-4 text-sm text-slate-700">
                      {new Date(adjustment.date).toLocaleDateString()}
                    </td>
                    <td className="px-4 py-4 text-sm font-medium text-slate-900">
                      {adjustment.activeGuards}
                    </td>
                    <td className="px-4 py-4 text-sm font-bold text-emerald-600">
                      {adjustment.premium}
                    </td>
                    <td className="px-4 py-4 text-sm text-slate-600">
                      {adjustment.adjustment}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        {/* Pricing Info */}
        <Card className="p-6 rounded-2xl shadow-sm border border-slate-200 bg-gradient-to-br from-slate-50 to-white">
          <h3 className="text-lg font-semibold text-slate-900 mb-4">
            How Pay-As-You-Guard™ Works
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <div className="w-12 h-12 bg-cyan-100 rounded-xl flex items-center justify-center mb-3">
                <span className="text-xl font-bold text-cyan-600">1</span>
              </div>
              <h4 className="text-sm font-semibold text-slate-900 mb-2">Biometric Check-In</h4>
              <p className="text-xs text-slate-600">
                Guards check in daily via NSCDC-approved biometric system
              </p>
            </div>
            <div>
              <div className="w-12 h-12 bg-cyan-100 rounded-xl flex items-center justify-center mb-3">
                <span className="text-xl font-bold text-cyan-600">2</span>
              </div>
              <h4 className="text-sm font-semibold text-slate-900 mb-2">Auto-Calculate</h4>
              <p className="text-xs text-slate-600">
                System counts active guards and calculates daily premium
              </p>
            </div>
            <div>
              <div className="w-12 h-12 bg-cyan-100 rounded-xl flex items-center justify-center mb-3">
                <span className="text-xl font-bold text-cyan-600">3</span>
              </div>
              <h4 className="text-sm font-semibold text-slate-900 mb-2">Pay Only Active</h4>
              <p className="text-xs text-slate-600">
                No coverage charges for off-duty or absent guards
              </p>
            </div>
          </div>
        </Card>
      </div>
    </LayoutShell>
  );
}
