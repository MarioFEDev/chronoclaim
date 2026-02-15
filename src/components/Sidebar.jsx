import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Shield, Home, Users, AlertTriangle, DollarSign, TrendingUp, Building2, User, FileText, LogOut, Menu, X } from 'lucide-react';
import { Separator } from './ui/separator';

export default function Sidebar({ role }) {
  const [isOpen, setIsOpen] = useState(false);

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
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-slate-900 text-white rounded-lg"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 z-30"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`
          w-64 bg-slate-900 text-white h-screen fixed left-0 top-0 flex flex-col z-40 transition-transform duration-300
          ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}
      >
        {/* Logo/Brand */}
        <div className="p-4 lg:p-6">
          <div className="flex items-center gap-2 lg:gap-3">
            <div className="p-1.5 lg:p-2 bg-cyan-400 rounded-lg flex-shrink-0">
              <Shield className="w-5 h-5 lg:w-6 lg:h-6 text-slate-900" />
            </div>
            <div className="min-w-0">
              <h1 className="text-lg lg:text-xl font-bold truncate">ChronoClaim</h1>
              <p className="text-xs text-slate-400 truncate">{config.title}</p>
            </div>
          </div>
        </div>

        <Separator className="bg-slate-700" />

        {/* Navigation */}
        <nav className="flex-1 px-3 lg:px-4 py-4 lg:py-6 space-y-1 lg:space-y-2 overflow-y-auto">
          {config.routes.map((route) => {
            const Icon = route.icon;
            return (
              <NavLink
                key={route.path}
                to={route.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `flex items-center gap-2 lg:gap-3 px-3 lg:px-4 py-2.5 lg:py-3 rounded-lg transition-all text-sm lg:text-base ${
                    isActive
                      ? 'bg-cyan-400 text-slate-900 font-semibold'
                      : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                  }`
                }
              >
                <Icon className="w-4 h-4 lg:w-5 lg:h-5 flex-shrink-0" />
                <span className="truncate">{route.label}</span>
              </NavLink>
            );
          })}
        </nav>

        <Separator className="bg-slate-700" />

        {/* Footer */}
        <div className="p-3 lg:p-4">
          <NavLink
            to="/"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-2 lg:gap-3 px-3 lg:px-4 py-2.5 lg:py-3 rounded-lg text-slate-300 hover:bg-slate-800 hover:text-white transition-all text-sm lg:text-base"
          >
            <LogOut className="w-4 h-4 lg:w-5 lg:h-5 flex-shrink-0" />
            <span className="truncate">Switch Role</span>
          </NavLink>
        </div>
      </div>
    </>
  );
}
