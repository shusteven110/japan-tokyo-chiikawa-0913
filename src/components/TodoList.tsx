import React, { useState, useEffect } from 'react';
import { CircleCheck, Circle, MapPin, ExternalLink, Pen } from 'lucide-react';
import { TodoItem } from '../types';
import { INITIAL_TODOS } from '../data/tripData';

const STORAGE_KEY = 'tokyo-trip-todos-v4';

export const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<TodoItem[]>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        try {
          const parsed = JSON.parse(saved);
          return INITIAL_TODOS.map((item) => {
            const found = parsed.find((p: TodoItem) => p.id === item.id);
            return found
              ? {
                  ...item,
                  checked: found.checked ?? item.checked,
                  comment: found.comment !== undefined ? found.comment : (item.comment || ''),
                }
              : item;
          });
        } catch {
          return INITIAL_TODOS;
        }
      }
    }
    return INITIAL_TODOS;
  });

  const [filter, setFilter] = useState<'all' | 'pending' | 'completed'>('all');

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  const toggleTodo = (id: string) => {
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, checked: !t.checked } : t))
    );
  };

  const updateComment = (id: string, comment: string) => {
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, comment } : t))
    );
  };

  const completedCount = todos.filter((t) => t.checked).length;
  const percent = Math.round((completedCount / todos.length) * 100);

  const filteredTodos = todos.filter((t) => {
    if (filter === 'pending') return !t.checked;
    if (filter === 'completed') return t.checked;
    return true;
  });

  return (
    <div className="bg-white dark:bg-slate-900 rounded-xl sm:rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 p-3 sm:p-5 flex flex-col max-h-[calc(100vh-6rem)] sm:max-h-[calc(100vh-4rem)]">
      {/* Header Info */}
      <div className="flex-shrink-0">
        <div className="flex items-center justify-between mb-1.5 sm:mb-2">
          <div className="flex items-center gap-1.5 sm:gap-2">
            <h2 className="text-base sm:text-lg font-bold text-slate-800 dark:text-slate-100">
              行前準備清單
            </h2>
            <span className="text-[11px] sm:text-xs text-slate-400 dark:text-slate-500 font-normal">
              ({completedCount}/{todos.length})
            </span>
          </div>
          <span className="text-[11px] sm:text-xs font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/50 px-2 py-0.5 rounded-full border border-emerald-100 dark:border-emerald-900/50">
            {percent}% 完成
          </span>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-1.5 mb-2 sm:mb-3 overflow-hidden">
          <div
            className="bg-emerald-500 dark:bg-emerald-400 h-1.5 rounded-full transition-all duration-500 ease-out"
            style={{ width: `${percent}%` }}
          />
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-1 mb-2 sm:mb-3 pb-1.5 sm:pb-2 border-b border-slate-100 dark:border-slate-800">
          <button
            onClick={() => setFilter('all')}
            className={`px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md text-[11px] sm:text-xs font-medium transition-colors ${
              filter === 'all'
                ? 'bg-orange-500 text-white shadow-xs'
                : 'text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
            }`}
          >
            全部 ({todos.length})
          </button>
          <button
            onClick={() => setFilter('pending')}
            className={`px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md text-[11px] sm:text-xs font-medium transition-colors ${
              filter === 'pending'
                ? 'bg-orange-500 text-white shadow-xs'
                : 'text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
            }`}
          >
            待辦 ({todos.length - completedCount})
          </button>
          <button
            onClick={() => setFilter('completed')}
            className={`px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md text-[11px] sm:text-xs font-medium transition-colors ${
              filter === 'completed'
                ? 'bg-orange-500 text-white shadow-xs'
                : 'text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
            }`}
          >
            已完成 ({completedCount})
          </button>
        </div>
      </div>

      {/* Todo List Items */}
      <div className="flex-1 overflow-y-auto space-y-2 sm:space-y-2.5 pr-1 -mr-1 sm:pr-1.5 sm:-mr-1.5 focus:outline-none custom-scrollbar">
        {filteredTodos.map((item) => (
          <div
            key={item.id}
            className={`group rounded-lg sm:rounded-xl border p-2 sm:p-2.5 transition-all duration-200 hover:shadow-xs ${
              item.checked
                ? 'bg-slate-50/80 dark:bg-slate-800/40 border-slate-200 dark:border-slate-800/80'
                : 'bg-white dark:bg-slate-800/80 border-slate-200 dark:border-slate-750 hover:border-orange-300 dark:hover:border-orange-500/50'
            }`}
          >
            <div className="flex items-start gap-2 sm:gap-2.5">
              <button
                onClick={() => toggleTodo(item.id)}
                className="mt-0.5 flex-shrink-0 text-slate-400 dark:text-slate-500 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors focus:outline-none"
                aria-label={item.checked ? '標示為未完成' : '標示為已完成'}
              >
                {item.checked ? (
                  <CircleCheck className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-500 dark:text-emerald-400" />
                ) : (
                  <Circle className="w-4 h-4 sm:w-5 sm:h-5" />
                )}
              </button>

              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center justify-between gap-1">
                  <label
                    onClick={() => toggleTodo(item.id)}
                    className={`block text-xs sm:text-sm font-medium cursor-pointer transition-colors ${
                      item.checked
                        ? 'text-slate-400 dark:text-slate-500 line-through'
                        : 'text-slate-800 dark:text-slate-200'
                    }`}
                  >
                    {item.label}
                  </label>

                  {item.mapUrl && (
                    <a
                      href={item.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[10px] sm:text-[11px] font-medium text-orange-600 dark:text-orange-400 hover:text-orange-700 dark:hover:text-orange-300 hover:underline flex-shrink-0"
                    >
                      <MapPin className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-rose-500" />
                      <span>{item.mapName || '地圖'}</span>
                      <ExternalLink className="w-2.5 h-2.5" />
                    </a>
                  )}
                </div>

                {/* Comment / Note input */}
                <div className="mt-1 sm:mt-1.5 flex items-center gap-1.5 bg-slate-50/60 dark:bg-slate-900/60 rounded-md px-1.5 sm:px-2 py-0.5 sm:py-1 border border-slate-100 dark:border-slate-800 group-hover:border-slate-200 dark:group-hover:border-slate-700 transition-colors">
                  <Pen
                    className={`w-3 h-3 flex-shrink-0 ${
                      item.checked
                        ? 'text-slate-300 dark:text-slate-600'
                        : 'text-slate-400 dark:text-slate-400'
                    }`}
                  />
                  <input
                    type="text"
                    value={item.comment}
                    onChange={(e) => updateComment(item.id, e.target.value)}
                    placeholder="新增備註 (例如: 預約編號、取票時間)..."
                    className={`w-full text-[11px] sm:text-xs bg-transparent border-none outline-none focus:ring-0 p-0 ${
                      item.checked
                        ? 'text-slate-400 dark:text-slate-500'
                        : 'text-slate-600 dark:text-slate-300 placeholder:text-slate-400 dark:placeholder:text-slate-600'
                    }`}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
