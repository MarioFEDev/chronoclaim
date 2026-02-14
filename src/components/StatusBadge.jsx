import { Badge } from './ui/badge';

export default function StatusBadge({ status, label }) {
  const configs = {
    active: {
      className: 'bg-emerald-100 text-emerald-700 border-emerald-200',
      label: label || 'Active'
    },
    missed: {
      className: 'bg-amber-100 text-amber-700 border-amber-200',
      label: label || 'Missed Check-in'
    },
    mia: {
      className: 'bg-rose-100 text-rose-700 border-rose-200',
      label: label || 'MIA'
    },
    review: {
      className: 'bg-amber-100 text-amber-800 border-amber-200',
      label: label || 'Under Review'
    },
    approved: {
      className: 'bg-emerald-100 text-emerald-700 border-emerald-200',
      label: label || 'Approved'
    },
    pending: {
      className: 'bg-slate-100 text-slate-700 border-slate-200',
      label: label || 'Pending'
    },
    critical: {
      className: 'bg-rose-100 text-rose-700 border-rose-200',
      label: label || 'Critical'
    },
    high: {
      className: 'bg-amber-100 text-amber-700 border-amber-200',
      label: label || 'High'
    },
    medium: {
      className: 'bg-cyan-100 text-cyan-700 border-cyan-200',
      label: label || 'Medium'
    },
    low: {
      className: 'bg-slate-100 text-slate-600 border-slate-200',
      label: label || 'Low'
    },
    compliant: {
      className: 'bg-emerald-100 text-emerald-700 border-emerald-200',
      label: label || 'NSCDC Compliant'
    }
  };

  const config = configs[status] || configs.pending;

  return (
    <Badge 
      className={`${config.className} border font-medium px-3 py-1 rounded-full`}
      variant="outline"
    >
      {config.label}
    </Badge>
  );
}
