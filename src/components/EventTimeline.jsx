import { Clock, AlertTriangle, CheckCircle, MapPin } from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';

export default function EventTimeline({ events, maxItems = 10 }) {
  const sortedEvents = [...events]
    .sort((a, b) => new Date(b.time) - new Date(a.time))
    .slice(0, maxItems);

  const getIcon = (severity) => {
    switch (severity) {
      case 'critical':
        return <AlertTriangle className="w-5 h-5 text-rose-600" />;
      case 'warning':
        return <AlertTriangle className="w-5 h-5 text-amber-600" />;
      case 'safe':
        return <CheckCircle className="w-5 h-5 text-emerald-600" />;
      default:
        return <Clock className="w-5 h-5 text-slate-600" />;
    }
  };

  const getBorderColor = (severity) => {
    switch (severity) {
      case 'critical':
        return 'border-rose-200';
      case 'warning':
        return 'border-amber-200';
      case 'safe':
        return 'border-emerald-200';
      default:
        return 'border-slate-200';
    }
  };

  return (
    <div className="space-y-4">
      {sortedEvents.map((event, index) => (
        <div
          key={event.id}
          className={`relative pl-8 pb-4 ${
            index !== sortedEvents.length - 1 ? 'border-l-2 ml-2.5' : ''
          } ${getBorderColor(event.severity)}`}
        >
          <div className="absolute left-0 top-0 -ml-2.5 p-0.5 bg-white rounded-full">
            {getIcon(event.severity)}
          </div>
          <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between mb-2">
              <p className="text-sm font-semibold text-slate-900">{event.text}</p>
              <span className="text-xs text-slate-500 ml-2 whitespace-nowrap">
                {formatDistanceToNow(new Date(event.time), { addSuffix: true })}
              </span>
            </div>
            <div className="flex items-center gap-2 text-xs text-slate-600">
              <MapPin className="w-3 h-3" />
              <span>{event.state}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
