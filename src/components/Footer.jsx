import React from 'react';

const Footer = () => {
  return (
    <footer className="border-t border-black/5 dark:border-white/10 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm text-slate-600 dark:text-slate-400">© {new Date().getFullYear()} Aurora Bank. All rights reserved.</p>
          <nav className="flex items-center gap-6 text-sm text-slate-600 dark:text-slate-400">
            <a href="#" className="hover:text-slate-900 dark:hover:text-white">Privacy</a>
            <a href="#" className="hover:text-slate-900 dark:hover:text-white">Security</a>
            <a href="#" className="hover:text-slate-900 dark:hover:text-white">Status</a>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
