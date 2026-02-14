import { Check, Clock, Circle } from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';

export default function ClaimStepper({ steps }) {
  const getStepIcon = (status) => {
    switch (status) {
      case 'completed':
        return <Check className="w-5 h-5 text-white" />;
      case 'in_progress':
        return <Clock className="w-5 h-5 text-white" />;
      default:
        return <Circle className="w-5 h-5 text-slate-400" />;
    }
  };

  const getStepColor = (status) => {
    switch (status) {
      case 'completed':
        return 'bg-emerald-600';
      case 'in_progress':
        return 'bg-cyan-600';
      default:
        return 'bg-slate-300';
    }
  };

  const getLineColor = (currentStatus, nextStatus) => {
    if (currentStatus === 'completed' && (nextStatus === 'completed' || nextStatus === 'in_progress')) {
      return 'bg-emerald-600';
    }
    return 'bg-slate-300';
  };

  return (
    <div className="space-y-6">
      {steps.map((step, index) => (
        <div key={step.id} className="relative">
          <div className="flex items-start gap-4">
            {/* Step indicator */}
            <div className="relative flex flex-col items-center">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center ${getStepColor(
                  step.status
                )}`}
              >
                {getStepIcon(step.status)}
              </div>
              {index < steps.length - 1 && (
                <div
                  className={`w-0.5 h-16 mt-2 ${getLineColor(
                    step.status,
                    steps[index + 1].status
                  )}`}
                />
              )}
            </div>

            {/* Step content */}
            <div className="flex-1 pb-8">
              <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                <h4 className="text-sm font-semibold text-slate-900 mb-1">
                  {step.title}
                </h4>
                {step.date && (
                  <p className="text-xs text-slate-500 mb-2">
                    {formatDistanceToNow(new Date(step.date), { addSuffix: true })}
                  </p>
                )}
                <p className="text-sm text-slate-600">{step.description}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
