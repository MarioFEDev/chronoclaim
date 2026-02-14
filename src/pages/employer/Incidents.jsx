import LayoutShell from '../../components/LayoutShell';
import { Card } from '../../components/ui/card';
import StatusBadge from '../../components/StatusBadge';
import { ScrollArea } from '../../components/ui/scroll-area';
import { Separator } from '../../components/ui/separator';
import { MapPin, Calendar, AlertTriangle, Users } from 'lucide-react';
import { conflictEvents, guards } from '../../lib/mockData';
import { formatDistanceToNow } from 'date-fns';

export default function Incidents() {
  // Match guards to conflict locations
  const getAffectedGuards = (state) => {
    return guards.filter(g => g.state === state && (g.status === 'missed' || g.status === 'mia'));
  };

  return (
    <LayoutShell 
      role="employer" 
      title="Incident Monitoring"
      subtitle="Real-time conflict event tracking and guard correlation"
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left: Conflict Events */}
        <div className="lg:col-span-2">
          <Card className="p-6 rounded-2xl shadow-sm border border-slate-200">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-slate-900">
                Recent Conflict Events
              </h3>
              <StatusBadge status="high" label="ACLED Verified" />
            </div>
            <ScrollArea className="h-[700px] pr-4">
              <div className="space-y-4">
                {conflictEvents.map((event) => {
                  const affectedGuards = getAffectedGuards(event.state);
                  return (
                    <Card
                      key={event.id}
                      className={`p-5 rounded-xl border-2 ${
                        event.severity === 'Critical'
                          ? 'border-rose-200 bg-rose-50'
                          : event.severity === 'High'
                          ? 'border-amber-200 bg-amber-50'
                          : 'border-cyan-200 bg-cyan-50'
                      }`}
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h4 className="text-lg font-bold text-slate-900 mb-1">
                            {event.location}
                          </h4>
                          <div className="flex items-center gap-2 text-sm text-slate-600">
                            <MapPin className="w-4 h-4" />
                            <span>{event.state}</span>
                          </div>
                        </div>
                        <StatusBadge 
                          status={event.severity === 'Critical' ? 'critical' : event.severity === 'High' ? 'high' : 'medium'}
                          label={event.severity}
                        />
                      </div>

                      <div className="space-y-2 mb-4">
                        <div className="flex items-center gap-2 text-sm">
                          <AlertTriangle className="w-4 h-4 text-slate-500" />
                          <span className="text-slate-700"><strong>Type:</strong> {event.eventType}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <Calendar className="w-4 h-4 text-slate-500" />
                          <span className="text-slate-700">
                            {formatDistanceToNow(new Date(event.time), { addSuffix: true })}
                          </span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <Users className="w-4 h-4 text-slate-500" />
                          <span className="text-slate-700">
                            <strong>Casualties:</strong> {event.casualties}
                          </span>
                        </div>
                      </div>

                      <p className="text-sm text-slate-700 mb-4">
                        {event.description}
                      </p>

                      <Separator className="my-3" />

                      <div className="flex items-center justify-between">
                        <span className="text-xs text-slate-500">
                          ACLED ID: {event.acledId}
                        </span>
                        {affectedGuards.length > 0 && (
                          <span className="text-sm font-semibold text-rose-600">
                            {affectedGuards.length} Guard{affectedGuards.length > 1 ? 's' : ''} Affected
                          </span>
                        )}
                      </div>
                    </Card>
                  );
                })}
              </div>
            </ScrollArea>
          </Card>
        </div>

        {/* Right: System Correlation Output */}
        <div>
          <Card className="p-6 rounded-2xl shadow-sm border border-slate-200 sticky top-24">
            <h3 className="text-lg font-semibold text-slate-900 mb-4 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-amber-600" />
              System Correlation Output
            </h3>
            <ScrollArea className="h-[700px] pr-4">
              <div className="space-y-4">
                {conflictEvents.map((event) => {
                  const affectedGuards = getAffectedGuards(event.state);
                  if (affectedGuards.length === 0) return null;

                  return (
                    <div key={event.id} className="space-y-2">
                      <div className="bg-rose-50 border border-rose-200 p-4 rounded-lg">
                        <h4 className="text-sm font-semibold text-rose-900 mb-2">
                          {event.state} - {event.eventType}
                        </h4>
                        <p className="text-xs text-rose-700 mb-3">
                          {affectedGuards.length} guard{affectedGuards.length > 1 ? 's' : ''} in affected zone
                        </p>
                        <div className="space-y-2">
                          {affectedGuards.map((guard) => (
                            <div
                              key={guard.id}
                              className="bg-white p-3 rounded border border-rose-100"
                            >
                              <p className="text-sm font-medium text-slate-900">
                                {guard.name}
                              </p>
                              <p className="text-xs text-slate-600">{guard.site}</p>
                              <div className="mt-2">
                                <StatusBadge status={guard.status} />
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                })}

                <div className="bg-emerald-50 border border-emerald-200 p-4 rounded-lg">
                  <h4 className="text-sm font-semibold text-emerald-900 mb-2">
                    Correlation Algorithm Active
                  </h4>
                  <p className="text-xs text-emerald-700">
                    Real-time matching of ACLED conflict events with guard locations. 
                    Automatic alerts triggered for missed check-ins within 50km of reported incidents.
                  </p>
                </div>
              </div>
            </ScrollArea>
          </Card>
        </div>
      </div>
    </LayoutShell>
  );
}
