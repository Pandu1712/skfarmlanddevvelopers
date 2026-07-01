import { useState } from 'react';
import { motion } from 'motion/react';
import { LayoutDashboard, FolderKanban, Image as ImageIcon, Users, Settings, LogOut, Menu, X } from 'lucide-react';
import { PageId } from '../../types';

interface AdminDashboardProps {
  setActivePage: (page: PageId) => void;
}

type TabId = 'dashboard' | 'projects' | 'gallery' | 'leads' | 'settings';

export default function AdminDashboard({ setActivePage }: AdminDashboardProps) {
  const [activeTab, setActiveTab] = useState<TabId>('dashboard');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const tabs = [
    { id: 'dashboard', label: 'Dashboard Home', icon: LayoutDashboard },
    { id: 'projects', label: 'Manage Projects', icon: FolderKanban },
    { id: 'gallery', label: 'Manage Gallery', icon: ImageIcon },
    { id: 'leads', label: 'View Leads', icon: Users },
    { id: 'settings', label: 'Settings', icon: Settings },
  ] as const;

  const handleLogout = () => {
    setActivePage('home');
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white">Welcome, Admin</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-xl">
                <h3 className="text-zinc-400 text-sm font-medium mb-2">Total Projects</h3>
                <p className="text-3xl font-bold text-white">5</p>
              </div>
              <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-xl">
                <h3 className="text-zinc-400 text-sm font-medium mb-2">Total Leads</h3>
                <p className="text-3xl font-bold text-white">12</p>
              </div>
              <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-xl">
                <h3 className="text-zinc-400 text-sm font-medium mb-2">Gallery Images</h3>
                <p className="text-3xl font-bold text-white">22</p>
              </div>
            </div>
          </div>
        );
      case 'projects':
        return (
          <div>
            <h2 className="text-2xl font-bold text-white mb-6">Manage Projects</h2>
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-8 text-center text-zinc-500">
              Project management features coming soon.
            </div>
          </div>
        );
      case 'gallery':
        return (
          <div>
            <h2 className="text-2xl font-bold text-white mb-6">Manage Gallery</h2>
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-8 text-center text-zinc-500">
              Gallery management features coming soon.
            </div>
          </div>
        );
      case 'leads':
        return (
          <div>
            <h2 className="text-2xl font-bold text-white mb-6">View Leads</h2>
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-8 text-center text-zinc-500">
              Lead viewing features coming soon.
            </div>
          </div>
        );
      case 'settings':
        return (
          <div>
            <h2 className="text-2xl font-bold text-white mb-6">Settings</h2>
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-8 text-center text-zinc-500">
              Settings features coming soon.
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-black flex flex-col md:flex-row">
      {/* Mobile Header */}
      <div className="md:hidden bg-zinc-950 border-b border-zinc-900 p-4 flex items-center justify-between sticky top-0 z-50">
        <h1 className="text-xl font-bold text-orange-500">SK Admin</h1>
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="text-zinc-400 hover:text-white"
        >
          {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Sidebar */}
      <motion.aside
        initial={{ x: -300 }}
        animate={{ x: isSidebarOpen ? 0 : 0 }} // On mobile handled by CSS classes
        className={`
          fixed md:sticky top-0 left-0 z-40 h-screen w-64 bg-zinc-950 border-r border-zinc-900 flex flex-col
          transition-transform duration-300 ease-in-out
          ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
        `}
      >
        <div className="p-6 hidden md:block">
          <h1 className="text-2xl font-bold text-orange-500">SK Admin</h1>
        </div>

        <nav className="flex-1 py-6 space-y-1">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id);
                  setIsSidebarOpen(false);
                }}
                className={`w-full flex items-center gap-3 px-6 py-3 text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-orange-500/10 text-orange-500 border-r-2 border-orange-500'
                    : 'text-zinc-400 hover:bg-zinc-900 hover:text-white'
                }`}
              >
                <Icon size={18} />
                {tab.label}
              </button>
            );
          })}
        </nav>

        <div className="p-4 border-t border-zinc-900">
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-4 py-3 text-sm font-medium text-red-500 hover:bg-red-500/10 rounded-lg transition-colors"
          >
            <LogOut size={18} />
            Logout
          </button>
        </div>
      </motion.aside>

      {/* Main Content Overlay for mobile */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Main Content */}
      <main className="flex-1 p-6 md:p-10 overflow-y-auto">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="max-w-5xl mx-auto"
        >
          {renderContent()}
        </motion.div>
      </main>
    </div>
  );
}
