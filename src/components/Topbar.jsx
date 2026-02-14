import { Bell, User } from 'lucide-react';
import { Avatar, AvatarFallback } from './ui/avatar';

export default function Topbar({ title, subtitle }) {
  return (
    <div className="h-16 bg-white border-b border-slate-200 fixed top-0 left-64 right-0 z-10">
      <div className="h-full px-8 flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-slate-900">{title}</h2>
          {subtitle && <p className="text-sm text-slate-600">{subtitle}</p>}
        </div>
        <div className="flex items-center gap-4">
          <button className="relative p-2 hover:bg-slate-100 rounded-lg transition-colors">
            <Bell className="w-5 h-5 text-slate-600" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-rose-600 rounded-full" />
          </button>
          <Avatar>
            <AvatarFallback className="bg-cyan-100 text-cyan-700">
              <User className="w-5 h-5" />
            </AvatarFallback>
          </Avatar>
        </div>
      </div>
    </div>
  );
}
