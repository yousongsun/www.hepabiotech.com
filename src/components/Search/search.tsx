'use client';

import type React from 'react';
import { useState } from 'react';

export const Search: React.FC = () => {
  const [keyword, setKeyword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.search = `?k=${encodeURIComponent(keyword)}`;
  };

  return (
    <div className="flex items-center justify-center min-h-64 bg-gradient-to-r from-blue-100 to-purple-100">
      <form
        className="flex shadow-lg rounded-lg overflow-hidden bg-white"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder="请输入关键词搜索…"
          className="px-5 py-3 w-64 border-none focus:ring-2 focus:ring-blue-400 outline-none text-gray-700"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
        <button
          type="submit"
          className="px-7 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-200"
        >
          搜索
        </button>
      </form>
    </div>
  );
};
