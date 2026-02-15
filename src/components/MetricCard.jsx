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
    <Card className={`p-4 sm:p-5 lg:p-6 rounded-xl lg:rounded-2xl shadow-sm border border-slate-200 ${bgColor} transition-all hover:shadow-md`}>
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1 min-w-0">
          <p className="text-xs sm:text-sm font-medium text-slate-600 mb-1 sm:mb-2 truncate">{title}</p>
          <div className="flex items-baseline gap-1 sm:gap-2 flex-wrap">
            <h3 className={`text-xl sm:text-2xl lg:text-3xl font-bold ${statusColor} truncate`}>{value}</h3>
            {delta && (
              <div className={`flex items-center text-xs sm:text-sm font-medium whitespace-nowrap ${
                deltaType === 'positive' ? 'text-emerald-600' : 
                deltaType === 'negative' ? 'text-rose-600' : 
                'text-slate-600'
              }`}>
                {deltaType === 'positive' && <ArrowUp className="w-3 h-3 sm:w-4 sm:h-4" />}
                {deltaType === 'negative' && <ArrowDown className="w-3 h-3 sm:w-4 sm:h-4" />}
                <span className="truncate">{delta}</span>
              </div>
            )}
          </div>
        </div>
        {Icon && (
          <div className={`p-2 sm:p-2.5 lg:p-3 rounded-lg lg:rounded-xl flex-shrink-0 ${status ? bgColors[status] : 'bg-slate-100'}`}>
            <Icon className={`w-5 h-5 sm:w-5 sm:h-5 lg:w-6 lg:h-6 ${statusColor}`} />
          </div>
        )}
      </div>
    </Card>
  );
}
