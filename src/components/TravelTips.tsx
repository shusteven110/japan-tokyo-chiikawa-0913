import React, { useState } from 'react';
import {
  Sparkles,
  TriangleAlert,
  FileText,
  CreditCard,
  Utensils,
  Plug,
  PhoneCall,
  CheckCircle2,
  ExternalLink,
  BookOpen,
  Info,
} from 'lucide-react';
import { TRAVEL_TIPS, OFFICIAL_LINKS } from '../data/tripData';

export const TravelTips: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: '全部須知' },
    { id: 'entry', label: '入境與法規' },
    { id: 'money', label: '交通與支付' },
    { id: 'dining', label: '飲食與禮儀' },
    { id: 'living', label: '電壓與氣候' },
    { id: 'emergency', label: '緊急聯絡' },
  ];

  const filteredCategories =
    activeCategory === 'all'
      ? TRAVEL_TIPS
      : TRAVEL_TIPS.filter((cat) => cat.id === activeCategory);

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'file-text':
        return <FileText className="w-5 h-5 text-rose-500" />;
      case 'credit-card':
        return <CreditCard className="w-5 h-5 text-blue-500" />;
      case 'utensils':
        return <Utensils className="w-5 h-5 text-amber-500" />;
      case 'plug':
        return <Plug className="w-5 h-5 text-emerald-500" />;
      case 'phone-call':
        return <PhoneCall className="w-5 h-5 text-indigo-500" />;
      default:
        return <BookOpen className="w-5 h-5 text-slate-500" />;
    }
  };

  return (
    <div className="space-y-6">
      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white rounded-2xl p-6 sm:p-7 shadow-md border border-slate-800 relative overflow-hidden">
        <div className="absolute right-0 top-0 translate-x-10 -translate-y-10 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/20 text-orange-300 text-xs font-semibold mb-3 border border-orange-500/30">
            <Sparkles className="w-3.5 h-3.5" />
            <span>2026 最新出國必備指南</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white mb-2">
            東京自由行 · 行前與出入境實用須知
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-3xl leading-relaxed">
            出發日本前務必詳閱重要出入境海關檢驗法規、Suica 交通卡綁定、預約用餐禮儀與緊急聯絡清單，讓 9 天東京之旅安心又順暢！
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2 mt-5">
            {categories.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id)}
                className={`px-3 py-1.5 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
                  activeCategory === tab.id
                    ? 'bg-orange-500 text-white shadow-xs'
                    : 'bg-slate-800/80 hover:bg-slate-700 text-slate-300 border border-slate-700'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Strict Warning Callout Banner */}
      <div className="bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-900/60 rounded-2xl p-4 sm:p-5 flex items-start gap-3 sm:gap-4 shadow-xs">
        <div className="w-10 h-10 rounded-xl bg-rose-100 dark:bg-rose-900/50 text-rose-600 dark:text-rose-400 flex items-center justify-center flex-shrink-0">
          <TriangleAlert className="w-5 h-5" />
        </div>
        <div>
          <h3 className="text-sm sm:text-base font-bold text-rose-900 dark:text-rose-200 mb-1">
            出境海關最高警戒：切勿攜帶「肉製品 / 含肉食品」與「動植物違禁品」
          </h3>
          <p className="text-xs sm:text-sm text-rose-700 dark:text-rose-300/90 leading-relaxed">
            日本為防範非洲豬瘟等疫情，嚴禁旅客攜帶任何肉製品（肉乾、香腸、含肉塊泡麵等，違者面臨最高 3 年有期徒刑或 300 萬日圓重罰）；行動電源與鋰電池必須隨身登機，絕對不可托運！出發打包行李時請務必再次仔細檢查。
          </p>
        </div>
      </div>

      {/* Category Cards */}
      <div className="space-y-6">
        {filteredCategories.map((category) => (
          <div
            key={category.id}
            className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-5 sm:p-6 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800 mb-5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center shadow-xs">
                  {getCategoryIcon(category.iconName)}
                </div>
                <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100">
                  {category.title}
                </h3>
              </div>
              {category.badge && (
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700">
                  {category.badge}
                </span>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {category.items.map((item, idx) => (
                <div
                  key={idx}
                  className={`rounded-xl p-4 border transition-all ${
                    item.warning
                      ? 'bg-rose-50/50 dark:bg-rose-950/30 border-rose-200 dark:border-rose-900/50'
                      : item.highlight
                      ? 'bg-orange-50/40 dark:bg-orange-950/30 border-orange-200 dark:border-orange-900/50'
                      : 'bg-slate-50/60 dark:bg-slate-800/40 border-slate-200/80 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/70'
                  }`}
                >
                  <h4
                    className={`text-sm font-bold mb-1.5 flex items-center gap-1.5 ${
                      item.warning
                        ? 'text-rose-900 dark:text-rose-300'
                        : item.highlight
                        ? 'text-orange-900 dark:text-orange-300'
                        : 'text-slate-800 dark:text-slate-200'
                    }`}
                  >
                    {item.warning ? (
                      <TriangleAlert className="w-4 h-4 text-rose-500 flex-shrink-0" />
                    ) : item.highlight ? (
                      <CheckCircle2 className="w-4 h-4 text-orange-500 flex-shrink-0" />
                    ) : (
                      <Info className="w-4 h-4 text-slate-400 flex-shrink-0" />
                    )}
                    <span>{item.subtitle}</span>
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {item.content}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Official Links Card */}
      <div className="bg-slate-100 dark:bg-slate-900/90 rounded-2xl p-5 border border-slate-200 dark:border-slate-800">
        <h4 className="text-sm font-bold text-slate-800 dark:text-slate-100 mb-3 flex items-center gap-2">
          <BookOpen className="w-4 h-4 text-orange-500" />
          <span>官方常用快速查詢連結</span>
        </h4>
        <div className="flex flex-wrap gap-2.5">
          {OFFICIAL_LINKS.map((link, idx) => (
            <a
              key={idx}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-orange-50 dark:hover:bg-slate-700 hover:text-orange-600 dark:hover:text-orange-400 hover:border-orange-200 dark:hover:border-orange-500/40 transition-colors"
            >
              <span>{link.name}</span>
              <ExternalLink className="w-3 h-3 text-slate-400" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
