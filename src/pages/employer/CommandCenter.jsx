import { useState } from 'react';
import LayoutShell from '../../components/LayoutShell';
import MetricCard from '../../components/MetricCard';
import ComplianceIndicator from '../../components/ComplianceIndicator';
import EventTimeline from '../../components/EventTimeline';
import { Card } from '../../components/ui/card';
import { Switch } from '../../components/ui/switch';
import { ScrollArea } from '../../components/ui/scroll-area';
import { Alert, AlertDescription, AlertTitle } from '../../components/ui/alert';
import { Users, AlertTriangle, DollarSign, Activity } from 'lucide-react';
import { guards, events, conflictEvents, metrics } from '../../lib/mockData';

export default function CommandCenter() {
  const [biometricSyncActive, setBiometricSyncActive] = useState(metrics.employer.biometricSyncActive);
  
  // Calculate dynamic metrics based on biometric sync
  const activeGuards = biometricSyncActive 
    ? metrics.employer.totalActiveGuards 
    : Math.floor(metrics.employer.totalActiveGuards * 0.85);
  
  const missingCheckins = biometricSyncActive
    ? guards.filter(g => g.status === 'missed' || g.status === 'mia').length
    : Math.floor(guards.length * 0.15);

  // Get conflicts that affect our guards
  const correlatedAlerts = conflictEvents.filter(c => c.affectedGuards > 0);

  return (
    <LayoutShell 
      role="employer" 
      title="Command Center"
      subtitle="Operational overview and guard monitoring"
    >
      <div className="space-y-6">
        {/* Top Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <MetricCard
            title="Total Active Guards Today"
            value={activeGuards}
            icon={Users}
            status="safe"
          />
          <MetricCard
            title="Guards Missing Check-In"
            value={missingCheckins}
            delta={biometricSyncActive ? '-2 from yesterday' : '+5 from yesterday'}
            deltaType={biometricSyncActive ? 'positive' : 'negative'}
            icon={AlertTriangle}
            status={missingCheckins > 5 ? 'danger' : missingCheckins > 2 ? 'warning' : 'safe'}
          />
          <MetricCard
            title="Daily Premium Cost"
            value={metrics.employer.dailyPremium}
            delta={`${metrics.employer.coverageRate}% coverage`}
            icon={DollarSign}
            status="info"
          />
          <MetricCard
            title="Deployment Rate"
            value={`${Math.floor((activeGuards / metrics.employer.totalActiveGuards) * 100)}%`}
            icon={Activity}
            status="neutral"
          />
        </div>

        {/* Biometric Sync Control */}
        <Card className="p-6 rounded-2xl shadow-sm border border-slate-200">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-slate-900 mb-1">
                Biometric Sync Active Today
              </h3>
              <p className="text-sm text-slate-600">
                Real-time attendance tracking via NSCDC-compliant biometric system
              </p>
            </div>
            <Switch
              checked={biometricSyncActive}
              onCheckedChange={setBiometricSyncActive}
              className="data-[state=checked]:bg-emerald-600"
            />
          </div>
          {!biometricSyncActive && (
            <Alert className="mt-4 border-amber-200 bg-amber-50">
              <AlertTriangle className="h-4 w-4 text-amber-600" />
              <AlertTitle className="text-amber-900">Biometric Sync Disabled</AlertTitle>
              <AlertDescription className="text-amber-800">
                Manual attendance tracking active. Missing check-in detection may be delayed.
              </AlertDescription>
            </Alert>
          )}
        </Card>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left: Activity Timeline */}
          <div className="lg:col-span-2">
            <Card className="p-6 rounded-2xl shadow-sm border border-slate-200">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">
                Activity Timeline
              </h3>
              <ScrollArea className="h-[600px] pr-4">
                <EventTimeline events={events} />
              </ScrollArea>
            </Card>
          </div>

          {/* Right: Alert Feed & Compliance */}
          <div className="space-y-6">
            {/* Compliance Status */}
            <ComplianceIndicator 
              isCompliant={true}
              lastUpdated={new Date()}
            />

            {/* Conflict Correlation Alerts */}
            <Card className="p-6 rounded-2xl shadow-sm border border-rose-200 bg-rose-50">
              <h3 className="text-lg font-semibold text-rose-900 mb-4 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5" />
                Conflict Correlation Alerts
              </h3>
              <ScrollArea className="h-[400px] pr-4">
                <div className="space-y-3">
                  {correlatedAlerts.map((alert) => (
                    <Alert key={alert.id} className="border-rose-200 bg-white">
                      <AlertTitle className="text-rose-900 text-sm font-semibold">
                        {alert.location}
                      </AlertTitle>
                      <AlertDescription className="text-rose-800 text-xs space-y-1">
                        <p><strong>Type:</strong> {alert.eventType}</p>
                        <p><strong>Severity:</strong> {alert.severity}</p>
                        <p><strong>Affected Guards:</strong> {alert.affectedGuards}</p>
                        <p className="mt-2 text-slate-600">{alert.description}</p>
                      </AlertDescription>
                    </Alert>
                  ))}
                  {correlatedAlerts.length === 0 && (
                    <p className="text-sm text-slate-600 text-center py-4">
                      No active correlation alerts
                    </p>
                  )}
                </div>
              </ScrollArea>
            </Card>
          </div>
        </div>
      </div>
    </LayoutShell>
  );
}
