import type React from 'react';

export const Contact: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto p-8 bg-white rounded-2xl shadow-xl border border-gray-100">
      <h1 className="text-3xl font-extrabold mb-3 text-blue-800 tracking-tight">
        客户留言
      </h1>
      <p className="mb-10 text-gray-600 text-lg">
        需进一步了解我们的产品和服务吗？你可以填写表格，让我们了解你的需求，这是一个良好的开始，我们会尽快与你取得联系！
      </p>
      <form className="space-y-6 mb-12">
        <div>
          <label
            htmlFor="name"
            className="block mb-2 font-semibold text-gray-900"
          >
            姓名
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50 transition"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block mb-2 font-semibold text-gray-900"
          >
            邮箱
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50 transition"
          />
        </div>
        <div>
          <label
            htmlFor="phone"
            className="block mb-2 font-semibold text-gray-900"
          >
            电话
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50 transition"
          />
        </div>
        <div>
          <label
            htmlFor="company"
            className="block mb-2 font-semibold text-gray-900"
          >
            单位
          </label>
          <input
            id="company"
            name="company"
            type="text"
            className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50 transition"
          />
        </div>
        <div>
          <label
            htmlFor="message"
            className="block mb-2 font-semibold text-gray-900"
          >
            留言
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={4}
            className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50 transition"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-cyan-500 via-cyan-600 to-cyan-800 text-white py-3 rounded-lg font-bold shadow hover:from-cyan-600 hover:via-cyan-700 hover:to-cyan-900 transition"
        >
          发送
        </button>
      </form>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-gray-900">
        <div className="bg-gray-50 rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="font-bold text-blue-700 mb-1">电话</div>
          <div className="text-xs text-gray-500 mb-1">MOBILE</div>
          <div className="mb-4 text-lg font-mono">13386020808</div>
          <div className="font-bold text-blue-700 mb-1">邮箱</div>
          <div className="text-xs text-gray-500 mb-1">E-mail</div>
          <div className="mb-4 text-lg font-mono">384385621@qq.com</div>
        </div>
        <div className="bg-gray-50 rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="font-bold text-blue-700 mb-1">地址</div>
          <div className="text-xs text-gray-500 mb-1">ADDRESS</div>
          <div className="text-base">
            中国（上海）自由贸易试验区蔡伦路781号214室
          </div>
        </div>
      </div>
    </div>
  );
};
