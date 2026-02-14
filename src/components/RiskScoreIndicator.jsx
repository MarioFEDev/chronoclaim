import { Progress } from './ui/progress';

export default function RiskScoreIndicator({ score, label, showPercentage = true }) {
  const getColor = (score) => {
    if (score >= 80) return 'text-rose-600';
    if (score >= 60) return 'text-amber-600';
    if (score >= 40) return 'text-cyan-600';
    return 'text-emerald-600';
  };

  const getProgressColor = (score) => {
    if (score >= 80) return 'bg-rose-600';
    if (score >= 60) return 'bg-amber-600';
    if (score >= 40) return 'bg-cyan-600';
    return 'bg-emerald-600';
  };

  const getSeverityText = (score) => {
    if (score >= 80) return 'Critical Risk';
    if (score >= 60) return 'High Risk';
    if (score >= 40) return 'Medium Risk';
    return 'Low Risk';
  };

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-slate-700">{label}</span>
        <div className="flex items-baseline gap-2">
          {showPercentage && (
            <span className={`text-2xl font-bold ${getColor(score)}`}>
              {score}%
            </span>
          )}
          <span className={`text-xs font-medium ${getColor(score)}`}>
            {getSeverityText(score)}
          </span>
        </div>
      </div>
      <div className="relative">
        <Progress value={score} className="h-2" />
        <div 
          className={`absolute top-0 left-0 h-2 rounded-full transition-all ${getProgressColor(score)}`}
          style={{ width: `${score}%` }}
        />
      </div>
    </div>
  );
}
