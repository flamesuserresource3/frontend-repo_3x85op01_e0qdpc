import React, { useState } from 'react';
import { Lock, Mail } from 'lucide-react';

const Login = ({ onSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    // Simulated auth flow. Replace with backend call later.
    await new Promise((r) => setTimeout(r, 800));
    setLoading(false);

    if (email && password.length >= 6) {
      onSuccess({ email });
    } else {
      setError('Invalid credentials. Use any email and a 6+ character password.');
    }
  };

  return (
    <section id="login" className="py-16 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">Sign in to your banking dashboard</h2>
            <p className="mt-3 text-slate-600 dark:text-slate-300">Bank-level encryption protects your credentials. Two-factor authentication available after sign-in.</p>
            <ul className="mt-6 text-sm text-slate-600 dark:text-slate-300 space-y-2 list-disc pl-5">
              <li>Encrypted sessions</li>
              <li>Biometric-ready</li>
              <li>Instant card controls</li>
            </ul>
          </div>

          <form onSubmit={handleSubmit} className="bg-white dark:bg-slate-900 rounded-2xl p-6 ring-1 ring-black/5 dark:ring-white/10 shadow-sm">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-200 mb-1">Email</label>
                <div className="relative">
                  <Mail className="h-4 w-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@bank.com"
                    className="w-full pl-10 pr-3 py-2.5 rounded-lg bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-400 outline-none ring-1 ring-slate-200 dark:ring-slate-700 focus:ring-2 focus:ring-sky-500"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-200 mb-1">Password</label>
                <div className="relative">
                  <Lock className="h-4 w-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full pl-10 pr-3 py-2.5 rounded-lg bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-400 outline-none ring-1 ring-slate-200 dark:ring-slate-700 focus:ring-2 focus:ring-sky-500"
                    required
                    minLength={6}
                  />
                </div>
              </div>

              {error && (
                <p className="text-sm text-rose-600 dark:text-rose-400">{error}</p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-lg bg-slate-900 text-white py-2.5 font-medium hover:bg-slate-800 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {loading ? 'Signing in…' : 'Sign in'}
              </button>
              <p className="text-xs text-slate-500 dark:text-slate-400 text-center">By signing in you agree to our Terms and Privacy Policy.</p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
