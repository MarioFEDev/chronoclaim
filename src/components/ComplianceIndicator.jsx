import { Card } from './ui/card';
import { Shield, CheckCircle } from 'lucide-react';
import StatusBadge from './StatusBadge';

export default function ComplianceIndicator({ isCompliant = true, lastUpdated }) {
  return (
    <Card className="p-6 rounded-2xl shadow-sm border border-slate-200 bg-gradient-to-br from-emerald-50 to-white">
      <div className="flex items-start gap-4">
        <div className="p-3 bg-emerald-100 rounded-xl">
          <Shield className="w-6 h-6 text-emerald-600" />
        </div>
        <div className="flex-1">
          <h4 className="text-sm font-semibold text-slate-900 mb-2">
            NSCDC Compliance Status
          </h4>
          <div className="flex items-center gap-2 mb-3">
            <StatusBadge status="compliant" />
            <CheckCircle className="w-4 h-4 text-emerald-600" />
          </div>
          <p className="text-xs text-slate-600">
            Biometric data synced. All guards registered with NSCDC database.
          </p>
          {lastUpdated && (
            <p className="text-xs text-slate-500 mt-2">
              Last verified: {new Date(lastUpdated).toLocaleDateString()}
            </p>
          )}
        </div>
      </div>
    </Card>
  );
}
