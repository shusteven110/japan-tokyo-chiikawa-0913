import { useState, useEffect } from 'react';
import {
  Compass,
  Calendar,
  BookOpen,
  Sun,
  Moon,
  ListTodo,
  CalendarDays,
  Heart,
} from 'lucide-react';
import { ITINERARY_DATA } from './data/tripData';
import { TodoList } from './components/TodoList';
import { DayCard } from './components/DayCard';
import { TravelTips } from './components/TravelTips';

export default function App() {
  const [activeTab, setActiveTab] = useState<'itinerary' | 'tips'>('itinerary');
  const [activeDay, setActiveDay] = useState<number>(1);
  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('tokyo_trip_theme');
      return saved
        ? saved === 'dark'
        : window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('tokyo_trip_theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('tokyo_trip_theme', 'light');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  const scrollToDay = (dayNum: number) => {
    setActiveDay(dayNum);
    const element = document.getElementById(`day-${dayNum}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTodo = () => {
    const element = document.getElementById('todo-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 font-sans text-slate-900 dark:text-slate-100 selection:bg-orange-100 dark:selection:bg-orange-900/50 selection:text-orange-900 dark:selection:text-orange-200 transition-colors duration-200">
      {/* Sticky Header */}
      <header className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 sticky top-0 z-30 shadow-xs transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 pt-3 pb-2 sm:pt-5 sm:pb-3">
          {/* Top Brand Bar */}
          <div className="flex flex-wrap items-center justify-between gap-2 sm:gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-orange-50 dark:bg-orange-950/50 text-orange-600 dark:text-orange-400 text-[11px] sm:text-xs font-semibold mb-1 sm:mb-1.5 border border-orange-100 dark:border-orange-900/40">
                <Compass className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                <span>9 Days in Tokyo · 9/19 (五) ~ 9/27 (六)</span>
              </div>
              <h1 className="text-xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                Tokyo Adventure
              </h1>
            </div>

            {/* Navigation Switcher & Dark Mode Toggle */}
            <div className="flex items-center gap-1.5 sm:gap-2">
              <div className="flex items-center gap-1.5 sm:gap-2 bg-slate-100 dark:bg-slate-800 p-1 sm:p-1.5 rounded-xl sm:rounded-2xl border border-slate-200 dark:border-slate-700">
                <button
                  onClick={() => setActiveTab('itinerary')}
                  className={`flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg sm:rounded-xl text-xs sm:text-sm font-bold transition-all ${
                    activeTab === 'itinerary'
                      ? 'bg-white dark:bg-slate-900 text-orange-600 dark:text-orange-400 shadow-sm'
                      : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/60 dark:hover:bg-slate-700/60'
                  }`}
                >
                  <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  <span>每日行程 ＆ 待辦</span>
                </button>
                <button
                  onClick={() => setActiveTab('tips')}
                  className={`flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg sm:rounded-xl text-xs sm:text-sm font-bold transition-all relative ${
                    activeTab === 'tips'
                      ? 'bg-white dark:bg-slate-900 text-orange-600 dark:text-orange-400 shadow-sm'
                      : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/60 dark:hover:bg-slate-700/60'
                  }`}
                >
                  <BookOpen className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  <span>出國注意事項</span>
                  <span
                    className="w-2 h-2 rounded-full bg-rose-500 animate-pulse"
                    title="重要入境須知"
                  />
                </button>
              </div>

              {/* Dark mode toggle */}
              <button
                onClick={toggleTheme}
                aria-label={isDark ? '切換為淺色模式' : '切換為黑夜模式'}
                title={isDark ? '切換為淺色模式' : '切換為黑夜模式'}
                className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-xl sm:rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-amber-400 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all shadow-2xs"
              >
                {isDark ? (
                  <Sun className="w-4 h-4 sm:w-5 sm:h-5 transition-transform rotate-0 hover:rotate-45" />
                ) : (
                  <Moon className="w-4 h-4 sm:w-5 sm:h-5 text-slate-600 hover:text-slate-900 transition-transform -rotate-12 hover:rotate-0" />
                )}
              </button>
            </div>
          </div>

          {/* Quick Day Sub-bar (Only in Itinerary view) */}
          {activeTab === 'itinerary' && (
            <div className="flex items-center justify-between gap-2 sm:gap-3 pt-2 mt-2 sm:pt-3 sm:mt-3 border-t border-slate-100 dark:border-slate-800">
              <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto pb-1 sm:pb-0 scrollbar-none w-full sm:w-auto">
                <div className="flex items-center gap-1 text-[11px] sm:text-xs font-bold text-slate-500 dark:text-slate-400 whitespace-nowrap mr-0.5 sm:mr-1 flex-shrink-0">
                  <CalendarDays className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-orange-500 dark:text-orange-400" />
                  <span className="hidden sm:inline">行程直達:</span>
                  <span className="sm:hidden">直達:</span>
                </div>

                {/* Mobile scroll-to-todo button */}
                <button
                  onClick={scrollToTodo}
                  className="flex sm:hidden items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-bold transition-all whitespace-nowrap flex-shrink-0 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 active:bg-emerald-100"
                >
                  <ListTodo className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                  <span>待辦清單</span>
                </button>

                {ITINERARY_DATA.map((day, idx) => (
                  <button
                    key={idx}
                    onClick={() => scrollToDay(idx + 1)}
                    className={`flex items-center gap-1.5 sm:gap-2 px-2.5 py-1.5 sm:px-3.5 sm:py-2 rounded-lg sm:rounded-xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap flex-shrink-0 ${
                      activeDay === idx + 1
                        ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-sm ring-2 ring-orange-200 dark:ring-orange-900/60'
                        : 'bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-orange-50 dark:hover:bg-slate-750 hover:text-orange-600 dark:hover:text-orange-400 border border-slate-200 dark:border-slate-700 hover:border-orange-200 dark:hover:border-slate-600'
                    }`}
                  >
                    <span
                      className={`px-1.5 py-0.5 rounded-md text-[10px] sm:text-[11px] font-extrabold ${
                        activeDay === idx + 1
                          ? 'bg-white/25 text-white'
                          : 'bg-orange-100 dark:bg-orange-950/80 text-orange-600 dark:text-orange-400'
                      }`}
                    >
                      Day {idx + 1}
                    </span>
                    <span className="tracking-tight">
                      {day.date.split(' ')[0]}
                    </span>
                  </button>
                ))}
              </div>

              <div className="text-xs text-slate-400 dark:text-slate-500 font-medium hidden lg:flex items-center gap-2 flex-shrink-0">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500" />
                <span>
                  三麗鷗彩虹樂園 · 澀谷原宿 · 池袋吉伊卡哇 · 迪士尼 · 吉卜力 · 秋葉原
                </span>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-2.5 sm:px-6 lg:px-8 py-3 sm:py-6">
        {activeTab === 'itinerary' ? (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-3.5 sm:gap-6 items-start">
            {/* Left Sidebar: Todo / Checklist Section */}
            <div
              id="todo-section"
              className="lg:col-span-4 lg:sticky lg:top-28 lg:max-h-[calc(100vh-8rem)] scroll-mt-52 sm:scroll-mt-40"
            >
              <TodoList />
            </div>

            {/* Right Column: Day-by-Day Timeline Itinerary */}
            <div className="lg:col-span-8">
              <div className="bg-white dark:bg-slate-900 rounded-xl sm:rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 p-2.5 sm:p-6 lg:p-7 transition-colors">
                {ITINERARY_DATA.map((day, idx) => (
                  <DayCard key={idx} day={day} index={idx} />
                ))}
              </div>
            </div>
          </div>
        ) : (
          <TravelTips />
        )}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 dark:bg-slate-950 text-slate-400 dark:text-slate-500 py-6 sm:py-8 text-center mt-8 sm:mt-12 border-t border-transparent dark:border-slate-800 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <p className="flex items-center justify-center gap-2 text-xs sm:text-sm">
            Designed for an amazing trip{' '}
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" /> Safe
            travels!
          </p>
        </div>
      </footer>
    </div>
  );
}
