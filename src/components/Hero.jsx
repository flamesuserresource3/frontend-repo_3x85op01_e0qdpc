import React from 'react';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[70vh] md:min-h-[80vh] lg:min-h-[90vh] w-full overflow-hidden bg-gradient-to-b from-white via-sky-50 to-white dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 md:pt-24 lg:pt-28 pb-12">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-wide uppercase text-slate-600 dark:text-slate-300 bg-white/70 dark:bg-slate-800/70 px-3 py-1 rounded-full ring-1 ring-black/5 dark:ring-white/10">
            <span className="h-1.5 w-1.5 rounded-full bg-sky-500"></span>
            Secure Digital Banking
          </span>
          <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 dark:text-white">
            Your money, reimagined for the modern web
          </h1>
          <p className="mt-4 text-base md:text-lg text-slate-600 dark:text-slate-300">
            Experience a sleek, secure dashboard to manage cards, accounts, payments and insights. Built with fintech-grade design and privacy-first architecture.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <a href="#login" className="inline-flex justify-center items-center rounded-xl bg-slate-900 text-white px-5 py-3 text-sm font-medium shadow-sm hover:bg-slate-800 transition-colors">
              Get started
            </a>
            <a href="#features" className="inline-flex justify-center items-center rounded-xl bg-white/70 dark:bg-slate-800/70 backdrop-blur px-5 py-3 text-sm font-medium text-slate-700 dark:text-slate-200 ring-1 ring-black/5 dark:ring-white/10 hover:bg-white/90 dark:hover:bg-slate-800">
              Explore features
            </a>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white dark:from-slate-950 to-transparent" />
    </section>
  );
};

export default Hero;
