import React from 'react';
import { CreditCard, Wallet, ArrowUpRight, PieChart, Send, ShieldCheck, Smartphone, Receipt } from 'lucide-react';

const Stat = ({ label, value, trend }) => (
  <div className="rounded-2xl p-5 bg-white dark:bg-slate-900 ring-1 ring-black/5 dark:ring-white/10 shadow-sm">
    <div className="text-sm text-slate-500 dark:text-slate-400">{label}</div>
    <div className="mt-2 flex items-end justify-between">
      <div className="text-2xl font-semibold text-slate-900 dark:text-white">{value}</div>
      <span className={`text-xs px-2 py-0.5 rounded-full ${trend.startsWith('+') ? 'bg-emerald-50 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300' : 'bg-rose-50 text-rose-700 dark:bg-rose-900/30 dark:text-rose-300'}`}>{trend}</span>
    </div>
  </div>
);

const ModuleCard = ({ icon: Icon, title, children, action }) => (
  <div className="rounded-2xl p-5 bg-white dark:bg-slate-900 ring-1 ring-black/5 dark:ring-white/10 shadow-sm flex flex-col">
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="h-9 w-9 rounded-xl grid place-items-center bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200">
          <Icon className="h-5 w-5" />
        </div>
        <h3 className="font-semibold text-slate-900 dark:text-white">{title}</h3>
      </div>
      {action}
    </div>
    <div className="mt-4 grow">{children}</div>
  </div>
);

const Dashboard = ({ user }) => {
  return (
    <section id="dashboard" className="py-16 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-baseline justify-between">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">Welcome back{user?.email ? `, ${user.email.split('@')[0]}` : ''}</h2>
            <p className="mt-2 text-slate-600 dark:text-slate-300">Here’s a quick overview of your accounts and recent activity.</p>
          </div>
          <button className="inline-flex items-center gap-2 rounded-lg bg-slate-900 text-white px-4 py-2 text-sm font-medium hover:bg-slate-800">
            New transfer <ArrowUpRight className="h-4 w-4" />
          </button>
        </div>

        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
          <Stat label="Available balance" value="$12,480.22" trend={'+2.3%'} />
          <Stat label="Credit used" value="$3,220.00" trend={'-1.1%'} />
          <Stat label="Monthly spend" value="$1,840.65" trend={'+0.6%'} />
          <Stat label="Rewards" value="12,450 pts" trend={'+120'} />
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          <ModuleCard icon={CreditCard} title="Cards" action={<button className="text-sm text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white">Manage</button>}>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-16 rounded-lg bg-gradient-to-br from-indigo-500 to-sky-500" />
                  <div>
                    <div className="text-sm font-medium text-slate-900 dark:text-white">Aurora Infinite</div>
                    <div className="text-xs text-slate-500 dark:text-slate-400">•••• 1245</div>
                  </div>
                </div>
                <button className="text-xs rounded-md px-2.5 py-1 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700">Freeze</button>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-16 rounded-lg bg-gradient-to-br from-teal-500 to-emerald-500" />
                  <div>
                    <div className="text-sm font-medium text-slate-900 dark:text-white">Aurora CashBack</div>
                    <div className="text-xs text-slate-500 dark:text-slate-400">•••• 9981</div>
                  </div>
                </div>
                <button className="text-xs rounded-md px-2.5 py-1 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700">Replace</button>
              </div>
            </div>
          </ModuleCard>

          <ModuleCard icon={Wallet} title="Accounts" action={<button className="text-sm text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white">View</button>}>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center justify-between">
                <span className="text-slate-600 dark:text-slate-300">Checking</span>
                <span className="font-medium text-slate-900 dark:text-white">$8,220.15</span>
              </li>
              <li className="flex items-center justify-between">
                <span className="text-slate-600 dark:text-slate-300">Savings</span>
                <span className="font-medium text-slate-900 dark:text-white">$21,540.00</span>
              </li>
              <li className="flex items-center justify-between">
                <span className="text-slate-600 dark:text-slate-300">Investment</span>
                <span className="font-medium text-slate-900 dark:text-white">$14,320.44</span>
              </li>
            </ul>
          </ModuleCard>

          <ModuleCard icon={PieChart} title="Insights" action={<button className="text-sm text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white">Report</button>}>
            <div className="space-y-3 text-sm">
              <div className="flex items-center justify-between"><span>Food & Dining</span><span className="font-medium">$420</span></div>
              <div className="flex items-center justify-between"><span>Transport</span><span className="font-medium">$185</span></div>
              <div className="flex items-center justify-between"><span>Subscriptions</span><span className="font-medium">$92</span></div>
              <div className="flex items-center justify-between"><span>Travel</span><span className="font-medium">$0</span></div>
            </div>
          </ModuleCard>

          <ModuleCard icon={Send} title="Quick actions" action={<div />}>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <button className="rounded-lg px-3 py-2 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 inline-flex items-center justify-center gap-2"><Send className="h-4 w-4"/> Pay</button>
              <button className="rounded-lg px-3 py-2 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 inline-flex items-center justify-center gap-2"><Receipt className="h-4 w-4"/> Bill</button>
              <button className="rounded-lg px-3 py-2 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 inline-flex items-center justify-center gap-2"><Smartphone className="h-4 w-4"/> Top up</button>
              <button className="rounded-lg px-3 py-2 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 inline-flex items-center justify-center gap-2"><ShieldCheck className="h-4 w-4"/> 2FA</button>
            </div>
          </ModuleCard>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
