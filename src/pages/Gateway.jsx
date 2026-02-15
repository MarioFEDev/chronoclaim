import { useNavigate } from 'react-router-dom';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Building2, Users, User, Shield, ArrowRight } from 'lucide-react';

export default function Gateway() {
  const navigate = useNavigate();

  const roles = [
    {
      id: 'insurer',
      title: 'Enter as Insurer',
      description: 'Risk assessment, MPC queue management, and capital optimization',
      icon: Building2,
      path: '/insurer',
      color: 'cyan'
    },
    {
      id: 'employer',
      title: 'Enter as Employer',
      description: 'Private Guard Company admin - roster, compliance, and premium management',
      icon: Users,
      path: '/employer',
      color: 'emerald'
    },
    {
      id: 'personnel',
      title: 'Enter as Personnel / Family',
      description: 'View coverage status, claim tracking, and benefit information',
      icon: User,
      path: '/personnel',
      color: 'slate'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-slate-100 flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="w-full max-w-6xl">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-10 lg:mb-12">
          <div className="flex items-center justify-center gap-2 sm:gap-3 mb-3 sm:mb-4">
            <div className="p-2 sm:p-2.5 lg:p-3 bg-slate-900 rounded-xl lg:rounded-2xl">
              <Shield className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 text-cyan-400" />
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900">ChronoClaim</h1>
          </div>
          <p className="text-sm sm:text-base lg:text-lg text-slate-600 max-w-2xl mx-auto px-4">
            Automated MIA/KIA insurance for Nigerian security sectors. 
            Powered by parametric risk modeling and real-time conflict data.
          </p>
        </div>

        {/* Role Selection Cards */}
        <Card className="p-4 sm:p-6 lg:p-8 rounded-2xl lg:rounded-3xl shadow-xl border-2 border-slate-200 bg-white">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4 sm:mb-6 text-center">
            Select Your Portal
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
            {roles.map((role) => {
              const Icon = role.icon;
              return (
                <button
                  key={role.id}
                  onClick={() => navigate(role.path)}
                  className="group relative p-4 sm:p-5 lg:p-6 rounded-xl lg:rounded-2xl border-2 border-slate-200 hover:border-cyan-400 
                           bg-white hover:shadow-lg transition-all duration-300 hover:scale-105 text-left"
                >
                  <div className={`p-3 sm:p-3.5 lg:p-4 bg-${role.color}-100 rounded-lg lg:rounded-xl w-fit mb-3 sm:mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className={`w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-${role.color}-600`} />
                  </div>
                  <h3 className="text-base sm:text-lg lg:text-xl font-bold text-slate-900 mb-1 sm:mb-2 group-hover:text-cyan-600 transition-colors">
                    {role.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mb-3 sm:mb-4 line-clamp-2">
                    {role.description}
                  </p>
                  <div className="flex items-center text-cyan-600 font-medium text-xs sm:text-sm group-hover:gap-2 transition-all">
                    <span>Enter Portal</span>
                    <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </button>
              );
            })}
          </div>
        </Card>

        {/* About Section */}
        <div className="mt-6 sm:mt-8 text-center">
          <Card className="p-4 sm:p-5 lg:p-6 rounded-xl lg:rounded-2xl shadow-sm border border-slate-200 bg-white/80 backdrop-blur">
            <h3 className="text-base sm:text-lg font-semibold text-slate-900 mb-2">
              About ChronoClaim
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 max-w-3xl mx-auto px-2">
              ChronoClaim bridges the "protection gap" in Nigerian security insurance using a Mortality 
              Probability Calculator (MPC) powered by ACLED conflict data and Bayesian modeling. 
              Regulated under NIIRA 2025 and NAICOM Guidelines. NSCDC compliant for private security operations.
            </p>
            <p className="text-xs text-slate-500 mt-3 sm:mt-4">
              This is a demonstration platform. All data is simulated for hackathon purposes.
            </p>
          </Card>
        </div>

        {/* Footer */}
        <div className="mt-4 sm:mt-6 text-center text-xs text-slate-500 px-4">
          <p>© 2026 ChronoClaim. Built for Heirs Hackathon.</p>
          <p className="mt-1 text-[10px] sm:text-xs">
            Regulatory Framework: NIIRA 2025 | NAICOM Guidelines 2025 | NSCDC Compliance
          </p>
        </div>
      </div>
    </div>
  );
}
