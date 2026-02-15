import { Bell, User } from 'lucide-react';
import { Avatar, AvatarFallback } from './ui/avatar';

export default function Topbar({ title, subtitle }) {
  return (
    <div className="h-14 lg:h-16 bg-white border-b border-slate-200 fixed top-0 left-0 lg:left-64 right-0 z-20">
      <div className="h-full px-4 pl-16 lg:pl-8 lg:px-8 flex items-center justify-between">
        <div className="min-w-0 flex-1">
          <h2 className="text-base lg:text-xl font-bold text-slate-900 truncate">{title}</h2>
          {subtitle && <p className="text-xs lg:text-sm text-slate-600 truncate hidden sm:block">{subtitle}</p>}
        </div>
        <div className="flex items-center gap-2 lg:gap-4 flex-shrink-0">
          <button className="relative p-1.5 lg:p-2 hover:bg-slate-100 rounded-lg transition-colors">
            <Bell className="w-4 h-4 lg:w-5 lg:h-5 text-slate-600" />
            <span className="absolute top-1 right-1 lg:top-1.5 lg:right-1.5 w-1.5 h-1.5 lg:w-2 lg:h-2 bg-rose-600 rounded-full" />
          </button>
          <Avatar className="w-8 h-8 lg:w-10 lg:h-10">
            <AvatarFallback className="bg-cyan-100 text-cyan-700">
              <User className="w-4 h-4 lg:w-5 lg:h-5" />
            </AvatarFallback>
          </Avatar>
        </div>
      </div>
    </div>
  );
}
