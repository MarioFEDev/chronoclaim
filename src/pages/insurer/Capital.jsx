import LayoutShell from '../../components/LayoutShell';
import MetricCard from '../../components/MetricCard';
import { Card } from '../../components/ui/card';
import { Progress } from '../../components/ui/progress';
import { Building2, TrendingUp, DollarSign, Shield } from 'lucide-react';
import { metrics, capitalAllocation } from '../../lib/mockData';

export default function Capital() {
  return (
    <LayoutShell 
      role="insurer" 
      title="Capital Efficiency"
      subtitle="ALM optimization and Risk-Based Capital management"
    >
      <div className="space-y-6">
        {/* Top Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <MetricCard
            title="Capital Charge Avoidance"
            value={metrics.insurer.capitalChargeAvoidance}
            icon={Building2}
            status="safe"
            delta="vs. traditional model"
            deltaType="positive"
          />
          <MetricCard
            title="Liquidity Ratio"
            value={metrics.insurer.liquidityRatio}
            icon={TrendingUp}
            status="safe"
            delta="Above NAICOM min (1.5)"
            deltaType="positive"
          />
          <MetricCard
            title="Portfolio Risk"
            value={metrics.insurer.portfolioRisk}
            icon={Shield}
            status="warning"
          />
          <MetricCard
            title="IBNR Lag Reduction"
            value="87%"
            icon={DollarSign}
            status="safe"
            delta="vs. 7-year wait"
            deltaType="positive"
          />
        </div>

        {/* NIIRA 2025 RBC Explanation */}
        <Card className="p-6 rounded-2xl shadow-sm border border-cyan-200 bg-gradient-to-br from-cyan-50 to-white">
          <h3 className="text-lg font-semibold text-cyan-900 mb-4 flex items-center gap-2">
            <Shield className="w-5 h-5" />
            NIIRA 2025 Risk-Based Capital Framework
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-sm font-semibold text-slate-900 mb-2">The Challenge</h4>
              <p className="text-sm text-slate-700 mb-3">
                Under NIIRA 2025 Section 26, insurers must hold capital charges based on the 
                <strong> uncertainty</strong> of liabilities. In conflict zones, uncertainty is extreme:
              </p>
              <ul className="text-sm text-slate-700 space-y-1 list-disc list-inside">
                <li>MIA cases: 7-year legal wait (Evidence Act 2011)</li>
                <li>IBNR tail locks up capital for years</li>
                <li>Zero-inflated risk distributions = volatile reserves</li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-slate-900 mb-2">The Solution</h4>
              <p className="text-sm text-slate-700 mb-3">
                ChronoClaim's MPC converts "Unknown" MIA cases into "Known" parametric payouts:
              </p>
              <ul className="text-sm text-slate-700 space-y-1 list-disc list-inside">
                <li>48-72 hour bridge benefits (vs. 7 years)</li>
                <li>Collapses IBNR duration → capital release</li>
                <li>Data-driven reserves reduce RBC requirements</li>
              </ul>
            </div>
          </div>
        </Card>

        {/* Barbell Strategy */}
        <Card className="p-6 rounded-2xl shadow-sm border border-slate-200">
          <h3 className="text-lg font-semibold text-slate-900 mb-4">
            Liquidity Barbell Strategy
          </h3>
          <p className="text-sm text-slate-600 mb-6">
            Investment allocation designed to match parametric trigger volatility (short-tail) 
            with standard pension liabilities (long-tail). Compliant with NIIRA 2025 Section 27 
            domestic investment requirements.
          </p>

          {/* Segmented Progress Bar */}
          <div className="space-y-4">
            <div>
              <div className="flex items-center justify-between mb-3">
                <div>
                  <h4 className="text-sm font-semibold text-emerald-900">
                    {capitalAllocation.shortTerm.label}
                  </h4>
                  <p className="text-xs text-slate-600">{capitalAllocation.shortTerm.purpose}</p>
                </div>
                <div className="text-right">
                  <p className="text-xl font-bold text-emerald-600">{capitalAllocation.shortTerm.percentage}%</p>
                  <p className="text-sm text-slate-600">{capitalAllocation.shortTerm.amount}</p>
                </div>
              </div>
              <div className="h-8 bg-slate-100 rounded-lg overflow-hidden">
                <div 
                  className="h-full bg-emerald-600 flex items-center justify-center text-white text-sm font-semibold"
                  style={{ width: `${capitalAllocation.shortTerm.percentage}%` }}
                >
                  Liquidity Buffer
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-3">
                <div>
                  <h4 className="text-sm font-semibold text-cyan-900">
                    {capitalAllocation.longTerm.label}
                  </h4>
                  <p className="text-xs text-slate-600">{capitalAllocation.longTerm.purpose}</p>
                </div>
                <div className="text-right">
                  <p className="text-xl font-bold text-cyan-600">{capitalAllocation.longTerm.percentage}%</p>
                  <p className="text-sm text-slate-600">{capitalAllocation.longTerm.amount}</p>
                </div>
              </div>
              <div className="h-8 bg-slate-100 rounded-lg overflow-hidden">
                <div 
                  className="h-full bg-cyan-600 flex items-center justify-center text-white text-sm font-semibold"
                  style={{ width: `${capitalAllocation.longTerm.percentage}%` }}
                >
                  Yield Generator
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 bg-slate-50 border border-slate-200 p-4 rounded-lg">
            <h4 className="text-sm font-semibold text-slate-900 mb-2">Total Portfolio</h4>
            <p className="text-3xl font-bold text-slate-900">₦5.00B</p>
            <p className="text-xs text-slate-600 mt-1">
              Allocated across Nigerian government securities per NIIRA Section 27
            </p>
          </div>
        </Card>

        {/* Stress Testing */}
        <Card className="p-6 rounded-2xl shadow-sm border border-slate-200">
          <h3 className="text-lg font-semibold text-slate-900 mb-4">
            Liquidity Stress Testing
          </h3>
          <p className="text-sm text-slate-600 mb-6">
            Historical scenario analysis using ACLED data: Black Swan events and mass casualty simulations
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-amber-50 border border-amber-200 p-4 rounded-lg">
              <h4 className="text-sm font-semibold text-amber-900 mb-2">2009 Boko Haram Uprising</h4>
              <p className="text-2xl font-bold text-amber-700 mb-1">127</p>
              <p className="text-xs text-amber-800">Simulated simultaneous claims</p>
              <p className="text-xs text-emerald-600 font-semibold mt-2">✓ Liquidity sustained</p>
            </div>
            <div className="bg-amber-50 border border-amber-200 p-4 rounded-lg">
              <h4 className="text-sm font-semibold text-amber-900 mb-2">2020 #EndSARS Protests</h4>
              <p className="text-2xl font-bold text-amber-700 mb-1">89</p>
              <p className="text-xs text-amber-800">Simulated simultaneous claims</p>
              <p className="text-xs text-emerald-600 font-semibold mt-2">✓ Liquidity sustained</p>
            </div>
            <div className="bg-rose-50 border border-rose-200 p-4 rounded-lg">
              <h4 className="text-sm font-semibold text-rose-900 mb-2">Worst-Case Scenario</h4>
              <p className="text-2xl font-bold text-rose-700 mb-1">250</p>
              <p className="text-xs text-rose-800">Maximum stress capacity</p>
              <p className="text-xs text-amber-600 font-semibold mt-2">⚠ Partial bond liquidation</p>
            </div>
          </div>
        </Card>
      </div>
    </LayoutShell>
  );
}
