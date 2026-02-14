import LayoutShell from '../../components/LayoutShell';
import ClaimStepper from '../../components/ClaimStepper';
import StatusBadge from '../../components/StatusBadge';
import { Card } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Separator } from '../../components/ui/separator';
import { FileText, Download, Clock, AlertCircle } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '../../components/ui/alert';
import { personnelClaim } from '../../lib/mockData';
import { formatDistanceToNow } from 'date-fns';

export default function ClaimDetails() {
  return (
    <LayoutShell 
      role="personnel" 
      title="Claim Details"
      subtitle="Track your bridge benefit claim progress"
    >
      <div className="space-y-6">
        {/* Status Alert */}
        <Alert className="border-cyan-200 bg-cyan-50">
          <Clock className="h-5 w-5 text-cyan-600" />
          <AlertTitle className="text-cyan-900">Claim Under Review</AlertTitle>
          <AlertDescription className="text-cyan-800">
            Your claim is currently being reviewed by the insurer. The MPC probability calculation 
            is complete at 94%. Estimated approval time: 24-48 hours.
          </AlertDescription>
        </Alert>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left: Claim Stepper */}
          <div className="lg:col-span-2">
            <Card className="p-6 rounded-2xl shadow-sm border border-slate-200">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-slate-900">Claim Progress</h3>
                <StatusBadge status="review" label="Under Review" />
              </div>
              <ClaimStepper steps={personnelClaim.steps} />
            </Card>

            {/* Timeline */}
            <Card className="p-6 rounded-2xl shadow-sm border border-slate-200 mt-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">Event Timeline</h3>
              <div className="space-y-4">
                {personnelClaim.timeline.map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0 w-2 h-2 bg-cyan-600 rounded-full mt-2" />
                    <div className="flex-1">
                      <p className="text-sm font-medium text-slate-900">{item.event}</p>
                      <p className="text-xs text-slate-600">
                        {formatDistanceToNow(new Date(item.date), { addSuffix: true })}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Right: Claim Details & Documents */}
          <div className="space-y-6">
            {/* Claim Summary */}
            <Card className="p-6 rounded-2xl shadow-sm border border-slate-200">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">Claim Summary</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-xs text-slate-500 mb-1">Claim ID</p>
                  <p className="text-sm font-mono font-semibold text-slate-900">
                    {personnelClaim.id.toUpperCase()}
                  </p>
                </div>
                <Separator />
                <div>
                  <p className="text-xs text-slate-500 mb-1">Guard Name</p>
                  <p className="text-sm font-semibold text-slate-900">{personnelClaim.guardName}</p>
                </div>
                <Separator />
                <div>
                  <p className="text-xs text-slate-500 mb-1">Filed Date</p>
                  <p className="text-sm text-slate-900">
                    {new Date(personnelClaim.filedDate).toLocaleDateString()}
                  </p>
                  <p className="text-xs text-slate-600">
                    {formatDistanceToNow(new Date(personnelClaim.filedDate), { addSuffix: true })}
                  </p>
                </div>
                <Separator />
                <div>
                  <p className="text-xs text-slate-500 mb-1">Estimated Payout</p>
                  <p className="text-2xl font-bold text-emerald-600">{personnelClaim.estimatedPayout}</p>
                </div>
              </div>
            </Card>

            {/* Attachments */}
            <Card className="p-6 rounded-2xl shadow-sm border border-slate-200">
              <h3 className="text-lg font-semibold text-slate-900 mb-4 flex items-center gap-2">
                <FileText className="w-5 h-5" />
                Attachments
              </h3>
              <div className="space-y-2">
                {personnelClaim.attachments.map((attachment, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 bg-slate-50 rounded-lg border border-slate-200 hover:bg-slate-100 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-rose-100 rounded">
                        <FileText className="w-4 h-4 text-rose-600" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-slate-900">{attachment.name}</p>
                        <p className="text-xs text-slate-600">{attachment.size}</p>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm">
                      <Download className="w-4 h-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </Card>

            {/* Important Notice */}
            <Card className="p-6 rounded-2xl shadow-sm border border-amber-200 bg-amber-50">
              <div className="flex gap-3">
                <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-amber-900 mb-2">Important Notice</h4>
                  <p className="text-xs text-amber-800 mb-3">
                    This is a <strong>bridge benefit</strong> - a provisional payout designed to 
                    provide immediate financial support. It is not a final death benefit.
                  </p>
                  <p className="text-xs text-amber-800">
                    Final verification will be conducted per NAICOM guidelines. If the insured 
                    personnel resurfaces, the benefit will be discontinued.
                  </p>
                </div>
              </div>
            </Card>

            {/* Contact Support */}
            <Button className="w-full bg-cyan-600 hover:bg-cyan-700 text-white">
              Contact Claims Support
            </Button>
          </div>
        </div>
      </div>
    </LayoutShell>
  );
}
