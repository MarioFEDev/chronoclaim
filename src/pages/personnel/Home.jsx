import LayoutShell from '../../components/LayoutShell';
import MetricCard from '../../components/MetricCard';
import ClaimStepper from '../../components/ClaimStepper';
import { Card } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Shield, Clock, CheckCircle, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { personnelClaim, metrics } from '../../lib/mockData';
import { formatDistanceToNow } from 'date-fns';

export default function Home() {
  const recentCheckins = [
    { date: '2026-02-13T09:00:00Z', location: 'Lagos VI Office' },
    { date: '2026-02-12T09:15:00Z', location: 'Lagos VI Office' },
    { date: '2026-02-11T08:45:00Z', location: 'Lagos VI Office' },
    { date: '2026-02-10T09:10:00Z', location: 'Lagos VI Office' }
  ];

  return (
    <LayoutShell 
      role="personnel" 
      title="My Coverage"
      subtitle="Welcome back to your ChronoClaim portal"
    >
      <div className="space-y-6">
        {/* Top Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <MetricCard
            title="Coverage Status"
            value="Active"
            icon={Shield}
            status="safe"
          />
          <MetricCard
            title="Last Check-In"
            value={formatDistanceToNow(new Date(metrics.personnel.lastCheckIn), { addSuffix: true })}
            icon={Clock}
            status="safe"
          />
          <MetricCard
            title="Benefit Readiness"
            value={metrics.personnel.benefitReadiness}
            icon={CheckCircle}
            status="info"
          />
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left: Coverage Details */}
          <div className="lg:col-span-2 space-y-6">
            {/* Coverage Card */}
            <Card className="p-6 rounded-2xl shadow-sm border border-emerald-200 bg-gradient-to-br from-emerald-50 to-white">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-emerald-100 rounded-xl">
                  <Shield className="w-8 h-8 text-emerald-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-emerald-900 mb-1">
                    Active Coverage Status
                  </h3>
                  <p className="text-sm text-emerald-700">
                    Your insurance coverage is active and in good standing
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg border border-emerald-100">
                  <p className="text-xs text-slate-500 mb-1">Policy Number</p>
                  <p className="text-sm font-mono font-semibold text-slate-900">
                    {metrics.personnel.policyNumber}
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-emerald-100">
                  <p className="text-xs text-slate-500 mb-1">Coverage Amount</p>
                  <p className="text-sm font-semibold text-emerald-600">₦5,000,000</p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-emerald-100">
                  <p className="text-xs text-slate-500 mb-1">Employer</p>
                  <p className="text-sm font-semibold text-slate-900">Apex Security Ltd.</p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-emerald-100">
                  <p className="text-xs text-slate-500 mb-1">NSCDC Verified</p>
                  <div className="flex items-center gap-1 text-emerald-600">
                    <CheckCircle className="w-4 h-4" />
                    <span className="text-sm font-semibold">Yes</span>
                  </div>
                </div>
              </div>
            </Card>

            {/* Recent Check-ins */}
            <Card className="p-6 rounded-2xl shadow-sm border border-slate-200">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">
                Recent Biometric Check-ins
              </h3>
              <div className="space-y-3">
                {recentCheckins.map((checkin, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 bg-slate-50 rounded-lg border border-slate-200"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-emerald-100 rounded-lg">
                        <CheckCircle className="w-5 h-5 text-emerald-600" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-slate-900">{checkin.location}</p>
                        <p className="text-xs text-slate-600">
                          {formatDistanceToNow(new Date(checkin.date), { addSuffix: true })}
                        </p>
                      </div>
                    </div>
                    <p className="text-xs text-slate-500">
                      {new Date(checkin.date).toLocaleTimeString()}
                    </p>
                  </div>
                ))}
              </div>
            </Card>

            {/* How It Works */}
            <Card className="p-6 rounded-2xl shadow-sm border border-slate-200 bg-gradient-to-br from-cyan-50 to-white">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">
                How Bridge Benefits Work
              </h3>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-cyan-100 rounded-full flex items-center justify-center">
                    <span className="text-sm font-bold text-cyan-600">1</span>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-slate-900 mb-1">Event Detection</h4>
                    <p className="text-xs text-slate-600">
                      System detects missed check-ins and correlates with ACLED conflict data
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-cyan-100 rounded-full flex items-center justify-center">
                    <span className="text-sm font-bold text-cyan-600">2</span>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-slate-900 mb-1">MPC Calculation</h4>
                    <p className="text-xs text-slate-600">
                      Mortality Probability Calculator generates risk score using Bayesian modeling
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-cyan-100 rounded-full flex items-center justify-center">
                    <span className="text-sm font-bold text-cyan-600">3</span>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-slate-900 mb-1">Rapid Payout</h4>
                    <p className="text-xs text-slate-600">
                      Bridge benefit approved within 48-72 hours (vs. 7-year legal wait)
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Right: Support & Quick Actions */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <Card className="p-6 rounded-2xl shadow-sm border border-slate-200">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <Link to="/personnel/claim">
                  <Button className="w-full bg-cyan-600 hover:bg-cyan-700 text-white">
                    View Claim Status
                  </Button>
                </Link>
                <Button variant="outline" className="w-full">
                  Download Policy Documents
                </Button>
                <Button variant="outline" className="w-full">
                  Update Beneficiary Info
                </Button>
              </div>
            </Card>

            {/* Support Contact */}
            <Card className="p-6 rounded-2xl shadow-sm border border-slate-200 bg-gradient-to-br from-slate-50 to-white">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">Need Help?</h3>
              <p className="text-sm text-slate-600 mb-4">
                Our support team is here to assist you with any questions about your coverage or claims.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm">
                  <Phone className="w-5 h-5 text-cyan-600" />
                  <div>
                    <p className="font-medium text-slate-900">Call Us</p>
                    <p className="text-slate-600">+234 800 CHRONO (24/7)</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Mail className="w-5 h-5 text-cyan-600" />
                  <div>
                    <p className="font-medium text-slate-900">Email Support</p>
                    <p className="text-slate-600">support@chronoclaim.ng</p>
                  </div>
                </div>
              </div>
            </Card>

            {/* FAQ Teaser */}
            <Card className="p-6 rounded-2xl shadow-sm border border-cyan-200 bg-cyan-50">
              <h3 className="text-sm font-semibold text-cyan-900 mb-2">Common Questions</h3>
              <ul className="text-xs text-cyan-800 space-y-2">
                <li>• What is a bridge benefit?</li>
                <li>• How long does approval take?</li>
                <li>• What documents do I need?</li>
              </ul>
              <Button variant="link" className="text-cyan-600 p-0 h-auto mt-3">
                View Full FAQ →
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </LayoutShell>
  );
}
