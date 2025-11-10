// src/pages/settings/notification/TestNotificationSection.tsx
import React, { useState } from 'react';

const TestNotificationSection: React.FC = () => {
  const [receiver, setReceiver] = useState('');
  const [result, setResult] = useState<string | null>(null);

  const handleSend = () => {
    setResult(`(Demo) Đã gửi thông báo thử tới: ${receiver}`);
  };

  return (
    <div>
      <h2 className="text-lg font-semibold text-gray-800 mb-3">🧪 Gửi thử thông báo</h2>
      <p className="text-sm text-gray-500 mb-4">
        Nhập địa chỉ email hoặc số điện thoại để kiểm tra gửi thông báo.
      </p>

      <div className="flex items-center gap-3">
        <input
          type="text"
          placeholder="Nhập email hoặc số điện thoại..."
          value={receiver}
          onChange={(e) => setReceiver(e.target.value)}
          className="flex-1 border border-gray-200 rounded-lg px-3 py-2 text-sm"
        />
        <button
          onClick={handleSend}
          className="px-4 py-2 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-700"
        >
          Gửi thử
        </button>
      </div>

      {result && (
        <p className="mt-3 text-sm text-green-600 bg-green-50 border border-green-100 px-3 py-2 rounded-lg">
          {result}
        </p>
      )}
    </div>
  );
};

export default TestNotificationSection;
