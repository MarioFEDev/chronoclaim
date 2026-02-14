import { useState } from 'react';
import LayoutShell from '../../components/LayoutShell';
import MPCQueueTable from '../../components/MPCQueueTable';
import MetricCard from '../../components/MetricCard';
import { Alert, AlertDescription, AlertTitle } from '../../components/ui/alert';
import { AlertTriangle, CheckCircle, Clock, TrendingUp } from 'lucide-react';
import { mpcQueue, metrics } from '../../lib/mockData';

export default function MPCQueue() {
  const [queue, setQueue] = useState(mpcQueue);

  const handleApprove = (caseItem) => {
    // Update case status
    setQueue(prev => 
      prev.map(item => 
        item.id === caseItem.id 
          ? { ...item, status: 'approved' }
          : item
      )
    );
  };

  const handleManualReview = (caseItem) => {
    console.log('Manual review triggered for:', caseItem);
    // In real app, would open review workflow
  };

  const pendingCases = queue.filter(c => c.status === 'pending');
  const approvedCases = queue.filter(c => c.status === 'approved');

  return (
    <LayoutShell 
      role="insurer" 
      title="MPC Queue"
      subtitle="Mortality Probability Calculator - Automated Triage System"
    >
      <div className="space-y-6">
        {/* Top Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <MetricCard
            title="Pending Reviews"
            value={pendingCases.length}
            icon={Clock}
            status={pendingCases.length > 5 ? 'warning' : 'neutral'}
          />
          <MetricCard
            title="Average Pm Score"
            value={`${metrics.insurer.averagePm}%`}
            icon={AlertTriangle}
            status="warning"
          />
          <MetricCard
            title="Approved Today"
            value={approvedCases.length}
            icon={CheckCircle}
            status="safe"
          />
          <MetricCard
            title="Portfolio Risk"
            value={metrics.insurer.portfolioRisk}
            icon={TrendingUp}
            status="warning"
          />
        </div>

        {/* Info Alert */}
        <Alert className="border-cyan-200 bg-cyan-50">
          <AlertTriangle className="h-4 w-4 text-cyan-600" />
          <AlertTitle className="text-cyan-900">MPC Calculation Methodology</AlertTitle>
          <AlertDescription className="text-cyan-800">
            Probability scores are calculated using Bayesian spatio-temporal modeling of ACLED conflict data,
            combined with biometric check-in patterns and location exposure. All scores require human-in-the-loop
            approval per NAICOM Guidelines 2025.
          </AlertDescription>
        </Alert>

        {/* Pending Cases */}
        {pendingCases.length > 0 && (
          <div>
            <h3 className="text-lg font-semibold text-slate-900 mb-4">
              Pending Cases ({pendingCases.length})
            </h3>
            <MPCQueueTable 
              queue={pendingCases}
              onApprove={handleApprove}
              onManualReview={handleManualReview}
            />
          </div>
        )}

        {/* Approved Cases */}
        {approvedCases.length > 0 && (
          <div>
            <h3 className="text-lg font-semibold text-emerald-900 mb-4">
              Approved Cases ({approvedCases.length})
            </h3>
            <div className="space-y-4">
              {approvedCases.map((item) => (
                <div
                  key={item.id}
                  className="bg-emerald-50 border border-emerald-200 p-6 rounded-2xl"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-lg font-semibold text-emerald-900">{item.name}</h4>
                      <p className="text-sm text-emerald-700">{item.location}</p>
                    </div>
                    <div className="flex items-center gap-2 text-emerald-700">
                      <CheckCircle className="w-5 h-5" />
                      <span className="font-semibold">Bridge Benefit Approved</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {pendingCases.length === 0 && approvedCases.length === 0 && (
          <div className="text-center py-12 text-slate-500">
            <CheckCircle className="w-16 h-16 mx-auto mb-4 text-emerald-500" />
            <p className="text-lg font-semibold">All cases processed</p>
            <p className="text-sm">No pending MPC reviews at this time</p>
          </div>
        )}
      </div>
    </LayoutShell>
  );
}
