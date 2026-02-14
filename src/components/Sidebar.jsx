import { NavLink } from 'react-router-dom';
import { Shield, Home, Users, AlertTriangle, DollarSign, TrendingUp, Building2, User, FileText, LogOut } from 'lucide-react';
import { Separator } from './ui/separator';

export default function Sidebar({ role }) {
  const roleConfigs = {
    employer: {
      title: 'Private Guard Company',
      routes: [
        { path: '/employer', label: 'Command Center', icon: Home },
        { path: '/employer/roster', label: 'Guard Roster', icon: Users },
        { path: '/employer/incidents', label: 'Incident Monitoring', icon: AlertTriangle },
        { path: '/employer/premium', label: 'Premium Overview', icon: DollarSign }
      ]
    },
    insurer: {
      title: 'Insurer Dashboard',
      routes: [
        { path: '/insurer', label: 'MPC Queue', icon: AlertTriangle },
        { path: '/insurer/risk-surface', label: 'Risk Surface', icon: TrendingUp },
        { path: '/insurer/capital', label: 'Capital Efficiency', icon: Building2 }
      ]
    },
    personnel: {
      title: 'Personnel Portal',
      routes: [
        { path: '/personnel', label: 'My Coverage', icon: Home },
        { path: '/personnel/claim', label: 'Claim Details', icon: FileText }
      ]
    }
  };

  const config = roleConfigs[role] || roleConfigs.personnel;

  return (
    <div className="w-64 bg-slate-900 text-white h-screen fixed left-0 top-0 flex flex-col">
      {/* Logo/Brand */}
      <div className="p-6">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-cyan-400 rounded-lg">
            <Shield className="w-6 h-6 text-slate-900" />
          </div>
          <div>
            <h1 className="text-xl font-bold">ChronoClaim</h1>
            <p className="text-xs text-slate-400">{config.title}</p>
          </div>
        </div>
      </div>

      <Separator className="bg-slate-700" />

      {/* Navigation */}
      <nav className="flex-1 px-4 py-6 space-y-2">
        {config.routes.map((route) => {
          const Icon = route.icon;
          return (
            <NavLink
              key={route.path}
              to={route.path}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                  isActive
                    ? 'bg-cyan-400 text-slate-900 font-semibold'
                    : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                }`
              }
            >
              <Icon className="w-5 h-5" />
              <span>{route.label}</span>
            </NavLink>
          );
        })}
      </nav>

      <Separator className="bg-slate-700" />

      {/* Footer */}
      <div className="p-4">
        <NavLink
          to="/"
          className="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-300 hover:bg-slate-800 hover:text-white transition-all"
        >
          <LogOut className="w-5 h-5" />
          <span>Switch Role</span>
        </NavLink>
      </div>
    </div>
  );
}
