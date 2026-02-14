import { useState } from 'react';
import LayoutShell from '../../components/LayoutShell';
import GuardTable from '../../components/GuardTable';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '../../components/ui/dialog';
import { Avatar, AvatarFallback, AvatarImage } from '../../components/ui/avatar';
import StatusBadge from '../../components/StatusBadge';
import { guards } from '../../lib/mockData';
import { formatDistanceToNow } from 'date-fns';

export default function Roster() {
  const [selectedGuard, setSelectedGuard] = useState(null);
  const [showProfileDialog, setShowProfileDialog] = useState(false);
  const [showReviewDialog, setShowReviewDialog] = useState(false);

  const handleViewProfile = (guard) => {
    setSelectedGuard(guard);
    setShowProfileDialog(true);
  };

  const handleManualReview = (guard) => {
    setSelectedGuard(guard);
    setShowReviewDialog(true);
  };

  return (
    <LayoutShell 
      role="employer" 
      title="Guard Roster"
      subtitle="Manage and monitor your security personnel"
    >
      <GuardTable 
        guards={guards}
        onViewProfile={handleViewProfile}
        onManualReview={handleManualReview}
      />

      {/* Profile Dialog */}
      <Dialog open={showProfileDialog} onOpenChange={setShowProfileDialog}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>Guard Profile</DialogTitle>
            <DialogDescription>
              Detailed information about the selected guard
            </DialogDescription>
          </DialogHeader>
          {selectedGuard && (
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <Avatar className="w-20 h-20">
                  <AvatarImage src={selectedGuard.avatar} alt={selectedGuard.name} />
                  <AvatarFallback>{selectedGuard.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">{selectedGuard.name}</h3>
                  <p className="text-sm text-slate-600">ID: {selectedGuard.id.toUpperCase()}</p>
                  <div className="mt-2">
                    <StatusBadge status={selectedGuard.status} />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs text-slate-500 mb-1">Assigned Site</p>
                  <p className="text-sm font-medium text-slate-900">{selectedGuard.site}</p>
                </div>
                <div>
                  <p className="text-xs text-slate-500 mb-1">State</p>
                  <p className="text-sm font-medium text-slate-900">{selectedGuard.state}</p>
                </div>
                <div>
                  <p className="text-xs text-slate-500 mb-1">Risk Zone</p>
                  <StatusBadge 
                    status={selectedGuard.riskZone === 'Severe' || selectedGuard.riskZone === 'High' ? 'high' : 'low'} 
                    label={selectedGuard.riskZone}
                  />
                </div>
                <div>
                  <p className="text-xs text-slate-500 mb-1">Coverage Status</p>
                  <p className="text-sm font-medium text-slate-900">{selectedGuard.coverage}</p>
                </div>
                <div className="col-span-2">
                  <p className="text-xs text-slate-500 mb-1">Last Check-In</p>
                  <p className="text-sm font-medium text-slate-900">
                    {formatDistanceToNow(new Date(selectedGuard.lastCheckin), { addSuffix: true })}
                  </p>
                  <p className="text-xs text-slate-600">
                    {new Date(selectedGuard.lastCheckin).toLocaleString()}
                  </p>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Manual Review Dialog */}
      <Dialog open={showReviewDialog} onOpenChange={setShowReviewDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Trigger Manual Review</DialogTitle>
            <DialogDescription>
              Flag this guard for manual verification
            </DialogDescription>
          </DialogHeader>
          {selectedGuard && (
            <div className="space-y-4">
              <p className="text-sm text-slate-700">
                You are about to flag <strong>{selectedGuard.name}</strong> for manual review.
                This will notify the compliance team and pause automatic status updates.
              </p>
              <div className="bg-amber-50 border border-amber-200 p-4 rounded-lg">
                <p className="text-sm text-amber-800">
                  Manual review typically takes 24-48 hours. The guard's status will be updated once verification is complete.
                </p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </LayoutShell>
  );
}
