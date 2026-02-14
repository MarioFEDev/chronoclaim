import { useState } from 'react';
import { Button } from './ui/button';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from './ui/dialog';
import RiskScoreIndicator from './RiskScoreIndicator';
import StatusBadge from './StatusBadge';
import { AlertTriangle, CheckCircle } from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';

export default function MPCQueueTable({ queue, onApprove, onManualReview }) {
  const [selectedCase, setSelectedCase] = useState(null);
  const [showApprovalDialog, setShowApprovalDialog] = useState(false);

  const handleApprove = (caseItem) => {
    setSelectedCase(caseItem);
    setShowApprovalDialog(true);
  };

  const confirmApproval = () => {
    if (onApprove && selectedCase) {
      onApprove(selectedCase);
    }
    setShowApprovalDialog(false);
    setSelectedCase(null);
  };

  const getTimeSinceText = (minutes) => {
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    
    if (days > 0) return `${days}d ${hours % 24}h`;
    if (hours > 0) return `${hours}h ${minutes % 60}m`;
    return `${minutes}m`;
  };

  return (
    <>
      <div className="space-y-4">
        {queue.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 hover:shadow-md transition-shadow"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* Guard Info */}
              <div className="lg:col-span-3">
                <h4 className="text-sm font-semibold text-slate-900 mb-1">{item.name}</h4>
                <p className="text-sm text-slate-600">{item.location}</p>
                <div className="mt-2">
                  <StatusBadge status={item.status} />
                </div>
              </div>

              {/* Time Since Signal Loss */}
              <div className="lg:col-span-2">
                <p className="text-xs text-slate-500 mb-1">Time Since Signal Loss</p>
                <p className="text-2xl font-bold text-amber-600">
                  {getTimeSinceText(item.timeSinceSignalLossMins)}
                </p>
                <p className="text-xs text-slate-500 mt-1">
                  {formatDistanceToNow(new Date(item.lastSeen), { addSuffix: true })}
                </p>
              </div>

              {/* Probability Score */}
              <div className="lg:col-span-4">
                <RiskScoreIndicator 
                  score={item.pm} 
                  label="Probability of Mortality (Pm)"
                />
                <p className="text-xs text-slate-600 mt-2">
                  Confidence: <span className="font-medium">{item.confidence}</span>
                </p>
              </div>

              {/* Actions */}
              <div className="lg:col-span-3 flex flex-col gap-2 justify-center">
                <Button
                  onClick={() => handleApprove(item)}
                  className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg"
                >
                  <CheckCircle className="w-4 h-4 mr-2" />
                  Approve Bridge Benefit
                </Button>
                <Button
                  variant="outline"
                  onClick={() => onManualReview && onManualReview(item)}
                  className="text-amber-600 border-amber-200 hover:bg-amber-50"
                >
                  <AlertTriangle className="w-4 h-4 mr-2" />
                  Manual Review
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Approval Confirmation Dialog */}
      <Dialog open={showApprovalDialog} onOpenChange={setShowApprovalDialog}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>Approve Bridge Benefit Payout</DialogTitle>
            <DialogDescription>
              You are about to approve a bridge benefit payout for the following case:
            </DialogDescription>
          </DialogHeader>
          {selectedCase && (
            <div className="space-y-4 py-4">
              <div className="bg-slate-50 p-4 rounded-lg">
                <p className="text-sm font-semibold text-slate-900">{selectedCase.name}</p>
                <p className="text-sm text-slate-600">{selectedCase.location}</p>
                <div className="mt-3 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-600">Probability (Pm):</span>
                    <span className="font-bold text-rose-600">{selectedCase.pm}%</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-600">Time Since Loss:</span>
                    <span className="font-medium">{getTimeSinceText(selectedCase.timeSinceSignalLossMins)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-600">Estimated Payout:</span>
                    <span className="font-bold text-emerald-600">₦5,000,000</span>
                  </div>
                </div>
              </div>
              <div className="bg-amber-50 border border-amber-200 p-4 rounded-lg">
                <p className="text-sm text-amber-800">
                  <strong>Note:</strong> This payout is provisional and subject to final verification. 
                  Funds will be disbursed within 48-72 hours pending compliance checks.
                </p>
              </div>
            </div>
          )}
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setShowApprovalDialog(false)}
            >
              Cancel
            </Button>
            <Button
              onClick={confirmApproval}
              className="bg-emerald-600 hover:bg-emerald-700 text-white"
            >
              Confirm Approval
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
