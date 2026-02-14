import { useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Button } from './ui/button';
import StatusBadge from './StatusBadge';
import { Eye, AlertTriangle } from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';

export default function GuardTable({ guards, onViewProfile, onManualReview }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [filterRiskZone, setFilterRiskZone] = useState('all');

  const filteredGuards = guards.filter((guard) => {
    const matchesSearch = guard.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         guard.site.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === 'all' || guard.status === filterStatus;
    const matchesRisk = filterRiskZone === 'all' || guard.riskZone === filterRiskZone;
    return matchesSearch && matchesStatus && matchesRisk;
  });

  return (
    <div className="space-y-4">
      {/* Filters */}
      <div className="flex flex-wrap gap-4">
        <input
          type="text"
          placeholder="Search guards..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-1 min-w-[200px] px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
        />
        <select
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
          className="px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
        >
          <option value="all">All Status</option>
          <option value="active">Active</option>
          <option value="missed">Missed Check-in</option>
          <option value="mia">MIA</option>
        </select>
        <select
          value={filterRiskZone}
          onChange={(e) => setFilterRiskZone(e.target.value)}
          className="px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
        >
          <option value="all">All Risk Zones</option>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
          <option value="Severe">Severe</option>
        </select>
      </div>

      {/* Table */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-slate-50 border-b border-slate-200">
              <tr>
                <th className="text-left px-6 py-4 text-sm font-semibold text-slate-700">Guard</th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-slate-700">Assigned Site</th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-slate-700">Last Check-In</th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-slate-700">Coverage</th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-slate-700">Risk Zone</th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-slate-700">Status</th>
                <th className="text-right px-6 py-4 text-sm font-semibold text-slate-700">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {filteredGuards.map((guard) => (
                <tr key={guard.id} className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <Avatar>
                        <AvatarImage src={guard.avatar} alt={guard.name} />
                        <AvatarFallback>{guard.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-sm font-medium text-slate-900">{guard.name}</p>
                        <p className="text-xs text-slate-500">{guard.state}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-700">{guard.site}</td>
                  <td className="px-6 py-4 text-sm text-slate-700">
                    {formatDistanceToNow(new Date(guard.lastCheckin), { addSuffix: true })}
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-700">{guard.coverage}</td>
                  <td className="px-6 py-4">
                    <StatusBadge 
                      status={guard.riskZone === 'Severe' || guard.riskZone === 'High' ? 'high' : guard.riskZone === 'Medium' ? 'medium' : 'low'} 
                      label={guard.riskZone}
                    />
                  </td>
                  <td className="px-6 py-4">
                    <StatusBadge status={guard.status} />
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-end gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => onViewProfile && onViewProfile(guard)}
                        className="text-cyan-600 border-cyan-200 hover:bg-cyan-50"
                      >
                        <Eye className="w-4 h-4 mr-1" />
                        View
                      </Button>
                      {guard.status !== 'active' && (
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => onManualReview && onManualReview(guard)}
                          className="text-amber-600 border-amber-200 hover:bg-amber-50"
                        >
                          <AlertTriangle className="w-4 h-4 mr-1" />
                          Review
                        </Button>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {filteredGuards.length === 0 && (
        <div className="text-center py-12 text-slate-500">
          No guards found matching your filters.
        </div>
      )}
    </div>
  );
}
