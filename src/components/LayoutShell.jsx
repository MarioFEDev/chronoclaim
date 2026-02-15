import Sidebar from './Sidebar';
import Topbar from './Topbar';

export default function LayoutShell({ role, title, subtitle, children }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar role={role} />
      <Topbar title={title} subtitle={subtitle} />
      <main className="lg:ml-64 pt-14 lg:pt-16">
        <div className="p-4 sm:p-6 lg:p-8">
          {children}
        </div>
      </main>
    </div>
  );
}
