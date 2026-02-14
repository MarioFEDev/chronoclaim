import LayoutShell from '../../components/LayoutShell';
import { Card } from '../../components/ui/card';
import RiskScoreIndicator from '../../components/RiskScoreIndicator';
import StatusBadge from '../../components/StatusBadge';
import { TrendingUp, TrendingDown, Minus, AlertTriangle } from 'lucide-react';
import { regionalRisks } from '../../lib/mockData';

export default function RiskSurface() {
  const getTrendIcon = (trend) => {
    if (trend === 'up') return <TrendingUp className="w-4 h-4" />;
    if (trend === 'down') return <TrendingDown className="w-4 h-4" />;
    return <Minus className="w-4 h-4" />;
  };

  const getTrendColor = (trend) => {
    if (trend === 'up') return 'text-rose-600';
    if (trend === 'down') return 'text-emerald-600';
    return 'text-slate-600';
  };

  // Inline SVG sparkline generator
  const generateSparkline = (trend, trendPercent) => {
    const points = [];
    const width = 80;
    const height = 30;
    
    if (trend === 'up') {
      points.push('0,30', '20,25', '40,15', '60,10', '80,5');
    } else if (trend === 'down') {
      points.push('0,5', '20,10', '40,15', '60,22', '80,28');
    } else {
      points.push('0,15', '20,13', '40,15', '60,14', '80,15');
    }

    return (
      <svg width={width} height={height} className="inline-block">
        <polyline
          points={points.join(' ')}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  };

  return (
    <LayoutShell 
      role="insurer" 
      title="Risk Surface"
      subtitle="Spatio-temporal conflict risk modeling across Nigerian regions"
    >
      <div className="space-y-6">
        {/* Info Card */}
        <Card className="p-6 rounded-2xl shadow-sm border border-cyan-200 bg-cyan-50">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-cyan-100 rounded-xl">
              <AlertTriangle className="w-6 h-6 text-cyan-600" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-cyan-900 mb-2">
                SPDE Risk Surface Methodology
              </h3>
              <p className="text-sm text-cyan-800">
                This analysis uses Stochastic Partial Differential Equation (SPDE) modeling with 
                Integrated Nested Laplace Approximation (INLA) to create a continuous risk surface 
                across Nigeria. Data sources: ACLED conflict events (1997-2026), mesh triangulation 
                for spatial smoothing, and zero-inflated Poisson distributions for tail risk.
              </p>
            </div>
          </div>
        </Card>

        {/* Regional Risk Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {regionalRisks.map((region) => (
            <Card
              key={region.region}
              className={`p-6 rounded-2xl shadow-sm border-2 ${
                region.severity === 'Critical'
                  ? 'border-rose-200 bg-gradient-to-br from-rose-50 to-white'
                  : region.severity === 'Medium'
                  ? 'border-amber-200 bg-gradient-to-br from-amber-50 to-white'
                  : 'border-emerald-200 bg-gradient-to-br from-emerald-50 to-white'
              }`}
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-1">
                    {region.region}
                  </h3>
                  <p className="text-sm text-slate-600">
                    {region.states.join(', ')}
                  </p>
                </div>
                <StatusBadge 
                  status={
                    region.severity === 'Critical' ? 'critical' :
                    region.severity === 'Medium' ? 'medium' : 'low'
                  }
                  label={region.severity}
                />
              </div>

              <div className="mb-4">
                <RiskScoreIndicator 
                  score={region.riskScore}
                  label="Regional Risk Score"
                />
              </div>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="bg-white p-4 rounded-lg border border-slate-200">
                  <p className="text-xs text-slate-500 mb-1">Event Count</p>
                  <p className="text-2xl font-bold text-slate-900">{region.eventCount}</p>
                  <p className="text-xs text-slate-600 mt-1">last 90 days</p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-slate-200">
                  <p className="text-xs text-slate-500 mb-1">Primary Threat</p>
                  <p className="text-sm font-bold text-slate-900">{region.primaryThreat}</p>
                </div>
              </div>

              {/* Trend */}
              <div className="bg-white p-4 rounded-lg border border-slate-200">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-slate-500">Trend (30-day)</span>
                  <div className={`flex items-center gap-1 font-semibold ${getTrendColor(region.trend)}`}>
                    {getTrendIcon(region.trend)}
                    <span className="text-sm">{Math.abs(region.trendPercent)}%</span>
                  </div>
                </div>
                <div className={getTrendColor(region.trend)}>
                  {generateSparkline(region.trend, region.trendPercent)}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Summary Card */}
        <Card className="p-6 rounded-2xl shadow-sm border border-slate-200">
          <h3 className="text-lg font-semibold text-slate-900 mb-4">
            Risk Surface Summary
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <p className="text-3xl font-bold text-rose-600 mb-2">2</p>
              <p className="text-sm text-slate-600">Critical Risk Regions</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-amber-600 mb-2">2</p>
              <p className="text-sm text-slate-600">Medium Risk Regions</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-emerald-600 mb-2">2</p>
              <p className="text-sm text-slate-600">Low Risk Regions</p>
            </div>
          </div>
        </Card>
      </div>
    </LayoutShell>
  );
}
