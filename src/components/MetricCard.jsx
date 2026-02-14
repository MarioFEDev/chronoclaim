import { Card } from './ui/card';
import { ArrowUp, ArrowDown } from 'lucide-react';

export default function MetricCard({ title, value, delta, deltaType, icon: Icon, status }) {
  const statusColors = {
    safe: 'text-emerald-600',
    warning: 'text-amber-600',
    danger: 'text-rose-600',
    info: 'text-cyan-600',
    neutral: 'text-slate-600'
  };

  const bgColors = {
    safe: 'bg-emerald-50',
    warning: 'bg-amber-50',
    danger: 'bg-rose-50',
    info: 'bg-cyan-50',
    neutral: 'bg-slate-50'
  };

  const statusColor = status ? statusColors[status] : 'text-slate-900';
  const bgColor = status ? bgColors[status] : 'bg-white';

  return (
    <Card className={`p-6 rounded-2xl shadow-sm border border-slate-200 ${bgColor} transition-all hover:shadow-md`}>
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className="text-sm font-medium text-slate-600 mb-2">{title}</p>
          <div className="flex items-baseline gap-2">
            <h3 className={`text-3xl font-bold ${statusColor}`}>{value}</h3>
            {delta && (
              <div className={`flex items-center text-sm font-medium ${
                deltaType === 'positive' ? 'text-emerald-600' : 
                deltaType === 'negative' ? 'text-rose-600' : 
                'text-slate-600'
              }`}>
                {deltaType === 'positive' && <ArrowUp className="w-4 h-4" />}
                {deltaType === 'negative' && <ArrowDown className="w-4 h-4" />}
                <span>{delta}</span>
              </div>
            )}
          </div>
        </div>
        {Icon && (
          <div className={`p-3 rounded-xl ${status ? bgColors[status] : 'bg-slate-100'}`}>
            <Icon className={`w-6 h-6 ${statusColor}`} />
          </div>
        )}
      </div>
    </Card>
  );
}
