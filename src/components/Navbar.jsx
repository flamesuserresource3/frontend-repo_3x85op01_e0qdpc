import React from 'react';
import { Home, CreditCard, BarChart3, Settings, LogOut, Shield } from 'lucide-react';

const Navbar = ({ isAuthed, onLogout, onScrollToLogin }) => {
  return (
    <header className="sticky top-0 z-20 backdrop-blur bg-white/60 dark:bg-slate-900/60 border-b border-black/5 dark:border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-indigo-500 via-sky-500 to-teal-400 grid place-items-center text-white shadow-md shadow-sky-500/30">
            <Shield className="h-5 w-5" />
          </div>
          <span className="font-semibold tracking-tight text-slate-900 dark:text-white">Aurora Bank</span>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-sm text-slate-600 dark:text-slate-300">
          <a href="#home" className="inline-flex items-center gap-2 hover:text-slate-900 dark:hover:text-white transition-colors">
            <Home className="h-4 w-4" /> Home
          </a>
          <a href="#features" className="inline-flex items-center gap-2 hover:text-slate-900 dark:hover:text-white transition-colors">
            <CreditCard className="h-4 w-4" /> Cards
          </a>
          <a href="#analytics" className="inline-flex items-center gap-2 hover:text-slate-900 dark:hover:text-white transition-colors">
            <BarChart3 className="h-4 w-4" /> Analytics
          </a>
          <a href="#settings" className="inline-flex items-center gap-2 hover:text-slate-900 dark:hover:text-white transition-colors">
            <Settings className="h-4 w-4" /> Settings
          </a>
        </nav>

        <div className="flex items-center gap-3">
          {isAuthed ? (
            <button
              onClick={onLogout}
              className="inline-flex items-center gap-2 rounded-lg border border-slate-200 dark:border-slate-700 px-3 py-2 text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
            >
              <LogOut className="h-4 w-4" /> Logout
            </button>
          ) : (
            <button
              onClick={onScrollToLogin}
              className="rounded-lg bg-slate-900 text-white px-4 py-2 text-sm font-medium hover:bg-slate-800 transition-colors"
            >
              Sign in
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
